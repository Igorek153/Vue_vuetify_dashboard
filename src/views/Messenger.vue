<template>
  <div class="messengerContainer">
    <div class="search">
      <v-text-field style="width: 500px; padding-top: 20px"
                    label="Search"
                    outlined
      ></v-text-field></div>
    <div class="chat">
      <h1>Messenger</h1>
      <v-row class="col-12" style="width: 1300px">
        <v-col class="col-4 User" style="padding: 2px"
        >
          <v-card width="400px">
            <v-toolbar
                    color="green"
                    dark
            >

              <v-toolbar-title>Messenger</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-toolbar>

              <template class="chatUser">
                <v-data-table
                        :headers="headers"
                        :items="staff"
                        class="persons-table"
                        item-key="name"
                        single-select
                        :hide-default-footer="true"
                        @click:row="rowClick"
                >
                  <template v-slot:item.src="{ item }">
                    <div class="p-2">
                      <v-badge
                              bordered
                              bottom
                              color="deep-purple accent-4"
                              dot
                              offset-x="10"
                              offset-y="10"
                      >
                      <v-img :src="item.src" :alt="item.name" height="40px" width="40px" ></v-img>
                      </v-badge>
                    </div>
                  </template>
                  <template v-slot:item.name="{ item }">
                    <div class="chatColUser">
                      <div class="text-h6">
                        {{ item.name }}
                      </div>
                      <div class="text-caption">
                        {{ item.message }}
                      </div>
                    </div>
                  </template>
                  <template v-slot:item.onlineTime="{ item }">
                    <div class="chatColUser">
                      <div class="text-md-body-2" >
                        {{ item.onlineTime }}
                      </div>
                      <div >
                        <v-badge
                                :content="item.content"
                                :value="item.content"
                                color="red"
                        >
                        </v-badge>
                      </div>
                    </div>
                  </template>
                </v-data-table>
              </template>
          </v-card>
        </v-col>

        <v-col  class="col-7 Messenger" style="padding: 2px">
          <v-card height="80px" elevation="6" >
            <v-toolbar
                    color="green"
                    dark
            >
              <v-avatar style="margin-right: 10px">
                <v-img :src="selectedAvatar"></v-img>
              </v-avatar>
              <v-toolbar-title>{{ selectedName }}</v-toolbar-title>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-phone</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
          </v-card>
          <v-card height="500px" elevation="6" color="#cad8ed" >
            <v-row>
              <v-col md="4" class="ml-2" style="padding-bottom: 0">
                  <v-avatar >
                    <v-img :src="selectedAvatar"></v-img>
                  </v-avatar>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                      md="4"
                      class="ml-15"
                      style="padding-top: 0"
              >
                <v-card
                >
                  <div class="text-md-body-1" style="margin-left: 10px">
                    {{ selectedMes }}
                  </div>
                </v-card>
              </v-col>
            </v-row>
            <v-card color="red" width="90%" style="position:absolute; bottom:10px; left: 35px;">
              <v-toolbar
              >
                <v-file-input
                        hide-input
                >

                </v-file-input>
                <v-text-field></v-text-field>

                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-emoticon</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>mdi-send</v-icon>
                </v-btn>
              </v-toolbar>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <nav>
      <v-navigation-drawer
              app
              permanent
              right
              width="350px"
              color="#F8F8F8"
      >
        <template v-slot:prepend>
          <v-list-item two-line style="height: 100px">
            <v-icon class="bell">mdi-bell</v-icon>
            <v-list-item-avatar width="50" height="50" >
              <img src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg">
            </v-list-item-avatar>

            <v-list-item-content style="padding-left: 30px">

              <v-list-item-title class="text-xl-h5">Mr. Cat</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-divider></v-divider>

        <v-card class="infoUsers" v-if="show">
          <div class="text-h6 grey--text text--lighten-1 font-weight-light" style="text-align: center">
            {{ selectedNumber }}
          </div>
          <div class="avatar" style="text-align: center">
            <v-avatar size="90">
              <v-img :src="selectedAvatar" ></v-img>
            </v-avatar>
          </div>
          <v-card-text >
            <div class="black--text text-h6  font-weight-bold" style="text-align: center">
              {{ selectedName }}
            </div>

            <v-divider style="padding-bottom: 8px"></v-divider>
            <v-flex class="text-center d-flex align-center justify-space-around">
              <div class="black--text text--accent-2  font-weight-bold">
                Shared media
              </div>
              <div class="green--text text-caption ">
                View all
              </div>
            </v-flex>

            <v-row>
              <v-col
                      v-for="n in 4"
                      :key="n"
                      class="d-flex child-flex"
                      cols="6"
              >
                <v-img
                        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                        aspect-ratio="1"
                        class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-row
                            class="fill-height ma-0"
                            align="center"
                            justify="center"
                    >
                      <v-progress-circular
                              indeterminate
                              color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

      </v-navigation-drawer>
    </nav>
  </div>
</template>
<script>


  import {mapGetters, mapState} from "vuex";

  export default {

    components: {},

    data: () => ({
      show: false,
      selectedName: null,
      headers: [
        {value: 'src', align: 'left', width: '1%', sortable: false },
        {value: 'name', align: 'left', width: '30%', sortable: false },
        {value: 'onlineTime', align: 'left', width: '99%', sortable: false },

      ]

    }),

    computed: {

      ...mapState([
        'student',
        'teacher',
        'staff',
        'date'
      ]),
      ...mapGetters([
        'allStudent'
      ]),
    },

    methods: {
      rowClick: function (item, row) {
        row.select(true);
        this.selectedName = item.name;
        this.selectedAge = item.age;
        this.selectedAvatar = item.src;
        this.selectedEmail = item.email;
        this.selectedGender = item.gender;
        this.selectedNumber = item.number;
        this.selectedClass = item.class;
        this.selectedMes = item.message;
        this.show = true
        item.content = null
      },

    },
  }
</script>
<style lang="scss" scoped>

  .persons-table {
    ::v-deep {
      tr.v-data-table__selected {
        background: #cad8ed !important;
      };
    }
  }

  .chatColUser{
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center
  }
  .bell {
    padding-right: 30px;
    padding-left: 40px;
  }
</style>