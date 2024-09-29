import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Pages/Home.vue';
import Services from '../Pages/ServicesPage.vue';
import AboutPage from '../Pages/AboutPage.vue';
import Projects from '../Pages/ProjectsPage.vue';
import Contact from '../Pages/ContactPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/services', name: 'Services', component: Services },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
