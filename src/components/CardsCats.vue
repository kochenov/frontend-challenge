<template>
  <div class="cats">
    <div v-for="cat in cats" :key="cat.id" class="cart">
      <img :src="cat.url" :alt="cat.id" />
      <span
        @click="!cat.favorite ? addFovarite(cat) : deleteFovarite(cat)"
        class="favorite"
        :class="cat.favorite ? 'active-favorite' : null"
      ></span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    favorits: {
      type: Boolean,
      Default: false,
    },
    cats: {
      type: Object,
    },
  },
  methods: {
    ...mapActions({
      addFovarite: "addFavoriteAction",
      deleteFovarite: "deleteFavoriteAction",
    }),
  },
};
</script>

<style lang="scss" scoped>
.cats {
  padding-top: 48px;
  padding-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(5, minmax(225px, 1fr));
  grid-template-rows: repeat(auto-fill, 225px);
  justify-content: space-between;
  @include screen-size(xl) {
    grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
    justify-content: center;
  }
  gap: 48px;
  justify-items: center;

  .cart {
    position: relative;
    height: 225px;
    width: 225px;

    img {
      transition: 0.3s;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  .favorite {
    display: none;
    position: absolute;
    bottom: 19px;
    right: 15px;
    width: 40px;
    height: 37px;
    background: url("~@/assets/images/icons/favorite_border.svg");
    background-size: 40px 37px;
    cursor: pointer;
  }
  .active-favorite {
    background: url("~@/assets/images/icons/favorite.svg");
    background-size: 40px 37px;
  }
  .cart:hover {
    img {
      transform: scale(1.08);
      box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24),
        0px 9px 18px rgba(0, 0, 0, 0.18);
    }
    .favorite {
      display: block;
      &:hover {
        background: url("~@/assets/images/icons/favorite.svg");
        background-size: 40px 37px;
      }
    }
  }
}
</style>
