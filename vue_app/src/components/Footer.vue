<template>
  <nav class="footer-nav" v-if="isMobileFooterVisible">
    <router-link to="/" class="footer-item" active-class="active" exact>
      <span class="footer-icon">&#127968;</span>
      <span class="footer-label">Home</span>
    </router-link>
    <router-link to="/challenges" class="footer-item" active-class="active">
      <span class="footer-icon">&#127942;</span>
      <span class="footer-label">Challenges</span>
    </router-link>
    <router-link to="/discover" class="footer-item" active-class="active">
      <span class="footer-icon">&#11088;</span>
      <span class="footer-label">Discover</span>
    </router-link>
    <router-link to="/events" class="footer-item" active-class="active">
      <span class="footer-icon">&#128101;</span>
      <span class="footer-label">Events</span>
    </router-link>
    <router-link to="/sam" class="footer-item" active-class="active">
      <span class="footer-icon">&#128172;</span>
      <span class="footer-label">SAM</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'FooterNav',
  data() {
    return {
      isMobileFooterVisible: true, // Inizialmente visibile, potrebbe essere controllato da App.vue
      // Potremmo usare window.innerWidth per un controllo reattivo qui,
      // ma è meglio gestirlo a livello di App.vue o con un plugin Vue per la responsività.
    };
  },
  // La logica per l'elemento attivo sarà gestita da `router-link` e `active-class`.
  // La vecchia logica di `footer.js` per confrontare `window.location.pathname` non è più necessaria.
  // mounted() {
  //   this.checkIfMobile();
  //   window.addEventListener('resize', this.checkIfMobile);
  // },
  // beforeUnmount() {
  //   window.removeEventListener('resize', this.checkIfMobile);
  // },
  // methods: {
  //   checkIfMobile() {
  //     // Esempio: nascondi se la larghezza è >= 768px (logica desktop)
  //     // this.isMobileFooterVisible = window.innerWidth < 768;
  //     // Per ora lo lasciamo sempre true e lo gestiamo via CSS se necessario,
  //     // o passiamo una prop da App.vue
  //   }
  // }
};
</script>

<style scoped>
/* Stili da components/footer.css */
.footer-nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #1f1f29; /* Sfondo più scuro per integrarsi meglio */
    border-radius: 24px 24px 0 0;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.25);
    display: flex;
    justify-content: space-around;
    align-items: center; /* Center items vertically */
    padding: 12px 0 8px 0; /* Increased vertical padding */
    z-index: 1002;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    height: 65px; /* Explicitly set height for a larger bar */
}

.footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #8e8e93; /* Grigio più tenue per non attivi */
    font-size: 11px; /* Slightly larger font size */
    font-weight: 500;
    flex-grow: 1;
    padding: 8px 8px; /* Increased padding */
    transition: color 0.2s ease, transform 0.2s ease;
    text-align: center;
    line-height: 1.3; /* Adjusted line height */
}

.footer-icon {
    font-size: 24px; /* Larger icon size */
    margin-bottom: 4px; /* Adjusted margin */
}

/* Stato attivo gestito da router-link active-class */
.footer-item.active {
    color: #00f5ff; /* Ciano brillante per attivo */
    /* font-weight: 600; */ /* Già 500, potrebbe non servire più forte */
}

.footer-item.active .footer-icon {
    transform: scale(1.1);
}

/* La media query per nascondere su desktop non è più qui.
   La visibilità del footer su diverse dimensioni sarà gestita da App.vue
   o da una classe CSS globale applicata al body o a #app. 
   Per ora, questo componente è sempre renderizzato se isMobileFooterVisible è true.
*/

/* Esempio se volessimo ancora nasconderlo con CSS qui, ma non è ideale per Vue */
/* @media (min-width: 768px) {
    .footer-nav {
        display: none;
    }
} */
</style> 