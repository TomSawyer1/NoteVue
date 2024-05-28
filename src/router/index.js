
import Home from '../views/Home.vue'
import NoteDetails from '../components/NoteDetails.vue'
import { createWebHistory, createRouter } from 'vue-router'
const routes = [
  { path: "/", component: Home }
  ,
  {
    path: '/note/:id',
    name: 'NoteDetails',
    component: NoteDetails
  }
];

const router = createRouter({   history: createWebHistory(),   routes });  export default router;