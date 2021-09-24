<template>
  <div class="calendar" style="max-width: 1150px">
    <div class="search">
      <v-text-field style="width: 500px; padding-top: 20px"
                    label="Search"
                    outlined
      ></v-text-field></div>
    <div class="mainCalendar" style="max-width: 1500px">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar
                    flat
            >
              <v-btn
                      outlined
                      class="mr-4"
                      color="grey darken-2"
                      @click="setToday"
              >
                Today
              </v-btn>
              <v-btn
                      fab
                      text
                      small
                      color="grey darken-2"
                      @click="prev"
              >
                <v-icon small>
                  mdi-chevron-left
                </v-icon>
              </v-btn>
              <v-btn
                      fab
                      text
                      small
                      color="grey darken-2"
                      @click="next"
              >
                <v-icon small>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu
                      bottom
                      right
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                          outlined
                          color="grey darken-2"
                          v-bind="attrs"
                          v-on="on"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>
                      mdi-menu-down
                    </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="1000" >
            <v-calendar
                    ref="calendar"
                    :now="today"
                    :value="today"
                    v-model="focus"
                    color="green"
                    :events="events"
                    :event-color="getEventColor"
                    :type="type"
                    @click:event="showEvent"
                    @click:more="viewDay"
                    @click:date="viewDay"
                    class="calendarItem"

            ></v-calendar>
            <v-menu
                    v-model="selectedOpen"
                    :close-on-content-click="false"
                    :activator="selectedElement"
                    offset-x
            >
              <v-card
                      color="grey lighten-4"
                      width="350px"
                      flat
              >
                <v-toolbar
                        :color="selectedEvent.color"
                        dark
                >
                  <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <form >
                    {{ selectedEvent.details }}
                  </form>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                          text
                          color="secondary"
                          @click="selectedOpen = false"
                  >
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </div>
  <router-view></router-view>

  </div>
</template>
<script>



  export default {
    components: {},


    data: () => ({
      today: new Date().toISOString().substr(0,10),
      focus: new Date().toISOString().substr(0,10),
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
      },
      name: null,
      details: null,
      start: null,
      end: null,
      currentlyEditing: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      dialog: false
    }),
    mounted () {
      this.getEvents();

    },
    methods: {
      async getEvents() {
        let a = this.$store.state.date;
        let events = [];
        a.forEach(doc => {
          let appData = doc;
          appData.id = doc.id;
          events.push(appData);
        })
        this.events = events;
      },

      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      editEvent(ev) {
        this.currentlyEditing = ev.id;
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
  },
    created() {

    }
  }

</script>

<style lang="scss" scoped>

  .calendarItem{
    ::v-deep{
      .v-btn__content{
        font-size: 15px;
      }
    .v-calendar-weekly__head-weekday{
      font-size: 15px;
      font-weight: bold;
    }
      .v-calendar-weekly__day-label{
        height: 50px;
      }
      .pl-1{
        font-size: 15px;
      }
      .v-event.v-event-start.v-event-end.white--text{
        height: 40px !important;
      }
      .v-calendar-daily_head-weekday{
        font-weight: bold;
      }
    }
  }


</style>