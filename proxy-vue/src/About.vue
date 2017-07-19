<template>
    <div>
    
        <!-- NAVBAR -->
        <app-nav :sublinks="anchors"></app-nav>
        <!-- END OF NAVBAR -->

        <!-- WELCOME -->
        <!-- issue: pictures relaod only on hard cache clean -->
        <header id="fullscreenimage">
            <!--header contains the background picture in css-->
            <div id="welcome" class="container center-wrap" >
                <div class="centered-hor centered-ver" style="height:inherit;">
                    <!--content goes here-->
                    <div>
                        <h1 class="white-txt superfont">What is PROXY?</h1>
                    </div>
                </div>
            </div>
        </header>
        <!-- END OF WELCOME -->

        <!-- DEFINITION -->

        <app-quote></app-quote>

        <!-- END OF DEFINITION -->

        <!-- STORY -->
        <section id="story" >
            <div class="container section">
                <div class="row">
                    <h1 class="centered-hor section-head">
                        Our Story
                    </h1>
                </div>
                <div class="row top-margin">
                <!-- TODO: Make a separate css class - it's totally fucked up to have these pictures have inline css... -->
                    <div class="c5 columns centered-hor centered-text">
                        <h5>How did it all begin?</h5>
                        <h6>Proxy started in May 2015. A board of 7 members were selected from the intersted students.</h6>
                    </div>
                    <!--<div class="c5 off-c2 columns centered-hor" @mouseover="grow('#board')" @mouseleave="shrink('#board')">-->
                    <div class="c5 off-c2 columns centered-hor">
                        <img id="board" src="./assets/board.jpg" class="picture" />
                    </div>
                </div>
                
                <div class="row top-margin-lg">
                    <div class="c5 columns centered-hor">
                        <img src="./assets/fun.jpg" class="picture" />
                    </div>
                    <div class="c5 off-c2 columns centered-hor centered-text">
                       <h5>What for?</h5>
                       <h6>Proxy was created, to become an association bringing students together and organizing educational and fun events.</h6>
                    </div>
                </div>
                <div class="row top-margin-lg">
                    <div class="c5 columns centered-hor centered-text">
                        <h5>What are we proud of?</h5>
                        <h6>Not everyone knows, but we had a poster of Jessica Alba hidden for 2 years on a poster wall :D</h6>
                    </div>
                    <div class="c5 off-c2  columns centered-hor">
                        <img src="./assets/jessica-alba.jpg" class="picture" />
                    </div>
                </div>
            </div>
        </section>
        <!-- END OF STORY -->

        <!-- STRUCTURE -->
        <!-- deprecated, already too long of a page
        <section id="prefooter" >
            <div class="container section">
                <div class="row centered-hor ">
                    <h2 class="section-head">
                        Our Structure
                    </h2>
                </div>
                <!-- department section -->
                <!--
                <div class="container">
                    <div class="row">
                        <div class="c8 columns off-c2 container">
                            <div @click="">
                            <h4>PROXY / President <i class="fa fa-chevron-down" 
                                style="float: right; color: grey;" aria-hidden="true"></i></h4>  
                            </div>
                            <div class="row top-margin" id="department-expansion">
                                <div class="c5 columns">
                                    Ahdaksjdhaksd
                                </div>
                                <div class="c6 off-c1 columns">
                                    Fafafa
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        -->
        <!-- END OF STRUCTURE -->


        <!-- PREFOOTER -->
        <!-- deprecated, looks ugly
        <section id="prefooter" >
            <div class="container section">
                <div class="row centered-hor ">
                    <h2 class="section-head">
                        Let's have fun together!
                    </h2>
                </div>
            </div>
        </section>
        -->
        <!-- END OF PREFOOTER -->

        <!-- FOOTER -->
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Nav from './Navigation.vue'
    import Footer from './Footer.vue'
    import jQuery from 'jquery';
    import Quote from './ProxyQuote.vue';

    export default {
        data() {
          return {
              anchors: [
                    {
                      name: "SIMPLY",
                      url:"#simply"
                    },
                    {
                      name: "STORY",
                      url:"#story"
                    }
              ]
          }
        },
        methods: {
            grow: function(id){
                //console.log("hey");
                // TODO: do grow
            },
            shrink: function(id){
                // TODO: do shrink
            },
            toogleDepartmentExpansion: function(){

            }
        },
        created() {

            // will set the header to 1/2nd
            function adjustHeader(){
                // TODO: set the background picture for the header
            
                let wh = document.body.clientHeight;
                console.log(wh);
                let welcome = document.getElementById('welcome');
                // 1/2 of the screen size
                // welcome.style.height = Math.floor(wh/2) +'px';
                // fullscreen
                welcome.style.height = Math.floor(wh) +'px';
                console.log("resized");
            }

            document.addEventListener("DOMContentLoaded", function(event) {
                adjustHeader();
            });
            window.onresize = adjustHeader;

            // window.location.reload(true);                

            // document.getElementById("welcome").style.height = wh +'px';
            // $('#welcome').height(wh);
        },
        components: {
            'app-nav': Nav,
            'app-footer': Footer,
            'app-quote': Quote,
        }
    }

    //https://proxy-ict-api.herokuapp.com/img/random
</script>


<style scoped>
header{
    background: linear-gradient( rgba(255, 125, 125, 0.6), rgba(75, 75, 75, 0.6), rgba(0, 0, 0, 0.6)), url(https://proxy-ict-api.herokuapp.com/img/random);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.largecode{
    font-size: 1.5rem;
}
/*
 .section{
    padding-top: 5em;
 }
*/
.picture{
    display: block; 
    max-width: 100%;  
    height: auto; 
    width: 100%;
}

.codequote{
    display: block;
    padding: 1rem 1.5rem;
    background: #F1F1F1;
    border: 1px solid #E1E1E1;
    border-radius: 4px;
    font-family: monospace, monospace;
}

</style>