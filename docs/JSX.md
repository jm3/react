# JSX
- nice: embedded HTML markup within JS, without need for annoying double-quoting.
- compare: string-driven development, ES6 template strings, Handlebars, ERB
- file extension can be either JSX or JS. React file naming convention is CamelCase.
- **Pass values into Components**: *This was sort of weird to me.* Data & options are passed into the component in HTML attribute notation, WITHOUT quotes. <shrug>
- from within the Component, any values passed in can be accessed via this.props
*Root HTML template*:
- Element nodes as mount / load poins should not be self-closing for brevity. This bit me, too: <div id="root"></div> works; <div id="root" /> does not. lol ok.
- nesting: like XML, there must be ONE root element in a JSX doc
- comments in JSX: `{/* foo */}`
