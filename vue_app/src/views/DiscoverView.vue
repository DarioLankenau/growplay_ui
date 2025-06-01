<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header">
      <h1>🔍 Discover</h1>
      <!-- La vecchia <p> dall'header originale può essere omessa o integrata diversamente se necessario -->
    </div>
    <div class="page-layout-stacked-content">
      <!-- Il vecchio .page-content-wrapper viene rimosso o il suo contenuto spostato qui -->
      <div class="card discover-card">
        <h3>🎯 Recommended for You</h3>
        <div class="course-item">
          <div class="course-info">
            <h4>Strategic Thinking 101</h4>
            <div class="course-meta">⭐ 4.7 stars • 53 learners • Leadership, Critical Thinking</div>
          </div>
          <div class="alignment-score">92% match</div>
        </div>
        <div class="course-item">
          <div class="course-info">
            <h4>Advanced Communication</h4>
            <div class="course-meta">⭐ 4.9 stars • 127 learners • Communication, Influence</div>
          </div>
          <div class="alignment-score">88% match</div>
        </div>
        <div class="course-item">
          <div class="course-info">
            <h4>Design Thinking Fundamentals</h4>
            <div class="course-meta">⭐ 4.6 stars • 89 learners • Innovation, Problem Solving</div>
          </div>
          <div class="alignment-score">85% match</div>
        </div>
        <button class="action-btn career-gps-btn">View Growth in Career GPS</button>
      </div>
      <!-- Altri eventuali contenuti della pagina Discover andrebbero qui -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscoverView',
  // Nessuna logica specifica per ora, ma la struttura è pronta
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
/* Gli stili per .page-header-area, .page-content-wrapper, .card, .discover-card,
   .course-item, .course-info, .course-meta, .alignment-score, .action-btn, .career-gps-btn
   sono definiti in main.css e quindi disponibili globalmente.
   Possiamo aggiungere stili specifici per DiscoverView qui se necessario. */

/* Rimosso .discover-view e le sue regole dato che il wrapper principale è ora .page-layout-stacked */

</style> 