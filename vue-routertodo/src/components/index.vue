<template>
  <div id="index">
    <router-view></router-view>
    <root />
    <input />
    <TodoList />
    <br/>
      <button type="submit" v-on:click="toMain">返回</button>

     <!-- <input  placeholder="请输入您的姓名" /> -->
  </div>
</template>

<script>
import root from "./root";
import input from "./input";
import TodoList from "./TodoList";

export default {
  components: {
    root,
    input,
    TodoList
  },
  methods: {
    toMain: function() {
      if (confirm("确认返回?")) {
        return this.$router.push({ path: "/welcome" });
      }
    }
  }
};
</script>