<template>
	<h3>Multiple team representitives would love to get in contact with you</h3>
	<div class='body'>
		
		<div class='left'></div>
		<table>
			<tbody>
				<tr >
			    <td>Maryam Rahimie</td>
			    <td>Team Affairs</td>
			    <td>m.rhimie2@gmail.com (720)-276-3416 (cell)</td>
			  </tr>
			  <tr>
			    <td>Robert Davis Jr</td>
			    <td>(Team Affairs)</td>
			    <td>rob2davis2@gmail.com (720)-815-8794 (cell)</td>
			  </tr>
			  <tr class='bottom'>
			    <td>Matthew Lapaire</td>
			    <td>(Lead Mentor)</td>
			    <td>matthew_lapaire@dpsk12.net</td>
			  </tr>
			</tbody>
		</table>
		<div class='right'></div>
	</div>
</template>

<script>
export default {};
</script>

<style>
	template{
		
	}
	
	.body{
	background-color:rgb(62, 16, 88);
	font-family: 'Figtree', sans-serif;
	display:flex;
	
	}

	h3{
		color:whitesmoke;
		text-align:center;
		
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
		color:whitesmoke;
		border:2px solid white;
	}

	td{
		border-bottom:2px solid white;
		padding-bottom:10px;
		
	}

	.bottom td{
		border-bottom:none;
	}


</style>