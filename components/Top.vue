<template>
	<div class="header">
		<div class="title">
			<div class="text">
				<h1>FIRST Robotics Team <br>7243</h1>
				<p>Robo Lobo Bellos</p>
			</div>
		</div>
		<div class="content">
			<NuxtImg src="/images/wolfhead.png" alt="wolf head logo"/>
		</div>
	</div>
</template>

<style scoped lang="scss">
p {
	font-size: medium;
}
.header {
	display: flex;
	flex-direction: row;
	.title {
		display: flex;
		justify-content: left;
		align-items: center;
		width: fit-content;
		flex:content;
		.text {
			padding-left: 5%;
			text-align: left;
			color: whitesmoke;
			font-family: 'Open Sans', sans-serif;
			h1 {
				margin-top: 0px;
				word-wrap: break-word;
				white-space: normal;
			}
			p {
				margin-bottom: 0.5rem;
			}
		}
	}
	.content {
		flex-grow: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		$dist : 20px;
		img{
			width: 100%;
			max-width: 300px;
			animation: float 5s ease-in-out 0s infinite alternate;
		}
		@keyframes float {
			0% {
				transform: translatey($dist);
			}
			100% {
				transform: translatey(-$dist);
			}
		}
		@media (max-width: 800px) {
			display:none;
		}
	}
}
</style>
