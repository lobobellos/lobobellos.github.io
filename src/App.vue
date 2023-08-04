<template>
	<div>
		<navbar />
		<top />
		<ShapeDivider id="divider"/>
		<router-view id="rv"></router-view>
		<foot />
	</div>
</template>

<script lang="ts">
import Top from './components/Top.vue'
import Navbar from './components/Navbar.vue'
import Foot from './components/Foot.vue'
import ShapeDivider from './components/ShapeDivider.vue'

export default {
	name: 'App',
	components: {
		Top,
		Navbar,
		Foot,
		ShapeDivider,
	},
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Figtree&family=Open+Sans&family=Oswald:wght@400;500&display=swap');

body {
	padding: 0px;
	margin: 0px;
	background: linear-gradient(
		90deg,
		rgba(102, 40, 156, 1) 0%,
		rgba(32, 29, 56, 1) 100%
	);
	#divider{
		position:relative;
	}
	#rv{
		padding-top:1rem;
	}
}
</style>
