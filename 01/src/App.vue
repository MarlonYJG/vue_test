<template>
  <div id="app">
    <div class="left">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  width: 1200px;
  min-height: 1000px;
  border: 1px solid #2c3e50;
}
.left{
  float: left;
  width: 300px;
  border: 1px solid #2c3e50;
  min-height: 800px;
}
</style>
