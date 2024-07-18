# personalwork

## 專案內容
個人作品集，主要使用vue2+vuetify2+scss，
履歷內容串接和假資料表使用 [mock.js](https://github.com/nuysoft/Mock/wiki/Getting-Started)，
呈現各式共用元件的可能性
### Components
詳 [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
- atoms(原子) 最基本的components，包括按鈕輸入框等，與父層溝通單純使用props運作

- molecules(分子) 會將atoms層的components組在這層，與父層溝通單純使用props運作

- organisms(有機體) 會將atoms及molecules層的components組在這層，並開始做store和商業邏輯的複雜操作

- pages(頁面) 會將organisms層的components組在這層，並藉由此層做router跳轉依據 (目前仍使用src/views)

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run deploy
```
build已經包含在內，會更新gh-pages分支並佈上gitpage
### deploy on firebase hosting
```
firebase deploy
```
在build完成之後執行
### Lints and fixes files
```
npm run lint
```
## 專案結構
```
Vue
├── public
├── src
    ├── assets
    ├── components
        ├── atoms
            ├── AutocompleteVuetify.vue
            ├── ButtonVuetify.vue
            ├── ChipVuetify.vue
            ├── RadioGroupVuetify.vue
            ├── SwitchVuetify.vue
            ├── TextareaVuetify.vue
            └── TextFieldVuetify.vue
        ├── molecules
            ├── Navigator.vue
            ├── Pagination.vue
            ├── Timeline.vue
            └── UnorderedList.vue
        ├── molecules
            ├── DataTable.vues
            ├── Intro.vue
            ├── Playground.vue
            └── Resume.vue

    ├── config
    ├── mixins
    ├── router
    ├── store
    ├── style
    ├── views
    ├── App.vue
    └── main.js
├── .browserslistrc
├── .eslintrc.js
├──.firebaserc
├── .gitignore
├── babel.config.js
├──firebase.json
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
└── vue.config.js
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
