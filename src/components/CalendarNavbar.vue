<template>
    <div>
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
                <v-calendar
                        :events="date"
                        color="green"
                        style="height: 300px"
                >
                </v-calendar>
                <v-row dense>
                    <v-col class="pa-2">
                        <h1 style="font-size: 20px; padding: 10px">Productivity</h1>
                        <BarChart></BarChart>
                    </v-col>
                </v-row>
            </v-navigation-drawer>
        </nav>
    </div>
</template>

<script>
    import {mapGetters, mapState} from "vuex";
    import BarChart from "./BarChart";

    export default {
        name: "CalendarNavbar",
        components: {BarChart},
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