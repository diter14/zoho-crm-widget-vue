import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

window.ZOHO_ENTITY = null;

const app = createApp(App);
app.use(createPinia());
app.mount('#app');

// window.ZOHO.embeddedApp.on("PageLoad", function (data) {
//   const app = createApp(App);
//   app.use(createPinia());
//   app.mount('#app');


//   if (data && data.Entity) {
//     window.ZOHO.CRM.API.getRecord({ Entity: data.Entity, RecordID: data.EntityId })
//       .then(function (response) {
//         console.log(response.data[0])
//         window.ZOHO_ENTITY = response.data.shift();
//       });
//   }
// });

// window.ZOHO.embeddedApp.init();