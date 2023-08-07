# personalwork

## 專案結構
```
Vue
├── public
├── src
    ├── assets
    ├── components
    ├── config
    ├── mixins
    ├── router
    ├── store
    ├── style
    ├── views
    ├── App.vue
    ├── main.js
    └── mock.js
├── .browserslistrc
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── jsconfig.json
├── package.json
├── package-lock.json
├── README.md
└── vue.config.js
```

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
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
