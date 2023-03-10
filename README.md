# LEARNING-REACT_MODAL-Dialog

**This is my attempt at learning REACT. There are many bugs in these components and they MUST not be copied for use in production.**

Working example on Netify:

## Steps used to build the component

1. Start by creating a new React project using create-react-app or your preferred method.
2. In the project's root folder, create a new file called Modal.jsx. This file will contain the code for the modal component.
3. Inside the Modal.jsx file, import React and the useState hook. Define a state variable called isOpen, which will keep track of whether the modal is open or closed. Also, import useRef hook to access the heading element.
4. Define the Modal component and set the isOpen state to false by default. Use the useState hook to create a state variable to keep track of the modal's open/close state.
5. Create a function openModal which will set the isOpen state to true and call the focus function on headingRef.
6. Create a function closeModal which will set the isOpen state to false and call the focus function on the triggering button.
7. Create a function handleKeyDown which will be used to close the modal when the "Esc" key is pressed. This function will be passed as a prop to the modal.
8. In the return statement of the Modal component, create a button that will be used to open the modal. Add an onClick function that calls the openModal function.
9. To call the veganism content create a function VeganismContent() in a new file called veganism.js and import it in the Modal.jsx file.
10. Using .jsx instead of .js. However both work so in production I'd use .js.

### What is a JSX file?

The difference between a .js and a .jsx file is that .jsx files are JavaScript files that contain JSX syntax.

JSX is a syntax extension for JavaScript that allows you to write HTML-like elements and components in your JavaScript code. It is used by many libraries and frameworks, such as React, to create reusable UI components.

A .js file is a regular JavaScript file that can contain any valid JavaScript code. It does not include JSX syntax.

In practice, .jsx files are typically used for components in a React application, while .js files are used for other JavaScript modules or scripts. Some build tools, such as Babel, are able to transpile JSX code into regular JavaScript, so that it can be understood by browsers that don't support JSX natively.

In summary, .jsx files are a variant of .js files that include JSX syntax, which is used for creating UI components in React.
