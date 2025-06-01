<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header time-off-header">
      <button @click="$router.go(-1)" class="back-button">←</button>
      <h1>Enjoy your free time</h1>
      <p class="header-subtitle">Choose the one you like the most.</p>
      <!-- Immagine di sfondo per l'header (vedi CSS) -->
    </div>
    <div class="page-layout-stacked-content">
      <div class="activity-filter-section">
        <label for="activity-type-select">Select the activity's type</label>
        <div class="select-wrapper">
          <select id="activity-type-select" v-model="selectedActivityType">
            <option value="all">All Activities</option>
            <option value="sport">Sport</option>
            <option value="food">Food & Drink</option>
            <option value="culture">Culture</option>
            <!-- Altre opzioni -->
          </select>
        </div>
      </div>

      <div class="date-carousel-section">
        <button class="carousel-nav prev" @click="prevDate">⟨</button>
        <div class="date-items-container">
          <div class="date-item" 
               v-for="date in visibleDates" 
               :key="date.full" 
               :class="{ active: isActiveDate(date.full) }" 
               @click="selectDate(date)">
            <div class="date-day-name">{{ date.dayName }}</div>
            <div class="date-day-month">{{ date.day }}/{{ date.month }}</div>
          </div>
        </div>
        <button class="carousel-nav next" @click="nextDate">⟩</button>
      </div>

      <div class="activity-list-section">
        <div v-if="filteredActivities.length === 0" class="no-activities">
          <p>No activities found for this day or filter.</p>
        </div>
        <div v-for="activity in filteredActivities" :key="activity.id" class="activity-card">
          <img :src="activity.image || placeholderImage" alt="Activity image" class="activity-image" @error="onImageError"/>
          <div class="activity-info">
            <div class="activity-time">{{ activity.time }}</div>
            <h3>{{ activity.title }}</h3>
            <p class="activity-location">{{ activity.location }}</p>
            <p class="activity-subscribed">{{ activity.subscribed }} people already subscribed</p>
          </div>
          <button class="subscribe-btn">
            <span class="subscribe-icon">👆</span>
            <span>Subscribe</span>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// Idealmente, importa le immagini o usa URL
// import padelImage from '@/assets/images/padel.jpg';
// import dinnerImage from '@/assets/images/lebanese_dinner.jpg';
import placeholderGeneric from '@/assets/images/lesson_ai.png'; // Assicurati che esista

