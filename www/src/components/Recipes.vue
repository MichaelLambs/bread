<template>
  <div class="recipes">
    <h2 v-if="view == 1">Top Recipes</h2>
    <h2 v-if="view == 2">Newest Recipes</h2>
    <div class="list-group">
      <div class="list-group-item" v-for="recipe in recipes">
        {{recipe.title}}
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Recipes',
    data() {
      return {
      }
    },
    mounted() {},
    computed: {
      recipes() {
        return this.$store.state.recipes
      }
    },
    components: {},
    props: ['view']
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


</style>
