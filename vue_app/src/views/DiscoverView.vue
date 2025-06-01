<template>
  <div class="page-layout-stacked">
    <div class="page-layout-stacked-header">
      <h1>🔍 Discover</h1>
      <!-- La vecchia <p> dall'header originale può essere omessa o integrata diversamente se necessario -->
    </div>
    <div class="page-layout-stacked-content">
      <!-- Search Bar -->
      <div class="search-bar-container">
        <input type="text" class="course-search-input" placeholder="Search courses...">
      </div>

      <!-- Recommended Courses Card -->
      <div class="card discover-card">
        <h3>🎯 Recommended for You</h3>
        <div class="course-item">
          <div class="course-info">
            <h4>Strategic Thinking 101</h4>
            <div class="course-meta">⭐ 4.7 stars • 53 learners • Leadership, Critical Thinking</div>
            <span class="event-badge">Available In Person</span>
          </div>
          <div class="alignment-score">92% match</div>
        </div>
        <div class="course-item">
          <div class="course-info">
            <h4>Advanced Communication</h4>
            <div class="course-meta">⭐ 4.9 stars • 127 learners • Communication, Influence</div>
            <span class="event-badge">Available In Person</span>
          </div>
          <div class="alignment-score">88% match</div>
        </div>
        <div class="course-item">
          <div class="course-info">
            <h4>Design Thinking Fundamentals</h4>
            <div class="course-meta">⭐ 4.6 stars • 89 learners • Innovation, Problem Solving</div>
            <!-- Example without badge -->
            <!-- <span class="event-badge">Available In Person</span> -->
          </div>
          <div class="alignment-score">85% match</div>
        </div>
        <button class="action-btn career-gps-btn">View Growth in Career GPS</button>
      </div>

      <!-- All Courses Section -->
      <div class="all-courses-section">
        <h2>All Courses</h2>
        
        <!-- Sorting Options -->
        <div class="sort-options">
          <span style="color: rgba(255,255,255,0.8); font-size: 15px; font-weight: 500;">Sort by:</span>
          <button class="sort-btn action-btn" @click="sortByMatch">Match</button>
          <button class="sort-btn action-btn" @click="sortByReviews">Reviews</button>
        </div>

        <!-- Course List -->
        <div class="all-courses-list">
          <div class="course-item all-courses-item" v-for="course in allCourses" :key="course.id">
            <div class="course-info">
              <h4>{{ course.title }}</h4>
              <div class="course-meta">{{ course.meta }}</div>
              <!-- Available in Events Badge (conditionally displayed) -->
              <span class="event-badge in-person-badge" v-if="course.inEvents">Available in Events</span>
            </div>
            <div class="course-actions">
              <div class="alignment-score">{{ course.match }}% match</div>
              <button class="action-btn start-quest-btn" @click="startQuest(course.id)">Start Quest</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Altri eventuali contenuti della pagina Discover andrebbero qui -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiscoverView',
  data() {
    return {
      // Mock data for a list of all courses
      allCourses: [
        { id: 1, title: 'Effective Communication', meta: '⭐ 4.7 stars • 210 learners • Communication, Soft Skills', reviews: 4.7, match: 78, inEvents: true },
        { id: 2, title: 'Project Management Basics', meta: '⭐ 4.5 stars • 155 learners • Project Management, Organization', reviews: 4.5, match: 65, inEvents: false },
        { id: 3, title: 'Leadership Fundamentals', meta: '⭐ 4.9 stars • 300 learners • Leadership, Team Building', reviews: 4.9, match: 91, inEvents: true },
        { id: 4, title: 'Introduction to Data Analysis', meta: '⭐ 4.3 stars • 120 learners • Data Science, Analytics', reviews: 4.3, match: 70, inEvents: false },
        { id: 5, title: 'Creative Problem Solving', meta: '⭐ 4.6 stars • 180 learners • Innovation, Critical Thinking', reviews: 4.6, match: 88, inEvents: true },
      ]
    };
  },
  methods: {
    // Placeholder methods for sorting
    sortByMatch() {
      console.log('Sorting by match');
      // Implement sorting logic here
      this.allCourses.sort((a, b) => b.match - a.match);
    },
    sortByReviews() {
      console.log('Sorting by reviews');
      // Implement sorting logic here
      this.allCourses.sort((a, b) => b.reviews - a.reviews);
    },
    // Placeholder method for starting a quest
    startQuest(courseId) {
      console.log('Starting quest for course:', courseId);
      // Implement logic to start the quest for the given course
    }
  }
};
</script>

<style scoped>
/* Stili specifici per DiscoverView.vue */

/* Search Bar Styles */
.search-bar-container {
  margin-bottom: 25px; /* Increased space below search bar */
  padding: 15px 20px; /* Increased padding to match card style */
  /* Apply styling similar to SamView chat input area */
  display: flex; /* Ensure flex layout for centering if needed */
  align-items: center;
   background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%), #1f1f1f; /* Subtle gradient background */
  border-radius: 18px; /* More rounded corners */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.08); /* Softer, more pronounced outer shadow and enhanced inner shadow */
  border: double 2px transparent; /* Create space for gradient border */
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(#1f1f1f, #1f1f1f), linear-gradient(135deg, #00f5ff, #a050ff); /* Dark background and vibrant gradient for border */
  backdrop-filter: blur(5px); /* Added slight blur */
}

.course-search-input {
  width: 100%;
  padding: 8px 0; /* Adjusted padding */
  border: none; /* Remove original border */
  background-color: transparent; /* Make input background transparent */
  color: #ffffff;
  font-size: 17px; /* Slightly larger font */
  outline: none;
  /* Remove inner shadow from input itself as it's on the container */
  box-shadow: none;
}

