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

        <!-- FOOTER -->
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Nav from '../_shared/Navigation.vue'
    import Footer from '../_shared/Footer.vue'
    import jQuery from 'jquery';

    export default {
        data() {
          return {
              title: "TEAM"
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
        components: {
            'app-nav': Nav,
            'app-footer': Footer,
        }
</scirpt>