<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header">
      <h1>🔥 Challenges</h1>
    </div>
    <div class="page-layout-stacked-content">
      <div class="card challenge-card">
        <h3>🧩 Current Quest: Build Presentation Skills</h3>
        <div style="font-size: 14px; color: rgba(255,255,255,0.6); margin-bottom: 12px; font-weight: 500;">Day 3 of 7</div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="micro-action">
          <div>
            <div style="font-weight: 600; color: #fff; margin-bottom: 4px;">Today's Micro-Action</div>
            <div style="font-size: 14px; color: rgba(255,255,255,0.7);">Watch a 2-min TED Talk</div>
          </div>
          <button class="complete-btn" @click="completeAction" :disabled="actionCompleted">
            {{ actionCompleted ? '✨ Completed!' : 'Mark Complete ✅' }}
          </button>
        </div>
        <div class="stats">
          <div class="stat-item">👥 3 teammates joined</div>
          <div class="stat-item">⭐ 4.8/5 (25 reviews)</div>
        </div>
        <button class="view-all-btn action-btn">👁 View All Quests</button>
        <button class="action-btn linkedin-btn">Complete Full Course on LinkedIn Learning</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChallengesView',
  data() {
    return {
      actionCompleted: false,
      progress: 43, // Initial progress for "Day 3 of 7" (approx 3/7 * 100)
    };
  },
  methods: {
    completeAction() {
      this.actionCompleted = true;
      this.progress = 57; // Example: update progress
      // Qui potresti aggiungere l'effetto confetti se lo implementi come un metodo globale o un plugin
      // createConfetti(); // Assumendo che sia disponibile
      console.log("Micro-action completed!");
    }
  }
};
</script>

<style scoped>
/* Gli stili per .page-header-area, .page-content-wrapper, .card, .challenge-card, 
   .progress-bar, .progress-fill, .micro-action, .complete-btn, .stats, .view-all-btn, .action-btn, .linkedin-btn
   sono definiti in main.css e quindi disponibili globalmente.
   Possiamo aggiungere stili specifici per ChallengesView qui se necessario. */

/* Rimosso .challenges-view e le sue regole dato che il wrapper principale è ora .page-layout-stacked */

/* Se vuoi mantenere il colore di sfondo specifico per il bottone completato,
   dovrai gestirlo dinamicamente o con classi aggiuntive,
   poiché lo stile inline originale non è ideale in Vue.
   L'approccio con :disabled e il cambio testo è già un miglioramento.
   Per il cambio di colore del bottone una volta disabilitato,
   la classe .complete-btn:disabled in main.css dovrebbe già gestirlo. */

</style> 