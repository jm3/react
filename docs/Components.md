# Components

React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React components can be defined by subclassing React classes - _RD_.

## [Component Lifecycle](https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle)
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

## Organizing your components

- [Functional Components](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) - stateless, `function`al components that behave like a React class with only a `render()` method defined
- Parent components that own state are termed [_container components_](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), and are sort of more like controllers than views, I think(?)
- Presentational components **do** contain styles, don't keep state, don't do data access or manipulation, and are generally _functional components_.
- [Keys](https://facebook.github.io/react/tutorial/tutorial.html#keys) on list items:
  - sounds similar to the way [D3](https://d3js.org/) binds data to DOM or SVG elements

_**RD**: from the (official) React Docs_
