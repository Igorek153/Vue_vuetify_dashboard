<template>
  <div class="databaseContainer">
    <div class="search">
      <v-text-field style="width: 500px; padding-top: 20px"
                    label="Search"
                    outlined
      ></v-text-field></div>

    <div class="tableInfo">
      <h1>
        Database
      </h1>
      <v-row >
        <v-col
                cols="12"
                md="7">
          <v-card class="table"
          >
            <v-list flat class="switchTable">
              <v-list-item-group v-model="radio" style="height: 30px; margin-top: 5px; color: #3acf44" shaped>
                <v-list-item :value="student"   class="listItem">Student</v-list-item>
                <v-list-item :value="teacher" class="listItem">Teacher</v-list-item>
                <v-list-item :value="staff" class="listItem">Staff</v-list-item>
              </v-list-item-group>
            </v-list>
            <v-divider></v-divider>
            <v-data-table
                    :headers="headers"
                    :items="radio"
                    class="persons-table"
                    @click:row="rowClick"
                    item-key="name"
                    single-select
            >
              <template v-slot:top>
                <v-dialog
                        v-model="dialog"
                        max-width="500px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                            color="#3acf44"
                            dark
                            class="mb-2"
                            v-bind="attrs"
                            v-on="on"
                            @click="createTitle"
                    >
                      New User
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col
                                  cols="12"
                          >
                            <v-text-field
                                    v-model="editedItem.src"
                                    label="Avatar"
                            ></v-text-field>
                          </v-col>
                          <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                          >
                            <v-text-field
                                    v-model="editedItem.name"
                                    label="Name"
                            ></v-text-field>
                          </v-col>
                          <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                          >
                            <v-text-field
                                    v-model="editedItem.number"
                                    label="Number"
                            ></v-text-field>
                          </v-col>
                          <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                          >
                            <v-text-field
                                    v-model="editedItem.class"
                                    label="Class"
                            ></v-text-field>
                          </v-col>
                          <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                          >
                            <v-text-field
                                    v-model="editedItem.age"
                                    label="Age"
                            ></v-text-field>
                          </v-col>
                          <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                          >
                            <v-text-field
                                    v-model="editedItem.gender"
                                    label="Gender"
                            ></v-text-field>
                          </v-col>
                          <v-col
                                  cols="12"
                                  sm="6"
                                  md="4"
                          >
                            <v-text-field
                                    v-model="editedItem.email"
                                    label="Email"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                              color="blue darken-1"
                              text
                              @click="close"
                      >
                        Cancel
                      </v-btn>
                      <v-btn
                              color="blue darken-1"
                              text
                              @click="save"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>


                  <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                      <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
              </template>


              <template v-slot:item.src="{ item }">
                <div class="p-2">
                  <v-img :src="item.src" :alt="item.name" height="40px" width="40px" ></v-img>
                </div>
              </template>

              <template v-slot:item.action="{ item }">
                <div>
                  <v-icon
                          small
                          class="mr-2"
                          @click="editItem(item)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon
                          small
                          class="mr-2"
                          @click="deleteItem(item)"
                  >
                    mdi-delete
                  </v-icon>
                </div>
              </template>
            </v-data-table>
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
            <div class="text-center">
              <v-icon
                      class="ma-3"
              >
                mdi-message
              </v-icon>
              <v-icon
                      class="ma-3"
              >
                mdi-phone
              </v-icon>
              <v-icon
                      class="ma-3"
              >
                mdi-email
              </v-icon>
            </div>
            <v-divider style="padding-bottom: 8px"></v-divider>
            <div class="black--text text--accent-2  font-weight-bold">
              About:
            </div>
            Some text about person!
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            <v-row>
              <v-col>
                <div class="black--text text--accent-2  font-weight-bold">
                  Age:
                </div>
                {{ selectedAge }}
              </v-col>
              <v-col>
                <div class="black--text text--accent-2  font-weight-bold">
                  Gender:
                </div>
                {{ selectedGender }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div class="black--text text--accent-2  font-weight-bold">
                  Class:
                </div>
                {{ selectedClass }}
              </v-col>
              <v-col>
                <div class="black--text text--accent-2  font-weight-bold">
                  Email:
                </div>
                {{ selectedEmail }}
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
      dialog: false,
      dialogDelete: false,
      show: false,
      selectedName: null,
      radio: [],
      headers: [
        { text: 'Avatar', value: 'src', sortable: false},
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },

        { text: 'Number', value: 'number' },
        { text: 'Class', value: 'class' },
        { text: 'Age', value: 'age' },
        { text: 'Gender',sortable: false ,value: 'gender' },
        { text: 'Email', value: 'email' },
        { text: 'Action', value: 'action' },
      ],
      editedItem: {
        src: '',
        name: '',
        number: 0,
        class: '',
        age: 0,
        gender: '',
        email: ''
      },
      defaultItem: {
        src: '',
        name: '',
        number: 0,
        class: '',
        age: 0,
        gender: '',
        email: ''
      },
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
    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
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
        this.show = true;
      },
      createTitle: function() {
        return this.formTitle = 'Create User'
      },
      editItem (item) {
        this.editedIndex = this.radio.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        this.formTitle = 'Edit User'
      },

      deleteItem (item) {
        this.editedIndex = this.radio.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.radio.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.radio[this.editedIndex], this.editedItem)
        } else {
          this.radio.push(this.editedItem)
        }
        this.close()
      },
    },

  }
</script>

<style lang="scss" scoped>



  .persons-table {
    ::v-deep {
      tr.v-data-table__selected {
        background: #3ACF44 !important;
      }

    }
  }

  .listItem{
    display: inline;
  }
.pa-2{
  padding-left: 40px;
}
  .bell {
    padding-right: 30px;
    padding-left: 40px;
  }

</style>