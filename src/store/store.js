import Vue from 'vue';
import Vuex from 'vuex';



Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        date: [
            {
                id: 0,
                name: 'Mathematic',
                details: 'Сделать тест на тему "Логорифмы"',
                start: '2021-11-13 07:00',
                end: '2021-11-13 13:00',
                color: '#ff8080',
                img: 'https://python-scripts.com/wp-content/uploads/2020/01/math-python-libs.jpg',
            },
            {
                id: 1,
                name: 'Philosophy',
                details: 'Выучить слова с прошлой лекции',
                start: '2021-11-19 10:00',
                end: '2021-11-19 12:00',
                color: '#004080',
                img: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1027476298%2F960x0.jpg%3Ffit%3Dscale',

            },
            {
                id: 2,
                name: 'Philosophy',
                details: 'Выучить слова с прошлой лекции',
                start: '2021-11-19 12:30',
                end: '2021-11-19 14:00',
                color: '#004080',
                img: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1027476298%2F960x0.jpg%3Ffit%3Dscale',

            },
        ],
        student: [
            {
                id: 0,
                name: 'Arat',
                number: '001',
                class: 'Science 4',
                age: 20,
                gender: 'Male',
                email: 'asdsad@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 1,
                name: 'Adam',
                number: '002',
                class: 'Science 4',
                age: 21,
                gender: 'Male',
                email: 'ytui@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 2,
                name: 'Otis',
                number: '003',
                class: 'Science 2',
                age: 19,
                gender: 'Male',
                email: 'vcx@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 3,
                name: 'Meive',
                number: '004',
                class: 'Science 6',
                age: 22,
                gender: 'Female',
                email: 'jty@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 4,
                name: 'Kate',
                number: '005',
                class: 'Science 6',
                age: 20,
                gender: 'Female',
                email: 'asrvw@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 5,
                name: 'Will',
                number: '006',
                class: 'Science 4',
                age: 20,
                gender: 'Male',
                email: 'dgds@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 6,
                name: 'Arat1',
                number: '001',
                class: 'Science 4',
                age: 20,
                gender: 'Male',
                email: 'asdsad@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 7,
                name: 'Adam1',
                number: '002',
                class: 'Science 4',
                age: 21,
                gender: 'Male',
                email: 'ytui@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 8,
                name: 'Otis1',
                number: '003',
                class: 'Science 2',
                age: 19,
                gender: 'Male',
                email: 'vcx@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 9,
                name: 'Meive1',
                number: '004',
                class: 'Science 6',
                age: 22,
                gender: 'Female',
                email: 'jty@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 10,
                name: 'Kate1',
                number: '005',
                class: 'Science 6',
                age: 20,
                gender: 'Female',
                email: 'asrvw@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },
            {
                id: 11,
                name: 'Will1',
                number: '006',
                class: 'Science 4',
                age: 20,
                gender: 'Male',
                email: 'dgds@gmail.com',
                src: 'https://brandeps.com/icon-download/S/Student-icon-vector-01.svg'
            },


        ],
        teacher: [
            {
                id: 0,
                name: 'Oleg',
                number: '001',
                class: 'Science 4',
                age: 20,
                gender: 'Male',
                email: 'asdsad@gmail.com',
                src: 'https://digitalitlab.com/wp-content/uploads/2021/01/education.png'
            },
            {
                id: 1,
                name: 'Lion',
                number: '002',
                class: 'Science 4',
                age: 21,
                gender: 'Male',
                email: 'ytui@gmail.com',
                src: 'https://digitalitlab.com/wp-content/uploads/2021/01/education.png'
            },
            {
                id: 2,
                name: 'Valodya',
                number: '003',
                class: 'Science 2',
                age: 19,
                gender: 'Male',
                email: 'vcx@gmail.com',
                src: 'https://digitalitlab.com/wp-content/uploads/2021/01/education.png'
            },




        ],
        staff: [
            {
                id: 0,
                name: 'Zip',
                number: '001',
                class: 'Science 4',
                age: 20,
                gender: 'Male',
                email: 'asdsad@gmail.com',
                src: 'https://www.setda.org/theme/wp-content/uploads/sites/13/2018/07/instructional_materials.png',
                message: 'hello!',
                content: null,
                onlineTime: '2 days'
            },
            {
                id: 1,
                name: 'Lion',
                number: '002',
                class: 'Science 4',
                age: 21,
                gender: 'Male',
                email: 'ytui@gmail.com',
                src: 'https://www.setda.org/theme/wp-content/uploads/sites/13/2018/07/instructional_materials.png',
                message: 'WHAAAAAAAAAAT?',
                content: null,
                onlineTime: '14 minute'

            },
            {
                id: 2,
                name: 'Valodya',
                number: '003',
                class: 'Science 2',
                age: 19,
                gender: 'Male',
                email: 'vcx@gmail.com',
                src: 'https://www.setda.org/theme/wp-content/uploads/sites/13/2018/07/instructional_materials.png',
                message: '......',
                content: null,
                onlineTime: '1 week'
            },
            {
                id: 3,
                name: 'John',
                number: '004',
                class: 'Science 4',
                age: 20,
                gender: 'Male',
                email: 'asdsad@gmail.com',
                src: 'https://www.setda.org/theme/wp-content/uploads/sites/13/2018/07/instructional_materials.png',
                message: 'HAND bro',
                content: 1,
                onlineTime: '1 hour'
            },
            {
                id: 4,
                name: 'Duke',
                number: '005',
                class: 'Science 4',
                age: 21,
                gender: 'Male',
                email: 'ytui@gmail.com',
                src: 'https://www.setda.org/theme/wp-content/uploads/sites/13/2018/07/instructional_materials.png',
                message: 'jk xD',
                content: null,
                onlineTime: '1 days'
            },
            {
                id: 5,
                name: 'Var',
                number: '006',
                class: 'Science 2',
                age: 19,
                gender: 'Male',
                email: 'vcx@gmail.com',
                src: 'https://www.setda.org/theme/wp-content/uploads/sites/13/2018/07/instructional_materials.png',
                message: 'looool',
                content: 2,
                onlineTime: '34 minute'
            },




        ]
    },
    getters: {
      allDate: state => {
          return state.date
      },

        allStudent: state => {
          return state.student
        },

        allTeacher: state => {
            return state.teacher
        },
        allStaff: state => {
            return state.staff
        },

    },
    mutations: {
        loadDate(state, payload) {
            state.date = payload
        }
    }
})