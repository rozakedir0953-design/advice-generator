# Advice Generator App

A random advice generator built as a solution to a [Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db) challenge, using the [Advice Slip API](https://api.adviceslip.com/) to fetch a new piece of advice on demand.


## Overview

A new piece of advice is loaded automatically when the page opens. Clicking the dice icon fetches a fresh, random piece of advice from a live API, along with its advice number.

## Preview

![Advice Generator preview](./Preview.jpg)

## Live Demo

[View live site](http://advise-generator-app0.vercel.app/)

## Features

- Fetches a random piece of advice automatically on page load
- Click the dice icon to generate a new piece of advice
- Displays the advice number alongside the quote
- Real API integration using `fetch` and `async/await`
- Dark theme styling matching the provided design
- Built with strict TypeScript typing throughout

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Advice Slip API](https://api.adviceslip.com/)

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Zikra-S/Advise-generator.git
cd Advise-generator
pnpm install
pnpm dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
src/
├── assets/images/   # Dice icon and divider pattern
├── App.tsx          # Fetch logic, state, and layout
├── index.css        # Tailwind import and global styles
├── main.tsx         # App entry point
```

## What I Learned

This project was my first time working with a live API in React, which introduced several new concepts:

- Fetching data from an external API using `fetch`
- Handling asynchronous code with `async`/`await`
- Running side effects on component load with `useEffect`
- Avoiding infinite fetch loops by controlling when effects run
- Managing loading state while data is being fetched
- Reading nested JSON data returned from an API