export default {
  name: 'YourTimeOffView',
  data() {
    const today = new Date();
    // Calcola l'indice che corrisponde a 'today' nell'array allDates generato
    // Questo assicura che currentDateIndex sia impostato correttamente rispetto all'array completo
    const tempDates = this.generateDates(today, 11); // Genera 11 date per avere un centro definito
    let initialCurrentDateIndex = Math.floor(tempDates.length / 2); // Centro dell'array generato

    return {
      selectedActivityType: 'all',
      currentDateIndex: initialCurrentDateIndex, 
      allDates: tempDates,
      placeholderImage: placeholderGeneric,
      activities: [
        // Dati placeholder per Sab 17/05 (esempio)
        {
          id: 1, date: '2024-05-17', type: 'sport', time: '18:00 - 19:30', title: 'Padel Match', 
          location: 'Padel Land - Milano', subscribed: 3, image: '' /* padelImage */ 
        },
        {
          id: 2, date: '2024-05-17', type: 'food', time: '20:00', title: 'Lebanese dinner', 
          location: 'Ristorante Aladino', subscribed: 7, image: '' /* dinnerImage */
        },
        // Dati placeholder per altri giorni
        {
          id: 3, date: '2024-05-18', type: 'culture', time: '10:00 - 12:00', title: 'Museum Visit', 
          location: 'City Art Museum', subscribed: 5, image: '' 
        },
         {
          id: 4, date: this.formatDateForActivities(today), type: 'sport', time: '17:00 - 18:00', title: 'Yoga Session', 
          location: 'Parkside Studio', subscribed: 10, image: '' 
        },
      ]
    };
  },
  computed: {
    visibleDates() {
      const numberOfVisibleDates = 5;
      let start = Math.max(0, this.currentDateIndex - Math.floor(numberOfVisibleDates / 2));
      let end = Math.min(this.allDates.length, start + numberOfVisibleDates);
      // Se siamo vicini alla fine, aggiusta start per mostrare sempre numberOfVisibleDates se possibile
      if (end - start < numberOfVisibleDates && this.allDates.length >= numberOfVisibleDates) {
        start = Math.max(0, end - numberOfVisibleDates);
      }
      return this.allDates.slice(start, end);
    },
    selectedFullDate() {
      if (this.allDates.length > 0 && this.currentDateIndex >= 0 && this.currentDateIndex < this.allDates.length) {
         return this.allDates[this.currentDateIndex].full;
      }
      return null;
    },
    filteredActivities() {
        if (!this.selectedFullDate) return [];
        return this.activities.filter(activity => {
            const typeMatch = this.selectedActivityType === 'all' || activity.type === this.selectedActivityType;
            const dateMatch = activity.date === this.selectedFullDate;
            return typeMatch && dateMatch;
        });
    }
  },
  methods: {
    formatDateForActivities(dateObj) { // Helper per consistenza formato data attività
        return dateObj.toISOString().split('T')[0];
    },
    generateDates(startDate, count) {
      const dates = [];
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const baseDate = new Date(startDate);
      const offset = Math.floor(count / 2);

      for (let i = 0; i < count; i++) {
        const d = new Date(baseDate);
        d.setDate(baseDate.getDate() - offset + i);
        dates.push({
          dayName: dayNames[d.getDay()],
          day: String(d.getDate()).padStart(2, '0'),
          month: String(d.getMonth() + 1).padStart(2, '0'),
          full: d.toISOString().split('T')[0]
        });
      }
      return dates;
    },
    prevDate() {
      if (this.currentDateIndex > 0) {
        this.currentDateIndex--;
      }
    },
    nextDate() {
      if (this.currentDateIndex < this.allDates.length - 1) {
        this.currentDateIndex++;
      }
    },
    selectDate(dateObject) {
      const newIndex = this.allDates.findIndex(d => d.full === dateObject.full);
      if (newIndex !== -1) {
        this.currentDateIndex = newIndex;
      }
    },
    isActiveDate(dateFull) {
        return dateFull === this.selectedFullDate;
    },
    onImageError(event) {
      event.target.src = this.placeholderImage;
    }
  },
  mounted() {
    // Assicura che la data iniziale sia effettivamente quella di 'oggi' se presente
    const todayStr = new Date().toISOString().split('T')[0];
    const todayIdxInGenerated = this.allDates.findIndex(d => d.full === todayStr);
    if (todayIdxInGenerated !== -1) {
        this.currentDateIndex = todayIdxInGenerated;
    } 
    // Altrimenti, l'indice calcolato in data() (centro dell'array generato) è usato.
  }
}
</script>

<style scoped>
/* Header specifico per time-off con immagine di sfondo */
.page-layout-stacked-header.time-off-header {
  /* Esempio: background-image: url('@/assets/images/time_off_banner.jpg'); */
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('@/assets/images/event_your_time_off.jpg'); /* Usa l'immagine esistente con overlay */
  background-size: cover;
  background-position: center;
  padding-top: 60px;
  padding-bottom: 80px;
  text-align: center;
  position: relative;
}

.page-layout-stacked-header.time-off-header h1 {
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 2px 8px rgba(0,0,0,0.6);
}

.page-layout-stacked-header.time-off-header .header-subtitle {
  font-size: 1rem;
  color: rgba(255,255,255,0.9);
  text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  margin-top: 8px;
}

