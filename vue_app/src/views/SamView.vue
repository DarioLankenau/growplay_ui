<template>
  <div class="sam-view">
    <div class="page-header-area" style="padding-bottom: 0px; margin-bottom: 0px;">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <h1 style="font-weight: 700; font-size: 36px; color: #fff; margin-bottom: 4px;">Hi!</h1>
          <h1 style="font-weight: 700; font-size: 36px; color: #fff; margin-top: 0; margin-bottom: 8px;">I'm SAM,</h1>
          <p style="font-weight: 500; font-size: 20px; color: rgba(255,255,255,0.8); margin-top:0;">How can I help you?</p>
        </div>
        <span style="font-size: 80px; margin-right: 10px;">🤖</span>
      </div>
    </div>

    <div class="page-content-wrapper" style="margin-top: 20px; background-color: #ffffff; border-radius: 30px 30px 0 0; padding: 24px; min-height: calc(100vh - 230px);">
      <p style="font-weight: 600; font-size: 18px; color: #333; text-align: center; margin-bottom: 16px;">Select what you are interested in</p>
      
      <button class="new-chat-button" @click="goToNewChat">New Chat</button>

      <div style="display: flex; align-items: center; margin-top: 24px; margin-bottom: 24px;">
        <hr style="flex-grow: 1; border: none; border-top: 1px solid #e0e0e0;">
        <span style="padding: 0 12px; font-weight: 500; color: #555; font-size: 16px;">OR</span>
        <hr style="flex-grow: 1; border: none; border-top: 1px solid #e0e0e0;">
      </div>

      <h2 style="font-weight: 600; font-size: 18px; color: #333; margin-bottom: 12px;">Past conversations</h2>
      
      <div class="past-conversations-list">
        <div class="conversation-group">
          <p class="conversation-date">Today</p>
          <div class="conversation-item">
            <span class="conversation-time">18:00</span>
            <span class="conversation-title">Registration to Social Events</span>
          </div>
          <div class="conversation-item">
            <span class="conversation-time">15:00</span>
            <span class="conversation-title">How to send feedbacks</span>
          </div>
        </div>

        <div class="conversation-group">
          <p class="conversation-date">Yesterday</p>
          <div class="conversation-item">
            <span class="conversation-time">21:00</span>
            <span class="conversation-title">Summer trip</span>
          </div>
        </div>
        
        <div class="conversation-group">
          <p class="conversation-date">Mon 26/05</p>
          <div class="conversation-item">
            <span class="conversation-time">18:00</span>
            <span class="conversation-title">Winter holidays</span>
          </div>
          <div class="conversation-item">
            <span class="conversation-time">10:00</span>
            <span class="conversation-title">Salary</span>
          </div>
           <div class="conversation-item">
            <span class="conversation-time">9:00</span>
            <span class="conversation-title">Technical implementation</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SamView',
  methods: {
    goToNewChat() {
      this.$router.push('/new-chat');
    }
  }
};
</script>

<style scoped>
.sam-view {
  background-color: #4a42e3;
  min-height: 100vh;
  padding-bottom: 70px;
}

.page-header-area {
  padding: 24px;
}

.new-chat-button {
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #f0f0f0;
  color: #333;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: 20px;
}

.new-chat-button:hover {
  background-color: #e0e0e0;
}

.past-conversations-list {
}

.conversation-group {
  margin-bottom: 20px;
}

.conversation-date {
  font-size: 13px;
  color: #777;
  margin-bottom: 8px;
  font-weight: 500;
}

.conversation-item {
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 12px 16px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.conversation-time {
  font-size: 13px;
  color: #555;
  font-weight: 600;
  margin-right: 12px;
  background-color: #ebebeb;
  padding: 4px 8px;
  border-radius: 6px;
}

.conversation-title {
  font-size: 15px;
  color: #333;
  font-weight: 500;
}

.page-content-wrapper {
}

h1, p {
}
</style> 