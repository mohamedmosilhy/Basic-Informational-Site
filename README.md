# Basic Informational Site

A small server-rendered website built to demonstrate the fundamentals of Node.js routing and static-file delivery with Express. The application serves dedicated Home, About, and Contact pages and falls back to a custom 404 page for unknown routes.

## Demo

![Application walkthrough](./docs/demo/demo.gif)

> No public deployment is currently available. Follow the local setup below to run the project.

## Features

- Express routes for `/`, `/about`, and `/contact-us`
- Static HTML and CSS served from the `public` directory
- Custom not-found page with the correct HTTP 404 status
- Minimal project structure that is easy to understand and extend

## Built With

- Node.js
- Express
- HTML5
- CSS3

## Local Setup

```bash
git clone https://github.com/mohamedmosilhy/Basic-Informational-Site.git
cd Basic-Informational-Site
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
.
├── public/       # HTML pages and styles
├── server.js     # Express application and routes
├── package.json
└── README.md
```

## What This Project Demonstrates

This project focuses on the request-response cycle: matching URL paths, returning files from the server, exposing static assets, and handling unmatched requests cleanly. It is intentionally compact and works well as an introduction to Express before adding templates, databases, or authentication.
