<template>
  <div class="login vert-center flexor">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-3">
          <div v-if="register == true" class="form-style">
              <div v-if="error">
                <h4>{{error}}</h4>
              </div>
            <form @submit.prevent="registerUser()">
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" v-model="newUser.username" class="form-control" placeholder="Username" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="text" v-model="newUser.email" class="form-control" placeholder="Email" required>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" v-model="newUser.password" class="form-control" placeholder="Password" required>
              </div>
              <div class="form-group">
                  <button type="submit" class="btn btn-sm btn-block btn-outline-success">Register</button>
              </div>
            </form>
            <button @click="register = false" class="btn btn-sm btn-block btn-outline-secondary">Login</button>
          </div>
          <div v-if="register == false" class="form-style">
                <div v-if="error">
                  <h4>{{error}}</h4>
                </div>
              <form @submit.prevent="loginUser()">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="text" v-model="logUser.email" class="form-control" placeholder="Email" required>
                </div>
                <div class="form-group">
                  <label for="password">Password</label>
                  <input type="password" v-model="logUser.password" class="form-control" placeholder="Password" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-sm btn-block btn-outline-primary">Login</button>
                </div>
              </form>
              <button @click="register = true" class="btn btn-sm btn-block btn-outline-secondary">Sign Up</button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        newUser: {},
        logUser: {},
        register: false
      }
    },
    methods: {
        registerUser(){
            this.$store.dispatch('registerUser', this.newUser);
            this.newUser = {};
        },
        loginUser(){
            this.$store.dispatch('loginUser', this.logUser);
            this.logUser = {};
        }
    },
    computed: {
        error(){
            return this.$store.state.errorMessage
        }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .login {
    height: 100vh;
  }

  .form-style {
      border: .1rem solid #eaeaea;
      background-color: #fff;
      padding: .5rem;
      border-radius: 10px;
  }

</style>
