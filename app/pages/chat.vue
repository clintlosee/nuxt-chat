<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();

useHead({
  title: chat?.value?.title || 'Chat',
});
</script>

<template>
  <ChatWindow :chat :messages="messages" @send-message="sendMessage" />
</template>

<style scoped></style>
