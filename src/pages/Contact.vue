<template>
	<h2>Contact Us</h2>
	<h3>Multiple team representatives would love to get in contact with you</h3>
		

	<div class='people'>
			<div >
				<h3>Maryam Rahimie</h3>
				<h4>Team Affairs</h4>
				<h4>m.rhimie2@gmail.com</h4>
					
				<h4>(720)-276-3416 (cell)</h4>
			</div>
			<div>
				<h3>Robert Davis Jr</h3>
				<h4>Team Affairs</h4>
				<h4>rob2davis2@gmail.com</h4>
				<h4>(720)-815-8794 (cell)</h4>
			</div>
			<div>
				<h3>Matthew Lapaire</h3>
				<h4>Lead Mentor</h4>
				<h4>matthew_lapaire@dpsk12.net</h4>
			</div>
		</div>
</template>

<style>
	
	.body{
	background-color:rgb(62, 16, 88);
	
	display:flex;
	
	}

	h2{
		text-align:center;
		color:white;
		font-family: 'Figtree', sans-serif;
	}

	h3{
		color:whitesmoke;
		text-align:center;
		font-family: 'Figtree', sans-serif;
	}

	.left{
		flex:25%
	}
	.right{
		flex:25%
	}

	table{
		flex:50%;
		min-width:600px;
		font-family: 'Figtree', sans-serif;
		border:2px solid white;
		color:white;
	}

	td{
		border-bottom:2px solid white;
		padding-bottom:10px;
		
	}

	.bottom td{
		border-bottom:none;
	}

	.people{
		display:flex;
		flex-wrap:wrap;
		justify-content:center;
	}
	.people div{
		text-align:center;
		border:4px outset rgb(100,100,100);
		margin:15px;
		padding:15px;
		min-width:285px;
		color:white;
	}


</style>