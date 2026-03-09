import { execute } from "../services/mysql.connector";
import { Track } from "./tracks.model";
import { tracksQueries } from './tracks.queries';

export const readTracks = async (albumId: number) => {
    return execute<Track[]>(tracksQueries.readTracks, [albumId]);
};

export const createTrack = async (track: Track, index: number, albumId: number) => {
    return execute<Track[]>(tracksQueries.createTrack, 
        [albumId, track.title, track.number, track.video, track.lyrics]
        );
};

export const updateTrack = async (track: Track) => {
    return execute<Track[]>(tracksQueries.updateTrack,
        [track.title, track.number, track.video, track.lyrics, track.trackId]
        );
};