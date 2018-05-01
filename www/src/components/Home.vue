<template>
  <div class="Home">
    <navbar></navbar>
    <div class="flexor width100 centa">
      <p @click="view = 1, topRecipes()" class="pointer">Top</p>
      <p @click="view = 2, newestRecipes()" class="pointer">Newest</p>
      <p @click="view = 3" class="pointer">All</p>
    </div>
    <div v-if="user">
      <router-link :to="{path: '/recipe/new'}">
        <button class="btn-block btn btn-outline-success">Create Recipe</button>
      </router-link>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <recipes :view="view"></recipes>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Recipes from './Recipes.vue'
  export default {
    name: 'Home',
    data() {
      return {
        view: 1,
      }
    },
    mounted() {
      this.$store.dispatch('topRecipes')
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      topRecipes(){
        this.$store.dispatch('topRecipes')
      },
      newestRecipes(){
        this.$store.dispatch('topRecipes')
      },
      createRecipe(){
        console.log('cheese')
      }
    },
    components: {
      Navbar,
      recipes: Recipes
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
