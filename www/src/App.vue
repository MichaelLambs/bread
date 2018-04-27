<template>
  <div id="app" @scroll="scrolling">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      this.$store.dispatch('authenticate').then(() => {
        // this.$store.dispatch('getBoard', this.$route.params.boardId)
      }),
      document.body.addEventListener('scroll', this.scrolling);
    },
    methods: {
      scrolling() {
        debugger
        var scrollElem = document.getElementById('scrollNav');
        scrollElem.classList.add("navbarChange")
      }
    }
  }

</script>

<style>
  .navbarChange{
    background-color: blue;
    border: 10px solid;
  }

  .flexor {
    display: flex;
  }

  .width100 {
    width: 100%;
  }

  .space-between {
    justify-content: space-between;
  }

  .centa {
    justify-content: center;
  }

  .centa-self {
    justify-self: center;
  }

  .vert-center {
    align-items: center;
  }

  .marg-bot {
    margin-bottom: 1rem
  }

  .pad-bot {
    padding-bottom: 1rem;
  }

  .pad-top {
    padding-top: 1rem;
  }

  .pointer{
    cursor: pointer;
  }

</style>
