<template>
  <div>
    <nav id="scrollNav" class="navbar">
        <div class="flexor width100 space-between vert-center">
          <div>
            <img src="https://www.placehold.it/40x40">
          </div>
          <div>
            {{user.username}}
          </div>
        </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {}
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .navbar{
        min-height: 5vh;
        background-color: orange;
    }

</style>
