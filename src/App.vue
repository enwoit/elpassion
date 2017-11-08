<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
  }

  * {
    box-sizing: border-box;
  }

#app {
  background: url('assets/background.jpg') top center no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
