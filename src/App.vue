<template>
    <v-layout row wrap>

{{GetAllVenueTitles}}



  <v-card v-for="event in events" :key="event"
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

    <v-card-subtitle class="pb-0">{{event.show_id}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>

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
    venues: []

  }),
  created() {
      HTTP
      .get ('')
      .then(response => {
          this.events = response.data
          console.log(this.events)
         })
      .catch (e=>{
          this.errors.push(e)
      })
  },

  computed:{
      GetAllVenueTitles: (events)=> {
        for (var i = 0; i< events.length; i++){
            return  alert("Привет!")

          }
      }

  }






};
</script>
