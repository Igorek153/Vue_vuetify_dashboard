<template>
  <div class="settingContainer">
    <div class="search">
      <v-text-field style="width: 500px; padding-top: 20px"
                    label="Search"
                    outlined
      ></v-text-field></div>
    <div class="settings">
      <h1>Settings</h1>
      <v-card class="infoUsers"  width="600px">
        <div class="text-h6 grey--text text--lighten-1 font-weight-light" style="text-align: center">
          001
        </div>
        <div class="avatar" style="text-align: center">
          <v-badge
                  overlap
                  bottom
                  icon="mdi-camera"
                  color="green">
            <v-img src="https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg" width="90px"></v-img>
          </v-badge>
        </div>
        <v-card-text >
          <div class="black--text text-h6  font-weight-bold" style="text-align: center">
            MrCat
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
              20
            </v-col>
            <v-col>
              <div class="black--text text--accent-2  font-weight-bold">
                Date of birth:
              </div>
              2001
            </v-col>
            <v-col>
              <div class="black--text text--accent-2  font-weight-bold">
                Gender:
              </div>
              Man
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <div class="black--text text--accent-2  font-weight-bold">
                Class:
              </div>
              Science 4
            </v-col>
            <v-col>
              <div class="black--text text--accent-2  font-weight-bold">
                Email:
              </div>
              mrCat@gmail.com
            </v-col>
            <v-col>
              <div class="black--text text--accent-2  font-weight-bold">
                Phone:
              </div>
              3807246725
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
  export default {
    data:()=> ({
      user: [
        {
          src: 'https://avatarko.ru/img/kartinka/5/kot_ochki_4754.jpg',
          age: 20,
          dateOfBirth: 2001,
          phone: 3807246725,
          email: 'mrCat@gmail.com',
          class: 'Science 4',
          gender: 'man'

        }
      ]
    }),
  }

</script>