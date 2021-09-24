<template>
  <div class="attendanceContainer">
    <div class="search">
      <v-text-field style="width: 500px; padding-top: 20px"
                    label="Search"
                    outlined
      ></v-text-field></div>
    <div class="attendance">
      <h1>Attendance</h1>
      <v-row dense>
        <v-col class="col-12">
          <v-card class="StudentCard" max-width="1160px" >
            <h3 class="textCard">Student</h3>
            <StudentChart></StudentChart>
          </v-card>
        </v-col>

        <v-col class="col-12">
          <v-card class="TeacherCard" max-width="1160px" >
            <h3 class="textCard">Teacher</h3>
            <TeacherChart></TeacherChart>
          </v-card>
        </v-col>

        <v-col class="col-12">
          <v-card class="StaffCard" max-width="1160px" >
            <h3 class="textCard">Staff</h3>
            <StaffChart></StaffChart>
          </v-card>
        </v-col>
      </v-row>

      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import StudentChart from "../components/StudentChart";
  import TeacherChart from "../components/TeacherChart";
  import StaffChart from "../components/StaffChart";
  export default {
    components: {StaffChart, TeacherChart, StudentChart}
  }
</script>

<style lang="scss" scoped>
  .textCard{
    padding: 10px;
  }
</style>