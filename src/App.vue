<template>
  <div>
    <Navigation/>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/cats">Cats</router-link>
    <router-link to="/dogs">Dogs</router-link>
    <router-link to="/pet">Pet</router-link> -->
    <router-view></router-view>
    <Footer/>
  </div>
</template>
<script>
// @ is an alias to /src
import Navigation from '@/components/includes/navigation.vue'
import Footer from '@/components/includes/footer.vue'
export default {
  name: 'app',
  components: {
    Navigation,
    Footer
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
