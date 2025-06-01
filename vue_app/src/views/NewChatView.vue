<template>
  <div class="new-chat-view">
    <div class="page-header-area" style="padding-bottom: 10px;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <h1 style="font-weight: 700; font-size: 32px; color: #fff;">Chat with me</h1>
        <span style="font-size: 60px;">🤖</span>
      </div>
    </div>

    <div class="page-content-wrapper" style="background-color: #1E1E1E; padding: 30px; min-height: calc(100vh - 160px); display: flex; flex-direction: column;">
      <div class="faq-section">
        <p style="font-weight: 500; font-size: 16px; color: #a0a0a0; margin-bottom: 20px;">Frequently asked by your colleagues</p>
        <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
          <div class="faq-question" @click="toggleFaq(index)">
            <span style="font-size: 16px;">{{ item.question }}</span>
            <span class="faq-arrow" :class="{ 'open': item.open }" style="font-size: 16px;">&#9660;</span>
          </div>
          <div class="faq-answer" v-show="item.open">
            <p style="font-size: 15px;">{{ item.answer }}</p>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="send-icon">
            <path d="M12 4L3 15h6v6h6v-6h6z"/>
          </svg>
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
  background: linear-gradient(to bottom, #ff8a00, #e52e71, #4a42e3);
  min-height: 100vh;
  padding-bottom: 0;
}

.page-header-area {
  padding: 20px;
}

.page-content-wrapper {
  border-radius: 30px 30px 0 0;
  background-color: #1E1E1E;
  padding: 30px;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
}

.faq-section {
  margin-bottom: 35px;
}

.faq-section p {
  color: #a0a0a0;
  font-size: 16px;
  margin-bottom: 20px;
}

.faq-item {
  background-color: #2a2a2a;
  border-radius: 12px;
  margin-bottom: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.35);
}

.faq-question {
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: #ffffff;
  font-size: 16px;
}

.faq-arrow {
  font-size: 16px;
  transition: transform 0.3s ease;
}

.faq-arrow.open {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 18px 18px 18px;
  font-size: 15px;
  color: #a0a0a0;
  border-top: 1px solid #444;
  margin-top: 12px;
}

.chat-area {
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
}

.chat-messages {
  display: flex;
  flex-direction: column-reverse;
  gap: 15px;
  padding: 15px 0;
  overflow-y: auto;
  flex-grow: 1;
}

.message-bubble {
  padding: 15px 20px;
  border-radius: 20px;
  max-width: 85%;
  font-size: 16px;
  line-height: 1.6;
}

.bot-message {
  background-color: #2a2a2a;
  color: #ffffff;
  align-self: flex-start;
  border-radius: 20px 20px 20px 5px;
}

.user-message {
  background-color: #4a42e3;
  color: #fff;
  align-self: flex-end;
  border-radius: 20px 20px 5px 20px;
}

.chat-input-area {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  background-color: #2a2a3a;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin: 25px 0 0 0;
}

.message-input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 12px 0;
  font-size: 17px;
  background-color: transparent;
  color: #ffffff;
}

.message-input::placeholder {
  color: #888;
}

.send-button {
  background-color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
}

.send-button:hover {
  background-color: #eeeeee;
}

.send-icon {
  width: 20px;
  height: 20px;
  color: #1E1E1E;
}
</style> 