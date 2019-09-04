<template>
  <div id="index">
      <button type="submit" v-on:click="toMain">返回</button>
     <input  placeholder="请输入您的姓名" />
  </div>
</template>

<script>
export default {
    
  methods: {
    toMain: function() {
      return this.$router.push({ path: "/welcome" });
    }
    
  }
};
</script>