.back-button {
  position: absolute;
  top: 25px;
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
  z-index: 15;
}
.back-button:hover {
  background: rgba(0,0,0,0.5);
  border-color: rgba(255,255,255,0.5);
}

.activity-filter-section {
  margin-bottom: 25px;
  text-align: center;
}
.activity-filter-section label {
  display: block;
  margin-bottom: 8px;
  font-size: 1rem;
  color: #E0E0E0;
  font-weight: 500;
}
.select-wrapper {
  position: relative;
  display: inline-block;
  width: 250px;
  max-width: 100%;
}
#activity-type-select {
  width: 100%;
  padding: 12px 40px 12px 15px;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  background-color: rgba(255,255,255,0.05);
  color: #E0E0E0;
  font-size: 0.9rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
}
.select-wrapper::after { /* Custom arrow */
  content: '▼';
  font-size: 0.8rem;
  color: rgba(255,255,255,0.5);
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.date-carousel-section {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Spinge i bottoni ai lati */
  margin-bottom: 25px;
  padding: 10px 5px; /* Aggiunto un po' di padding laterale */
  /* overflow-x: hidden; Rimosso per debug, ma idealmente le date dovrebbero stare */
}

.date-items-container { /* Nuovo wrapper per le date per una migliore gestione del flex */
  display: flex;
  justify-content: center; /* Centra le date se sono meno di 5 */
  flex-grow: 1;
  overflow-x: hidden; /* Nasconde lo scroll orizzontale delle date se necessario */
}

.carousel-nav {
  background: none;
  border: none;
  color: #A0A0FF;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0 10px;
  flex-shrink: 0; /* Impedisce alle frecce di restringersi */
  z-index: 10; /* Assicura che siano sopra le date se c'è sovrapposizione */
}

.date-item {
  text-align: center;
  padding: 8px 10px; /* Leggermente ridotto padding per far stare più date */
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin: 0 3px; 
  min-width: 55px; 
  flex-shrink: 0; /* Impedisce alle date di restringersi eccessivamente */
}
.date-item:hover {
  background-color: rgba(255,255,255,0.1);
}
.date-item.active {
  background-color: #8A9BFF; /* Blu lavanda per data attiva */
  color: white;
}
.date-day-name {
  font-size: 0.75rem;
  text-transform: uppercase;
  opacity: 0.8;
}
.date-day-month {
  font-size: 0.9rem;
  font-weight: 500;
}
.date-item.active .date-day-name {
  opacity: 1;
}

.activity-list-section {
  /* Stili per la lista di attività */
}

.no-activities {
  text-align: center;
  padding: 20px;
  color: rgba(224, 224, 224, 0.7);
}

.activity-card {
  display: flex;
  align-items: center;
  background-color: rgba(255,255,255,0.03);
  border-radius: 16px;
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden; /* Per angoli immagine */
}

.activity-image {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 15px;
  flex-shrink: 0;
}

.activity-info {
  flex-grow: 1;
}
.activity-info h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
}
.activity-time {
  font-size: 0.8rem;
  color: #A0A0FF;
  margin-bottom: 3px;
  font-weight: 500;
}
.activity-location, .activity-subscribed {
  font-size: 0.85rem;
  color: #B0B0B0;
  margin-bottom: 3px;
  line-height: 1.3;
}

.subscribe-btn {
  background: none;
  border: 1px solid rgba(138, 155, 255, 0.5); /* Colore #8A9BFF con opacità */
  color: #8A9BFF;
  border-radius: 20px; /* Più arrotondato */
  padding: 8px 10px;
  cursor: pointer;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column; /* Icona sopra, testo sotto */
  align-items: center;
  justify-content: center;
  min-width: 60px;
  transition: background-color 0.3s, color 0.3s;
}
.subscribe-btn:hover {
  background-color: rgba(138, 155, 255, 0.1);
}
.subscribe-icon {
  font-size: 1.2rem; /* Icona più grande */
  margin-bottom: 2px;
}

</style> 