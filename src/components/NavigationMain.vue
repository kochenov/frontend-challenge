<template>
  <header>
    <div class="wrap">
      <ul>
        <li>
          <router-link to="/" active-class="active">Все котики</router-link>
        </li>
        <li>
          <router-link to="/favorits" active-class="active"
            >Любимые котики</router-link
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationMain",
};
</script>

<style lang="scss" scoped>
header {
  //height: 64px;
  background: #2196f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.24);

  ul {
    display: flex;
    li {
      list-style: none;
      a {
        display: block;
        padding: 23px 24px;
      }
      a:hover,
      .active {
        background: #1e88e5;
        color: #ffffff;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }
  }
}
</style>
