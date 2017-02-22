# React rails test

This is a playground project to experiment with the following tech stack:

* Rails 5.0
* ReactJS
* Webpack 2+ (via Rails' webpacker gem)
* Yarn
* Jest
* es2015

## Links

* webpacker - https://github.com/rails/webpacker
* webpacker-react - https://github.com/renchap/webpacker-react

# Setup

1. Install all ruby gems
    `bundle install`

2. Install all node\_modules 
    `bin/yarn`

# Development

## React
All application javascript is kept in `app/javascript`.

Webpack entrypoints are defined in `app/javascript/packs`.  See `application.js` for an example of how to define a 
react component for use in a view through the `<%= react_component 'mycomponent' %>` view helper.

React components are defined in `app/javascript/components`.

# Testing

Tests for react components are written in Jest.

Tests live in `spec/javascript`.

Run the tests by executing `bin/yarn test`.