.course-search-input::placeholder {
  color: #b0b0b0; /* Lighter placeholder text */
}

.discover-card {
    background: rgba(25, 25, 40, 0.95); /* More opaque background */
    backdrop-filter: blur(20px);
    border-radius: 24px;
    padding: 35px; /* Significantly increased padding */
    margin-bottom: 30px; /* Increased space below the card */
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.15); /* More prominent border */
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.35);
}

.discover-card h3 {
    font-size: 24px; /* Larger font size */
    margin-bottom: 20px; /* Increased space */
}

.course-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0; /* Increased vertical padding */
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* More visible divider */
    margin-bottom: 20px; /* Increased space below each item */
    flex-wrap: wrap; /* Allow wrapping on smaller screens */
}

.course-item:last-child {
    border-bottom: none; /* Remove border for the last item */
    margin-bottom: 0; /* Remove margin for the last item */
}

.course-info {
    flex-grow: 1;
    margin-right: 15px; /* Increased space */
    margin-bottom: 10px; /* Added bottom margin for wrap */
}

.course-info h4 {
    font-size: 18px; /* Larger font size */
    font-weight: 600;
    margin-bottom: 8px; /* Increased space */
    color: #ffffff;
}

.course-meta {
    font-size: 14px; /* Slightly larger font */
    color: rgba(255, 255, 255, 0.75); /* Slightly lighter text */
    line-height: 1.4;
}

/* Event Badge Styles */
.event-badge {
  background-color: rgba(147, 51, 234, 0.3); /* Purple-ish background */
  color: #d8b4fe; /* Lighter purple text */
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 10px;
  margin-top: 5px; /* Space above badge */
  display: inline-block; /* Treat as block for margin */
  border: 1px solid rgba(147, 51, 234, 0.4);
}

.alignment-score {
    flex-shrink: 0;
    background-color: rgba(0, 245, 255, 0.2); /* More visible background */
    color: #00f5ff; /* Cyan text */
    font-weight: 600;
    padding: 8px 12px; /* Increased padding */
    border-radius: 12px;
    font-size: 15px; /* Slightly larger font */
    border: 1px solid rgba(0, 245, 255, 0.3); /* More prominent border */
    box-shadow: 0 2px 8px rgba(0, 245, 255, 0.2);
}

.action-btn.career-gps-btn {
    background: linear-gradient(135deg, #ff8a00, #e52e71); /* Orange to pink gradient */
    padding: 18px 25px; /* Increased padding */
    font-size: 18px; /* Larger font size */
    border-radius: 15px; /* More rounded */
    box-shadow: 0 8px 20px rgba(255, 138, 0, 0.5); /* More prominent shadow */
    display: block;
    width: 100%;
    text-align: center;
    color: white;
    border: none;
    cursor: pointer;
    transition: opacity 0.2s ease, box-shadow 0.2s ease;
}

.action-btn.career-gps-btn:hover {
    opacity: 0.9;
    box-shadow: 10px 25px rgba(255, 138, 0, 0.6);
}

/* New styles for the All Courses Section */
.all-courses-section {
    margin-top: 30px; /* Space above this section */
    padding: 0 15px; /* Horizontal padding to match search bar */
}

.all-courses-section h2 {
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
}

.sort-options {
    display: flex;
    align-items: center;
    gap: 15px; /* Increased gap */
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    padding: 0 10px; /* Add some padding to align with course items */
}

.sort-btn {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 18px; /* More rounded buttons */
    padding: 8px 15px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.sort-btn:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 3px 8px rgba(0,0,0,0.3);
}

.all-courses-list {
    /* No specific styles needed for the container yet */
}

.all-courses-list .course-item {
    /* Inherits styles from .course-item */
    background-color: rgba(255, 255, 255, 0.05); /* Subtle background for list items */
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px; /* Rounded corners for list items */
    padding: 15px 20px; /* Adjusted padding */
    margin-bottom: 15px; /* Space between list items */
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.all-courses-list .course-item:hover {
    transform: translateY(-3px); /* Lift item on hover */
    box-shadow: 0 6px 15px rgba(0,0,0,0.3);
}

.all-courses-list .course-item:last-child {
    margin-bottom: 0;
    border-bottom: none; /* Ensure no double border if inherited */
}

.all-courses-list .course-info {
    flex-grow: 1;
    margin-right: 15px;
    margin-bottom: 10px; /* Ensure space before actions on wrap */
}

.course-actions {
    display: flex;
    flex-direction: column; /* Stack match and button */
    align-items: flex-end; /* Align items to the right */
    gap: 10px;
    flex-shrink: 0; /* Prevent shrinking */
}

.start-quest-btn {
    background: linear-gradient(135deg, #3b82f6, #9333ea); /* Blue to purple gradient */
    color: white;
    border: none;
    border-radius: 12px;
    padding: 8px 15px;
    font-size: 15px;
    cursor: pointer;
    transition: opacity 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 10px rgba(59, 130, 246, 0.3);
}

.start-quest-btn:hover {
    opacity: 0.9;
    box-shadow: 6px 15px rgba(59, 130, 246, 0.4);
}

/* Adjust alignment score margin in the new section */
.all-courses-list .alignment-score {
    margin-bottom: 5px; /* Space below match score */
}

/* Ensure event badge works in the new list */
.all-courses-list .event-badge {
    margin-top: 8px; /* Adjust margin above badge in list */
}

/* Removed old styles that are now handled by the above or are unnecessary */
/* Keeping .page-content-wrapper, .page-layout-stacked-header */
</style> 