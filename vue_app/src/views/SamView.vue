<template>
  <div class="sam-view">
    <div class="page-header-area" style="padding-bottom: 0px; margin-bottom: 0px;">
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <!-- Robot Emoji and Header Text Container -->
        <div style="display: flex; align-items: center; margin-bottom: 8px;">
          <span style="font-size: 60px; margin-right: 15px;">🤖</span>
          <!-- Combined Header Text -->
          <h1 style="font-weight: 700; font-size: 36px; color: #fff; margin: 0;">Hi! I'm SAM,</h1>
        </div>
        <p style="font-weight: 500; font-size: 20px; color: rgba(255,255,255,0.8); margin-top:0;">How can I help you?</p>
      </div>
    </div>

    <div class="page-content-wrapper" style="margin-top: 20px; background-color: #1E1E1E; border-radius: 30px 30px 0 0; padding: 30px; min-height: calc(100vh - 240px);">
      <!-- Removed "Select what you are interested in" text -->
      <!-- <p style="font-weight: 600; font-size: 18px; color: #ffffff; text-align: center; margin-bottom: 16px;">Select what you are interested in</p> -->

      <!-- Chat Input Area -->
      <div class="chat-input-area">
        <input type="text" class="message-input" placeholder="Ask me anything..." v-model="newMessage" @keyup.enter="sendMessage">
        <button class="send-button" @click="sendMessage" v-if="newMessage.trim() !== ''">
          <!-- Reverted to icon and styled as a circular button -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="send-icon">
            <!-- Replaced with the specific upward arrow icon path from the user's image -->
            <path d="M12 4L3 15h6v6h6v-6h6z"/>
          </svg>
        </button>
      </div>

      <!-- Smart Prompts Section -->
      <div class="smart-prompts-section">
        <h3 style="font-weight: 600; font-size: 18px; color: #ffffff; margin-bottom: 18px;">Try asking:</h3>
        <div class="smart-prompts-list">
          <button class="smart-prompt-button">How do I request time off?</button>
          <button class="smart-prompt-button">What are the employee benefits?</button>
          <button class="smart-prompt-button">Procedure for sick leave?</button>
        </div>
      </div>

      <div style="display: flex; align-items: center; margin-top: 35px; margin-bottom: 35px;">
        <hr style="flex-grow: 1; border: none; border-top: 1px solid #555;">
        <span style="padding: 0 20px; font-weight: 500; color: #a0a0a0; font-size: 17px;">OR</span>
        <hr style="flex-grow: 1; border: none; border-top: 1px solid #555;">
      </div>

      <!-- Collapsed Past Conversations -->
      <button class="past-conversations-button" @click="viewPastConversations">
        Past conversations
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SamView',
  data() {
    return {
      newMessage: '' // Add data property for input
    };
  },
  methods: {
    goToNewChat() {
      // This method might be repurposed or removed depending on new flow
      this.$router.push('/new-chat');
    },
    sendMessage() {
      // Placeholder for sending the message from the input
      if (this.newMessage.trim() !== '') {
        console.log('Sending message from SamView:', this.newMessage);
        // Navigate to new chat view with the message
        this.$router.push({ path: '/new-chat', query: { message: this.newMessage } });
        this.newMessage = ''; // Clear input after sending
      }
    },
    viewPastConversations() {
      // Placeholder for navigating to past conversations view
      console.log('Viewing past conversations');
      // You might navigate to a different route or show a modal
    }
  }
};
</script>

<style scoped>
.sam-view {
  background: linear-gradient(135deg, #1a1a1a 0%, rgba(59, 130, 246, 0.05) 20%, rgba(236, 72, 153, 0.05) 60%, rgba(147, 51, 234, 0.05) 80%, #1a1a1a 100%); /* Dark background with subtle color hints */
  min-height: 100vh;
  padding-bottom: 70px; /* Keep padding for footer */
  color: #ffffff; /* Ensure text is readable */
}

.page-header-area {
  padding: 24px;
}

.page-content-wrapper {
  border-radius: 30px 30px 0 0;
  background-color: #1E1E1E;
  padding: 30px;
  min-height: calc(100vh - 240px);
}

h1, p {
  color: #fff;
}

/* Chat Input Area */
.chat-input-area {
  display: flex;
  align-items: center;
  /* Apply styling similar to Home.vue cards */
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%), #1f1f1f; /* Subtle gradient background */
  padding: 15px 25px; /* Increased padding */
  border-radius: 18px; /* More rounded corners */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.08); /* Softer, more pronounced outer shadow and enhanced inner shadow */
  /* Add a prominent gradient border */
  border: double 2px transparent; /* Create space for gradient border */
  background-origin: border-box;
  background-clip: padding-box, border-box;
  background-image: linear-gradient(#1f1f1f, #1f1f1f), linear-gradient(135deg, #00f5ff, #a050ff); /* Dark background and vibrant gradient for border */
  margin-bottom: 30px;
  backdrop-filter: blur(5px); /* Added slight blur */
}

