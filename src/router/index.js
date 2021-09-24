import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Messenger from "../views/Messenger";
import Attendance from "../views/Attendance";
// import Calendar from "../views/Calendar";
import Database from "../views/Database";
import Settings from "../views/Settings";
import Login from "../views/Login";
import MainLayout from "../layouts/MainLayout";

import RightNavbar from "../components/RightNavbar";
import RightLayout from "../layouts/RightLayout";
import Calendar from "../views/Calendar";
import CalendarNavbar from "../components/CalendarNavbar";
import AttendanceNavbar from "../components/AttendanceNavbar";

Vue.use(VueRouter)




const routes = [
  {
    path: '/',
    name: 'MainLayout',
    meta: {layout: 'main'},
    component: MainLayout,
    children: [
          {
            path: '/',
            name: 'Home',
            component: Home,
            children: [{
              path: '/',
              component: RightLayout,
                children: [{
                  path: '/',
                    component: RightNavbar
                }]
            }]

          },
          {
            path: '/messenger',
            name: 'Messenger',
            component: Messenger,
          },
          {
            path: '/settings',
            name: 'Settings',
            component: Settings
          },
          {
            path: '/calendar',
            name: 'Calendar',
            component: Calendar,
              children: [{
                  path: '/',
                  component: RightLayout,
                  children: [{
                      path: '/',
                      component: CalendarNavbar
                  }]
              }]
          },
          {
            path: '/database',
            name: 'Database',
            component: Database
          },
          {
            path: '/settings',
            name: 'settings',
            component: Settings
          },
          {
            path: '/attendance',
            name: 'attendance',
            component: Attendance,
              children: [{
                  path: '/',
                  component: RightLayout,
                  children: [{
                      path: '/',
                      component: AttendanceNavbar
                  }]
              }]
          },
        ]
    //   },
    // ]
  },

  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
