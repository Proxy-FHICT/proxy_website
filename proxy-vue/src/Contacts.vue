<!-- CONTACTS -->
<!-- issue 6 -->
    <template>
        <section>
            <div id="contacts" class="container section">
                <div class="row centered-hor section-head">
                    <h1 class="">
                        Contacts
                    </h1>
                    <!--
                    <div class="c6 columns off-c3">
                        <br/>
                        <p>We are always happy to see you, answer all the questions and offer all the help <span class="pale-txt">(and cookies)</span> we can</p>
                    </div>
                    -->
                </div>
                <div class="row top-margin-lg">
                    <div id="floorplan-column">
                        <div id="locations-img" class="c6 columns centered-hor">
                            <!-- Done! needs replacement to the floor plan of fontys -->
                            
                                <img src="./assets/floorplan_med.png" style="max-width: 100%; max-height: 100%; min-width:100%" />
                            
                        </div>
                    </div>
                    <div id="locations-txt" class="c5 columns off-c1 centered-hor">
                        <!-- would be awesome to make it centered -->
                        <h5><b>Proxy Room</b></h5>
                        <p>2.60<br/>Second Floor<br/>Fontys R1<br/><br/></p>
                        <!-- need to preserve double line space -->
                        <h6><b>Address</b></h6>
                        <!--Latitude:51.452371°
                            Longitude:5.481289°-->
                        <p><i class="fa fa-compass" aria-hidden="true"></i> &#160&#160<a href="https://www.google.com/maps?q=Fontys%20-%20Campus%20Rachelsmolen" target="_blank">51.452371; 5.481289</a>
                            <br/>Rachelsmolen 1<br/>5612 MA Eindhoven<br/>Noord-Brabant</p>

                        <h6><b>Reach Us</b></h6>
                        <p><i class="fa fa-envelope-open-o left" aria-hidden="true"></i> &#160&#160<a href="mailto:name@example.com" target="_blank">ei-proxy@fontys.nl</a><br/>
                            <i class="fa fa-facebook left" aria-hidden="true"></i> &#160&#160<a href="https://www.facebook.com/FontysProxy" target="_blank">.com/FontysProxy</a>
                        </p>
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
            // resize the image column to fit the text column
            function adjustColumns(){
                let textheight = document.getElementById("locations-txt").offsetHeight;
                console.log(textheight);
                let imagecolumn = document.getElementById("locations-img");
                imagecolumn.style.height = textheight +'px';
                console.log("resized columns");
                // set image to center

            };
            document.addEventListener("DOMContentLoaded", function(event) {
                adjustColumns();
            });
        }
}
</script>
