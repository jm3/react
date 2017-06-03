# Router

Browser Router jonks
- everything is a component
- 2 main ways to change the page:
  - render a `<Redirect to="/somewhere/else">` component
  - or use the imperative API:
  ```Javascript
  // surface router to context so we can access it in child component
    StorePicker.contextTypes = {
      router: React.PropTypes.object
    }
  ```
