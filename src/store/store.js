import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        issues: [
            {
                date: '21.07.2017',
                name: 'Single Contact Page Changes',
                status: 'closed',
                checked: true
            },
            {
                date: '19.07.2017',
                name: 'Page Changes',
                status: 'open',
                checked: false
            },
            {
                date: '19.07.2017',
                name: 'Sidebar changes',
                status: 'open',
                checked: false
            },
            {
                date: '14.07.2017',
                name: 'Crash Update v2',
                status: 'open',
                checked: false
            },
            {
                date: '14.07.2017',
                name: 'Crash Update',
                status: 'closed',
                checked: true
            },
            {
                date: '18.07.2017',
                name: 'Review of last issues',
                status: 'closed',
                checked: false
            },
            {
                date: '18.07.2017',
                name: 'Review of last issues2',
                status: 'open',
                checked: false

            },
            {
                date: '21.07.2017',
                name: 'Review of last issues2',
                status: 'open',
                checked: false

            },
            {
                date: '18.07.2017',
                name: 'Visual UI Update Review',
                status: 'closed',
                checked: false
            },
            {
                date: '14.07.2017',
                name: 'Visual UI Update Review',
                status: 'open',
                checked: false
            },
            {
                date: '11.07.2017',
                name: 'Visual UI Update Review 2',
                status: 'closed',
                checked: false
            },
            {
                date: '14.07.2017',
                name: 'Page visual UI Update',
                status: 'open',
                checked: false
            },
            {
                date: '14.07.2017',
                name: 'Sidebar update',
                status: 'closed',
                checked: false
            },
        ],
    },
    getters: {
        allIssues: state => {
            return state.issues
        },
        doneIssues: state => {
            return state.issues.filter(issue => issue.status === 'closed')
        },
        openIssues: state => {
            return state.issues.filter(issue => issue.status === 'open')
        },
    }
})