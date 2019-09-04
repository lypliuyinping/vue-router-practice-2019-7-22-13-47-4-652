<template>

    <ol>
      <li v-for="(item,index)  of list"  :key="index"> 
      <input type="checkbox" v-model="$store.state.buttons[index-1]">
        {{item}}      
      </li>
    </ol>  

</template>

<script>
export default {
  name: "TotoList",
  data: function() {
    return {
      inputValue: "",
      list: []
    };
  },
  methods: {
    changeInput: function() {
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    AllItems:function(){
      alert('eee');
    }
  }
};
</script>
