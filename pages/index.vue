<script setup lang="ts">
const iframe = ref<HTMLIFrameElement | null>(null)
onMounted(() => {
	if (iframe.value)
		iframe.value.src = 'https://www.youtube.com/embed/0zpflsYc4PA'
})
</script>

<template>
	<div class="body">
		<SectionHeader title="About Us" />
		<div class="aboutContainer">
			<div class="about">
				<div class="text">
					<p>
						FRC team 7243, known as the "Robo-Lobo-Bellos," is dedicated to
						empowering students through comprehensive STEM education, fostering
						adept problem-solving abilities, honing effective management
						techniques, and nurturing impactful leadership skills.
						<br />
						<br />
						Our team operates under a student-led and student-focused framework,
						ensuring that every individual discovers their unique role within
						our dynamic community.
						<br />
						<br />
						This ethos of unity and collaboration cultivates something of a
						second family, instilling within us a profound sense of team pride
						and an unwavering commitment to exert our utmost effort.
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
				<h3>Pre-Season</h3>
				<p>
					During the Pre-Season, students can anticipate engaging in a range of
					activities aimed at building foundational skills and preparing for the
					upcoming competition season.
					<br />
					<br />
					This period involves workshops and training sessions to familiarize
					members with tools, programming languages, and design principles.
					<br />
					<br />
					Additionally, teambonding, strategizing, and brainstorming for
					potential robot designs and game strategies are common elements of the
					FRC preseason experience.
				</p>
			</div>
			<div class="imageContainer">
				<img src="../assets/preseason.png" alt="Pre-Season image" />
			</div>
		</div>
		<div class="whatWeDo">
			<div class="text">
				<h3>Build Season</h3>
				<p>
					During the intense build season of an FRC (FIRST Robotics Competition)
					team, students can expect a dynamic and collaborative environment
					focused on designing, fabricating, and iterating on their competition
					robot.
					<br />
					<br />
					Working closely with mentors, students will apply their skills in
					engineering, programming, and problem-solving to construct a
					functional and innovative robot that meets the challenges of the game.
					<br />
					<br />
					The build season involves long hours, tight deadlines, and a strong
					sense of camaraderie as the team strives to create a successful robot
					before the competition.
				</p>
			</div>
			<div class="videoContainer">
				<iframe
					src=""
					ref="iframe"
					title="2023 Chagred Up Competition Video"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
		<div class="buttons">
			<div class="innerButtons">
				<div class="buttonContainer">
					<FancyButton
						text="Donate"
						href="https://www.gofundme.com/f/support-our-schools-robotics-team"
						newpage
						:useRouter="false"
					/>
				</div>
				<div class="buttonContainer">
					<FancyButton
						text="Corporate"
						href="https://docs.google.com/document/d/1_AKteEcrHS7Chz8WQfl-UCybl7kI6Q30VZLYpGshqRU/edit"
						newpage
						:useRouter="false"
					/>
				</div>
			</div>
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
		padding-left: 5%;
		padding-right: 5%;
		.text {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			p {
				padding-left: 5%;
				padding-right: 5%;
				max-width: 500px;
			}
		}
		.imageContainer {
			flex-grow: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			max-width: 500px;
			img {
				margin-bottom: 2rem;
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
			max-width: 500px;
			iframe {
				min-width: 400px;
				min-height: 300px;
			}
		}
	}
	.buttons {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		.innerButtons {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			.buttonContainer {
				margin: 0.5rem;
			}
		}
	}
}
</style>
