<template>
  <div>
    <top/>
		<navbar/>


    <router-view></router-view>
  </div>
</template>

<script>
	import Top from './components/Top.vue'
	import Navbar from './components/Navbar.vue'
	
export default {
  name: "App",
	components: {
    Top,
		Navbar,
  },
};
</script>

<style>
	body{
		padding:0px;
		margin:0px;
		background-color:rgb(62, 16, 88) ;
	}
</style>