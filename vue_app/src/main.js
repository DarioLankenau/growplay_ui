import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// import './style.css' // Rimosso import di style.css
import App from './App.vue'
import HomeView from './views/Home.vue'
import ChallengesView from './views/ChallengesView.vue'
import DiscoverView from './views/DiscoverView.vue'
import EventsView from './views/EventsView.vue'
import SamView from './views/SamView.vue'
import NewChatView from './views/NewChatView.vue'
// Importa la nuova vista per le lezioni in presenza
import InPresenceLessonsView from './views/events/InPresenceLessonsView.vue' 
// Importa le nuove viste per gli eventi
import CourseDetailView from './views/events/CourseDetailView.vue'
import YourTimeOffView from './views/events/YourTimeOffView.vue'
// Importeremo le altre viste qui quando le creeremo
// import SamView from './views/Sam.vue';         // Nota: estensione .vue

// Importa gli stili globali
import './assets/main.css'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/challenges', name: 'Challenges', component: ChallengesView },
  { path: '/discover', name: 'Discover', component: DiscoverView },
  { path: '/events', name: 'Events', component: EventsView },
  // Nuova rotta per le lezioni in presenza
  { path: '/events/lessons', name: 'InPresenceLessons', component: InPresenceLessonsView },
  { path: '/events/lessons/:courseId', name: 'CourseDetail', component: CourseDetailView },
  { path: '/events/time-off', name: 'YourTimeOff', component: YourTimeOffView },
  { path: '/sam', name: 'SAM', component: SamView },
  { path: '/new-chat', name: 'NewChat', component: NewChatView },
  // TODO: Aggiungere le route per le sottopagine di Events
]

const router = createRouter({
  history: createWebHistory(), // Usa la history API del browser
  routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router)
app.mount('#app')
