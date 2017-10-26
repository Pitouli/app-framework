# App Framework 2 &nbsp; &nbsp; &nbsp; [![](https://img.shields.io/npm/dt/app-framework.svg)](https://www.npmjs.com/package/app-framework) [![](https://img.shields.io/npm/v/app-framework.svg)](https://www.npmjs.com/package/app-framework) [![](https://img.shields.io/npm/l/app-framework.svg)](https://www.npmjs.com/package/app-framework)

**iOS and Android Apps with HTML & JavaScript - develop, test, build and deploy - free and open source!**

<<<<<<< HEAD
With App Framework, you could spend your time for your next amazing app and not for the tricky stuff around. App Framework combines great pieces of open source code to support your whole workflow with powerful scripts and your app itself with useful helpers. And because App Framework is installed as a module, improvements and bug-fixes are easily to enroll to all of your projects.
=======
![](media/process.png)
>>>>>>> master

![Process](media/process.png)

## Features

<<<<<<< HEAD
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

## Requirements

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
=======
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
>>>>>>> master
