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
  <h3>{{ props.subtitle }}</h3>
</template>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }
  hr {
    width: 80%;
  }
  h3{
	text-align: center;
	margin-right:10%;
	margin-left:10%
  }
</style>