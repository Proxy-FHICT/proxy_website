<template>
    <div>
        <!-- NAVBAR -->
        <!-- issue 1 -->
        <!-- THIS REALLY REQUIRES A SEPARATE VUE COMPONENT! -->
        <app-nav :sublinks="anchors"></app-nav>
        <!-- END OF NAVBAR -->

        <!-- WELCOME -->
        <!-- issue 2 -->
        <!-- the huge ass picture is loading rather slow -->
        <header id="fullscreenimage">
            <!--header contains the background picture in css-->
            <div id="welcome" class="container center-wrap" >
                <div class="centered-hor centered-ver" style="height:inherit;">
                    <!--content goes here-->
                    <div>
                        <img src="./assets/proxy.png" style="max-width:100%; max-height:100%;" />
                    </div>
                </div>
            </div>
        </header>
        <!-- section closing tag -->
    
        <!-- END OF WELCOME -->
        <!--<div id="init"></div>-->
    
        <!-- QUOTE -->
        <!-- issue 3, assigned: Dmitrii -->
        <section id="we-are">
            <div id="homequote" class="container section double-top-padding">
                <div class="row">
                    <div class="c12 columns">
                        <!-- not sure abou the code styling to be used here in the end -->
                        <!--<pre><code>
                        We are proxy, the student association for the ICT English stream
                        Our job is to connect students to each other and companies    
                        </code></pre>-->
                        <div class="row">
                            <h1 class="centered-hor section-head">
                                Hello, we are PROXY!
                            </h1>
                            <img src="./assets/proxy-interface.svg" 
                                style="height: 160px" class="value-img" />
                        </div>
                        <div class="row top-margin centered-hor">
                                <!-- Rewise the text... -->
                                <h5>We are the student association for the ICT English stream</h5>
                                <h6/>Our job is to connect students to each other and companies</h6>
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
        <!-- END OF QUOTE -->
    
        <!-- SERVICES -->
        <!-- issue 4, assigned: Dmitrii -->
        <section id="activities" >
            <div class="container section">
                <div class="row">
                    <h1 class="centered-hor section-head">
                        Our Activities
                    </h1>
                </div>
                <div class="row top-margin">
                    <div class="c3 columns centered-hor">
                        <!-- pictures need to be changed -->
                        <img src="./assets/lnr-magic-wand.svg" style="height: 80px;" class="value-img" />
                        <h5>Party</h5>
                        <h6>Meet other students, share drinks and have fun</h6>
                    </div>
                    <div class="c3 columns centered-hor">
                        <img src="./assets/lnr-pie-chart.svg" style="height: 80px;" class="value-img" />
                        <h5>Classes</h5>
                        <h6>Learn more about IT at our workshops and lectures</h6>
                    </div>
                    <div class="c3 columns centered-hor">
                        <img src="./assets/lnr-rocket.svg" style="height: 80px;" class="value-img" />
                        <h5>Competitions</h5>
                        <h6>Join our gaming and sports challenges to WIN BIG</h6>
                    </div>
                    <div class="c3 columns centered-hor">
                        <img src="./assets/lnr-heart.svg" style="height: 80px;" class="value-img" />
                        <h5>Support</h5>
                        <h6>We are always ready to help with any troubles</h6>
                    </div>
                </div>
            </div>
        </section>
        <!-- END OF SERVICES -->
    
        <!-- AGENDA -->
        <!-- issue 5, assigned: Dmitrii -->
        
        <app-agenda></app-agenda>

        <!-- END OF AGENDA -->

        <!-- CONTACTS -->
        <!-- issue 6 -->
        <app-contacts></app-contacts>
        <!-- END OF CONTACTS -->

        <!-- FOOTER -->
        <!-- issue 7 -->
        <app-footer></app-footer>

        <!-- END OF FOOTER -->

    </div>
</template>

<script>
    import Agenda from './Agenda.vue';
    import Contacts from './Contacts.vue';
    import Nav from './Navigation.vue';
    import Footer from './Footer.vue';
    // import {$, jQuery} from 'jquery';

    export default {
        data() {
          return {
              anchors: [
                  {
                      name: "HELLO",
                      url: "#we-are",
                  },
                  {
                      name: "AGENDA",
                      url: "#agenda",
                  },
                  {
                      name: "CONTACTS",
                      url: "#contacts",
                  }
                  
              ]
          }
        },
        methods: {

        },
        created() {
            function adjustHeader(){
                let wh = document.body.clientHeight;
                console.log(wh);
                let welcome = document.getElementById('welcome');
                welcome.style.height = wh +'px';
                console.log("resized");
            }

            document.addEventListener("DOMContentLoaded", function(event) {
                adjustHeader();
            });
            window.onresize = adjustHeader;
            // document.getElementById("welcome").style.height = wh +'px';
            // $('#welcome').height(wh);
        },
        components: {
            'app-agenda': Agenda,
            'app-contacts': Contacts,
            'app-nav': Nav,
            'app-footer': Footer,
        }
    }
</script>