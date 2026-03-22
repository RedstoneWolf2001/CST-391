# MusicAPI AngularJS Client

This folder provides an AngularJS frontend for the existing `MusicAPI` Node service.

## Structure

- `index.html`: AngularJS single page app
- `app.js`: module/service/controller for API calls
- `styles.css`: minimal styling

## Setup

1. Run the backend from `activities/activity_1/MusicAPI` (e.g. `npm start` / `npm run dev`) and ensure it listens at `http://localhost:3000`.
2. Open `MusicAPI-AngularJS/index.html` in a browser (or serve it via simple static server).

## Features

- View all albums
- Search by artist and description
- Create/update album
- Delete album
- Display album tracks nested under each album

## Note

This is AngularJS (legacy) not Angular 2+. If you want migration into Angular v2+ (Milestone3 style), we can add a separate Angular / CLI app.
