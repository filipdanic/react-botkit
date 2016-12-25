# Deploying react-botkit with create-react-app

If you:

- added `react-botkit` to an App built with `create-react-app`, or
- cloned this repo directly

then you can easily deploy your app!

## Build a Static Site

Just run `npm run build` (or `yarn run build`) to build the project into a static site.

This will create a new directory called `build`.

You can then upload the contents of this directory to any webhost.

## Simple Deployment with zeit

[zeit.co](https://zeit.co/) has, by far, the easiest deployment method. Just do this:

- Head over to their site and download the `cli` or the Desktop App.
- Register for an account and configure your `cli`.
- Head over to the `build` folder and just run the command `now`.

## Other Options

There are other options such as GitHub Pages and Heroku. [See here.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

