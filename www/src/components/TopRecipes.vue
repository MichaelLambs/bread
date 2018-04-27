<template>
  <div class="Top-Recipes">
    <h2>Top Recipes</h2>
    <div class="list-group">
      <div class="list-group-item" v-for="recipe in recipes">
        {{recipe.title}}
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'TopRecipes',
    data() {
      return {
        view: 1
      }
    },
    mounted() {
      this.$store.dispatch('topRecipes')
    },
    computed: {
      recipes() {
        return this.$store.state.recipes
      }
    },
    components: {}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
