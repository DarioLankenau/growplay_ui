<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header">
      <!-- Pulsante Indietro (da implementare la logica/styling) -->
      <button @click="$router.go(-1)" class="back-button">←</button>
      <h1>In-presence Lessons</h1>
      <p class="header-subtitle">Choose the one you like the most.</p>
    </div>
    <div class="page-layout-stacked-content">
      <p class="content-intro-text">All <span class="separator-dot">•</span> The topics we've chosen to focus on:</p>
      
      <div class="lesson-category-grid">
        <router-link :to="{ name: 'CourseDetail', params: { courseId: 'ai' } }" class="lesson-category-card pink-bg">
          <div class="lesson-count">15 Lessons</div>
          <div class="category-icon">🧠</div> <!-- Placeholder per icona AI -->
          <h3>AI</h3>
        </router-link>
        <router-link :to="{ name: 'CourseDetail', params: { courseId: 'digital-transformation' } }" class="lesson-category-card teal-bg">
          <div class="lesson-count">10 Lessons</div>
          <div class="category-icon">💻</div> <!-- Placeholder per icona Digital Transformation -->
          <h3>Digital Transformation</h3>
        </router-link>
        <router-link :to="{ name: 'CourseDetail', params: { courseId: 'management-skills' } }" class="lesson-category-card blue-bg">
          <div class="lesson-count">10 Lessons</div>
          <div class="category-icon">👥</div> <!-- Placeholder per icona Management Skills -->
          <h3>Management Skills</h3>
        </router-link>
        <router-link :to="{ name: 'CourseDetail', params: { courseId: 'design-basic' } }" class="lesson-category-card salmon-bg">
          <div class="lesson-count">20 Lessons</div>
          <div class="category-icon">🎨</div> <!-- Placeholder per icona Design Basic -->
          <h3>Design Basic</h3>
        </router-link>
      </div>

      <p class="stay-tuned-text">Stay tuned for others coming.</p>
      <p class="manager-prompt-text">Ask your manager if you'd like a course on a specific topic.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InPresenceLessonsView',
  // Dati e metodi se necessari
}
</script>

<style scoped>
/* Stili specifici per InPresenceLessonsView.vue */

.page-layout-stacked-header {
  /* Stile per header con possibile immagine di sfondo e pulsante indietro */
  /* Verrà definito/aggiornato in main.css per un look più simile alle foto */
  text-align: center; /* Assicuriamoci che il testo sia centrato se il back button è a sx */
  position: relative; /* Per posizionare il back button */
}

.back-button {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  font-size: 1.5rem;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}
.back-button:hover {
  background: rgba(255,255,255,0.3);
}

.header-subtitle {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.8);
  margin-top: 5px;
}

.content-intro-text {
  font-size: 0.9rem;
  color: rgba(224, 224, 224, 0.8); /* #E0E0E0 è il colore testo di .page-layout-stacked-content */
  margin-bottom: 20px;
}
.separator-dot {
  font-weight: bold;
  margin: 0 5px;
}

.lesson-category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.lesson-category-card {
  border-radius: 18px;
  padding: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  display: block; /* Per assicurare che l'intera area del router-link sia cliccabile e stilizzata */
}

.lesson-category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.2);
}

.lesson-category-card .lesson-count {
  font-size: 0.8rem;
  margin-bottom: 10px;
  opacity: 0.9;
}

.lesson-category-card .category-icon {
  font-size: 2.5rem; /* Emoji/Icona più grande */
  margin-bottom: 10px;
}

.lesson-category-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

/* Sfondi colorati per le card categoria (presi approssimativamente dall'immagine) */
.pink-bg { background-color: #FFD6D6; color: #5D2E2E; } /* Rosa pallido, testo scuro */
.pink-bg .lesson-count { color: #8C4A4A; }

.teal-bg { background-color: #D1FAF3; color: #235A51; } /* Verde acqua pallido, testo scuro */
.teal-bg .lesson-count { color: #387A6F; }

.blue-bg { background-color: #D6EFFF; color: #2E4A5D; } /* Azzurro pallido, testo scuro */
.blue-bg .lesson-count { color: #4A6C8C; }

.salmon-bg { background-color: #FFD6CC; color: #6D3B2E; } /* Salmone pallido, testo scuro */
.salmon-bg .lesson-count { color: #8C5A4A; }


.stay-tuned-text, .manager-prompt-text {
  font-size: 0.9rem;
  text-align: center;
  color: rgba(224, 224, 224, 0.7);
  margin-bottom: 10px;
}
.manager-prompt-text {
  margin-bottom: 0;
}

.lesson-category-grid a.lesson-category-card {
  text-decoration: none; /* Rimuove la sottolineatura predefinita del link */
}

</style> 