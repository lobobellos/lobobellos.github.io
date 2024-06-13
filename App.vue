<script setup lang="ts">
useSeoMeta({
  title: 'Robo-Lobo-Bellos',
  ogTitle: 'Robo-Lobo-Bellos',
  description: 'FRC Team 7243, The Robo-Lobo-Bellos is a FIRST robotics team based out of Northeast Denver, CO, USA',
  ogDescription: 'FRC Team 7243, The Robo-Lobo-Bellos is a FIRST robotics team based out of Northeast Denver, CO, USA',
  ogImage: './assets/teamPic.jpg',
})
useHead({
  meta: [
	{ charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'google-site-verification', content: 'cctW95-WZzqkEHNaiVrSJ6bfMLZOMg1PpQ3zEBu15rc' },
        { name: 'keywords', content: 'robo, lobo, bellos, robotics, first, frc, 7243, team, robot' }
  ],
})
</script>

<template>
	<div class="everything">
		<Navbar />
		<Top />
		<ShapeDivider id="divider" />
		<div class="router">
			<NuxtPage />
		</div>
		<Foot />
	</div>
</template>

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
	.everything {
		overflow: clip;
		#divider {
			position: relative;
		}
		.router {
			background-color: rgb(62, 16, 88);
			padding-top: 1rem;
			padding-bottom: 0.5rem;
		}
	}
}
:root {
	font-family: Figtree, sans-serif;
	color: white;
	iframe {
		border-radius: 1rem;
		transition: box-shadow 500ms ease-in-out;
		&:hover {
			box-shadow: 0px 0px 10px 10px #00000040;
		}
	}
}
</style>
