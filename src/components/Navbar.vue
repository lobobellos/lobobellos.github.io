<template>
  <div class="navbar">
    <router-link to="/"><div>About us</div></router-link>
    <a href="http://www.thebluealliance.com/team/7243"><div>Event history</div></a>
    <router-link to="/first"><div>What is FIRST</div></router-link>
    <router-link to="/sponsor"><div>Sponsor us</div></router-link>
    <router-link to="/sponsors"><div>Current sponsors</div></router-link>
    <router-link to="/contact"><div>Contact us</div></router-link>
  </div>
  
  <div class="custom-shape-divider-top-1660162422">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>
</template>

<script setup>

</script>

<style scoped>
.navbar{
    background-color:rgb(46, 46, 46);
    display:flex;
    flex-wrap: wrap
}

.navbar a div{
    flex:20%;
    background-color:rgb(46, 46, 46);
    color:whitesmoke;
    padding:1rem;
    padding-top:0.75rem;
    min-width: 75px;
    font-size:1.3rem;
    transition: 300ms;
    font-family: 'Oswald', sans-serif;
}

.navbar a:link{
    text-decoration:none;
}
.navbar a:visited{
    text-decoration:none;
}
.navbar a:hover{
    text-decoration:none;
}
.navbar a:active{
    text-decoration:none;
}
.navbar a div:hover{
    background-color:rgb(109, 56, 122);
}
  

.custom-shape-divider-top-1660162422 {
    
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1660162422 svg {
  position: relative;
  display: block;
  width: calc(150% + 1.3px);
  height: 80px;
  background-color:rgb(62, 16, 88) ;
}

.custom-shape-divider-top-1660162422 .shape-fill {
  fill: rgb(46, 46, 46);
}
</style>