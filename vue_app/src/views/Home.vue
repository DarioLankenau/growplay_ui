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
              <div style="font-size: 15px; opacity: 0.9; font-weight: 500; color: rgba(255,255,255,0.9);">This Week's Growth ✨</div>
            </div>
            <div class="growth-icon">📈</div>
          </div>
          <div class="mood-check">
            <div class="mood-text" style="font-size: 18px; margin-bottom: 15px;">How are you today?</div>
            <div style="display: flex; align-items: center; gap: 10px; justify-content: center;">
              <div class="emoji-container">
                <span @click="selectMood('happy')" :class="{ selected: currentMood === 'happy' }">😊</span> 
                <span @click="selectMood('neutral')" :class="{ selected: currentMood === 'neutral' }">😐</span> 
                <span @click="selectMood('sad')" :class="{ selected: currentMood === 'sad' }">😔</span>
              </div>
              <!-- Microphone button -->
              <button class="microphone-btn" @click="startVoiceInput">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                  <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                  <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <button class="action-btn monthly-recap-btn">See your monthly recap!</button>
      </div>

      <div class="page-content-wrapper home-additional-content">
        <!-- Leaderboard Section -->
        <div class="leaderboard-section">
          <h2>XP Leaderboard</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>XP</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maria G.</td>
                <td>1,550</td>
                <td>Finance Team</td>
              </tr>
              <tr class="leaderboard-you">
                <td>YOU (ALEX)</td>
                <td>1,250</td>
                <td>Business Dev.</td>
              </tr>
              <tr>
                <td>Marco B.</td>
                <td>1,200</td>
                <td>Business Dev.</td>
              </tr>
              <tr>
                <td>Sofia L.</td>
                <td>1,150</td>
                <td>Marketing</td>
              </tr>
              <tr>
                <td>Carlo D.</td>
                <td>1,050</td>
                <td>International Relations</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Rewards Progress Section -->
        <div class="rewards-progress-section">
          <h2>Unlock Rewards</h2>
          <div class="progress-bar-container">
            <div class="progress-bar" style="width: 75%;"></div>
          </div>
          <p>You are 75% of the way to unlocking your next reward: a $10 Gift Card!</p>
        </div>

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
    },
    startVoiceInput() {
      console.log('Starting voice input...');
      // Implement voice input functionality here
    }
  }
};
</script>

<style scoped>
/* Stili specifici per Home.vue */

