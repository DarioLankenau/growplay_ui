<template>
  <div class="page-layout-stacked">
    <header class="page-layout-stacked-header">
      <h1>Hi Alex 👋</h1>
    </header>

    <main class="page-layout-stacked-content">
      <div class="header-main-content-wrapper">
        <div class="header-top-content">
          <div class="level-badge">Level 4 – Communication Builder</div>
        </div>
        
        <div class="growth-recap">
          <div class="xp-section">
            <div>
              <div class="xp-count">2,847 XP</div>
              <div style="font-size: 13px; opacity: 0.8; font-weight: 500;">This Week's Growth ✨</div>
            </div>
            <div class="growth-icon">📈</div>
          </div>
          <div class="mood-check">
            <div class="mood-text">How are you today?</div>
            <div class="emoji-container">
              <span @click="selectMood('happy')" :class="{ selected: currentMood === 'happy' }">😊</span> 
              <span @click="selectMood('neutral')" :class="{ selected: currentMood === 'neutral' }">😐</span> 
              <span @click="selectMood('sad')" :class="{ selected: currentMood === 'sad' }">😔</span>
            </div>
          </div>
        </div>
        <button class="action-btn monthly-recap-btn">See your monthly recap!</button>
      </div>

      <div class="page-content-wrapper home-additional-content">
        <p v-if="!additionalContent">Welcome to your personalized growth hub!</p>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentMood: null, // 'happy', 'neutral', 'sad'
      additionalContent: false // Flag per mostrare contenuto aggiuntivo
    };
  },
  methods: {
    selectMood(mood) {
      this.currentMood = mood;
      console.log('Selected mood:', mood);
      // Qui potresti inviare il mood a un backend o store Vuex
    }
  }
};
</script>

<style scoped>
/* Stili specifici per Home.vue */

/* Rimuoviamo .home-view se non serve più un wrapper specifico a livello di vista */

/* Gli stili di .header-main originale sono ora per .header-main-content-wrapper */
.header-main-content-wrapper { 
    background: linear-gradient(135deg, 
        rgba(147, 51, 234, 0.9) 0%, 
        rgba(236, 72, 153, 0.9) 50%, 
        rgba(59, 130, 246, 0.9) 100%);
    padding: 28px; /* Padding ridotto perché il titolo è fuori */
    /* Rimosso position:relative e overflow:hidden se non più necessari per effetti specifici qui */
    text-align: center;
    border-radius: 20px; /* Arrotondiamo questo blocco */
    margin-bottom: 25px; /* Spazio sotto questo blocco */
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* Rimuoviamo .header-main::before e ::after se gli effetti non sono più desiderati o sono gestiti diversamente */

.header-top-content { /* Nuovo wrapper per il contenuto di header-top senza il profilo */
    display: flex;
    justify-content: flex-end; /* Allinea il badge a destra */
    align-items: center;
    margin-bottom: 24px;
    position: relative;
    z-index: 3;
}

/* Gli stili per .profile-section, .profile-pic, .greeting sono rimossi 
   perché quel contenuto è ora nel .page-layout-stacked-header */

.level-badge {
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    padding: 10px 18px;
    border-radius: 24px;
    color: white;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.growth-recap {
    background: rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 24px;
    color: white;
    position: relative;
    z-index: 3;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
    margin-bottom: 24px;
}

.xp-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
}

.xp-count {
    font-size: 28px;
    font-weight: 800;
    font-family: 'Space Grotesk', sans-serif;
    background: linear-gradient(135deg, #00f5ff, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.growth-icon {
    font-size: 32px;
    animation: iconFloat 3s ease-in-out infinite; 
}

.mood-check {
    text-align: center;
    font-size: 15px;
    opacity: 0.9;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px; 
}

.mood-text {
     margin-bottom: 8px; 
}

.emoji-container {
    display: flex;
    gap: 16px; 
}

.emoji-container span {
    font-size: 32px; 
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 8px; 
    border-radius: 12px; 
    border: 2px solid transparent;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.emoji-container span:hover {
    transform: scale(1.1);
    background: rgba(255, 255, 255, 0.15);
}

.emoji-container span.selected {
    border-color: #00f5ff;
    background: rgba(0, 245, 255, 0.2);
    box-shadow: 0 0 12px rgba(0, 245, 255, 0.4);
    transform: scale(1.1); 
}

.monthly-recap-btn {
    background: linear-gradient(135deg, #3b82f6, #9333ea);
    padding: 16px 28px; 
    display: inline-block; 
    width: auto;
    max-width: 320px; 
    font-size: 15px;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.home-additional-content p {
  text-align: center;
  font-size: 1.1rem;
  color: #cccccc; /* Testo leggermente più chiaro per questo messaggio */
  margin-top: 30px;
}

</style> 