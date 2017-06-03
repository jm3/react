# State

- DOM HTML is always derived, so we don't manipulate the DOM directly
- state data is **not** stored in the DOM
- [`setState()`](https://facebook.github.io/react/docs/react-component.html#setstate) - request an update to a component
  - `setState()` will always lead to a re-render unless `shouldComponentUpdate()` returns false - _RD_
  - `setState()` has two calling styles:
    - **function signature** - more flexibility
      - takes a first argument of an updater function with the signature: `(prevState, props) => stateChange`
      - `prevState` is not mutated directly, but instead is used to create a [**new object**](https://www.youtube.com/watch?v=cYsGPgATGv4), merged with any state changes you've requested:

      ```Javascript
      this.setState((prevState, props) => {
        return {counter: prevState.counter + props.step};
      });
      ```
    - **object signature** - simpler
      - `this.setState({quantity: 2})`

- Hosting state up the tree
