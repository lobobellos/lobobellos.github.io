import { MinzeElement } from 'minze'

export class MyHeader extends MinzeElement {
  html = () => `
  <div class="header" >
    <img src="../assets/teamLogo.png" alt="team logo" >
    <div class="title">
        <h1>FIRST Robotics Team 7243</h1>
        <h3>Robo Lobo Bellos</h3>
    </div>
  </div>
  `

  css = () => 
  `
  .header{
    display:flex;
    
    background: rgb(102,40,156);
    background: linear-gradient(90deg, rgba(102,40,156,1) 0%, rgba(32,29,56,1) 100%);
}

.header img{
    width:40%;
    max-width: 150px;
    max-height: 225px;
}

.header .title {
    padding-left:5%;
    text-align:left;
    width:auto;
    color:whitesmoke;
    font-family: 'Open Sans', sans-serif;
}
  `
}
