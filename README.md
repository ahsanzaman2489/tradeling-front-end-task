# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Tech Stack

* React
* Redux
* Redux-persist
* Octakit GraphQL

## Task

There will be two input fields. The first is a search field for the user to type the text. While the other is a dropdown
where user can either pick "Users", or "Repositories" to define the entities that they want to search.

## My Approach

My Approach for this task was to research and get the best options to complete this task.

* I research about Github API client which is Octakit available for Rest and GraphQl , I choose GraphQL for queries the
  required detail to optimize the response payload.
* Implement a general solution with redux for both categories
* To more focus on functionality against design , I covered mostly all test cases as well
* Implemented rendering based on window width.
* Child routes for each view

## Git access token
Please add you git hub access token from your setting -> developer options -> personal access token into .env file under
REACT_APP_GIT_HUB_TOKEN
