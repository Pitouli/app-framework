# App Framework 2 &nbsp; &nbsp; &nbsp; [![](https://img.shields.io/npm/dt/app-framework.svg)](https://www.npmjs.com/package/app-framework) [![](https://img.shields.io/npm/v/app-framework.svg)](https://www.npmjs.com/package/app-framework) [![](https://img.shields.io/npm/l/app-framework.svg)](https://www.npmjs.com/package/app-framework)

**iOS and Android Apps with HTML & JavaScript - develop, test, build and deploy - free and open source!**

![Process](workflow.png)

## About

With App Framework, you could spend your time for your next amazing app and not for the tricky stuff around. App Framework combines great pieces of open source code to support your whole workflow with powerful scripts and your app itself with useful helpers. And because App Framework is installed as a module, improvements and bug-fixes are easily to enroll to all of your projects.

## Features

- [ ] Quick setup of a lightweight and well-structured project folder, prepared to publish on [GitHub](https://github.com/about)
- [ ] Easy to maintain [single file components](https://vuejs.org/v2/guide/single-file-components.html) with [reusable UI components](https://framework7.io/vue/) and [Babel support](https://babeljs.io/), based on [Vue.js](https://vuejs.org/)
- [ ] One HTML-JavaScript-CSS code base for the web, iOS and Android, realized with [Cordova](https://cordova.apache.org/)
- [ ] Beautiful iOS and Material design user interfaces, based on [Framework7](https://framework7.io/)
- [ ] Global persistent data object to use the same data and setting across your whole application
- [ ] Solutions for multi-language support, state restoration, flexible routing and login protection
- [ ] Image preloading, offline capability and a phone frame for desktop usage with charm
- [ ] Development server with live reload as well as native simulators for iOS and Android
- [ ] Code test with [ESLint](http://eslint.org/), unit tests with [Mocha](https://mochajs.org/) and coverage tests with [Istanbul / NYC](https://istanbul.js.org/)
- [ ] Creation of all needed icons and splash screen graphics out of a single image file
- [ ] Build process with version bump and merging and compression of all your code files, based on [Webpack](https://webpack.js.org/)
- [ ] Deployment to any FTP server, to Firebase, to Xcode or Android Studio, based on [Cordova](https://cordova.apache.org/)

## Prerequisites

Essentiell

- Installed [Node.js](https://nodejs.org/) as a development platform (free)
- Knowledge of [Node.js and npm](https://docs.npmjs.com/getting-started/what-is-npm) (chapter 1 - 10) for command line interface handling
- Knowledge of [Framework7](https://framework7.io/docs/) and [Framework7-Vue](https://framework7.io/vue/) to develop with HTML and JavaScript

Recommend

- Installed [Atom code editor](https://atom.io/) with installed package *language-vue-component* (free)
- Knowledge of [Vue.js](https://vuejs.org/v2/guide/) to make your application state-based and reactive
- Knowledge of [Firebase](https://firebase.google.com/docs/web/setup) to use as reliable backend service provider
- Knowledge of [Cordova/PhoneGap](https://cordova.apache.org/docs/en/latest/) to use device hardware API plugins
- Knowledge of the [iOS design guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/) and [Material design guidelines](https://material.io/guidelines/)

## Quick start

1. Run `mkdir my-app` to create a new app project folder *my-app*
2. Run `cd my-app` to open the created project folder
3. Run `echo {} > package.json` to create the *package.json* file
4. Run `npm install --save-dev app-framework` to
   - install App Framework and its dependencies
   - create the project folder structure
   - complete the *package.json* file

## Next steps

- Read more about the [Architecture](docs/architecture.md)
- Read more about the [Configuration](docs/configuration.md)
- Read more about the [CLI commands](docs/cli-commands.md)
- Read more about the [Client code helpers](docs/client-code-helpers.md)
