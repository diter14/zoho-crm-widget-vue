# Zoho CRM Widget - Vue 3 & Vite
![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-gray?&logo=javascript)
![Vue.js](https://img.shields.io/badge/Vue.js-0d9558?logo=vuedotjs&logoColor=white&textColor=black)
![Vite](https://img.shields.io/badge/Vite-7d36b5?logo=vite&logoColor=white&labelColor=7d369f)
![Zoho Deluge](https://img.shields.io/badge/Zoho-Deluge-yellow?logo=deluge)

Project template to create custom Widgets for Zoho CRM using Vue 3 & Vite

## Project Setup

```sh
npm install
```

### Run live preview command

```sh
npm run dev --host
```
- You should update the `index page` of your widget to: `http://localhost:5173/`
- This action is required when you are in development, if your application is finished, execute the `npm run pack` command

### Compile, Minify and Pack it for Production in Zoho CRM

```sh
npm run pack
```

This command will generate a pack with the compiled files ready to upload to Zoho CRM
The `index page` in Zoho CRM should be set to: `/widget.html`

## Start using

### Modify and customize `App.vue` file
The `onMounted` hook gets the current record data using the API
Then you can create your custom app using all the methods documented in [Zoho CRM JS SDK](https://help.zwidgets.com/help/latest/index.html)

## Forked from
Thanks for the inspiration [@ikaw-bahala](https://github.com/ikaw-bahala)

Project base: [zoho-crm-widget-vuejs](https://github.com/ikaw-bahala/zoho-crm-widget-vuejs/commits/main/)