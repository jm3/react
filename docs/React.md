# Notes on Learning React

## Concepts
- **Declarative [Component](/docs/Components.md) Rendering**, like [XSLT](https://en.wikipedia.org/wiki/XSLT) templates
- **Top-Down Data Flow**
  - properties flow down; actions flow up (aka _"data down, actions up"_)
  - _State_ flows down the components, and _events_ flow up.
  - While properties shouldn't be changed, _state is mutable_.
  - Props can't be changed _because they are inherited every time the component is rendered_, so any changes will be lost.
- **Encapsulated Components**
  - AKA "Unification of necessary template-y bits": `HTML`, `JS` and often `CSS` for a component are managed together, rather than silo'd by file type.
- "It's not a ~~tumor~~ framework" (It's a view rendering library)
- JSX _(see [JSX.md](/docs/JSX.md))_, which is lintable JS, not magical "string-driven development" — h/t [Krzysztof Jendrzyca](https://github.com/kjendrzyca)
- Managing [State](/docs/State.md)
- Immutable data
- Virtual DOM
- The distinction between state and props can be useful: it makes clear what state the component owns. "It's best to keep most components stateless, and isolate state into as few places as possible."
