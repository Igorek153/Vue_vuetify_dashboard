<template >
            <div class="helper">
                <v-calendar
                        :events="date"
                        color="green"
                        style="height: 300px"
                >

                </v-calendar>
                <v-col class="schedule">
                    <h1>Schedule</h1>
                </v-col>

                <v-col v-for="i in allDate" :key="i.id" >
                    <v-flex xs12>
                        <v-card class="mx-auto" width="400px" outlined>
                            <v-layout >
                                <v-flex>
                                    <v-img height="110px" width="110px" :src="i.img" t
                                    ></v-img>
                                </v-flex>
                                <v-flex>
                                    <v-card-title>{{ i.name }}</v-card-title>
                                    <v-card-text> {{ i.start }}</v-card-text>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>

                </v-col>

            </div>


</template>

<script>
    import {mapState} from "vuex";
    import {mapGetters} from "vuex";
    export default {
        name: "RightNavbar",
        components: {},
        data: () => ({
        }),
        mounted () {
        },
        methods: {

        },
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
    .schedule{
        padding-top: 30px;
        padding-left: 30px;
    }

</style>