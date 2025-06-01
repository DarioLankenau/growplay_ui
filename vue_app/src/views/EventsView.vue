<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header">
      <h1>🎉 Events</h1>
    </div>
    <div class="page-layout-stacked-content">
      <router-link to="/events/time-off" class="event-choice-card">
        <h3>Social Events</h3>
        <p>Be part of the SACE community and enjoy having fun!</p>
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
/* Stili specifici per EventsView.vue */
.event-choice-card {
    background: rgba(25, 25, 40, 0.95); /* More opaque background */
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 35px; /* Significantly increased padding */
    margin-bottom: 30px; /* Increased space between cards */
    text-decoration: none;
    display: block;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15); /* More prominent border */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}

.event-choice-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px; /* Thicker shimmer */
    background: linear-gradient(90deg, #06b6d4, #10b981, #3b82f6); /* Gradient for events */
    animation: shimmer 3s ease-in-out infinite;
}

.event-choice-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow:
        0 20px 40px rgba(0, 0, 0, 0.4),
        inset 0 2px 0 rgba(255, 255, 255, 0.2); /* More prominent inner shadow */
    border-color: rgba(255, 255, 255, 0.2); /* More prominent border */
}

.event-choice-card h3 {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 26px; /* Significantly larger font size */
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 12px; /* Increased space */
}

.event-choice-card p {
    font-size: 18px; /* Significantly larger font size */
    color: rgba(255, 255, 255, 0.85); /* Slightly lighter text color */
    margin-bottom: 25px; /* Increased space */
    line-height: 1.6;
}

.event-choice-card img {
    width: 100%;
    border-radius: 16px;
    margin-top: 20px; /* Increased space */
    object-fit: cover;
    max-height: 250px; /* Increased max height */
}

/* Removed old styles and classes that are now handled by .event-choice-card */

</style> 