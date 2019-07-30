<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    github netlify test
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import store from '@/store.js'
// console.log(store.state.count)

// store.commit('increment')
// console.log(store.state.count)

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    console.log(this.$store.state.count)
    this.$store.commit('increment')
    console.log(this.$store.state.count)

    console.log(this.$store.state.message)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
