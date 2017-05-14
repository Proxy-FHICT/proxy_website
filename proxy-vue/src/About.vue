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
        <section>
            <div class="section container">
                <div class="row">
                    <div class="c8 off-c2 columns centered-hor">
                         <h3>According to the definition...</h3>
                            <pre><code class="smallmargin largecode">"... A proxy, in its most general form, is a class 
functioning as an interface to something else. 
The proxy could interface to anything:..." 
                                            -- <a href="https://en.wikipedia.org/wiki/Proxy_pattern" target="_blank">Wikipedia</a>  -- 
</code></pre>
                        <h3>
                            And so we povide the interface to fun!
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        <!-- END OF DEFINITION -->

        <!-- STORY -->
        <section id="activities" >
            <div class="container section">
                <div class="row">
                    <h1 class="centered-hor section-head">
                        Our Story
                    </h1>
                </div>
                <div class="row top-margin">
                    <div class="c5 off-c1 columns">
                       
                    </div>
                </div>
            </div>
        </section>
        <!-- END OF STORY -->

        <!-- STORY -->
        <!-- END OF STORY -->

        <!-- FOOTER -->
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Nav from './Navigation.vue'
    import Footer from './Footer.vue'
    // import {$, jQuery} from 'jquery';

    export default {
        data() {
          return {
              anchors: []
          }
        },
        methods: {

        },
        created() {
            // will set the header to 1/2nd
            function adjustHeader(){
                let wh = document.body.clientHeight;
                console.log(wh);
                let welcome = document.getElementById('welcome');
                welcome.style.height = Math.floor(wh/2) +'px';
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
            'app-nav': Nav,
            'app-footer': Footer,
        }
    }

    //https://proxy-ict-api.herokuapp.com/img/random
</script>


<style scoped>
header{
    background: linear-gradient( rgba(255, 125, 125, 0.45), rgba(75, 75, 75, 0.45), rgba(0, 0, 0, 0.45)), url(https://proxy-ict-api.herokuapp.com/img/random);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.largecode{
    font-size: 1.5rem;
}

.section{
    padding-top: 5em;
}
</style>