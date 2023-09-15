### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Promises, async functions, await

- What is a Promise?
It is a request that does not immediately return data, but does asynchronously

- What are the differences between an async function and a regular function?
async functions are not immediately return, but a regular function does as soon as it's called

- What is the difference between Node.js and Express.js?
Node.js is a server-side environment whereas Express.js is a framework built upon Node.js

- What is the error-first callback pattern?
when an error arises you return the error immediately and cease the current script.

- What is middleware?
middleware is code used to run between two applications or other bits of code.

- What does the `next` function do?
it tells the server to look for the next matching route and handle the request from there.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
you would have to manually change it if you wanted to get different users, so instead you could have the routes passed through the function as arguments. It could be turned into a multi-promise instead of 3 seperate awaits so that it could also handle errors.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
