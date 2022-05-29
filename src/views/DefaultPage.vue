<template>
  <div>
    <div class="wrap">
      <CardsCats v-if="cats.length > 0" :cats="cats" />
      <EmptyContent v-else text="Котики загружаются..." />
      <div v-if="loading && cats.length > 0" class="loading">Загрузка...</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import CardsCats from "@/components/CardsCats.vue";
import EmptyContent from "@/components/EmptyContent.vue";
export default {
  name: "DefaultPage",
  components: { CardsCats, EmptyContent },
  computed: {
    ...mapState({
      loading: (state) => state.loading,
    }),
    ...mapGetters({
      cats: "getCats",
    }),
  },
  mounted() {
    let target = document.querySelector("#footer");

    window.addEventListener("scroll", () => {
      let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
      };

      let windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };
      if (
        targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        targetPosition.left < windowPosition.right
      ) {
        // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код
        //console.log("Вы видите элемент :)");
        if (!this.loading) {
          this.loadAction();
        }
      }
    });
  },
  methods: {
    ...mapActions({
      loadAction: "loadAction",
    }),
    ...mapMutations({
      //setLoading: "setLoading",
    }),
  },
};
</script>
<style lang="scss" scoped>
.loading {
  text-align: center;
  padding: 20px;
}
</style>
