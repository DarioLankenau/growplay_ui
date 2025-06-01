<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header">
      <h1>🎉 Events</h1>
    </div>
    <div class="page-layout-stacked-content">
      <router-link to="/events/time-off" class="event-choice-card">
        <h3>Your Time Off</h3>
        <p>Discover where your free time can take you</p>
        <img :src="eventYourTimeOffImg" alt="Family enjoying time off" @error="setDefaultImage">
      </router-link>

      <router-link to="/events/lessons" class="event-choice-card">
        <h3>In-presence lessons</h3>
        <p>Our new way of social learning</p>
        <img :src="eventInPresenceLessonsImg" alt="People in a modern classroom setting" @error="setDefaultImage">
      </router-link>
    </div>
  </div>
</template>

<script>
import eventYourTimeOffImg from '@/assets/images/event_your_time_off.jpg';
import eventInPresenceLessonsImg from '@/assets/images/event_in_presence_lessons.png';
import placeholderImg from '@/assets/images/lesson_ai.png'; // Placeholder

export default {
  name: 'EventsView',
  data() {
    return {
      eventYourTimeOffImg: eventYourTimeOffImg,
      eventInPresenceLessonsImg: eventInPresenceLessonsImg,
    };
  },
  methods: {
    setDefaultImage(event) {
      event.target.src = placeholderImg; 
    }
  }
  // TODO: Definire le rotte figlie per /events/time-off e /events/lessons
  // e creare i componenti YourTimeOffView.vue e InPresenceLessonsView.vue
};
</script>

<style scoped>
/* Stili da events.html */
.event-choice-card {
    background: rgba(25, 25, 40, 0.8); /* Standard .card background */
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 24px;
    margin-bottom: 20px;
    text-decoration: none;
    display: block;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative; /* Per ::before se vogliamo l'effetto shimmer standard */
    overflow: hidden; /* Per ::before */
}

.event-choice-card::before { /* Aggiunto effetto shimmer standard */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #06b6d4, #10b981, #3b82f6); /* Gradient per events */
    animation: shimmer 3s ease-in-out infinite;
}

.event-choice-card:hover {
    transform: translateY(-8px) scale(1.01); /* Effetto hover standard .card */
    box-shadow: 
        0 24px 48px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.12);
}

.event-choice-card h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 20px; /* Coerente con .card h3 (era 18px, aumentato) */
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 8px;
}

.event-choice-card p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 15px;
    line-height: 1.5;
}

.event-choice-card img {
    width: 100%;
    border-radius: 16px;
    margin-top: 10px;
    object-fit: cover;
    max-height: 180px; /* Puoi aggiustare se necessario */
}

/* Rimosse le classi .time-off-card e .lessons-card per il background e border-left specifici.
   Se si vogliono mantenere, si possono aggiungere stili più specifici qui o usare classi uniche.
   Per ora, si affideranno allo stile di .event-choice-card e al ::before gradient. */

/* Esempio se volessimo differenziare il bordo shimmer */
/* .time-off-card::before {
    background: linear-gradient(90deg, #8B5CF6, #c084fc, #3b82f6); 
}
.lessons-card::before {
    background: linear-gradient(90deg, #EC4899, #f9a8d4, #ef4444);
} */

</style> 