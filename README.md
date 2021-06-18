# Code Busters

View the live website at https://codebusters-sand.vercel.app/

## Firebase setup

This project uses firebase for user authentication. It currently has the ability to create and signup/sign out users. Once a user is signed in, their email is displayed on the navigation. 

You can find the code related to firebase under the Firebase directory.

## Styling
In order to maintain readability, this project uses a combination of tailwind css, css modules and css. Long chains of tailwind classes are placed in css modules using @apply, while global tailwind class chains are placed in a global.css file. 


## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```
