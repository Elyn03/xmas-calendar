import { createStore } from 'vuex'

export default createStore({
    state: {
        calendar: [
            { day: 4, column: "1/2", row: "1/3" },
            { day: 5, column: "2/3", row: "1/1" },
            { day: 16, column: "3/4", row: "1/1" },
            { day: 21, column: "2/4", row: "2/3" },
            { day: 7, column: "1/2", row: "3/4" },
            { day: 12, column: "2/3", row: "3/4" },
            { day: 19, column: "3/4", row: "3/5" },
            { day: 24, column: "1/3", row: "4/5" },
            { day: 9, column: "1/2", row: "5/7" },
            { day: 22, column: "2/4", row: "5/6" },
            { day: 11, column: "2/3", row: "6/8" },
            { day: 3, column: "3/4", row: "6/7" },
            { day: 13, column: "1/3", row: "8/9"  },
            { day: 15, column: "3/4", row: "7/9" },
            { day: 10, column: "1/1", row: "7/8" },
            { day: 14, column: "1/2", row: "9/10" },
            { day: 6, column: "2/3", row: "9/10" },
            { day: 2, column: "3/4", row: "9/11" },
            { day: 17, column: "1/3", row: "10/11" },
            { day: 1, column: "1/1", row: "11/13" },
            { day: 18, column: "2/4", row: "11/12" },
            { day: 20, column: "2/3", row: "12/13" },
            { day: 8, column: "3/4", row: "12/14" },
            { day: 23, column: "1/3", row: "13/14" }
        ]
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
