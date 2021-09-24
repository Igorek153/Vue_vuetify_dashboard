<template>
    <div class="container">
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
                <router-view></router-view>
<!--                <div>-->
<!--                    <v-date-picker v-model="date" :events="arrayEvents" event-color="red" no-title color="green" full-width style="padding-top:10px;" ></v-date-picker>-->
<!--                    <v-col class="schedule">-->
<!--                        <h1>Schedule</h1>-->
<!--                    </v-col>-->

<!--                    <v-col v-for="i in allDate" :key="i.id" >-->
<!--                        <v-flex xs12>-->
<!--                            <v-card class="mx-auto" width="400px" outlined>-->
<!--                                <v-layout >-->
<!--                                    <v-flex>-->
<!--                                        <v-img height="110px" width="110px" :src="i.img" t-->
<!--                                        ></v-img>-->
<!--                                    </v-flex>-->
<!--                                    <v-flex>-->
<!--                                        <v-card-title>{{ i.name }}</v-card-title>-->
<!--                                        <v-card-text>{{ i.start }}</v-card-text>-->
<!--                                    </v-flex>-->
<!--                                </v-layout>-->
<!--                            </v-card>-->
<!--                        </v-flex>-->

<!--                    </v-col>-->
<!--                </div>-->
            </v-navigation-drawer>
        </nav>
    </div>
</template>

<script>
    import {mapGetters, mapState} from "vuex";
    // import RightNavbar from "../components/RightNavbar";

    export default {
        name: "RightLayout",
        components: {},
        data: () => ({
        }),
        computed: {
            ...mapState([
                'date'
            ]),
            ...mapGetters([
                'allDate'
            ]),
        }
    }
</script>

<style scoped>
    .bell {
        padding-right: 30px;
        padding-left: 40px;
    }
</style>