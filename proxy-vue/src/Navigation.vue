 <!-- NAVBAR -->
<template>
    <!-- issue 1 -->
    <!-- THIS REALLY REQUIRES A SEPARATE VUE COMPONENT! -->
    <div>
        <div class="navigation" v-if="!(menuactive)">
            <h5>
                <a class="menu-btn" v-on:click="showmenu">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
                <!-- <a class="menu-title" href="#init"><b>PROXY </b></a> -->
            </h5>
        </div>
        <!-- navigation itself -->
        <transition name="slide">
            <div class="navigation sidemenu" v-if="menuactive">
                <div class="close handler">
                    <h5>
                        <a class="menu-btn" v-on:click="closemenu">
                            <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                        </a>
                    </h5>
                </div>
                <div>
                    <h5>
                        <a class="menu-title" href="#"  @click="closemenu"><b>PROXY</b></a>
                    </h5>
                </div>
                <div class="links level" v-if="anchors.length>0">
                    <ul class="whitish-txt">
                        <li v-for="anchor in anchors">
                            <a :href="anchor.url" @click="closemenu">#{{anchor.name.toLowerCase()}}</a>
                        </li>
                    </ul>
                </div>
                <div class="links level">
                    <ul class="whitish-txt ">
                        <li v-for="path in paths">
                            <a :href="path.url" @click="closemenu">{{path.name.toUpperCase()}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
    </div>
</template>


<!-- END OF NAVBAR -->

<style scoped>


/* Menu stuff
–––––––––––––––––––––––––––––––––––––––––––––––––– */

.navigation a.menu-btn:hover,
.navigation a.menu-title:hover {
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.navigation a.menu-btn,
.navigation a.menu-title {
  color: rgba(0, 0, 0, 0.25);
  text-decoration: none;
}

.navigation {
  z-index: 1;
  position: fixed;
  padding: 1em 1em 1em 1em;
}

.navigation * {
  display: inline-block;
/*   margin-bottom: 0;*/
}


/* Transition stuff
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.slide-enter-active, .slide-leave-active {
  transition: .4s
}
.slide-enter, .slide-leave-to /* .fade-leave-active in <2.1.8 */ {
  transform: translateX(-300px);
}

.sidemenu{
    background: rgba(25,0,0,1);
    float: right;
    height: 100%;
}

.navigation.sidemenu a.menu-btn:hover,
.navigation.sidemenu a.menu-title:hover {
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
}

.navigation.sidemenu a.menu-btn,
.navigation.sidemenu a.menu-title {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
}

.navigation.sidemenu {
  width: 250px;
}
.navigation.sidemenu div{
    display: block;
}

.navigation.sidemenu .links * {
    display: block;
}
.links{
    
}

.whitish-txt{
    color: rgba(255,255,255,0.8);
}
.greyish-txt{
    color: rgba(255,255,255,0.25);
}

.sidemenu .links a{
    font-weight: bolder;
    padding-top: 0.5em;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
}
.sidemenu .links a:hover{
    color: rgba(255, 255, 255, 0.8);
}
.close.handler{
    float:right;
}

div.links.level{
    border-top: rgba(255,255,255,0.4) 1pt solid;
    padding-top: 0.7em;
}
</style>


<script>

export default {
        props: ['sublinks'],
        data() {
          return {
              menuactive: false,
              paths: [
                  {
                      name: "HOME",
                      url: "/",
                  },
                //   {
                //       name: "ABOUT",
                //       url: "/about",
                //   }

              ],
          }
        },
        methods: {
            showmenu() {
                console.log(this.menuactive);
                this.menuactive = true;
                console.log("on");
            },
            closemenu() {
                  console.log(this.menuactive);
                this.menuactive = false;
                console.log("off");
            }
        },
        computed: {
            anchors() {
                if(this.sublinks != null){
                    for(let i=0; i<this.sublinks.length; i++){
                        console.dir(this.sublinks[i]);
                    }
                    return this.sublinks;
                }
                return [];
            }
        }
}
</script>