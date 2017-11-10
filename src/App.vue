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
    align-items: center;
    background: url('assets/background.jpg') center center no-repeat;
    background-size: cover;
    display: flex;
    height: 100vh;
    justify-content: center;
    padding:0 15px;
}

  @media (max-width: 676px) {
    #app {
      align-items: flex-start;
      background-attachment: fixed;
      padding: 50px 15px;
      height: 100%;
    }
  }
</style>
