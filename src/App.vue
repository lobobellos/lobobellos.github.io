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
	@import url('https://fonts.googleapis.com/css2?family=Figtree&family=Open+Sans&family=Oswald:wght@400;500&display=swap');
	body{
		padding:0px;
		margin:0px;
		background-color:rgb(62, 16, 88) ;
		overflow: hidden; /* Hide scrollbars */
	}
</style>