<script setup lang="ts">
const { chat, messages, sendMessage } = useChat();

const typing = ref(false);

const handleSendMessage = async (message: string) => {
  typing.value = true;
  await sendMessage(message);
  typing.value = false;
};

const appConfig = useAppConfig();
const title = computed(() => {
  return chat.value?.title ? `${chat.value.title} - ${appConfig.title}` : appConfig.title;
});

useHead({
  title,
});
</script>

<template>
  <ChatWindow :typing :chat :messages="messages" @send-message="handleSendMessage" />
</template>

<style scoped></style>
