# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

...........................................................................................................


This is for assisgnment...

# Dev Stack Builder

Dev Stack Builder is a responsive React website that helps developers explore different technologies and build their own development stack.

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Toastify
- JSON
- Vite

## Features

1. Explore different frontend, backend, database, language, styling, DevOps, and tool technologies.
2. Add technologies to a personal stack and remove them whenever needed.
3. Responsive design with loading state and toast notifications.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

useState creates and manages changing data inside a React component. I used it in App.tsx to store the selected technologies.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect lets us perform side effects after a component renders. I used it in Technologies.tsx to fetch the technology data from the JSON file.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the key to identify each item in a list. A unique key helps React understand which items changed, were added, or removed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

I used it in YourStack.tsx:

If there are no selected technologies, it shows the empty message. Otherwise, it shows the selected technologies.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can communicate back to the parent by calling a function that the parent passed as a prop.



###. There is an important thing I want to share with you that (honastly) I sant my code to chatGPT after I wrote, and share what it created for me becouse chatGPT's code was a little bit surprising.... 


###. Please read it

Commit গুলোতে যে আমি কি লিখেছি, আল্লাহ! রিভিও করতে গিয়ে নিজেই থ। এমনকি Completed এর স্থানে লিখেছি Complitad। আমার মাথা পুরাই গেছে ভাই রিয়েক্ট বুঝতে গিয়ে। 
আর এখানে আসলে যে Commit লিখা উচিত ছিলো সেটা হলো 
Completed StackItem.tsx, Technologies.tsx, TechnologyCard.tsx, YourStack.tsx, technology.ts, README.md and json file. But instead, I wrote "Complitad however I can." I honestly don't know why I wrote that. 