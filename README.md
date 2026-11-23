# Tech Conference App

A React app for exploring DevConf 2025, its speakers, and its talk schedule.

## Features

- Conference homepage with a featured keynote, speaker highlights, and schedule highlights
- Speaker directory with speaker bios and talk listings
- Schedule filtering by conference day and track
- Saved talks, persisted in the browser's `localStorage`
- Talk details dialog with schedule and speaker information

## Getting started

### Requirements

- Node.js
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints a local URL in the terminal when the development server is ready.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## App routes

- `/` — Conference homepage
- `/SpeakersPage` — Speaker directory
- `/SchedulesPage` — Filterable schedule and saved talks

## Conference data

The conference content is defined in [`src/data.json`](./src/data.json), including the conference details, keynote, days, tracks, speakers, and schedule. Saved talks are stored in the browser and are not shared between devices or browsers.

## Tech stack

- React
- React Router
- Vite
- Tailwind CSS
