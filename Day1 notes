# React Functional Components 1

Firstly: you've got this! React is new and hard, but I believe that you can do it. :)

Link to training kit (which has helpful videos and content in case tonight's lecture didn't quite make sense):
https://learn.lambdaschool.com/fsw/module/reck045duabdvwf72

## Project

You have tonight (Tuesday) and tomorrow (Wednesday) to do the first part of this project (`Day-I-Social-Card`).

https://github.com/LambdaSchool/React-UI-Components

## CDN links

React, ReactDOM, and Babel (to let us use JSX)

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

## ES6 import/export

This link looked pretty helpful:
https://www.adamcowley.co.uk/javascript/es6-import-export-a-beginners-guide/

The tl;dr is that `import` is a way to get some JS from another file, and `export` is the way to expose that for someone else to `import`. You can `import` an `npm` package, or a file path (e.g. `import Foo from './my/local/path/to/Foo'`).

# The HTML file we used for lecture

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Getting Started</title>
  <style>
  .heading {
    color: rebeccapurple
  }
  </style>
</head>
<body>
  <div id="root">starting app...</div>

  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <script type="text/babel">
    const App = (props) => {
      return (
        <div>
          <Header />
          <Content appName="RussellReact" />
        </div>
      );
    }

    const Header = (props) => {
      return (
        <h1 className="heading">I am the header inside of Header</h1>
      );
    }

    const Content = (props) => {
      return (
        <div>
          I am the content of the {props.appName} app.
        </div>
      )
    }

    ReactDOM.render(
      <App />,
      document.getElementById('root')
    )
  </script>
</body>
</html>
```

## Extra stuff for your reading enjoyment (not required reading)
Learn more about Virtual DOM by building your own!
https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060