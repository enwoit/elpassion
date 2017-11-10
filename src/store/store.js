import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        issues: [
            {
                date: '21.07.2017',
                name: 'Single Contact Page Changes',
                status: 'closed'
            },
            {
                date: '19.07.2017',
                name: 'Page Changes',
                status: 'open'
            },
            {
                date: '19.07.2017',
                name: 'Sidebar changes',
                status: 'open'
            },
            {
                date: '14.07.2017',
                name: 'Crash Update v2',
                status: 'open'
            },
            {
                date: '14.07.2017',
                name: 'Crash Update',
                status: 'closed'
            },
            {
                date: '18.07.2017',
                name: 'Review of last issues',
                status: 'closed'
            },
            {
                date: '18.07.2017',
                name: 'Review of last issues2',
                status: 'open'

            },
            {
                date: '21.07.2017',
                name: 'Review of last issues2',
                status: 'open'

            },
            {
                date: '18.07.2017',
                name: 'Visual UI Update Review',
                status: 'closed'
            },
            {
                date: '14.07.2017',
                name: 'Visual UI Update Review',
                status: 'open'
            },
            {
                date: '14.07.2017',
                name: 'Page visual UI Update',
                status: 'open'
            },
            {
                date: '14.07.2017',
                name: 'Sidebar update',
                status: 'closed'
            },
        ],
    },
    getters: {
        doneIssues: state => {
            return state.issues.filter(todo => todo.status === 'closed')
        },
        openIssues: state => {
            return state.issues.filter(todo => todo.status === 'open')
        },
    }
})