# React Notes

- Declarative
- **Passing data through props**
- **data down, actions up** - properties flow DOWN; actions flow UP
- _State_ flows down the components, and _events_ flow up. While properties shouldn't be changed, _state is mutable_. Properties can't be changed _because they are inherited every time the component is rendered_, so any changes will be lost.

The difference between state and properties can be useful. It makes it clear what state the component owns. It's best to keep most of your components stateless, and isolate state into as few places as possible.

- **JSX** _(see below)_
- **Immutable data**
- **Virtual DOM**
- **Lifting state up**
- **Functional Components**
- **Saving state in components**
- **[Keys](https://facebook.github.io/react/tutorial/tutorial.html#keys) on list items**: sounds similar to the way that D3 binds data to DOM or SVG elements
