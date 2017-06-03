# JSX
- nice: embedded HTML markup within JS, without need for annoying double-quoting.
- compare: string-driven development, [ES6 template strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), [Handlebars](http://handlebarsjs.com/), ERB
- file extension can be either JSX or JS. React file naming convention is CamelCase.
- **Pass values into Components**: *This was sort of weird to me.* Data & options are passed into the component in HTML attribute notation, WITHOUT quotes. <shrug>
- from within the Component, any values passed in can be accessed via this.props
*Root HTML template*:
- nesting: like XML, there must be only **one** root element in a JSX doc
  - obvious, but that means you can't return JSX element nodes AND text nodes (comments); comments must be inside the nesting.
- should be well-formed HTML, DO self-close elements.
- comments in JSX:
``` JSX
{/* foo */}
```
