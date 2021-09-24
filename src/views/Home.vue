<template >
  <div class="containerHome" style="max-width: 1150px">
    <div class="main">
      <div class="search">
        <v-text-field style="width: 500px; padding-top: 20px"
                                        label="Search"
                                        outlined
      ></v-text-field></div>
      <div class="dashboardCard" style="width: 1100px">
        <h1>Dashboard</h1>
        <v-container>
          <v-row dense class="d-flex justify-space-between mb-5">
              <v-card class="student"
                      width="250px"

              >
                  <v-list-item three-line>
                      <v-list-item-content>
                          <h3 style="color: gray">
                              Student
                          </h3>
                          <h1>
                              {{ student.length }}
                          </h1>
                      </v-list-item-content>

                      <v-list-item-avatar
                              size="60">
                          <img src="https://brandeps.com/icon-download/S/Student-icon-vector-01.svg" alt="">
                      </v-list-item-avatar>
                  </v-list-item>
              </v-card>
              <v-card class="teacher"
                      width="250px"

              >
                  <v-list-item three-line>
                      <v-list-item-content>
                          <h3 style="color: gray">
                              Teacher
                          </h3>
                          <h1>
                              {{ teacher.length }}
                          </h1>
                      </v-list-item-content>

                      <v-list-item-avatar
                              size="60"

                      ><img src="https://digitalitlab.com/wp-content/uploads/2021/01/education.png" alt=""></v-list-item-avatar>
                  </v-list-item>
              </v-card>
              <v-card class="staff"
                      width="250px"

              >
                  <v-list-item three-line>
                      <v-list-item-content>
                          <h3 style="color: gray">
                              Staff
                          </h3>
                          <h1>
                              {{ staff.length }}
                          </h1>
                      </v-list-item-content>

                      <v-list-item-avatar
                              size="60"

                      ><img src="https://www.setda.org/theme/wp-content/uploads/sites/13/2018/07/instructional_materials.png" alt=""></v-list-item-avatar>
                  </v-list-item>
              </v-card>
          </v-row>
        </v-container>
      </div>
      <div class="dashboardSparkline ">
        <v-container >

          <v-layout xs12 md6>

              <v-card height="430px" width="900px" style="margin-right: 50px">
                <h1 style="padding-left:10px; padding-top: 10px ">Attendance Overview</h1>
               <AllChart></AllChart>
              </v-card>

              <v-card width="500px" height="430px" >
                  <h1 style="padding-left:10px; padding-top: 10px; padding-bottom: 25px">Productivity</h1>
                  <BarChart></BarChart>
              </v-card>

          </v-layout>

        </v-container>


      </div>
      <div class="table">
        <v-container>
          <v-layout>
            <v-card width="1450px" >
                <v-list flat>
                    <v-list-item-group v-model="radio" style="height: 30px; margin-top: 5px; color: #3ACF44" shaped>
                        <v-list-item :value="student" class="listItem">Student</v-list-item>
                        <v-list-item :value="teacher" class="listItem">Teacher</v-list-item>
                        <v-list-item :value="staff" class="listItem">Staff</v-list-item>
                    </v-list-item-group>
                </v-list>
              <v-divider></v-divider>
              <v-data-table
                      :headers="headers" :items="radio" class="persons-table"
              >
                <template v-slot:item.src="{ item }">
                  <div class="p-2">
                    <v-img :src="item.src" :alt="item.name" height="40px" width="40px"></v-img>
                  </div>
                </template>
              </v-data-table>
            </v-card>

          </v-layout>
        </v-container>
      </div>

    </div>


  <router-view></router-view>
  </div>
</template>

<script>

  import {mapGetters, mapState} from "vuex";
  import AllChart from "../components/AllChart";
  import BarChart from "../components/BarChart";
  export default {
    name: 'Home',
    data: () => ({
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
      ],
      padding: 8,
      radius: 10,
      width: 2,
      labels: ['Feb', 'Mar','Mar','Apr','May','Jun'],
      value: [1,15,13,2,25,3],
      skill: 20,
      knowledge: 33,
      power: 42
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
    components: {
        BarChart,
        AllChart,
    },
  }
</script>
<style lang="scss" scoped>

.persons-table {
  ::v-deep {
   .text-start {
      color: black;
      font-size: 20px;
    };

  }
}

.listItem{
    display: inline;
}
</style>