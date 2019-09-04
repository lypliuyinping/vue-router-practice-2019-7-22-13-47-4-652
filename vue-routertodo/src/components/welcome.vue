<template>
  <div id="main">
	<h1>Welcome Todo todoList！</h1> 
      <button type="submit" v-on:click="toIndex">开始使用</button>
  </div>
  
</template>

<script>

export default {
  methods: {
    toIndex: function() {
      return this.$router.push({ path: "/index" });
    }
    
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
