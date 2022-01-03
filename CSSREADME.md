CSS Scope information

Custom CSS written for the project
- Use a CSS-in-JS library
- Built-in component style scoping
- "Namespace" all your CSS

CSS coming from a component library
- Use a component library that does css-in-js
- Manually build the css library and apply namespacing techniques to it


- DO NOT deliberate shared CSS libraries

Assumption in production only, we might wnt to extract this generated CSS selector + rule into a separate CSS stylesheet; generated CSS as small as possible (space saving technique)
- Issue with same CSS-in-JS library for same not really random selectors
