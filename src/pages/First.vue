<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
</script>

<template>
	<div class="body">
		<div class="textContainer">
			<div class="titleContainer">
				<a href="https://www.firstinspires.org">
					<img alt="FIRST" src="../assets/FIRST-logo.png" />
				</a>
				<div class="secHead">
					<SectionHeader title="What Is FIRST?"/>
				</div>
			</div>
			<iframe
				frameborder="0"
				height="315"
				src="https://www.youtube.com/embed/WlK7S7-Kx70"
				style="
					display: block;
					margin-left: auto;
					margin-right: auto;
					max-width: 100%;
				"
				width="560"
			></iframe>
			<h2>Mission</h2>
			<p>
				The mission of&nbsp;
				<em>
					FIRST
					<sup>®</sup>
				</em>
				&nbsp;is to inspire young people to be science and technology leaders
				and innovators, by engaging them in exciting mentor-based programs that
				build science, engineering, and technology skills, that inspire
				innovation, and that foster well-rounded life capabilities including
				self-confidence, communication, and leadership.
			</p>
			<h2>
				Vision
			</h2>
			<blockquote>
				<p>
					<em>
						"To transform our culture by creating a world where science and
						technology are celebrated and&nbsp;where young people dream of
						becoming science and technology leaders."
					</em>
					&nbsp; Dean Kamen, Founder
				</p>
			</blockquote>
			<h2>
				Methodology
			</h2>
			<p>
				<em>FIRST</em> Engages
				<a href="https://www.firstinspires.org/about/at-a-glance">
					PreK-12 (ages 4-18)&nbsp;students
				</a>
				in exciting, mentor-based, research and robotics programs that help them
				become science and technology leaders, as well as well-rounded
				contributors to society.
			</p>
			<p>
				<em>FIRST</em>
				works because of its use of strategies known to increase student
				interest in STEM: hands-on learning, working as a team on real-life
				problems, exposure to careers and adult mentors, emphasis on
				<em>FIRST</em>
				Core Values, and a culminating celebration where students can showcase
				what they created and learned.&nbsp;
				<br />
				<br />
				<em>FIRST</em>
				participants also develop skills in teamwork, problem solving, and
				communication, preparing them for success in school and the workforce,
				no matter what path they take.
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
a {
	color: orange;
	font-family: 'Figtree', sans-serif;
}
.body {
	background-color: rgb(62, 16, 88);
	text-align: center;
	.textContainer {
		width: 80%;
		margin: auto;
		max-width: 600px;
	}
	.textContainer {
		color: white;
		font-family: 'Figtree', sans-serif;
	}
}
.titleContainer {
	display: flex;
	margin-bottom: 5%;
	align-items: center;
	justify-content: center;
	img {
		width: 50%;
		min-width: 120px;
	}
	h1 {
		margin: 0;
	}
}
</style>
