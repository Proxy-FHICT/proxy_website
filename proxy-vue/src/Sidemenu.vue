
<!-- DEPRECATED. NOW NAVIGATION IS IN THE NAVIGATION.VUE, MAYBE WILL BE USED LATER -->


<template>
    <div>
        <h5>
            <a class="menu-btn" v-on:click="closemenu">
                <i class="fa fa-times" aria-hidden="true"></i>
            </a>
            <a class="menu-title" href="#init"><b>PROXY:/ </b></a>
        </h5>
    </div>
</template>

<script>

export default {
 
        data() {
          return {
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

              ]
          }
        },
        methods: {
            closemenu() {
                // event to emit the close of the menu
            }
        },
}
</script>