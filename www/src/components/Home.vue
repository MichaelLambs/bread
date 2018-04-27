<template>
  <div class="Home">
    <navbar></navbar>
    <div class="flexor width100 centa">
      <p @click="view = 1" class="pointer">Top</p>
      <p @click="view = 2" class="pointer">Newest</p>
      <p @click="view = 3" class="pointer">All</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <top v-if="view == 1"></top>
          <newest v-if="view == 2"></newest>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import TopRecipes from './TopRecipes.vue'
  import NewestRecipes from './NewestRecipes.vue'
  export default {
    name: 'Home',
    data() {
      return {
        view: 1
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    components: {
      Navbar,
      top: TopRecipes,
      newest: NewestRecipes
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