.message-input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 10px 0; /* Adjusted padding */
  font-size: 17px;
  background-color: transparent;
  color: #ffffff;
}

.message-input::placeholder {
  color: #b0b0b0; /* Lighter placeholder text */
}

.send-button {
  /* Apply styling similar to Home.vue buttons */
  background: linear-gradient(135deg, #00f5ff, #a050ff); /* Vibrant gradient */
  border: none;
  border-radius: 50%; /* Keep circular shape */
  width: 48px; /* Slightly larger button */
  height: 48px; /* Slightly larger button */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 20px;
  box-shadow: 0 4px 12px rgba(0, 245, 255, 0.6); /* More pronounced shadow matching the bar */
  transition: all 0.2s ease; /* Smooth transition for hover */
}

.send-button:hover {
    transform: translateY(-2px); /* Lift button on hover */
    box-shadow: 0 6px 15px rgba(0, 245, 255, 0.7); /* Enhance shadow on hover */
}

.send-icon {
    width: 24px; /* Slightly larger icon */
    height: 24px; /* Slightly larger icon */
    color: #ffffff; /* Change icon color to white for contrast on gradient */
}

/* Smart Prompts */
.smart-prompts-section {
  margin-bottom: 25px;
  /* Apply card container styling */
  background: rgba(25, 25, 40, 0.9); /* Dark background with transparency */
  backdrop-filter: blur(15px); /* Apply blur effect */
  border-radius: 18px; /* Match card rounded corners */
  padding: 20px; /* Internal padding for content */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* Soft shadow */
}

.smart-prompts-section h3 {
    font-size: 17px;
    margin-bottom: 15px;
}

.smart-prompts-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.smart-prompt-button {
  /* Apply styling similar to Home.vue cards/buttons with a vibrant gradient */
  background: linear-gradient(135deg, #00f5ff, #a050ff); /* Vibrant gradient background */
  color: #ffffff; /* Ensure text is white on gradient */
  border: none; /* Remove border */
  border-radius: 20px;
  padding: 10px 18px; /* Increased padding */
  font-size: 15px; /* Slightly larger font */
  cursor: pointer;
  transition: all 0.2s ease; /* Smooth transition */
  box-shadow: 0 4px 10px rgba(0, 245, 255, 0.4); /* More pronounced shadow */
  /* Removed backdrop-filter as it's on the container */
}

.smart-prompt-button:hover {
  background: linear-gradient(135deg, #a050ff, #00f5ff); /* Reverse gradient on hover */
  transform: translateY(-2px); /* Lift button on hover */
  box-shadow: 0 6px 15px rgba(0, 245, 255, 0.5); /* Enhanced shadow on hover */
}

/* OR divider */
.page-content-wrapper > div:nth-child(4) {
    margin-top: 30px;
    margin-bottom: 30px;
}

.page-content-wrapper > div:nth-child(4) hr {
    border-top-color: #444;
}

.page-content-wrapper > div:nth-child(4) span {
    padding: 0 15px;
    font-size: 16px;
}

/* Past Conversations Button */
.past-conversations-button {
  display: block;
  width: 100%;
  /* Apply styling similar to Home.vue cards/buttons */
  background-color: rgba(255, 255, 255, 0.08); /* Darker, slightly transparent background */
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15); /* Subtle border */
  border-radius: 15px; /* Slightly more rounded */
  padding: 16px 20px; /* Keep existing padding for size */
  font-size: 17px; /* Keep existing font size */
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease; /* Smooth transition */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* More pronounced shadow */
  backdrop-filter: blur(4px); /* Added slight blur */
}

.past-conversations-button:hover {
  background-color: rgba(255, 255, 255, 0.15); /* Lighter background on hover */
  transform: translateY(-2px); /* Lift button on hover */
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4); /* Enhanced shadow on hover */
}

/* Removed old styles for .new-chat-button, .past-conversations-list, .conversation-group, etc. */
/* Keeping .page-content-wrapper, .page-header-area */
</style>