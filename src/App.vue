<template>
<v-app>
  <v-container fluid>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select v-model="venue" :items="listofVenues" label="Выберете площадку" @change="noShow"></v-select>
      </v-col>
      <v-col class="d-flex" cols="12" sm="6">
        <v-select v-model="show" :items="listofEvents" filled no-data-text="Сначала нужно выбрать площадку" label="Выберите мероприятие"></v-select>
      </v-col>
    </v-row>
    <v-row v-if="isSelected">
      <v-col v-for="(event, i) in newArrOfEvents" :key="i" cols="12" sm="6" md="3" lg="2" xl="2">
        <v-card class="mx-auto" max-width="400">
          <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <v-card-title>{{ event.event_title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">{{
              event.show_start
            }}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ event.venue_title }}</div>
            <div>{{ event.hall_title }}</div>
            <div>{{ event.cost }}</div>
          </v-card-text>

          <v-card-actions>
<<<<<<< Updated upstream
            <v-btn :disabled="event.sold_out"
            :href = "'http://iframeab-pre1343.intickets.ru/node/'+ event.show_id"

            color="orange" text> {{buyTextButton}} </v-btn>
=======
            <v-btn :disabled="event.sold_out" color="orange" text> {{buttonText}} </v-btn>
>>>>>>> Stashed changes
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</v-app>
</template>

<script>
import {
  HTTP
} from "./http-common";

export default {
  name: "App",
  data: () => ({
    show: "",
    venue: 'Культурный центр "Москворечье"',
    events: [],
    errors: []
  }),
  created() {
    HTTP.get("shows/0/0/0/0").then(response => {
      this.events = response.data;
      console.log(this.events);
      ///Делаем поле cost нормальным
      this.events.forEach(element => {
        if (element.cost !== null) {
          if (element.cost.min !== element.cost.max) {
            element.cost = element.cost.min + " - " + element.cost.max;
          } else {
            element.cost = element.cost.min;
          }
        } else {
          element.cost = "";
        }
      });
      ///Делаем поле show_start нормальным
      this.events
        .forEach(element => {
          var date = new Date(Date.parse(element.show_start)).toLocaleString(
            "ru", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
              weekday: "long",
              timezone: "UTC",
              hour: "numeric",
              minute: "numeric"
            }
          );
          element.show_start = date[0].toUpperCase() + date.slice(1);
        })

        .catch(e => {
          this.errors.push(e);
        });
    });
  },
  methods: {
    noShow() {
      console.log(this.show);
      this.show = "";
      console.log(this.show + 'теперь пусто')
    }
  },
  computed: {
      isSelected() {
      var check = this.venue || this.show;
      return check;
    },
<<<<<<< Updated upstream
    buyTextButton(){
        var buyText = 'Купить билет'
        return buyText
=======
    buttonText() {
      var text = 'Купить билет'
      return text
>>>>>>> Stashed changes
    },
    listofVenues() {
      var venuesList = [];
      this.events.forEach(element => {
        venuesList.push(element.venue_title);
      });
      return venuesList;
    },
    listofEvents() {
      var eventsList = [];
      this.newArrOfEvents.forEach(element => {
        eventsList.push(element.event_title);
      });
      return eventsList;
    },

    newArrOfEvents() {
      if (this.show === "") {
        return this.events.filter(item => item.venue_title === this.venue);
      } else {
        return this.events.filter(item => item.event_title === this.show);
      }
    }
  }
};
</script>
<style>
.v-card__title {
  word-break: break-word !important;
}
</style>
