<template>
  <tr>
    <td scope="row">{{ingredient.num}}</td>
    <td>{{ingredient.weight}}</td>
    <td>{{ingredient.name}}</td>
    <td>{{ingredient.percentage}}
      <span class="pointer" data-toggle="modal" :data-target="'#ingredient-' + ingredient.num">X</span>
    </td>


    <!--MOVE KEEP MODAL-->
    <div class="modal fade" :id="'ingredient-' + ingredient.num" tabindex="-1" role="dialog" aria-labelledby="modalForKeep" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit</h5>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editIngredient()">
              <table class="table">
                <thead>
                  <tr>
                    <th style="width: 5%" scope="col">#</th>
                    <th style="width: 20%" scope="col">Weight</th>
                    <th style="width: 60%" scope="col">Ingredient</th>
                    <th style="width: 15%" scope="col">Baker%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      <input type="number" class="width100 ingredient-input readonly" v-model="ingredient.num" readonly>
                    </td>
                    <td>
                      <input type="number" class="width100 ingredient-input" v-model="ingredient.weight" placeholder="Weight (g)" required>
                    </td>
                    <td>    
                      <input type="text" class="width100 ingredient-input" v-model="ingredient.name" placeholder="Bob’s Red Mill Artisan Bread Flour" required>
                    </td>
                    <td>
                      <input type="number" class="width100 ingredient-input" v-model="ingredient.percentage" placeholder="80%" required>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button type="submit" class="btn btn-sm btn-block btn-outline-primary">Edit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </tr>
</template>

<script>
  import Navbar from './Navbar.vue'
  export default {
    name: 'Ingredient',
    data() {
      return {
        
      }     
    },
    methods: {
      editIngredient(){
        $('#ingredient-' + this.ingredient.num).modal('hide')
      }
    },
    components: {},
    props: ['ingredient']
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .readonly{
      border: none;
      background-color: rgba(255, 255, 255, 0);
    }

</style>
