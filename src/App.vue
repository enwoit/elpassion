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
  padding:0 15px;
}

  @media (max-width: 676px) {
    #app {
      align-items: flex-start;
      background-attachment: fixed;
      padding: 50px 15px;
      height: 100vh;
    }
  }
</style>
