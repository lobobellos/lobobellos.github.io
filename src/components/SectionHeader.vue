<script setup lang="ts">

const props = defineProps({
  title:{
    type:String,
    required:true,
  },
})
</script>

<template>
  <h1>{{ props.title }}</h1>
	<hr />
</template>

<style scoped lang="scss">
  h1 {
    text-align: center;
  }
  hr {
    width: 80%;
  }
</style>