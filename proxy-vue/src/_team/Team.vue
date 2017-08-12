<template>
    <div>
    
        <!-- NAVBAR -->
        <app-nav :sublinks="anchors" :title="title"></app-nav>
        <!-- END OF NAVBAR -->

        <!-- WELCOME -->
        <!-- issue: pictures relaod only on hard cache clean -->
        <header id="fullscreenimage">
            <!--header contains the background picture in css-->
            <div id="welcome" class="container center-wrap" >
                <div class="centered-hor centered-ver" style="height:inherit;">
                    <!--content goes here-->
                    <div>
                        <h1 class="white-txt superfont">Our Team</h1>
                    </div>
                </div>
            </div>
        </header>
        <!-- END OF WELCOME -->


        <!-- DEPARTMENTS -->
         <section id="activities" >
            <div class="container section">
                <div class="row">
                    <h1 class="centered-hor section-head">
                        Departments
                    </h1>
                </div>
                <div class="row top-margin">
                    <div class="c4 columns centered-hor">
                        <!-- pictures need to be changed -->
                        <img src="../assets/lnr-thumbs-up.svg" style="height: 80px;" class="value-img" />
                        <h5>Administration</h5>
                        <h6>Meet other students, share drinks and have fun</h6>
                    </div>
                    <div class="c4 columns centered-hor">
                        <!-- pictures need to be changed -->
                        <img src="../assets/lnr-thumbs-up.svg" style="height: 80px;" class="value-img" />
                        <h5>Assisting</h5>
                        <h6>Meet other students, share drinks and have fun</h6>
                    </div>
                    <div class="c4 columns centered-hor">
                        <!-- pictures need to be changed -->
                        <img src="../assets/lnr-thumbs-up.svg" style="height: 80px;" class="value-img" />
                        <h5>Entertainment & Social</h5>
                        <h6>Meet other students, share drinks and have fun</h6>
                    </div>
                </div>
                <div class="row top-margin">
                    <div class="c4 columns centered-hor">
                        <!-- pictures need to be changed -->
                        <img src="../assets/lnr-thumbs-up.svg" style="height: 80px;" class="value-img" />
                        <h5>Infrastructure</h5>
                        <h6>Meet other students, share drinks and have fun</h6>
                    </div>
                    <div class="c4 columns centered-hor">
                        <!-- pictures need to be changed -->
                        <img src="../assets/lnr-thumbs-up.svg" style="height: 80px;" class="value-img" />
                        <h5>Internal & External</h5>
                        <h6>Meet other students, share drinks and have fun</h6>
                    </div>
                    <div class="c4 columns centered-hor">
                        <!-- pictures need to be changed -->
                        <img src="../assets/lnr-thumbs-up.svg" style="height: 80px;" class="value-img" />
                        <h5>Teaching</h5>
                        <h6>Meet other students, share drinks and have fun</h6>
                    </div>
                </div>
            </div>
        </section>

        <!-- FOOTER -->
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Nav from '../_shared/Navigation.vue'
    import Footer from '../_shared/Footer.vue'

    export default {
        data() {
          return {
              title: "TEAM",
              anchors: [
                   
              ]
          }
        },
        created(){

             function adjustHeader(){
                
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

        },
        components: {
            'app-nav': Nav,
            'app-footer': Footer,
        }
    }
</script>

<style scoped>
header{
    background: linear-gradient( rgba(255, 125, 125, 0.6), 
        rgba(75, 75, 75, 0.6), rgba(0, 0, 0, 0.6)), url(https://proxy-ict-api.herokuapp.com/img/team);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
</style>