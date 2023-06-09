<template>
	<div class="body">
		<div class="textContainer">
			<div class="titleContainer">
				<a href="https://www.firstinspires.org">
					<img alt="FIRST" src="../assets/FIRST-logo.png" />
				</a>
				<h1>Vision and Mission</h1>
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

			<h3>Mission</h3>

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

			<h3>
				<br />
				Vision
			</h3>

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

			<h3>
				<br />
				Methodology
			</h3>

			<p>
				Engage
				<a href="https://www.firstinspires.org/about/at-a-glance">
					PreK-12 (ages 4-18)&nbsp;students
				</a>
				in exciting, mentor-based, research and robotics programs that help them
				become science and technology leaders, as well as well-rounded
				contributors to society.
			</p>

			<p>
				<em>FIRST</em>
				works because our programs use strategies known to increase student
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

			<h3>
				<br />
				Founder
			</h3>

			<p>
				<a
					href="https://www.firstinspires.org/node/2541"
					title="About Dean Kamen"
				>
					Dean Kamen
				</a>
				is a prolific inventor, entrepreneur, and tireless advocate for science
				and technology. His passion and determination to help young people
				discover the excitement and rewards of science and technology are the
				cornerstones of
				<em>FIRST</em>
				. For over 30 years, Kamen has resolutely led the growth of
				<em>FIRST</em>
				to where it is now universally recognized as the leading, not-for-profit
				STEM engagement program for kids worldwide.
			</p>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
.body {
	background-color: rgb(62, 16, 88);
	text-align: center;
}

.body .textContainer {
	width: 80%;
	margin: auto;
	max-width: 600px;
}

.body .textContainer {
	color: white;
	font-family: 'Figtree', sans-serif;
}

.titleContainer {
	display: flex;
	margin-bottom: 5%;
	vertical-align: middle;
}

.titleContainer img {
	width: 50%;
	min-width: 120px;
}

.titleContainer h1 {
	margin-top: auto;
}

.body .textContainer p a:link {
	text-decoration: underline;
	color: white;
}
</style>
