# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by incorrect conditional logic within a `useEffect` hook.

## Description
The `bug.js` file contains a React component that uses the `useState` and `useEffect` hooks.  The `useEffect` hook includes a condition that's always true, causing the component to re-render infinitely.

## Solution
The `bugSolution.js` file provides a corrected version of the component, fixing the conditional logic to prevent the infinite loop.

## How to Reproduce
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the infinite loop in the browser's console (in `bug.js` version).
5. Switch to `bugSolution.js` to see the corrected behavior.

## Learning Points
This example highlights the importance of carefully writing conditions within `useEffect` hooks to avoid unintended re-renders and performance issues.  Always ensure that your conditions accurately reflect the dependencies and desired behavior.