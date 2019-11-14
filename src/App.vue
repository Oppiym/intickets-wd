<template>
  <v-app>
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            v-model="venue"
            @input="uploadEventsToSecondSelect"
            :items="listofVenues"
            label="Выберете площадку"
          ></v-select>
        </v-col>
        <v-col class="d-flex" cols="12" sm="6">
          <v-select
            v-model="show"
            :items="listofEvents"
            filled
            label="Выберете мероприятие"
          ></v-select>
        </v-col>
      </v-row>
      <v-row v-if="isSelected">
        <v-col
          v-for="(event, i) in events"
          :key="i"
          cols="12"
          sm="6"
          md="3"
          lg="2"
          xl="2"
        >
          <v-card
            v-if="venue === event.venue_title || show === event.event_title && event.venue_title"
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>{{ event.event_title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{
              event.show_start
            }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ event.venue_title }}</div>
              <div>{{ event.hall_title }}</div>
        <!---      <div>{{ ticketCost }}</div> -->
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Купить билет </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>

  <!--  <v-container class="grey lighten-5">
    <v-row class="mb-6" no-gutters v-for="venue in venues" :key="venue">
      <v-row class="mb-6" no-gutters>

        <v-card align="center" width="100%" class="pa-2" tile><h2>{{ venue }}</h2>

          <v-card v-for="(event, i) in events" :key="i" max-width="400">

            <v-card v-if="venue === event.venue_title">

              <v-img height="200px" src="">
                <v-card-title>{{ event.event_title }}</v-card-title>
              </v-img>

              <v-card-subtitle>{{ event.venue_title }}</v-card-subtitle>

              <v-card-text>
                <div>{{ event.show_start }}</div>
                <div>{{ event.hall_title }}</div>
                <div>{{ event.hall_title }}</div>
              </v-card-text>

              <v-card-actions> <v-btn> Купить билет </v-btn> </v-card-actions>
            </v-card>
          </v-card>
        </v-card>
      </v-row>
    </v-row>
  </v-container>
-->
</template>

<script>
import { HTTP } from "./http-common";

export default {
  name: "App",
  data: () => ({
    show: "",
    venue: "",
    events: [],
    errors: [],
  }),
  created() {
    HTTP.get("shows/0/0/0/0")
      .then(response => {
        this.events = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    uploadEventsToSecondSelect() {
        alert ('sdfdf')
      return;
    }
  },
  computed: {
    isSelected() {
        var check = this.venue || this.show
        console.log(check )
      return this.venue || this.show;
    },
    listofVenues() {
        var i;
        var venue_titles = [];
        var venue_titles_formatted = [];
        var j = 0;
        var b = 1;
        for (i = 0; i < this.events.length; i++) {
          venue_titles.push(this.events[i].venue_title);
        }
        venue_titles_formatted = Array.from(new Set(venue_titles));
        venue_titles_formatted[j] = venue_titles_formatted.splice(b,1,venue_titles_formatted[j])[0]
      return venue_titles_formatted },

      listofEvents(){
          var i;
          var event_titles = []
          var shows = []
          for (i = 0; i < this.events.length; i++) {
            event_titles.push(this.events[i].event_title);
          }
          shows = Array.from(new Set(event_titles));

          return shows
      }

    /*  ticketCost(){
          var i
          var cost= 'лайла'

         for (i = 0; i < this.events.length; i++){

            /* cost = this.events[i].cost.max || this.events[i].cost.min === null && this.events[i].cost.max || this.events[i].cost.min === undefined ? i++ : this.events[i].cost.min +' - ' + this.events[i].cost.max;*/
/*            }
        return cost
}*/


    /* old venues
       var i;
       var venue_titles = [];
       var venue_titles_formatted = [];
       //Создаем новый массив со всеми названиями площадок
       for (i = 0; i < this.events.length; i++) {
         venue_titles.push(this.events[i].venue_title);
       }
       //Оставляем только уникальные номера площадок
       venue_titles_formatted = Array.from(new Set(venue_titles));

       //Необходимая площадка на первом месте
       var j = 0;
       var b = 1;
       venue_titles_formatted[j] = venue_titles_formatted.splice(b,1,venue_titles_formatted[j])[0];*/

    /*    realCost: function(){
        return this.event.cost.min + '-' + this.event.cost.max
    },
    */
    /*
      filteredShows (shows) {
          if (this.venue === event.venue_title){
          return shows = [34,42]
          }
          console.log(shows)
          return shows
      }
    */
  }
};
</script>
