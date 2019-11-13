<template>
    <v-layout>
        <v-flex v-for= "venue in venues" :key="venue">
            <h3>{{venue}}</h3>
            <v-card
            v-for="show in filteredShows" :key="show">
                <v-card-title>{{show}}</v-card-title>
            </v-card>
        </v-flex>





<!--
  <v-card v-for="(event, i) in events" :key="i"
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src=""
    >
      <v-card-title>{{event.event_title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{event.venue_title}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{event.show_start}}</div>

      <div>{{event.hall_title}}</div>
      <div>{{event.hall_title}}</div>

    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Купить билет
      </v-btn>
    </v-card-actions>
  </v-card>
-->
</v-layout>
</template>

<script>
import {HTTP} from './http-common'

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    events: [],
    errors: [],
    venues:[],
    venue_titles_formatted: []
     }),
  created() {
      HTTP
      .get ('shows/0/0/0/0')
      .then(response => {
          this.events = response.data

          var i
          var venue_titles = []
          var venue_titles_formatted = []
//Создаем новый массив со всеми названиями площадок
          for (i=0; i < this.events.length;i++){
          venue_titles.push(this.events[i].venue_title)
            }
//Оставляем только уникальные номера площадок
        venue_titles_formatted = Array.from(new Set(venue_titles))

//Необходимая площадка на первом месте
        var j = 0
        var b = 1
        venue_titles_formatted[j] = venue_titles_formatted.splice(b,1,venue_titles_formatted[j])[0]
        console.log(venue_titles_formatted, typeof venue_titles_formatted)
        this.venues = venue_titles_formatted
        console.log(this.venues, typeof this.venues)
    }
)
      .catch (e=>{
          this.errors.push(e)
      })
  },
  computed: {
    filteredShows() {
        var
        return
    }



};
</script>
