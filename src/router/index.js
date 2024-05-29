
import Home from '../views/Home.vue';

import { createRouter, createWebHistory } from 'vue-router';

// path = Url corespondent & suivi du component

const routes = [
  { path: '/', component: Home },
  { path: '/note/:id', component: Home }
];

const router = createRouter({ history: createWebHistory (), routes });

export default router;
