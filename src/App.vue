<template>
  <div class="root">
    <div class="page">
      <NavigationMain />
      <router-view />
    </div>
    <footer id="footer"></footer>
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 1px;
  font-weight: 400;
  line-height: 21px;
}

body {
  font-family: $font-text;
  background-color: #ffffff;
  font-size: 14rem;
}
.page {
  min-height: calc(100vh - 70px);
}
footer {
  height: 70px;
  background-color: #d9d9d9;
}

a,
button,
input[type="button"],
input[type="submit"] {
  transition: 0.3s;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
}
</style>
<script>
import { mapActions } from "vuex";
import NavigationMain from "./components/NavigationMain.vue";
export default {
  components: { NavigationMain },
  computed: {},
  methods: {
    ...mapActions({
      loadCats: "loadAction",
    }),
  },
  mounted() {
    this.loadCats();
  },
};
</script>
