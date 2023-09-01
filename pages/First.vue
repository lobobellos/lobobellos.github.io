<template>
	<div class="titleContainer">
		<a href="https://www.firstinspires.org">
			<NuxtImg alt="FIRST" src="/images/FIRST-logo.png" />
		</a>
		<div class="secHead">
			<SectionHeader title="What Is FIRST?" />
		</div>
	</div>
	<div class="body">
		<div class="textContainer">
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
			<h2>Vision</h2>
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
		</div>
		<div class="iframeContainer">
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
		</div>
	</div>
</template>

<style lang="scss" scoped>
a {
	color: orange;
	font-family: 'Figtree', sans-serif;
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
.body {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
	justify-content: space-between;
	.textContainer {
		width: 80%;
		margin: auto;
		max-width: 600px;
		color: white;
		font-family: 'Figtree', sans-serif;
	}
	.iframeContainer {
		width: 80%;
		margin: auto;
		max-width: 600px;
	}
}
</style>
