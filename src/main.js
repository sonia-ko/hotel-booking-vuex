import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "./store";
import App from "./App.vue";
import CalendarPage from "./pages/CalendarPage.vue";
import ContactsPage from "./pages/ContactsPage.vue";
import HomePage from "./pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/calendar", component: CalendarPage },
    { path: "/", component: HomePage },
    { path: "/contacts", component: ContactsPage },
  ],
});

const app = createApp(App).use(router).use(store);

app.mount("#app");
