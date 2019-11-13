<template>
  <v-container class="grey lighten-5">
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
</template>

<script>
import { HTTP } from "./http-common";

export default {
  name: "App",

  components: {},

  data: () => ({
    events: [],
    errors: [],
    venues: [],
    venue_titles_formatted: []
  }),
  created() {
    HTTP.get("shows/0/0/0/0")
      .then(response => {
        this.events = response.data;

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
        venue_titles_formatted[j] = venue_titles_formatted.splice(
          b,
          1,
          venue_titles_formatted[j]
        )[0];
        console.log(venue_titles_formatted, typeof venue_titles_formatted);
        this.venues = venue_titles_formatted;
        console.log(this.venues, typeof this.venues);
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
  /* computed: {
    filteredShows() {
        var
        return
    }*/
};
</script>
