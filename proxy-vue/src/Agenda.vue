<template>
    <!-- AGENDA -->
    <!-- issue 5, assigned: Dmitrii -->
    <section>
    
        <div id="agenda" class="container section">
            <div class="row">
                <h1 class="centered-hor section-head">
                    Agenda
                </h1>
                <div class="c6 columns">
                    <transition-group name="agenda-list">
                        <div class="agenda-item" v-for="ev in events" :key="ev.start_time" :id="ev.start_time">
                            <!--<h6>2017-03-28 : 16:00:00 - 20:00:00</h6>-->
                            <h6 v-bind:class="checkupcomingeventdate(ev)">{{geteventtime(ev)}}</h6>
                            <!--name-->
                            <h5 v-bind:class="checkupcomingeventname(ev)">{{ev.name}}</h5>
                            <!--description-->
                            <p>{{ev.description.substring(0,100)}}...
                                <br/>
                                <span style="line-height:3em;">
                                    <!-- the link is made of: https://www.facebook.com/events/ + page id from API -->
                                    <a :href="'https://www.facebook.com/events/'+ev.id" target="_blank">Updates on Facebook</a>
                                </span>
                            </p>
                        </div>
                    </transition-group>
                    <!-- Placeholder to show loading sign until the results are obtained -->
                    <!-- Actually looked ugly -->
                    <!-- <div>
                        <h4 v-text="loadingplaceholder" v-if="notloaded"></h4>
                    </div>-->
    
                    <!-- Buttons -->
                    <!--<transition name="btns">-->
                    <div id="agenda-load-buttons">
                        <button @click="getevents">
                            More Events!
                        </button>
                        <button @click="geteventsreset" v-if="activeless">
                            Show less...
                        </button>
                    </div>
                    <!--</transition>-->
    
                </div>
    
                <!--<div class="c6 off-c2 columns">-->
                <!-- place for a map? -->
                <!--<google-map :center="center" :zoom="7" style="width: 100%; height: 500px">-->
                <!--<google-marker v-for="ev in events" :position="getmarkerposition(ev)" :clickable="true" :draggable="true" @click="center=getmarkerposition(ev)"></google-marker>-->
                <!--</google-map>-->
                <!--</div>-->
            </div>
        </div>
    </section>
    <!-- END OF AGENDA -->
</template>

<script>
    import Axios from 'axios';
    // yes, this is weird, but if we want to use $ to reference jquery as we usually do, the webpack starts to complain
    import jQuery from 'jquery';

    export default {
        data() {
            return {
                events: [],
                eventnumber: 0,
                EVENTNUMBERINCREMENT: 2,
                loadingplaceholder: "Loading... ",
                notloaded: true,
                activeless: false,
            }
        },
        methods: {
            loadevents: function(number) {
                    var app = this;
                    Axios.get('https://proxy-ict-api.herokuapp.com/events/' + number) // grab data from this link
                        .then(function(response) {
                            console.dir(response);

                            app.events = response.data
                                // TODO: to hide the loading placeholder
                            app.notloaded = false;
                            if (app.eventnumber > app.EVENTNUMBERINCREMENT) {
                                app.activeless = true;
                            } else {
                                app.activeless = false;
                            }
                        })
                        .catch(function(error) { // error occured case
                            app.events = [];
                        })
                },
                getevents: function() {
                    // because of inheritance we need to get the reference to the app
                    this.notloaded = true;
                    this.eventnumber += this.EVENTNUMBERINCREMENT;

                    // TODO: make a promise out of it, and scroll to the one before the last event
                    this.loadevents(this.eventnumber)
                    

                    // agenda-load-buttons
                    // jQuery("html, body").animate({
                    //     scrollTop: jQuery("#"+this.events[this.events.length-this.EVENTNUMBERINCREMENT].start_time).offset().top - 150
                    // }, 500);
                },
                geteventsreset: function() {
                    // because of inheritance we need to get the reference to the app
                    this.notloaded = true;
                    this.eventnumber = this.EVENTNUMBERINCREMENT; // reset
                    this.loadevents(this.eventnumber);
                    // scroll back to top
                    jQuery("html, body").animate({
                        scrollTop: jQuery("#agenda").offset().top
                    }, 500);
                },
                // since the time is returned as string it is not parsed into datetime by default
                // this custom method prepares the correct representation of the date
                // a really shitty way it is
                geteventtime: function(event) {
                    let ds = new Date(event.start_time);
                    let de = new Date(event.end_time);

                    function addZero(i) {
                        if (i < 10) {
                            i = "0" + i;
                        }
                        return i;
                    };
                    function monthName(number){
                        let months=[
                            "January", "February", "March", "April",
                            "May", "June", "July", "August",
                            "September", "October", "November", "December",
                        ];
                        return months[number];
                    }
                    // old version
                    // let datestring = ds.getFullYear() + '-' + ds.getMonth() + '-' + ds.getDate() + ': ' +
                    //     addZero(ds.getHours()) + ':' + addZero(ds.getMinutes()) + ' - ' +
                    //     addZero(de.getHours()) + ':' + addZero(de.getMinutes());
                    
                    let datestring = ds.getDate() + ' ' + monthName(ds.getMonth()) + ': ' +
                        addZero(ds.getHours()) + ':' + addZero(ds.getMinutes()) + ' - ' +
                        addZero(de.getHours()) + ':' + addZero(de.getMinutes());

                    return datestring;
                },
                // this method is used to check whether the event is yet to come or has already taken place
                checkupcomingeventname: function(event) {
                    let ds = new Date(event.start_time);
                    if (ds >= Date.now()) {
                        return "bigger-txt";
                    } else {
                        return "pale-txt";
                    }
                },
                checkupcomingeventdate: function(event) {
                    let ds = new Date(event.start_time);
                    if (ds >= Date.now()) {
                        return "bigger-txt highlight-txt";
                    } else {
                        return "pale-txt";
                    }
                }

        },

        // lifecycle hook
        // abc() is a shorthand for: abc: function() {...}
        created(){
            this.getevents();
        }
    }
</script>