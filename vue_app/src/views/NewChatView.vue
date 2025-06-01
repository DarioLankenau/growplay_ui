<template>
  <div class="new-chat-view">
    <div class="page-header-area" style="padding-bottom: 10px;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <h1 style="font-weight: 700; font-size: 28px; color: #fff;">Chat with me</h1>
        <span style="font-size: 50px;">🤖</span>
      </div>
    </div>

    <div class="page-content-wrapper" style="background-color: #f0f4f8; padding: 20px; min-height: calc(100vh - 150px); display: flex; flex-direction: column;">
      <div class="faq-section">
        <p style="font-weight: 500; font-size: 14px; color: #555; margin-bottom: 12px;">Frequently asked by your colleagues</p>
        <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
          <div class="faq-question" @click="toggleFaq(index)">
            <span>{{ item.question }}</span>
            <span class="faq-arrow" :class="{ 'open': item.open }">&#9660;</span>
          </div>
          <div class="faq-answer" v-show="item.open">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>

      <div class="chat-area" style="flex-grow: 1; display: flex; flex-direction: column-reverse;">
        <div class="chat-messages">
          <!-- Chat messages will appear here -->
        </div>
      </div>

      <div class="chat-input-area">
        <input type="text" class="message-input" placeholder="Message..." v-model="newMessage" @keyup.enter="sendMessage">
        <button class="send-button" @click="sendMessage" v-if="newMessage.trim() !== ''">
          <span style="font-size: 20px;">✈️</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewChatView',
  data() {
    return {
      faqItems: [
        { question: 'How do I request time off or vacation days?', answer: 'You can request time off through the HR portal under the \'Leave Request\' section...', open: false },
        { question: 'What employee benefits am I entitled to?', answer: 'Employee benefits include health insurance, retirement plans, and paid time off. More details are in the employee handbook...', open: false },
        { question: 'What is the procedure if I\'m sick?', answer: 'If you are sick, please notify your manager as soon as possible and report your absence in the HR system...', open: false }
      ],
      messages: [], // Stores chat messages
      newMessage: '' // Stores the content of the input field
    };
  },
  methods: {
    toggleFaq(index) {
      this.faqItems[index].open = !this.faqItems[index].open;
    },
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        // For now, let's just log it or add to a local array.
        // You'll replace this with actual message sending logic.
        console.log('Sending message:', this.newMessage);
        // Add to local messages array for display (optional, if you want to show sent messages immediately)
        // this.messages.push({ text: this.newMessage, sender: 'user' }); 
        this.newMessage = ''; // Clear the input
      }
    }
  }
};
</script>

<style scoped>
.new-chat-view {
  background-color: #4a42e3; /* Main background color */
  min-height: 100vh;
  padding-bottom: 0; /* No footer here, or handled by global layout if present */
}

.page-header-area {
  padding: 20px;
  /* background: #4a42e3; Already set on parent */
}

.page-content-wrapper {
  border-radius: 30px 30px 0 0;
  /* background-color and padding are set inline */
}

.faq-section {
  margin-bottom: 25px;
}

.faq-item {
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.08);
}

.faq-question {
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

.faq-arrow {
  font-size: 12px;
  transition: transform 0.3s ease;
}

.faq-arrow.open {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 15px 12px 15px;
  font-size: 13px;
  color: #555;
  border-top: 1px solid #eee;
  margin-top: 8px;
}
.faq-answer p {
  margin-top: 8px;
}

.chat-area {
  /* Styles for the chat conversation area */
  /* flex-grow and display:flex are now inline */
}

.chat-messages {
  display: flex;
  flex-direction: column-reverse; /* To keep input at bottom and messages flowing upwards */
  gap: 12px;
  padding: 10px 0;
  overflow-y: auto; /* Allow scrolling of messages */
  flex-grow: 1;
}

.message-bubble {
  padding: 10px 15px;
  border-radius: 20px;
  max-width: 75%;
  font-size: 14px;
  line-height: 1.4;
}

.bot-message {
  background-color: #e5e5ea; /* Light grey for bot messages */
  color: #000;
  align-self: flex-start; /* Bot messages on the left */
  border-radius: 20px 20px 20px 5px;
}

.user-message {
  background-color: #007aff; /* Blue for user messages */
  color: #fff;
  align-self: flex-end; /* User messages on the right */
  border-radius: 20px 20px 5px 20px;
}

.chat-input-area {
  display: flex;
  align-items: center;
  padding: 8px 12px; /* Adjusted padding */
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 -1px 5px rgba(0,0,0,0.08); /* Shadow slightly adjusted for top edge */
  /* Position fixed is removed, will stick to bottom due to flex layout of parent */
  /* bottom, left, right, z-index removed */
  margin: 15px; /* Margin around the input bar */
}

.message-input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 10px 12px; /* Adjusted padding */
  font-size: 15px;
  background-color: transparent;
}

.send-button {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px; /* Space between input and send button */
}

/* Removed .icon-button and .icon-button img styles as they are no longer used */

</style> 