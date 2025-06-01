<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header">
      <h1>🔥 Challenges</h1>
    </div>
    <div class="page-layout-stacked-content">
      <div class="card challenge-card">
        <h3>🧩 Current Quest: Build Presentation Skills</h3>
        <div style="font-size: 16px; color: rgba(255,255,255,0.8); margin-bottom: 20px; font-weight: 500;">Day 3 of 7</div>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="micro-action">
          <div>
            <div style="font-weight: 600; color: #fff; margin-bottom: 8px; font-size: 18px;">Today's Micro-Action</div>
            <div style="font-size: 16px; color: rgba(255,255,255,0.9);">Watch a 2-min TED Talk</div>
          </div>
          <button class="complete-btn" @click="completeAction" :disabled="actionCompleted">
            <template v-if="actionCompleted">
              ✨ Completed!
            </template>
            <template v-else>
              Go 
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5" style="width: 1.2em; height: 1.2em; vertical-align: middle; margin-left: 5px;">
                <path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" />
              </svg>
            </template>
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
      if (!this.actionCompleted) {
        // Navigate to the LinkedIn Learning link
        window.open('https://www.linkedin.com/learning/', '_blank');
        console.log("Navigating to LinkedIn Learning...");
        // The action should be marked as completed through a different process
        // this.actionCompleted = true; // Removed: Do not mark as complete on click
        // this.progress = 57; // Removed: Do not update progress on click
      } else {
        console.log("Micro-action already completed.");
      }
    }
  }
};
</script>

<style scoped>
/* Stili specifici per ChallengesView.vue */

.challenge-card {
    background: rgba(25, 25, 40, 0.95); /* More opaque background */
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 35px; /* Significantly increased padding */
    margin-bottom: 30px; /* Increased space below the card */
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15); /* More prominent border */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
}

.challenge-card h3 {
    font-size: 24px; /* Larger font size */
    margin-bottom: 15px; /* Increased space */
}

.progress-bar {
  height: 15px; /* Thicker progress bar */
  background-color: rgba(255, 255, 255, 0.3); /* Lighter and more visible track */
  border-radius: 8px;
  margin-bottom: 25px; /* Increased space */
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(to right, #ff8a00, #e52e71); /* Example gradient */
  border-radius: 8px;
  transition: width 0.5s ease-in-out;
}

.micro-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  padding: 20px 25px; /* Increased padding */
  border-radius: 15px; /* More rounded */
  margin-bottom: 25px; /* Increased space */
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.complete-btn {
  background: linear-gradient(to right, #3b82f6, #9333ea); /* Example gradient */
  color: white;
  border: none;
  border-radius: 25px; /* More rounded pill shape */
  padding: 12px 20px; /* Increased padding */
  font-size: 16px; /* Larger font size */
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.complete-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background: #555; /* Darker background when disabled */
}

.stats {
  display: flex;
  gap: 20px; /* Increased space between stats */
  font-size: 15px; /* Slightly larger font */
  color: rgba(255,255,255,0.8);
  margin-bottom: 30px; /* Increased space */
  flex-wrap: wrap;
}

.stat-item {
  background: rgba(0, 0, 0, 0.3);
  padding: 8px 15px; /* Increased padding */
  border-radius: 15px; /* More rounded */
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.action-btn {
  display: block;
  width: 100%; /* Make buttons full width */
  padding: 18px 25px; /* Increased padding */
  font-size: 18px; /* Larger font size */
  border-radius: 15px; /* More rounded */
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  margin-bottom: 20px; /* Increased space between buttons */
  color: white;
  border: none;
  box-shadow: 0 6px 12px rgba(0,0,0,0.4);
}

.view-all-btn {
    background-color: #2a2a2a; /* Darker background */
    border: 1px solid rgba(255, 255, 255, 0.15); /* More prominent border */
}

.view-all-btn:hover {
    background-color: #333333;
}

.linkedin-btn {
    background: linear-gradient(to right, #0077B5, #0e76a8); /* LinkedIn blue gradient */
    box-shadow: 0 6px 12px rgba(0, 119, 181, 0.5);
}

.linkedin-btn:hover {
    background: linear-gradient(to right, #0e76a8, #0077B5); /* Reverse gradient on hover */
}

/* Removed old styles and classes that are now handled by .action-btn or are unnecessary */

</style> 