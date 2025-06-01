<script>
import FooterNav from './components/Footer.vue';
// Non importiamo HomeView qui perché sarà gestita dal router

export default {
  name: 'App',
  components: {
    FooterNav
  },
  data() {
    return {
      samModalOpen: false,
      isSamButtonVisible: true, // Logica per mostrare/nascondere il bottone SAM
      // Potremmo voler nascondere il SAM button su certe route o condizioni
    };
  },
  methods: {
    openSAMModal() {
      this.samModalOpen = true;
      // La logica originale di openSAM() creava il modale dinamicamente.
      // In Vue, è meglio avere il modale nel template e controllarne la visibilità.
    },
    closeSAMModal() {
      this.samModalOpen = false;
    }
    // La logica per createConfetti e completeAction dovrebbe essere nei rispettivi componenti
    // o in un service/plugin Vue se usata globalmente.
  },
  watch: {
    // Esempio: Nascondere il bottone SAM quando la modale è aperta (opzionale)
    samModalOpen(isOpen) {
      // this.isSamButtonVisible = !isOpen;
    }
  }
  // Non è necessario importare main.css qui se è già linkato in index.html
  // o importato in main.js (pratica comune in Vue CLI)
};
</script>

<template>
  <div id="app-container">
    <router-view :key="$route.fullPath"></router-view> <!-- Qui verranno renderizzate le viste/pagine -->
    <FooterNav />
    <!-- Il bottone SAM flottante potrebbe andare qui o essere un componente a sé stante -->
    <div class="floating-sam-btn" @click="openSAMModal" v-if="isSamButtonVisible">
      🤖
    </div>
    <!-- Modale SAM (molto semplificata, idealmente un altro componente) -->
    <div v-if="samModalOpen" class="sam-modal-overlay" @click.self="closeSAMModal">
      <div class="sam-modal-content">
        <div class="sam-modal-header">
          <h3>SAM HR Assistant</h3>
          <button @click="closeSAMModal" class="close-sam-btn">×</button>
        </div>
        <div class="sam-modal-body">
          <div class="sam-greeting-bubble">How can I help you today?</div>
          <div class="sam-quick-prompts-modal">
            <button class="prompt-pill">Vacation Days</button>
            <button class="prompt-pill">Time Off Request</button>
            <button class="prompt-pill">Benefits</button>
            <button class="prompt-pill">Policies</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Stili globali per l'app se main.css non è sufficiente, o per #app-container */
/* Idealmente, la maggior parte degli stili dovrebbe essere in main.css o scoped nei componenti */

#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Assicura che l'app occupi almeno tutta l'altezza dello schermo */
  /* Il padding-bottom per il footer è già sul body in main.css */
}

/* Stili per la modale SAM (semplificati) */
.sam-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000; /* Sopra tutto */
  backdrop-filter: blur(5px);
}

.sam-modal-content {
  background: #0F172A; /* Dark blue, similar to the SAM screenshot header */
  /* backdrop-filter: blur(30px); // Removed as it might conflict with a solid background */
  border-radius: 0; /* Remove rounded corners for fullscreen */
  padding: 0; /* Remove padding, manage spacing internally */
  box-shadow: none; /* Remove shadow for fullscreen */
  /* border: 1px solid rgba(255, 255, 255, 0.1); // Remove border */
  width: 100%;
  height: 100%; /* Make content take full height */
  max-width: 100%; /* Ensure it can go fully wide */
  animation: slideUp 0.3s ease-out; /* Animazione da main.css */
  display: flex; /* Use flex to structure header and body */
  flex-direction: column; /* Stack header and body vertically */
}

.sam-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 20px; // Adjust spacing as needed, or remove if padding is handled differently */
  padding: 20px; /* Add padding to the header itself */
  background-color: #1E3A8A; /* Example blue header, adjust to match design */
  color: white; /* Ensure text is visible on blue background */
  flex-shrink: 0; /* Prevent header from shrinking */
}

.sam-modal-header h3 {
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 20px;
  margin: 0;
}

.close-sam-btn {
  background: none;
  border: none;
  color: rgba(255,255,255,0.7);
  cursor: pointer;
  font-size: 24px;
  padding: 0;
  line-height: 1;
}
.close-sam-btn:hover {
  color: #fff;
}

.sam-modal-body {
  flex-grow: 1; /* Allow body to take remaining space */
  overflow-y: auto; /* Allow scrolling if content exceeds height */
  padding: 20px; /* Add padding to the body */
  background-color: #FFFFFF; /* White background for the body content */
  color: #333; /* Darker text color for readability on white */
}

.sam-modal-body .sam-greeting-bubble {
  background: rgba(0, 245, 255, 0.1); /* Original color */
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 20px;
  color: #1E3A8A; /* Adjust text color to be visible on white or light bubble */
  font-weight: 500;
  font-size: 15px;
}

.sam-quick-prompts-modal {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
/* Usa la classe .prompt-pill da main.css per i bottoni nella modale */

/* Ricorda che .floating-sam-btn è definito in main.css */

</style>
