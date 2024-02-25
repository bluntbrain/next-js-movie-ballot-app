# Next.js Movie Ballot App

## Overview

Next.js Movie Ballot App is a web application designed for users to participate in movie award voting. This app allows users to browse different award categories, view nominees, and cast their votes. Additionally, users can view voting results in real-time through a modal window.

Live version: [https://next-js-movie-ballot-app.vercel.app/](https://next-js-movie-ballot-app.vercel.app/)

![App Demo](demo/demo.gif)

## Features

- **Award Categories**: Users can browse through different categories of awards.
- **Nominee Cards**: Each nominee is presented in a card format showing relevant details.
- **Voting System**: Users can cast votes for their preferred nominees in each category.
- **Results Modal**: After voting, users can view the results in a modal window.
- **Responsive Design**: The app is fully responsive, providing a seamless experience across various devices and screen sizes.

## File Structure

- `src/`: Contains the source code for the entire application.
  - `app/`: Core application files.
    - `favicon.ico`: Website favicon.
    - `globals.css`: Global stylesheet.
    - `layout.tsx`: React component for the main layout.
    - `page.module.css`: Main page styling.
    - `page.tsx`: React component for the main page.
  - `components/`: Modular components used throughout the app.
    - `award-category/`: Component for displaying award categories.
    - `nominee-card/`: Component for displaying nominee details.
    - `results-modal/`: Component for showing the voting results.
  - `lib/`: Utility functions and shared data structures.
    - `data.ts`: Data structures/constants used by the app.

## Getting Started

To run this project locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Open `http://localhost:3000` to view the app in the browser.