.page-layout-stacked {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

.page-layout-stacked-header {
  padding: 10px;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: #1a1a1a;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-layout-stacked-header h1 {
  font-size: 24px;
  margin: 0;
}

.page-layout-stacked-content {
  flex-grow: 1;
  overflow-y: auto;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 20px;
  padding-left: 8px;
  padding-right: 8px;
}

/* Gli stili di .header-main originale sono ora per .header-main-content-wrapper */
.header-main-content-wrapper {
    background: linear-gradient(135deg,
        rgba(147, 51, 234, 0.95) 0%,
        rgba(236, 72, 153, 0.95) 50%,
        rgba(59, 130, 246, 0.95) 100%);
    padding: 15px;
    text-align: center;
    border-radius: 18px;
    margin: 0 0 30px 0; /* Increased margin-bottom to separate from leaderboard */
    box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

.header-top-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    z-index: 3;
}

.level-badge {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    padding: 10px 18px;
    border-radius: 20px;
    color: white;
    font-size: 13px;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.growth-recap {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 18px;
    padding: 20px;
    color: white;
    position: relative;
    z-index: 3;
    border: 1px solid rgba(255, 255, 255, 0.15);
    box-shadow: inset 0 2px 0 rgba(255, 255, 255, 0.15), 0 6px 15px rgba(0,0,0,0.25);
    margin-bottom: 15px;
}

.xp-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
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
    font-size: 28px;
    animation: iconFloat 3s ease-in-out infinite;
}

.mood-check {
    text-align: center;
    font-size: 14px;
    opacity: 0.95;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.mood-text {
     margin-bottom: 10px;
}

.emoji-container {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: 10px;
}

.emoji-container span {
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 12px;
    border-radius: 14px;
    border: 1px solid transparent;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.emoji-container span:hover {
    transform: none;
    background: rgba(255, 255, 255, 0.2);
}

.emoji-container span.selected {
    border-color: #00f5ff;
    background: rgba(0, 245, 255, 0.25);
    box-shadow: 0 0 6px rgba(0, 245, 255, 0.4);
    transform: none;
}

.monthly-recap-btn {
    background: linear-gradient(135deg, #3b82f6, #9333ea);
    padding: 12px 20px;
    display: inline-block;
    width: 100%;
    max-width: none;
    font-size: 15px;
    box-shadow: 0 5px 12px rgba(59, 130, 246, 0.3);
    border-radius: 10px;
}

.home-additional-content {
    padding: 0 15px 15px 15px;
}

.home-additional-content p {
  text-align: center;
  font-size: 1rem;
  color: #dddddd;
  margin-top: 20px;
  padding: 0 10px;
}

/* Leaderboard Styles */
.leaderboard-section {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(236, 72, 153, 0.15) 50%, rgba(147, 51, 234, 0.15) 100%), #1f1f1f; /* Subtle gradient background */
  border-radius: 18px; /* More rounded corners */
  padding: 20px; /* Adjusted padding */
  margin-bottom: 30px; /* Consistent bottom margin */
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(255, 255, 255, 0.1); /* Enhanced shadows */
  border: 1.5px solid rgba(255, 255, 255, 0.15); /* Slightly more visible border */
  backdrop-filter: blur(6px); /* Added blur effect */
}

.leaderboard-section h2 {
  color: #ffffff;
  font-size: 20px; /* Slightly larger heading */
  font-weight: 700; /* Bolder heading */
  margin-bottom: 20px; /* Increased space below heading */
  text-align: center;
}

/* Table styles */
.leaderboard-section table {
    width: 100%;
    border-collapse: separate; /* Use separate to allow border-spacing and rounded corners */
    border-spacing: 0 10px; /* Space between rows */
    color: #cccccc;
    font-size: 15px; /* Slightly larger font */
}

.leaderboard-section th,
.leaderboard-section td {
    padding: 15px 12px; /* Increased padding */
    text-align: left;
    vertical-align: middle;
    border: none; /* Remove individual cell borders */
}

.leaderboard-section th {
    font-weight: 600;
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1); /* Slightly lighter background for header */
    /* No bottom border */
    position: sticky; /* Keep header visible on scroll */
    top: 0;
    z-index: 1; /* Ensure header is above rows */
}

.leaderboard-section tbody tr {
    background-color: rgba(255, 255, 255, 0.05); /* Subtle background for rows */
    border-radius: 10px; /* Rounded corners for rows */
    overflow: hidden; /* Ensure content respects border-radius */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); /* Subtle shadow for rows */
    transition: transform 0.2s ease-in-out; /* Added hover effect */
}

.leaderboard-section tbody tr:hover {
    transform: translateY(-3px); /* Lift row on hover */
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.4); /* Enhanced shadow on hover */
}

.leaderboard-section tbody tr:last-child {
    margin-bottom: 0; /* Remove bottom margin for the last row */
}

/* Column specific alignment and width */
.leaderboard-section th:nth-child(1),
.leaderboard-section td:nth-child(1) { /* Name column */
    text-align: left;
    width: 40%;
    padding-left: 20px; /* Increase left padding */
}

.leaderboard-section th:nth-child(2),
.leaderboard-section td:nth-child(2) { /* XP column */
    text-align: center;
    width: 20%;
}

.leaderboard-section th:nth-child(3),
.leaderboard-section td:nth-child(3) { /* Department column */
    text-align: right;
    width: 40%;
    padding-right: 20px; /* Increase right padding */
}

/* Styling for your row to highlight it */
.leaderboard-section tr.leaderboard-you {
    background: linear-gradient(to right, rgba(0, 245, 255, 0.3) 0%, rgba(0, 245, 255, 0.1) 100%); /* Highlight background with gradient */
    border: 1px solid #00f5ff; /* Highlight border */
    box-shadow: 0 3px 10px rgba(0, 245, 255, 0.5); /* More pronounced highlight shadow */
    font-weight: 700;
    color: #ffffff;
}

