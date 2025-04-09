<script lang="ts" setup>
const { chat, messages, sendMessage } = useChat();
</script>

<template>
  <ChatWindow :chat :messages="messages" @send-message="sendMessage" />
</template>

<style scoped></style>
