// This is the main entry point of all the javascript and all the vue modules will be loaded here
<template>
  <!-- must have one root element -->
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
 
  data () {
    return {
      
    }
  }
}

</script>
<!--<style>
  html,
  body {
    height: 100%;
    /* not sure if any use of this */
    scroll-behavior: smooth;
    margin: 0;
  }

  .superfont{
    font-family: 'Josefin Slab', serif;
  }
  h1.superfont{
    font-size: 6.5em;
  }
  .value-img {
    display: block;
    text-align: center;
    margin: 0em auto 1em;
  }





  /* section marginining
  --------------------*/

  .section-head {
    margin-bottom: 1em;
  }





  /* horizontally centered */

  .centered-hor {
    text-align: center;
  }

  .section {
    padding-top: 10em;
  }

  .smallmargin {
    margin: 1.5em auto 1.5em;
  }

  .x2margin {
    margin: 20em auto 20em;
  }

  .x4margin {
    margin: 40em auto 40em;
  }

  .agenda-item {
    margin: 2.5em auto 2.5em;
  }

  .top-margin {
    margin-top: 2.5em;
  }

  .no-bottom-margin {
    margin-bottom: 0;
  }





  /* these two should go together */

  .center-wrap {
    /*content: "";*/
    height: 100%;
    display: table;
  }

  .centered-ver {
    display: table-cell;
    position: relative;
    vertical-align: middle;
    text-align: center;
  }

  div.header,
  header {
    height: 100%;
    background: linear-gradient( rgba(255, 125, 125, 0.45), rgba(75, 75, 75, 0.45), rgba(0, 0, 0, 0.45)), url(https://static.pexels.com/photos/306534/pexels-photo-306534.jpeg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }





  /* smaller than tablet */

  @media (max-width: 750px) {
    header {
      background-attachment: local;
    }
  }





  /* Text colors
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  .white-txt {
    color: white;
  }

  .highlight-txt {
    color: orange;
    font-weight: bold;
  }

  .emph-txt {
    font-weight: bolder;
  }

  .pale-txt {
    color: rgba(0, 0, 0, 0.5)
  }





  /* Code background colors
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  code.red-bg {
    background: rgba(255, 0, 0, 0.4)
  }

  code.blue-bg {
    background: rgba(0, 0, 255, 0.4)
  }

  code.green-bg {
    background: rgba(0, 255, 0, 0.4)
  }






  /* Icons to the left
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  i.left {
    text-align: left;
  }






  /* Transitions
  –––––––––––––––––––––––––––––––––––––––––––––––––– */


  /* maybe some other transition, I dunno... */

  .agenda-list-enter-active,
  .agenda-list-leave-active {
    transition: all 1s;
  }

  .agenda-list-enter,
  .agenda-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }






  /*.btns-enter-active,
  .btns-leave-active {
      transition: all 1s;
  }

  .btns-enter,
  .btns-leave-to {
      opacity: 0;
      transform: translateY(30px);
  }*/


  /* Cloaking
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  [v-cloak] {
    display: none;
  }


  /*
  */
  .section-label{
      display: block;
      position: static;
      padding-top: 0.1em;
  }


  /*
  [v-cloak]::after {
      content: "Loading..."
  }*/
</style>-->