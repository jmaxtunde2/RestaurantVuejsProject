<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
  
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #670d0d;
}
.logo{
        width: 200px;

    }
    .register, .login, .addResto{
        margin-top: -7px;
    }
    .register input, .login input, .addResto input{
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left:auto;
        border: 1px solid orange;
    }
    .register button, .login button, .addResto button{
        width: 325px;
        height: 40px;
        border: 1px solid orange;
        background:orange;
        color:white;
        cursor: pointer;
    }
</style>
