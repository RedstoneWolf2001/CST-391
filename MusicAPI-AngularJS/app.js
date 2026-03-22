(function() {
  'use strict';

  angular
    .module('musicApp', [])
    .constant('API_BASE', 'http://localhost:3000')
    .service('MusicService', ['$http', 'API_BASE', function($http, API_BASE) {
      this.getAlbums = function() {
        return $http.get(API_BASE + '/albums');
      };

      this.searchByArtist = function(artist) {
        return $http.get(API_BASE + '/albums/search/artist/' + encodeURIComponent(artist));
      };

      this.searchByDescription = function(search) {
        return $http.get(API_BASE + '/albums/search/description/' + encodeURIComponent(search));
      };

      this.createAlbum = function(album) {
        return $http.post(API_BASE + '/albums', album);
      };

      this.updateAlbum = function(album) {
        return $http.put(API_BASE + '/albums', album);
      };

      this.deleteAlbum = function(albumId) {
        return $http.delete(API_BASE + '/albums/' + albumId);
      };
    }])

    .controller('MusicController', ['MusicService', function(MusicService) {
      var vm = this;

      vm.albums = [];
      vm.searchArtist = '';
      vm.searchDescription = '';
      vm.editMode = false;
      vm.editAlbum = {};
      vm.error = null;
      vm.loading = false;

      vm.loadAlbums = function() {
        vm.loading = true;
        vm.error = null;

        MusicService.getAlbums()
          .then(function(response) {
            vm.albums = response.data;
          })
          .catch(function(err) {
            vm.error = err.data?.message || 'Could not load albums';
          })
          .finally(function() {
            vm.loading = false;
          });
      };

      vm.searchByArtist = function() {
        if (!vm.searchArtist) {
          return vm.loadAlbums();
        }
        vm.loading = true;
        vm.error = null;

        MusicService.searchByArtist(vm.searchArtist)
          .then(function(response) {
            vm.albums = response.data;
          })
          .catch(function(err) {
            vm.error = err.data?.message || 'Artist search failed';
          })
          .finally(function() {
            vm.loading = false;
          });
      };

      vm.searchByDescription = function() {
        if (!vm.searchDescription) {
          return vm.loadAlbums();
        }
        vm.loading = true;
        vm.error = null;

        MusicService.searchByDescription(vm.searchDescription)
          .then(function(response) {
            vm.albums = response.data;
          })
          .catch(function(err) {
            vm.error = err.data?.message || 'Description search failed';
          })
          .finally(function() {
            vm.loading = false;
          });
      };

      vm.submitAlbum = function() {
        vm.error = null;
        vm.loading = true;

        var payload = angular.copy(vm.editAlbum);
        payload.tracks = payload.tracks || [];

        var promise;
        if (vm.editMode && payload.albumId) {
          promise = MusicService.updateAlbum(payload);
        } else {
          promise = MusicService.createAlbum(payload);
        }

        promise
          .then(function() {
            vm.loadAlbums();
            vm.resetForm();
          })
          .catch(function(err) {
            vm.error = err.data?.message || 'Could not save album';
          })
          .finally(function() {
            vm.loading = false;
          });
      };

      vm.edit = function(album) {
        vm.editMode = true;
        vm.editAlbum = angular.copy(album);
      };

      vm.resetForm = function() {
        vm.editMode = false;
        vm.editAlbum = {};
      };

      vm.delete = function(albumId) {
        if (!confirm('Delete album?')) {
          return;
        }
        vm.loading = true;
        vm.error = null;

        MusicService.deleteAlbum(albumId)
          .then(vm.loadAlbums)
          .catch(function(err) {
            vm.error = err.data?.message || 'Delete failed';
          })
          .finally(function() {
            vm.loading = false;
          });
      };

      vm.loadAlbums();
    }]);
})();