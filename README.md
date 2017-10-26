# App Framework &nbsp; &nbsp; &nbsp; [![](https://img.shields.io/npm/dt/app-framework.svg)](https://www.npmjs.com/package/app-framework) [![](https://img.shields.io/npm/v/app-framework.svg)](https://www.npmjs.com/package/app-framework) [![](https://img.shields.io/npm/l/app-framework.svg)](https://www.npmjs.com/package/app-framework)

**iOS and Android Apps with HTML & JavaScript - App Framework combines great pieces of open source code to support your whole workflow with useful scripts and your app with powerful plugins. With App Framework, you could spend your time for your next amazing App and not for the tricky stuff around - free and open source!**

![](media/process.png)

## Requirements

Knowledge

- [Node.js and npm](https://docs.npmjs.com/getting-started/what-is-npm) for command line interface handling
- [Framework7](https://framework7.io/docs/) and [Framework7-Vue](https://framework7.io/vue/) to develop with HTML and JavaScript
- [Vue.js](https://vuejs.org/v2/guide/) to make your application state-based and reactive
- [Firebase](https://firebase.google.com/docs/web/setup) to use the reliable backend service provider
- [Cordova/PhoneGap](https://cordova.apache.org/docs/en/latest/) to use device hardware API plugins
- [iOS design guidelines](https://developer.apple.com/ios/human-interface-guidelines/overview/design-principles/) and [Material design guidelines](https://material.io/guidelines/)

Software

- [Atom.io](https://atom.io/) as the recommend code editor
  - Package *language-vue-component* to support .vue files
  - Package *linter-eslint* to support live code check
- [Node.js and npm](https://nodejs.org/) as JavaScript runtime environment
- [Xcode](https://developer.apple.com/xcode/) if you want to deploy to the App Store (requires macOS)
- [Android Studio](https://developer.android.com/studio/install.html) if you want to deploy to the Play Store

## Quick Start

1. Run `mkdir my-app` to create a new project folder
2. Run `cd my-app` to open the project folder
3. Run `echo {} > package.json` to create the package information file
4. Run `npm install --save-dev app-framework` to install App Framework and setup the project folder
5. Run `npm run dev` to open the app on the development server

## Workflow Commands

Development

- `npm run dev` to start a development server with hot reload
- `npm run dev:ios` to open a development build on an iOS emulator
- `npm run dev:android` to open a development build on an Android emulator
- `npm run dev:firebase` to deploy a development build to Firebase
- `npm run dev:ftp` tp deploy a development build to a FTP server

Testing

- `npm run test` to run all tests according the configuration
- `npm run test:code` to check and fix the code
- `npm run test:units` to run all unit tests
- `npm run test:coverage` to check the test coverage

Building

- `npm run build:patch` to build version x.y.z+1
- `npm run build:minor` to build version x.y+1.0
- `npm run build:major` to build version x+1.0.0

Deployment

- `npm run deploy` to deploy the latest build according the configuration
- `npm run deploy:ios` to deploy the latest build to Xcode
- `npm run deploy:android` to deploy the latest build to Android Studio
- `npm run deploy:firebase` to deploy the latest build to Firebase
- `npm run deploy:ftp` to deploy the latest build to a FTP server

Backup

- `npm run backup` to create a backup according the configuration

## App Plugins

## Features

Setup your project:

- Creation of a lightweight and well-organized project folder, ready to publish on [GitHub](https://github.com/about)

Design your application:

- Printable [template](design/smartphone-template.pdf) to design your application with paper and pencil
- Templates for your icon design - as [PDF for sketching](design/icon-template.pdf) and [PPTX](design/icon-template.pptx) for drawing

Develop your application:s

- Realize beautiful user interfaces with all well-known components and transitions, based on [Framework7](https://framework7.io/)
- Easy to maintain [single file components](https://vuejs.org/guide/single-file-components) with [reusable UI elements](https://framework7.io/vue/), based on [Vue.js](https://vuejs.org/)
- One code base for all devices with HTML, CSS and JavaScript - realized with [Cordova](https://cordova.apache.org/), supporting [ES2015](https://babeljs.io/learn-es2015/)
- Comprehensive icon fonts like [FontAwesome](http://fontawesome.io/), [Framework7](http://framework7.io/icons/), [Ion](http://ionicons.com/) and [Material Icons](https://material.io/icons/) out of the box
- Well prepared to use [Firebase authentication](https://firebase.google.com/products/auth/), [realtime database](https://firebase.google.com/products/database/) and [storage services](https://firebase.google.com/products/storage/)
- State kept for history, tabs, scroll positions, focus, panels, modals, form inputs and page component data
- Global data object to use the same data and setting across your whole application
- [Flexible routing](http://framework7.io/vue/navigation-router.html) with dynamic, nesting and login protection
- Offline capability, image preloading and multi-language support out of the box

Test your application:

- Integrated code check for [correctness](http://eslint.org/) and automatic fix for [standard conformity](http://standardjs.com/)
- Local development server with live reload, perfectly to use together with [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
- Test your application on any iOS or Android device with an emulator or on your own device
- Use a development Firebase project with automatic [database](https://firebase.google.com/products/database/) and [storage](https://firebase.google.com/products/storage/) rule update

Build your application:

- Build process with version bump and compression of all HTML, CSS, JavaScript and image files
- Generation of favicons, touch icons and splash screens out of a single image file
- Phone frame around your application on big screens, so you can offer desktop access with charm
- Automatic build as web application, to be used online and offline in the browser
- Automatic [Apple Xcode](https://developer.apple.com/xcode/) project build with [Cordova](https://cordova.apache.org/)
- Automatic [Android Studio](https://developer.android.com/studio) project build with [Cordova](https://cordova.apache.org/)
- App Framework builds score very good at performance tests like [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) or [YSlow](http://yslow.org/)

Deploy your application:

- Deployment without downtime
  - to any FTP server as Web App
  - to the [Firebase Hosting service](https://firebase.google.com/products/hosting/) as Web App
  - to the [Apple App Store](https://itunes.apple.com/) as native iOS App
  - to the [Google Play Store](https://play.google.com/) as native Android App
- Easy rollback solutions

Backup your project:

- Download the [Firebase database content](https://firebase.google.com/products/database/) and [user list](https://firebase.google.com/products/auth/) to local JSON files
- Snapshot creation of all important project files to backup on any external drive or cloud service

## Documentation

[![Documentation](media/documentation.png)](DOCUMENTATION.md)

## Demo App

[![Download on the App Store Play](media/app-store-download.png)](https://itunes.apple.com/us/app/app-framework-demo/id1203927581?mt=8')
&nbsp;&nbsp;&nbsp;
[![Get it on Google Play](media/google-play-download.png)](https://play.google.com/store/apps/details?id=de.scriptpilot.appframework)
&nbsp;&nbsp;&nbsp;
[![Open as Web App](media/web-app-visit.png)](https://demo.app-framework.com)

![Screenshots](media/screenshots.png)
