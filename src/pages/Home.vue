<script setup lang="ts">
import SectionHeader from '../components/SectionHeader.vue';
import DonateButton from '../components/DonateButton.vue';
import { onMounted, ref } from 'vue'
const iframe = ref<HTMLIFrameElement>(null)
onMounted(() => {
	iframe.value.src =
		'https://www.youtube.com/embed/0zpflsYc4PA'
	iframe.value.height = String(parseInt(iframe.value.width) * (3 / 2))
})
</script>

<template>
	<div class="body">
		<SectionHeader title="About Us" />
		<div class="aboutContainer">
			<div class="about">
				<div class="text">
					<p>
						FRC team 7243, known as the "Robo-Lobo-Bellos," is
						dedicated to empowering students through comprehensive
						STEM education, fostering adept problem-solving
						abilities, honing effective management techniques,
						and nurturing impactful leadership skills.<br>
						<br>
						Our team operates under a student-led and
						student-focused framework, ensuring that every
						individual discovers their unique role within our
						dynamic community. <br>
						<br>
						This ethos of unity and collaboration cultivates
						something of a second family, instilling within us a
						profound sense of team pride and an unwavering
						commitment to exert our utmost effort.
					</p>
				</div>
				<div class="imageContainer">
					<img src="../assets/teamPic.jpg" alt="Team Photo" />
				</div>
			</div>
		</div>
		<SectionHeader title="What We Do" />
		<div class="whatWeDo">
			<div class="text">
				<p>
				<h3>Pre-Season</h3>
				During the Pre-Season, students can anticipate
				engaging in a range of activities aimed at building
				foundational skills and preparing for the upcoming
				competition season.<br>
				<br>
				This period involves workshops and training
				sessions to familiarize members with tools, programming
				languages, and design principles.<br>
				<br>
				Additionally, teambonding, strategizing, and
				brainstorming for potential robot designs and game
				strategies are common elements of the FRC preseason
				experience.<br>
				<br>
				</p>
			</div>
			<div class="imageContainer">
				<img src="../assets/preseason.png" alt="Pre-Season image">
			</div>
		</div>
		<div class="whatWeDo" id="reverseWrap">
			<div class="text">
				<p>
				<h3>Build Season</h3>
				During the intense build season of an FRC
				(FIRST Robotics Competition) team, students can expect
				a dynamic and collaborative environment focused on
				designing, fabricating, and iterating on their
				competition robot.<br>
				<br>
				Working closely with mentors, students will apply their
				skills in engineering, programming, and problem-solving
				to construct a functional and innovative robot that
				meets the challenges of the game.<br>
				<br>
				The build season involves long hours, tight deadlines,
				and a strong sense of camaraderie as the team strives
				to create a successful robot before the competition.
				</p>
			</div>
			<div class="videoContainer">
				<iframe src="" ref="iframe" title="2023 Chagred Up Competition Video" frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen></iframe>
			</div>
		</div>
		<div class="donateButtonContainer">
			<DonateButton id="donateButton" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.body {
	text-align: left;
	padding-bottom: 2rem;
	.about,
	.whatWeDo {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap-reverse;
		justify-content: center;
		.text {
			display: flex;
			justify-content: center;
			align-items: center;
			p {
				padding-left: 10%;
				padding-right: 10%;
				max-width: 600px;
			}
		}
		.imageContainer {
			flex-grow: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			img {
				margin-bottom: 2rem;
				max-width: 500px;
				width: 80%;
				border-radius: 3rem;
				transition: box-shadow 500ms ease-in-out;

				&:hover {
					box-shadow: 0px 0px 10px 10px #00000040;
				}
			}
		}
	}
	.whatWeDo {
		.videoContainer {
			flex-grow: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			iframe {
				max-width: 500px;
				min-width: 400px;
				min-height: 300px;
			}
		}
	}
	.donateButtonContainer {
		margin-top: 2rem;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
