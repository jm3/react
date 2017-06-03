# Components

React components let you split the UI into independent, reusable pieces, and think about each piece in isolation. React components can be defined by subclassing React classes - _RD_.

## Syntax
- like HTML
- `class` is now `className` (b/c class is a reserved word in JS)

## Nesting
- Components can fucking nest

## State
  - `setState()` asynchronously update component's state + trigger a re-render
- - see: [State](/docs/State.md)

## Organizing your components

- Stateless [Functional Components](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) - stateless ‡, `function`al components that behave like a React class with only a `render()` method defined. ‡ as in, they literally cannot call `setState()`
- Parent components that own state are termed [_container components_](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), and are sort of more like controllers than views, I think(?)
- Presentational components **do** contain styles, don't keep state, don't do data access or manipulation, and are generally _functional components_.

### [Higher-Order Components](https://medium.freecodecamp.com/the-5-things-you-need-to-know-to-understand-react-a1dbd5d114a3#e542) (HOC)
- a la driver fn's in Feed Me Links

_**RD**: from the (official) React Docs_
