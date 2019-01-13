# React-UI-Components

- This repository is designed to be your first exposure into the world of ReactJS. There are 2 projects to complete in this repository. Project 1 is all about implementing a Social Card in ReactJS. On Project 2 you'll be implementing a Calculator. We've given you the file structure and have gone ahead and added all the files you'll need to be set up for success for each project.

## Initializing the application.

- This project was put together using `create-react-app` (CRA). **You will not need to install CRA in order to make this project work**
- Each project has it's own `package.json` file in it, we'll chat more about this later. So it's already set up for you to install some dependencies that are needed for you to be able to work within the React Ecosystem.
- To start the `Social Card` project, you'll need to cd into `Project-1-Social-Card` and then into `social-card` and run `yarn install` to retrieve all the dependencies.
- Inside of `../../social-card` you'll then need to run `yarn start` to open up a React Development Server that can take your `.js` files as components and bundle them up to work in your new environment.
- **You'll repeat this last two steps for the calculator project, but you'll need to make sure that you're inside of `../../calculator` directory to make this work.**

## Instructions

- For the first project you'll work on the project found in `Project-I-Social-Card`.
- For the second project you'll work on the project found in `Project-II-Calculator`.
- Use the design files to build out your User Interfaces.
- All components can be built out using the provided html files found in their respective directories.
- Each file has been set up to work within a `react.js` environment. Pay attention to the notes found within each project.
- Don't forget about `className` vs `class` on your `JSX elements`!!

## _Project II - React Calculator_

- For this project you're not going to be given any tips on how to break down the image file into components. Now that you've had some practice with the social card, this should be something you can start doing on your own. Just think about the image, and what potentially looks like a component.
- For the MVP the calculator just needs to be displayed properly. Functionality will be a part of the stretch requirement.
- All the files you'll need for this project are found in `Project-II-Calculator/calculator/src/components`. You can find all the component files you should need in their respective directory. i.e. inside of the `ButtonComponents` directory you should see a couple `.js` files and a `.css` file.
- Feel free to add any files for any extra components you may feel the need to build.
- Here is what your calculator should look like:

![Calculator](calculator-component.png)

- **BEFORE YOU DO ANYTHING ELSE READ [This](https://reactjs.org/docs/thinking-in-react.html)**
- This is the time to stop and break down this image in terms of components. Each container on the screen should give you an idea of what your components should be. You're now about to begin your journey into learning how to think in React.

#### Project 2 MVP requirements

- Create a `<NumberButton />` component that can accept `props` and display any number/symbol passed down as `text`.
  - Example your component should be able to render a dynamic prop called text:
  - Your button button should also be able to accept dynamic props `buttonStyle` for styling

```js
<button className={props.buttonStyle}>{props.text}</button>
```

- Create an `<ActionButton />` component that will be used for the `zero` character and the `clear` button.
- Create a `<CalculatorDisplay />` component that will be used as the `calculator display`

#### Project 2 Stretch Problems

- Re-factor your `App.js` file to be a classical component that can hold state on it's constructor. (There is some documentation in training kit on how this works).
  - On your state object be sure to include a property for the `total` that can be passed down to your `<CalculatorDisplay />` component.
- Create some `handler functions` that can take in some information from an, `onClick` and use that information to update the `total` on the App state.

  - `this.setState` will be your best friend here :)

  **GOOD LUCK!**
