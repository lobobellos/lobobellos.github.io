<template >
    <div class="main">
        <div class="custom-shape-divider-top-1660162422">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>

        <div class="columnContainer">
            <div class="column">
                <p>Social Media</p>
                <a href="https://github.com/lobobellos"><img src="../assets/github.png" alt="github"></a>

            </div>
            <div class="column">
                <p>Materials</p>
                    <a href="">Work tracker</a><br>
                    <a href="">Team contract</a><br>
                    <a href="">Letter to sponsors</a><br>
            </div>
            <div class="column">
                <p>Info for Sponsors</p>
                <a href="">Sponsorship terms</a><br>
            </div>
        </div>
        <p id="copyright">Copyright © 2022 Robo-Lobo-Bellos. All rights reserved.</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
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
        background-color:rgb(42, 42, 42) ;
    }
    
    .custom-shape-divider-top-1660162422 .shape-fill {
        fill: rgb(62, 16, 88);
    }

    .main{
        background-color:rgb(42, 42, 42) ;
        padding-bottom:15px;
    }

    .columnContainer{
        display:flex;
        flex-wrap: wrap;
        padding-left:25px;
        padding-right:25px;
    }

    .column{
      flex-grow: 4;
			text-align:center;
    }

    p{
        color:white;
        font-family: 'Figtree', sans-serif;
        text-align:center;
    }
    img{
        display:block;
        width: 25px;
        filter: invert(100%);
        margin:auto;
    }



    .column a{
        text-align:center;
        color:orange;
        font-family: 'Figtree', sans-serif;
        font-size:small;
    }

    #copyright{
        text-align:center;
        margin-bottom: 0px;
    }
</style>