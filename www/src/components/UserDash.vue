<template>
  <div class="recipes">
    <navbar></navbar>
    <router-link :to="{path: '/recipe/new'}">
      <button class="btn-block btn btn-outline-success">Add Recipe</button>
    </router-link>
    <div>
        <h3>{{currentRecipe.title}}</h3>
    </div>
  </div>
</template>

<script>
  import Navbar from './Navbar.vue'
  export default {
    name: 'UserDash',
    data() {
      return {
        createdRecipe: {}
      }
    },
    mounted() {},
    computed: {
        currentRecipe() {
        return this.$store.state.currentRecipe
      }
    },
    components: {
      Navbar
    },
    props: []
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
