# Configuration

> Go back to the [readme file](../README.md#next-steps)

<br />

## Look and feel

- **title**
- **languages**
- **style**
- **theme**
- **layout**
- **statusbarVisibility**
- **statusbarBackgroundColor**
- **statusbarTextColor**
- **showPhoneFrame**
- **limitAppWidth**
- **limitAppHeight**

## Functionality

## Development

- **firebase**

## Testing

- **useESLint**
- **useMocha**
- **useNYC**

## Building

## Deployment

---

<br />

### Configuration options

Configure your application easily in the *app/config.json* file. For details, please read the *Workflow* section.

<!-- config-options -->
Option | Allowed | Default
:--- |:--- |:---
title | *string* | My App
defaultLanguage | /^[a-z]{2}$/ | en
defaultLanguageFallback | *boolean* | false
theme | ios, material, ios-material, material-ios | material
color | /^[a-z]+$/ | indigo
layout | default, white, dark | default
statusbarVisibility | *boolean* | true
statusbarTextColor | black, white | white
statusbarBackgroundColor | /^#[0-9a-f]{6}$/i | #000000
iconBackgroundColor | /^#[0-9a-f]{6}$/i | #ffffff
useIconFonts | *object* |
&nbsp;&nbsp;&nbsp;framework7 | *boolean* | false
&nbsp;&nbsp;&nbsp;material | *boolean* | false
&nbsp;&nbsp;&nbsp;ion | *boolean* | false
&nbsp;&nbsp;&nbsp;fontawesome | *boolean* | false
limitApplicationWidth | /^[0-9]+$/ | 320
limitApplicationHeight | /^[0-9]+$/ | 570
showPhoneFrameOnDesktop | *boolean* | true
framework7parameters | *object* | {}
materialSubnavbarFix | *boolean* | true
restoreHistory | *boolean* | true
restoreComponentData | *boolean* | true
completeRoutesFile | *boolean* | true
firebase | *object* |
&nbsp;&nbsp;&nbsp;apiKey | *string* |
&nbsp;&nbsp;&nbsp;authDomain | *string* |
&nbsp;&nbsp;&nbsp;databaseURL | *string* |
&nbsp;&nbsp;&nbsp;storageBucket | *string* |
&nbsp;&nbsp;&nbsp;projectId | *string* |
&nbsp;&nbsp;&nbsp;allowEmailLogin | *boolean* | false
&nbsp;&nbsp;&nbsp;allowEmailRegistration | *boolean* | false
devFirebase | *object* |
&nbsp;&nbsp;&nbsp;deployDevRulesOnTesting | *boolean* | false
&nbsp;&nbsp;&nbsp;apiKey | *string* |
&nbsp;&nbsp;&nbsp;authDomain | *string* |
&nbsp;&nbsp;&nbsp;databaseURL | *string* |
&nbsp;&nbsp;&nbsp;storageBucket | *string* |
&nbsp;&nbsp;&nbsp;projectId | *string* |
&nbsp;&nbsp;&nbsp;allowEmailLogin | *boolean* | false
&nbsp;&nbsp;&nbsp;allowEmailRegistration | *boolean* | false
appStoreId | *string* |
playStoreId | *string* |
useCordovaPlugins | *array* | []
cordovaPreferences | *object* | {"DisallowOverscroll":true}
resetLocalStorageOnVersionChange | *boolean* | false
preloadImages | *boolean* | true
buildSourcemaps | *boolean* | false
fixCodeOnTest | *boolean* | true
fixCodeOnBuild | *boolean* | true
devServerPort | /^[0-9]{4}$/ | 8080
<!-- /config-options -->
