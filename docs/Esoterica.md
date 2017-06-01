# Esoterica

### the [Component Lifecycle](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)
  - Components have several lifecycle method hooks, reminiscent of D3's [`Enter` / `Update` / `Exit`](https://medium.com/@c_behrens/enter-update-exit-6cafc6014c36) cycle.
  - **Mounting**
    - When an instance of a component is created and added to the DOM
    - methods: `constructor()`, `componentWillMount()`, `render()`, `componentDidMount()`
  - **Updating**
    - when props or [state](/docs/State.md) change, triggering a re-render.
    - methods: `componentWillReceiveProps()`, `shouldComponentUpdate()`, `componentWillUpdate()`, `render()`, `componentDidUpdate()`
  - **Unmounting**
    - when a component is being removed from the DOM.
    - method: `componentWillUnmount()`

### Keys
- [Keys](https://facebook.github.io/react/tutorial/tutorial.html#keys) on list items:
  - sounds similar to the way [D3](https://d3js.org/) binds data to DOM or SVG elements
