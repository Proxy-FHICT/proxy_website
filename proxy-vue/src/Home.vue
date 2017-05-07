<template>
    <div>
    
        <!-- WELCOME -->
        <!-- issue 2 -->
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
        <div id="init"></div>
    
        <!-- QUOTE -->
        <!-- issue 3, assigned: Dmitrii -->
        <section id="we-are">
            <div id="homequote" class="container section">
                <div class="row">
                    <div class="c12 columns">
                        <!-- not sure abou the code styling to be used here in the end -->
                        <!--<pre><code>
                        We are proxy, the student association for the ICT English stream
                        Our job is to connect students to each other and companies    
                        </code></pre>-->
                        <h4 class="centered-hor">
                            We are proxy, the student association for the ICT English stream
                            <br/> Our job is to connect students to each other and companies
                        </h4>
                    </div>
                </div>
                <div class="row">
                    <div class="c8 off-c2 columns centered-hor">
                        <pre><code class="smallmargin">What is Proxy?
"... A proxy, in its most general form, is a class 
functioning as an interface to something else. 
The proxy could interface to anything:..."" 
-- <a href="https://en.wikipedia.org/wiki/Proxy_pattern" target="_blank">Wikipedia</a>  --</code></pre>
                        <h4>
                            And so we are the interface to fun!
                        </h4>
                    </div>
                </div>
            </div>
        </section>
        <!-- END OF QUOTE -->
    
        <!-- SERVICES -->
        <!-- issue 4, assigned: Dmitrii -->
        <section id="services" >
            <div class="container section">
                <div class="row">
                    <h1 class="centered-hor section-head">
                        Event Types
                    </h1>
                </div>
                <div class="row top-margin">
                    <div class="c3 columns centered-hor">
                        <!-- pictures need to be changed -->
                        <img src="./assets/basic_star.png" class="value-img" />
                        <h5>Party</h5>
                        <h6>Meet other students, share drinks and have fun</h6>
                    </div>
                    <div class="c3 columns centered-hor">
                        <img src="./assets/basic_star.png" class="value-img" />
                        <h5>Classes</h5>
                        <h6>Learn more about IT at our workshops and lectures</h6>
                    </div>
                    <div class="c3 columns centered-hor">
                        <img src="./assets/basic_star.png" class="value-img" />
                        <h5>Competitions</h5>
                        <h6>Join our gaming and sports challenges to WIN BIG</h6>
                    </div>
                    <div class="c3 columns centered-hor">
                        <img src="./assets/basic_star.png" class="value-img" />
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

        <div class="container section no-bottom-margin">
            <div class="row">
                <div class="c8 off-c2 columns centered-hor">
                    <i class="fa fa-heartbeat fa-5x" aria-hidden="true"></i>
                    <i><p><br/>Made with love by Proxy Fhict.<br/>Edition 2017</p></i>
                </div>
            </div>
        </div>

        <!-- END OF FOOTER -->

    </div>
</template>

<script>
    import Agenda from './Agenda.vue';
    import Contacts from './Contacts.vue';
    // import {$, jQuery} from 'jquery';

    export default {
        data() {
          return {
              
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
        }
    }
</script>