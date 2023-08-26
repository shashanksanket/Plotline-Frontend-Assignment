# ReactJS Button Styler App

Welcome to the ReactJS Tooltip Styler App! This is a brief overview of the features and functionality of the project.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Persistent Data](#persistent-data)
- [Known Issues](#known-issues)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Description

The ReactJS Tooltip Styler App allows users to customize the appearance of tooltips and create tooltips with various properties. The app consists of two pages: Form and Screen. Users can input values such as target element, padding, text color, background color, text size, tooltip width, corner radius, arrow width, arrow height, and even upload an image. The styles defined in the Form page are reflected on the buttons and tooltips displayed in the Screen page.

## Features

- Dynamic customization of tooltip properties including padding, text color, background color, text size, tooltip width, corner radius, arrow width, and arrow height.
- Image upload feature to display images within tooltips.
- LocalStorage integration for persisting user-defined styles across sessions.
- Two main pages: Form for inputting styles and Screen for displaying buttons with applied styles.

## Getting Started

To run the project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/reactjs-button-styler.git
2. Navigate to the project directory:
   ```bash
   cd Plotline-Frontend-assignment
3. Install dependencies:
   ```bash
   npm install
4. Start the development server:
   ```bash
   npm start

## Usage

1. Open your browser and navigate to [http://localhost:3000] to access the Form page.
2. In the Form page, input different styles for buttons and tooltips.
3. Choose the target element (Button 1 to Button 5) and customize its properties.
4. Upload an image to be displayed within tooltips.
5. Switch to the Screen page to see the buttons with the applied styles.

## Persistent Data

The app uses LocalStorage to store the user-defined styles. This means that even if you refresh the page or close the browser, your customized styles will be preserved. The data will be loaded when you revisit the app.

## Known Issues

- **Image Update Glitch:** There is a minor issue with the dynamic update of uploaded images. The image updates are visible only after a page refresh on both the Form and Screen pages.

## Deployment

The app has been successfully deployed to GitHub Pages. You can access the deployed version here: (https://shashanksanket.github.io/Plotline-Frontend-Assignment/)

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please feel free to create issues or pull requests in the GitHub repository.
