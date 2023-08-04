<script setup lang="ts">

const props = defineProps({
  title:{
    type:String,
    required:true,
  },
  subtitle:{
    type:String,
    required:false,
  }
})
</script>

<template>
  <h1>{{ props.title }}</h1>
	<hr />
  <div class="subtitleCOntainer">
    <h3>{{ props.subtitle }}</h3>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }
  hr {
    width: 80%;
    box-shadow: 0px 0px 0.5px 1px rgba(255, 255, 255, 0.367);
  }
  .subtitleCOntainer {
    margin:auto;
    max-width:700px;
    h3{
    text-align: center;
    margin-right:10%;
    margin-left:10%;
    }
  }
</style>