<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header course-detail-header">
      <button @click="$router.go(-1)" class="back-button">←</button>
      <h1>{{ course.title }}</h1>
      <p class="header-subtitle">by {{ course.instructor }}</p>
      <!-- Immagine di sfondo per l'header (vedi CSS) -->
    </div>
    <div class="page-layout-stacked-content">
      <div class="course-summary">
        <h2>{{ course.lessonCount }} Lessons</h2>
        <p>{{ course.description }}</p>
      </div>

      <div class="feedbacks-section">
        <h3>Feedbacks</h3>
        <div v-for="feedback in course.feedbacks" :key="feedback.id" class="feedback-item">
          <div class="feedback-rating">{{ '⭐'.repeat(feedback.rating) }}</div>
          <p>{{ feedback.comment }}</p>
        </div>
        <button class="see-others-btn" v-if="course.feedbacks && course.feedbacks.length > 2">See others <span class="arrow-down">▼</span></button>
      </div>

      <div class="lessons-list-section">
        <h3>Lessons</h3>
        <div v-for="lesson in course.lessons" :key="lesson.id" :class="['lesson-item', { locked: lesson.locked }]">
          <div class="lesson-date-badge">
            <div class="lesson-day">{{ lesson.date.day }}</div>
            <div class="lesson-month">{{ lesson.date.month }}</div>
            <div class="lesson-location">{{ lesson.location }}</div>
          </div>
          <div class="lesson-info">
            <h4>{{ lesson.number }} - {{ lesson.title }}</h4>
            <p>{{ lesson.status }}</p>
          </div>
          <button class="lesson-action-btn" :disabled="lesson.locked">
            <span v-if="lesson.locked">🔒</span>
            <span v-else>👆 Enroll</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseDetailView',
  data() {
    return {
      course: {
        // Dati placeholder, dovrebbero provenire da una prop o da una chiamata API
        id: 'ai-course-01',
        title: 'AI Course',
        instructor: 'Leo Nikuma',
        lessonCount: 15,
        description: 'This course will cover the basics of how to start using AI effectively. Lessons will take place every Friday, following the SACE schedule.',
        feedbacks: [
          { id: 1, rating: 5, comment: 'Clear and well-structured course with very useful practical examples.' },
          { id: 2, rating: 5, comment: 'Great balance between theory and real-world applications of AI.' },
          // Altri feedback...
        ],
        lessons: [
          {
            id: 'l1', date: { day: '23', month: 'MAY' }, location: 'Auditorium',
            number: '00', title: 'Introduction', status: '16 enrolled', locked: false
          },
          {
            id: 'l2', date: { day: '30', month: 'MAY' }, location: 'Auditorium',
            number: '01', title: 'What does AI mean', status: 'Closed', locked: true
          },
          {
            id: 'l3', date: { day: '06', month: 'JUN' }, location: 'Auditorium',
            number: '02', title: 'AI history', status: 'Closed', locked: true
          },
          // Altre lezioni...
        ]
      }
    };
  },
  // created() {
  //   // In un'app reale, caricheresti i dati del corso qui basati su $route.params.courseId
  //   const courseId = this.$route.params.courseId;
  //   // Esempio: this.fetchCourseData(courseId);
  // }
}
</script>

<style scoped>
/* Header specifico per dettagli corso con immagine di sfondo */
.page-layout-stacked-header.course-detail-header {
  /* L'immagine di sfondo verrà aggiunta/modificata in main.css o qui se serve un selettore specifico */
  /* Esempio generico: background-image: url('@/assets/images/course_ai_banner.jpg'); */
  background-size: cover;
  background-position: center;
  padding-top: 60px; /* Più padding per l'immagine */
  padding-bottom: 80px;
  text-align: center; /* Centra titolo e sottotitolo */
  position: relative; /* Per back-button */
}

.page-layout-stacked-header.course-detail-header h1 {
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}

.page-layout-stacked-header.course-detail-header .header-subtitle {
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  margin-top: 8px;
}

.back-button {
  position: absolute;
  top: 25px; /* Aggiustato per header più alto */
  left: 20px;
  background: rgba(0,0,0,0.3);
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  font-size: 1.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s, border-color 0.3s;
  z-index: 15; /* Sopra immagine di sfondo */
}
.back-button:hover {
  background: rgba(0,0,0,0.5);
  border-color: rgba(255,255,255,0.5);
}

.course-summary {
  margin-bottom: 30px;
}
.course-summary h2 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #fff; /* Testo più chiaro per contrasto su sfondo scuro del content */
}
.course-summary p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #E0E0E0;
}

.feedbacks-section h3, .lessons-list-section h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 8px;
}

.feedback-item {
  margin-bottom: 15px;
}
.feedback-rating {
  font-size: 0.9rem;
  margin-bottom: 5px;
}
.feedback-item p {
  font-size: 0.9rem;
  color: #B0B0B0; /* Grigio più scuro per i commenti */
  line-height: 1.5;
}

.see-others-btn {
  background: none;
  border: none;
  color: #A0A0FF; /* Bluastro per i link */
  font-size: 0.9rem;
  cursor: pointer;
  padding: 5px 0;
}
.see-others-btn .arrow-down {
  font-size: 0.7rem;
}

.lessons-list-section {
  margin-top: 30px;
}

.lesson-item {
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,0.03);
  border-radius: 12px;
  padding: 15px;
  margin-bottom: 10px;
  border: 1px solid rgba(255,255,255,0.08);
}

.lesson-item.locked {
  opacity: 0.6;
}

.lesson-date-badge {
  background-color: #8A9BFF; /* Blu lavanda per il badge data */
  color: white;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  min-width: 70px;
  margin-right: 15px;
}
.lesson-day {
  font-size: 1.4rem;
  font-weight: bold;
}
.lesson-month {
  font-size: 0.7rem;
  text-transform: uppercase;
}
.lesson-location {
  font-size: 0.7rem;
  opacity: 0.8;
  margin-top: 2px;
}

.lesson-info {
  flex-grow: 1;
}
.lesson-info h4 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #fff;
}
.lesson-info p {
  font-size: 0.8rem;
  color: #B0B0B0;
}

.lesson-action-btn {
  background: none;
  border: 1px solid rgba(255,255,255,0.3);
  color: #E0E0E0;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.3s, border-color 0.3s;
}
.lesson-action-btn:hover:not(:disabled) {
  background-color: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.5);
}
.lesson-action-btn:disabled {
  cursor: not-allowed;
  color: #777;
  border-color: rgba(255,255,255,0.1);
}

</style> 