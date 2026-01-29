
# Blueprint: Lotto Number Recommendation Site

## 1. Overview

This document outlines the plan for creating a "Lotto Number Recommendation" web application. The application will generate and display a set of 6 unique lottery numbers, offering a modern, engaging, and visually appealing user experience.

## 2. Core Features

*   **Random Number Generation:** Generate 6 unique, random numbers between 1 and 45.
*   **Interactive Display:** Display the generated numbers in a visually distinct and appealing way (e.g., as colored "lotto balls").
*   **Regenerate:** A clear "Generate" button allows the user to get a new set of numbers at any time.
*   **Responsive Design:** The layout will be fully responsive and adapt to all screen sizes, from mobile to desktop.

## 3. Design & Aesthetics

The design will be modern, bold, and visually engaging to create a premium and exciting feel.

*   **Theme:** A sleek dark theme.
*   **Background:** A deep blue/purple gradient with a subtle noise texture to give it a premium, tactile feel.
*   **Main Card:** A central "glassmorphism" card (frosted glass effect) will house the main content. This creates a sense of depth and modernity.
*   **Typography:** A clean, readable sans-serif font (`Noto Sans KR`). The title and the numbers themselves will be large and bold for emphasis.
*   **Lottery Balls:**
    *   The numbers will be displayed inside circular elements ("balls").
    *   Balls will be color-coded based on the number range (e.g., 1-10 yellow, 11-20 blue, etc.) to mimic real lottery balls.
    *   A "glow" effect using `box-shadow` will be applied to the balls to make them pop.
*   **Button:** The "Generate" button will be large, and prominent, and will also feature a glow effect to encourage interaction.
*   **Animations:**
    *   Subtle animations will be used to enhance the user experience.
    *   A fade-in and slide-up animation for the lottery balls when they are generated.
    *   Smooth transitions on button hovers.

## 4. Implementation Plan

1.  **`index.html`:**
    *   Set up the basic page structure with a `<header>`, a `<main>` content area, and a `<footer>`.
    *   Create a container `div` for the lottery balls (`id="lotto-balls"`).
    *   Add a `<button>` with `id="generate-btn"`.
    *   Link the `style.css` and `main.js` files.

2.  **`style.css`:**
    *   Implement the dark gradient background with noise texture.
    *   Style the main content card using the glassmorphism effect (`backdrop-filter`, `background-color` with alpha).
    *   Create the styles for the circular lottery balls, including their size, font, and default appearance.
    *   Define multiple color classes for the balls (`.ball-color-1`, `.ball-color-2`, etc.) that apply different background colors and glow effects.
    *   Style the "Generate" button with its background color, glow effect, and hover transitions.
    *   Add keyframe animations for the ball appearance.
    *   Ensure all styles are responsive using media queries.

3.  **`main.js`:**
    *   Get references to the DOM elements (`#lotto-balls` container and `#generate-btn`).
    *   Create a function to generate an array of 6 unique random numbers between 1 and 45. A `Set` will be used to ensure uniqueness efficiently.
    *   Create a function to display the numbers. This function will:
        *   Clear any existing numbers.
        *   Loop through the array of new numbers.
        *   For each number, create a `div` element, assign the appropriate `ball` and color classes, set its text content, and append it to the container.
    *   Add a `click` event listener to the "Generate" button that calls the generation and display functions.
    *   Call the functions once on initial page load to display a set of numbers immediately.
