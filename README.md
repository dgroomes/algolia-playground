# algolia-playground

📚 Learning and exploring the Algolia search platform.

> The best Search and Discovery Platform for your business
>
> -- <cite>https://www.algolia.com/</cite>


## Overview

This project was scaffolded with Algolia's official tool: [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app)
and then I adapted it to my typical style.


## Instructions

Follow these instructions to build and serve a web page that hosts Algolia search controls:

1. Pre-requisite: Node.js
   * I used version 18.17.1
2. Install dependencies:
   * ```shell
     npm install
     ```
3. Set the Algolia key and ID
   * Hardcode it in the code. This is ok for demo purposes and because they aren't actually secrets because they are
     meant to be used in client-side code.
4. Build and serve the page continuously with the development server:
   * ```shell
     npm start
     ```
*5. Open the page and try it out
   * Open the browser to <http://localhost:1234>.
   * Search for something, like "Node.js". The page is making requests to the Algolia servers to execute the search. 


## Wish List

General clean-ups, TODOs and things I wish to implement for this project:

* [ ] Facet search. What does facet search look like on the UI-side using the InstantSearch library? What config do I
  need to do on the server-side (the Algolia index)?
  * This is generally called "Refinements" in the Algolia documentation.


## Reference

* [Algolia](https://www.algolia.com/)
* [Algolia API Reference: *React InstantSearch Hooks*](https://www.algolia.com/doc/api-reference/widgets/react-hooks)