.leaderboard-section tr.leaderboard-you td {
     padding: 15px 12px; /* Match padding */
     /* No individual cell border, border is on the row */
}

/* Remove old list styles (should already be gone) */
.leaderboard-section ul,
.leaderboard-section li,
.leaderboard-section span,
.leaderboard-rank,
.leaderboard-user,
.leaderboard-department,
.leaderboard-you ul,
.leaderboard-you li,
.leaderboard-you span {
    all: unset;
}

/* Rewards Progress Styles - Refined */
.rewards-progress-section {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.18) 0%, rgba(236, 72, 153, 0.18) 50%, rgba(59, 130, 246, 0.18) 100%), #1f1f1f; /* Slightly stronger subtle gradient */
  border-radius: 18px; /* More rounded corners */
  padding: 30px 25px; /* Increased padding */
  margin-bottom: 30px; /* Increased bottom margin */
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.12); /* More prominent shadows */
  border: 1.5px solid rgba(255, 255, 255, 0.2); /* More visible border */
  text-align: center; /* Center content */
  backdrop-filter: blur(8px); /* Increased blur effect */
}

.rewards-progress-section h2 {
  color: #ffffff;
  font-size: 22px; /* Larger heading */
  font-weight: 700; /* Bolder heading */
  margin-bottom: 18px; /* Increased space below heading */
}

.rewards-progress-section p {
  text-align: center;
  color: #d0d0d0; /* Slightly lighter text color */
  font-size: 17px; /* Larger font size for readability */
  margin-top: 25px; /* Increased top margin */
  font-weight: 500;
  line-height: 1.6; /* Improved readability */
}

.progress-bar-container {
  width: 95%; /* Slightly wider container */
  max-width: 480px; /* Increased max width */
  height: 20px; /* Thicker progress bar */
  background-color: rgba(255, 255, 255, 0.15); /* Lighter background for container */
  border-radius: 10px; /* More rounded */
  overflow: hidden;
  margin: 20px auto 0; /* Center the container and adjust top margin */
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.7); /* Deeper inner shadow */
  border: 1.5px solid rgba(255, 255, 255, 0.3); /* More visible border */
}

.progress-bar {
  height: 100%;
  background: linear-gradient(to right, #00f5ff, #b060ff); /* More vibrant gradient */
  border-radius: 10px; /* Match container rounding */
  transition: width 1.2s ease-in-out; /* Slower transition for visual effect */
  box-shadow: 0 4px 15px rgba(0, 245, 255, 0.7); /* More pronounced shadow to the bar */
  position: relative; /* Needed for pseudo-element */
}

/* Optional: Add a subtle texture or shine to the bar */
.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0) 100%);
  transition: opacity 0.6s ease;
  opacity: 0.5; /* Subtle shine */
}

/* Microphone button style */
.microphone-btn {
  background-color: rgba(255, 255, 255, 0.15); /* Subtle background */
  border: 1px solid rgba(255, 255, 255, 0.25); /* Subtle border */
  border-radius: 50%; /* Circular shape */
  width: 40px; /* Size of the button */
  height: 40px; /* Size of the button */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.microphone-btn:hover {
  background-color: rgba(255, 255, 255, 0.25); /* Lighter background on hover */
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
}

.microphone-btn svg {
  width: 20px; /* Icon size */
  height: 20px; /* Icon size */
  color: #ffffff; /* White icon color */
}

.monthly-recap-btn {
    background: linear-gradient(135deg, #3b82f6, #9333ea);
    padding: 12px 20px;
    display: inline-block;
    width: 100%;
    max-width: none;
    font-size: 15px;
    box-shadow: 0 5px 12px rgba(59, 130, 246, 0.3);
    border-radius: 10px;
}

@media (max-width: 768px) {
    .page-layout-stacked-content {
        border-radius: 20px 20px 0 0;
        padding: 20px;
        margin-top: 0px;
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
    }
}
</style> 