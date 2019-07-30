<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    github netlify test
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import store from '@/store.js'
console.log(store.state.count)

store.commit('increment')
console.log(store.state.count)

export default {
  name: 'App',
  components: {
    HelloWorld
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
