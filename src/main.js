import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";


import Contact from "./pages/Contact.vue";
import First from "./pages/First.vue";
import Home from  "./pages/Home.vue";
import Partner from "./pages/Partner.vue";
import Partners from  "./pages/Partners.vue";
import Robots from  "./pages/Robots.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/first", component: First },
	{ path: "/partners", component: Partners },
	{ path: "/partner", component: Partner },
  { path: "/robots", component: Robots },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

let app = createApp(App);
app.use(router);
app.mount("#app");