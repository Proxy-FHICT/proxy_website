<!-- CONTACTS -->
<!-- issue 6 -->
    <template>
        <section>
            <div id="contacts" class="container section">
                <div class="row centered-hor">
                    <h1 class="section-head">
                        Contacts
                    </h1>
                    <img src="./assets/floorplan_med_lng.png" class="value-img" style="max-width: 100%; max-height: 100%; height:100%" />
                </div>
               <!-- 
                <div class="row">
                    <div id="floorplan-column">
                        <div id="locations-img" class="c10 off-c1 columns centered-hor">
                            <!-- Done! needs replacement to the floor plan of fontys - ->
                                <img src="./assets/floorplan_med_lng.png" class="value-img" style="max-width: 100%; max-height: 100%; height:100%" />
                            
                        </div>
                    </div>
                </div>
               -->
                <div class="row top-margin">
                    <div id="locations-txt" class="c4 columns centered-hor">
                        <h5>Address</h5>
                        <!--Latitude:51.452371°
                            Longitude:5.481289°-->
                        <h6>Rachelsmolen 1<br/>5612 MA Eindhoven<br/>Noord-Brabant</h6>
                    </div> 
                    <div id="locations-txt" class="c4 columns centered-hor">
                        <!-- would be awesome to make it centered -->
                        <h5>Proxy Room</h5>
                        <h6>2.60<br/>Second Floor<br/>Fontys R1<br/><br/></h6>
                        <!-- need to preserve double line space -->
                    </div>       
                    <div id="locations-txt" class="c4 columns centered-hor">
                        <h5>Reach Us</h5>
                        <h6>
                        <i class="fa fa-compass" aria-hidden="true"></i> &#160&#160<a href="https://www.google.com/maps?q=Fontys%20-%20Campus%20Rachelsmolen" target="_blank">51.452371; 5.481289</a>
                        <br/>
                        <i class="fa fa-envelope-open-o left" aria-hidden="true"></i> &#160&#160<a href="mailto:name@example.com" target="_blank">ei-proxy@fontys.nl</a>
                        <br/>
                        <i class="fa fa-facebook left" aria-hidden="true"></i> &#160&#160<a href="https://www.facebook.com/FontysProxy" target="_blank">.com/FontysProxy</a>
                        </h6>
                    </div>
                   
                </div>
            </div>
        </section>
    </template>
<!-- END OF CONTACTS -->

<script>

export default {
 
        data() {
          return {
              // nothig really
          }
        },
        created() {
            // // resize the image column to fit the text column
            // function adjustColumns(){
            //     let textheight = document.getElementById("locations-txt").offsetHeight;
            //     console.log(textheight);
            //     let imagecolumn = document.getElementById("locations-img");
            //     imagecolumn.style.height = textheight +'px';
            //     console.log("resized columns");
            //     // set image to center

            // };
            // document.addEventListener("DOMContentLoaded", function(event) {
            //     adjustColumns();
            // });
        }
}
</script>
