<template>
  <div class="empty">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: "EmptyContent",
  props: {
    text: {
      type: String,
      default: "Нет данных",
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  margin: 20% auto;
}
</style>
