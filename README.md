# Evaluate News Articles with Natural Language Processing

## Project Overview
This project uses the MeaningCloud API to evaluate the sentiment of news articles. It includes both a frontend for submitting URLs and a backend for handling API requests and processing responses. The project demonstrates the integration of Natural Language Processing (NLP) into a web application.

## Features
- Validate and process user-submitted URLs.
- Use MeaningCloud API for sentiment analysis.
- Display analysis results, including polarity, subjectivity, and a snippet of the article.
- Webpack for bundling assets.
- Jest for unit testing.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm
- MeaningCloud API key (sign up at [MeaningCloud](https://www.meaningcloud.com/))

### Installing Dependencies
Run the following command to install project dependencies:

```bash
npm install
```

---

## Project Structure
```
project-root/
├── src/
│   ├── client/
│   │   ├── js/
│   │   │   ├── formHandler.js
│   │   │   ├── urlValidator.js
│   │   └── styles/
│   │       ├── resets.scss
│   │       ├── base.scss
│   │       ├── footer.scss
│   │       ├── form.scss
│   │       └── header.scss
│   └── views/
│       └── index.html
│
├── webpack.dev.js
├── webpack.prod.js
├── .babelrc
├── .env
├── package.json
└── README.md
```

---

## Development Workflow

### Starting the Backend
To start the backend server, run:

```bash
npm run start
```

The server will run on `http://localhost:8000`.

### Running the Frontend
To start the frontend development server, run:

```bash
npm run build-dev
```

The frontend will be available at `http://localhost:3000`.

### Building for Production
To build the project for production, run:

```bash
npm run build-prod
```

---

## Testing
This project uses Jest for testing. To run all test cases:

```bash
npm run test
```

Test cases are included for each JavaScript file in the project.

---

## Environment Variables
Create a `.env` file in the root directory and add your MeaningCloud API key:

```
API_KEY=your_meaningcloud_api_key_here
```

---

## Important Files

### 1. Backend: `src/server/index.js`
Handles API requests and communicates with the MeaningCloud API.

### 2. Frontend: `src/client/js/formHandler.js`
Processes the form submission and updates the DOM with analysis results.

### 3. URL Validation: `src/client/js/urlValidator.js`
Validates user-entered URLs.

### 4. SCSS Files
Contains styles for various sections of the frontend.

---

## Known Issues
- Ensure the backend is running before submitting a URL.
- Check the browser console for any frontend errors.

---

## Authors
- Eyass Mashaqi




