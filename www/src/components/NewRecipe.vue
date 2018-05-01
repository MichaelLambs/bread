<template>
  <div class="new-recipe">
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10">
          <form v-if="!recipe.title" @submit.prevent="addTitle()">
            <input class="width100" type="text" placeholder="Title" v-model="createRecipe.title" required>
            <button type="submit">add title</button>
          </form>
          <div>
            <h3>{{recipe.title}}</h3>
          </div>
          <div v-if="recipe.title">
            <form @submit.prevent="addToIngredientList()">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th style="width: 5%" scope="col">#</th>
                    <th style="width: 20%" scope="col">Weight</th>
                    <th style="width: 60%" scope="col">Ingredient</th>
                    <th style="width: 15%" scope="col">Baker%</th>
                  </tr>
                </thead>
                <tbody>
                  <ingredient v-for="ingredient in ingredients" :ingredient="ingredient"></ingredient>
                  <tr>
                    <td scope="row">
                      <input type="text" class="width100 ingredient-input readonly" v-model="newIngredient.num" readonly>
                    </td>
                    <td>
                      <input type="number" class="width100 ingredient-input" v-model="newIngredient.weight" placeholder="Weight (g)" required>
                    </td>
                    <td>
                      <input type="text" class="width100 ingredient-input" v-model="newIngredient.name" placeholder="Bob’s Red Mill Artisan Bread Flour"
                        required>
                    </td>
                    <td>
                      <input type="number" class="width100 ingredient-input" v-model="newIngredient.percentage" placeholder="80%" required>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" class="btn btn-outline-success btn-block">Add</button>
            </form>
            <button @click="saveRecipe()" class="btn btn-outline-success btn-block">Save Recipe</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import Ingredient from './Ingredient.vue'
  import Navbar from './Navbar.vue'
  export default {
    name: 'NewRecipe',
    data() {
      return {
        createRecipe: {},
        recipe: {},
        newIngredient: {
          num: 1
        },
        ingredients: []
      }
    },
    mounted() {},
    computed: {
      recipes() {
        return this.$store.state.recipes
      }
    },
    methods: {
      // ADDS TITLE TO NEW RECIPE
      addTitle() {
        var newTitle = this.createRecipe.title;
        this.recipe.title = newTitle;
        this.createRecipe.title = {};
      },
      addToIngredientList() {
        this.ingredients.push(this.newIngredient);
        var counter = this.ingredients.length + 1;
        this.newIngredient = {
          weight: '',
          name: '',
          percentage: '',
          num: counter
        };
      },
      saveRecipe() {
        this.$store.dispatch('saveRecipe', {
          ingredients: this.ingredients,
          title: this.recipe.title
        })
      }
    },
    components: {
      Navbar,
      Ingredient
    },
    props: []
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table-header {
    background-color: #eaeaea;
    border-bottom: .1rem solid #333;
  }

  .double {
    flex-grow: 2;
  }

  .readonly {
    border: none;
    background-color: rgba(255, 255, 255, 0);
  }

</style>
