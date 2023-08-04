<template>
	<div class="body">
		<h2>About Us</h2>
		<img src="../assets/teamPic.jpg" alt="Team Photo" />
		<p>
			FRC team 7243, the "Robo-Lobo-Bellos", strives to provide students with
			STEM education, problem solving, management, and leadership skills. We
			accomplish this by providing a student-led and student-focused team
			structure where people can find their place. Our family-like culture
			drives us to take pride in our team and give it our all.
		</p>
		<h2>What We Do</h2>
		<iframe
			src=""
			title="Qualification 59 - 2022 Utah Regional"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
		<p>
			Our team competes in FRC, the FIRST Robotics Competition. Each year, our
			team designs, builds, programs, and tests a new robot, which is able to
			complete tasks and score points on the game field.
		</p>
	</div>
</template>

<script lang="ts">
export default {
	name: 'Home',
	mounted() {
		document.querySelector('iframe').src =
			'https://www.youtube.com/embed/0zpflsYc4PA'
	},
}
</script>

<style scoped lang="scss">
.body {
	background-color: rgb(62, 16, 88);
	text-align: center;
	display: block;
	color: white;
	font-family: 'Figtree', sans-serif;
	img {
		width: 80%;
		margin-bottom: 30px;
		max-width: 400px;
		border-radius:3rem;
		transition: box-shadow 500ms ease-in-out;

		&:hover{
			box-shadow: 0px 0px 10px 10px #00000040;
		}
	}
	p {
		width: 80%;
		margin: auto;
		max-width: 600px;
	}
	iframe {
		width: 500px;
		height: 300px;
		margin-bottom: 30px;
	}
}
</style>
