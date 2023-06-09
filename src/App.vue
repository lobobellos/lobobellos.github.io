<template>
	<div>
		<top />
		<navbar />
		<router-view></router-view>
		<foot />
	</div>
</template>

<script lang="ts">
import Top from './components/Top.vue'
import Navbar from './components/Navbar.vue'
import Foot from './components/Foot.vue'

export default {
	name: 'App',
	components: {
		Top,
		Navbar,
		Foot,
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Figtree&family=Open+Sans&family=Oswald:wght@400;500&display=swap');

body {
	padding: 0px;
	margin: 0px;
	background-color: rgb(62, 16, 88);
}
</style>
