<template>
    <v-app>
            <router-view></router-view>
    </v-app>
</template>

<script>
// import LeftNavbar from "./components/LeftNavbar";
// import EmptyLayout from "./layouts/EmptyLayout"
// import MainLayout from "./layouts/MainLayout"
// import RightLayout from "./layouts/RightLayout";
export default {
  name: 'App',
  // components: {EmptyLayout, MainLayout, RightLayout},

  data: () => ({
    //
  }),
  computed: {
    layout() {
        return (this.$route.meta.layout || 'empty') + '-layout'
    }
  }
};
</script>

<style lang="scss">

</style>