<template>
<div class="container" style="margin-left: 330px">
    <nav>
        <v-navigation-drawer permanent width="300" app color="#F8F8F8">
            <v-list-item>
                <v-list-item-content>

                    <v-list-item-title class="myText">
                        <v-icon large color="#3ACF44">mdi-domain</v-icon>
                        University
                    </v-list-item-title>

                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list flat >
                <v-list-item-group
                        v-model="selectedItem"
                        color="#3ACF44"
                >
                    <v-list-item
                            v-for="(item, i) in items"
                            :key="i"
                            router :to="item.route"
                    >
                        <v-list-item-icon>
                            <v-icon v-text="item.icon" large style="padding-left: 30px"> </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title  class="text-h6" v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </nav>
    <main class="main">
        <div class="app-page">
            <router-view></router-view>
        </div>
    </main>
</div>
</template>

<script>
    export default {
        name: "MainLayout",
        data () {
            return {
                selectedItem: 0,
                items: [
                    { title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/'},
                    { title: 'Messenger', icon: 'mdi-message', route: '/messenger' },
                    { title: 'Calendar', icon: 'mdi-calendar', route: '/calendar' },
                    { title: 'Database', icon: 'mdi-view-list', route: '/database'  },
                    { title: 'Attendance', icon: 'mdi-chart-bar', route: '/attendance'  },
                    { title: 'Settings', icon: 'mdi-help-circle-outline', route: '/settings'  },
                ],
                right: null,
            }
        },
    }
</script>

<style scoped>
    .myText{
        font-size: 40px ;
        font-weight: bold;
        text-align: center;
    }
</style>