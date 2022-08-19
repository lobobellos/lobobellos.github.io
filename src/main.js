import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";


import Contact from "./pages/Contact.vue";
import First from "./pages/First.vue";
import Home from  "./pages/Home.vue";
import Sponsor from "./pages/Sponsor.vue";
import Sponsors from  "./pages/Sponsors.vue";




const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/first", component: First },
	{ path: "/sponsors", component: Sponsors },
	{ path: "/sponsor", component: Sponsor },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

let app = createApp(App);
app.use(router);
app.mount("#app");