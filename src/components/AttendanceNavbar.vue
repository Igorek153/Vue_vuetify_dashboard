<template>
    <div class="attBar">
        <v-row dense>
            <v-col class="col-12">
                <v-container>
                    <h3>Today`s Attendance</h3>
                    <p class="subtitle-2">{{ formatDate(date) }}</p>

                    <v-row dense>
                        <v-col class="col-5 Student">
                            <v-progress-circular
                                    :rotate="360"
                                    :size="100"
                                    :width="15"
                                    :value="student.length"
                                    color="amber"
                            >
                                <v-list-item-avatar
                                        size="71" style="margin-left: 15px">
                                    <img src="https://brandeps.com/icon-download/S/Student-icon-vector-01.svg" alt="">
                                </v-list-item-avatar>
                            </v-progress-circular>
                        </v-col>
                        <div>
                            <v-row>
                                <v-col cols="auto"
                                       class="colLength">
                                    <p class="textLength">Students</p>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="auto"
                                       class="colName">
                                    <h1 class="amber--text">{{ student.length }} / 100</h1>
                                </v-col>
                            </v-row>
                        </div>

                        <v-col class="col-5 Teacher">
                            <v-progress-circular
                                    :rotate="360"
                                    :size="100"
                                    :width="15"
                                    :value="teacher.length"
                                    color="red"
                            >
                                <v-list-item-avatar
                                        size="71" style="margin-left: 15px">
                                    <img src="https://digitalitlab.com/wp-content/uploads/2021/01/education.png" alt="">
                                </v-list-item-avatar>
                            </v-progress-circular>
                        </v-col>
                        <div>
                            <v-row>
                                <v-col cols="auto"
                                       class="colLength">
                                    <p class="textLength">Teacher</p>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="auto"
                                       class="colName">
                                    <h1 class="red--text">{{ teacher.length }} / 100</h1>
                                </v-col>
                            </v-row>
                        </div>


                        <v-col class="col-5 Staff">
                            <v-progress-circular
                                    :rotate="360"
                                    :size="100"
                                    :width="15"
                                    :value="staff.length"
                                    color="blue"
                            >
                                <v-list-item-avatar
                                        size="71" style="margin-left: 15px">
                                    <img src="https://www.setda.org/theme/wp-content/uploads/sites/13/2018/07/instructional_materials.png" alt="">
                                </v-list-item-avatar>
                            </v-progress-circular>
                        </v-col>
                        <div>
                            <v-row>
                                <v-col cols="auto"
                                       class="colLength">
                                    <p class="textLength">Staff</p>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col cols="auto"
                                       class="colName">
                                    <h1 class="blue--text">{{ staff.length }} / 100</h1>
                                </v-col>
                            </v-row>
                        </div>

                        <h3 style="padding: 10px">Recent Attendance</h3>
                        <v-card v-for="stud in staff" :key="stud" width="400px" class="userCard">
                            <v-row align="start">
                                <v-col class="col-3">
                                    <v-avatar class="userImg">
                                        <v-img :src="stud.src"></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col>
                                    <p class="userName">{{ stud.name }}</p>
                                    <p class="userOnlineTime">{{ stud.onlineTime }} ago</p>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters, mapState} from "vuex";

    export default {
        name: "AttendanceNavbar",
        data: () => ({
            date: new Date(),

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
     formatDate: d => d.toLocaleString('ru-RU').replace(',', '').slice(0, -9),
 }
    }
</script>

<style scoped>

    .colLength{
        padding-bottom: 0;
        padding-top: 40px;
    }
    .textLength{
        margin-bottom: 0;
        color: gray;
        font-size: 13px;
    }
    .userImg{
        margin-top: 15px;
        margin-left: 5px;
    }
    .userName{
        margin-top: 17px;
        margin-bottom: 0;
        font-size: 18px;
        font-weight: bold;
    }
    .userOnlineTime{
        font-size: 13px;
        color: gray;
    }
    .userCard{
        margin: 10px;
    }

</style>