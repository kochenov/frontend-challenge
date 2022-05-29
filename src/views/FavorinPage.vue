<template>
  <div>
    <div class="wrap">
      <CardsCats v-if="cats.length > 0" :cats="cats" />
      <EmptyContent v-else text="Любимые котики ещё не добавлены" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CardsCats from "@/components/CardsCats.vue";
import EmptyContent from "@/components/EmptyContent.vue";
export default {
  name: "FavoritPage",
  components: { CardsCats, EmptyContent },
  computed: {
    ...mapGetters({
      cats: "getFavorits",
    }),
  },
};
</script>
<style lang="scss">
.empty {
  text-align: center;
  display: flex;

  h1 {
    margin: 20% auto;
  }
}
</style>
