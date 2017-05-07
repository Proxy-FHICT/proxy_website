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
                <a class="menu-title" href="#init"><b>PROXY:/ </b></a>
            </h5>
        </div>
        <!-- navigation itself -->
        <div class="navigation sidemenu" v-if="menuactive">
            <div>
                <h5>
                    <a class="menu-btn" v-on:click="closemenu">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </a>
                    <a class="menu-title" href="#init"><b>PROXY:/ </b></a>
                </h5>
            </div>
            <div class="links">
                <ul class="whitish-txt ">
                    <li v-for="path in paths">
                        <a :href="path.url">{{path.name}}</a>
                        <ul v-if="path.sublinks.length>0" class="sublinks">
                            <li v-for="sublink in path.sublinks" class="greyish-txt">
                                <a :href="'/'+sublink.url"><i>{{sublink.name}}</i></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<!-- END OF NAVBAR -->

<style scoped>
.sidemenu{
    background: rgba(25,0,0,0.8);
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
  color: rgba(255, 255, 255, 0.25);
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
    margin-left: 1.8em;
}
.sublinks{
    margin-top:0;
    margin-bottom: 0.5em;
}

.whitish-txt{
    color: rgba(255,255,255,0.8);
}
.greyish-txt{
    color: rgba(255,255,255,0.25);
}

</style>


<script>

export default {
 
        data() {
          return {
              menuactive: false,
              paths: [
                  {
                      name: "HOME",
                      url: "/",
                      sublinks: [
                          {
                            name: "agenda",
                            url: "#agenda", 
                          },
                          {
                            name: "contacts",
                            url: "#contacts", 
                          },
                      ]
                  },
                  {
                      name: "ABOUT",
                      url: "/about",
                      sublinks: [],
                  }

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
        }
}
</script>