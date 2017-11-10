<template>
    <div class="app-container">
        <section class="app-navigation">
            <div class="app-navigation--icons">
                <span class="dot dot--red"></span>
                <span class="dot dot--yellow"></span>
                <span class="dot dot--green"></span>
            </div>

            <app-navigation v-on:filtering="filterIssues"></app-navigation>
        </section>

        <section class="app-content">
            <div v-for="items in orderedItemsByDate">
                <div class="app-content__date">
                    {{ items.date }}
                </div>
                <app-issue-bar  v-for="item in items.issues"
                               :key="item.status"
                               :item="item">
                </app-issue-bar>
            </div>
        </section>
    </div>
</template>

<script>

    import navigation from './navigation/navigation'
    import issueBar from './issue-bar/issue-bar.vue'
    import App from "../App.vue";
    import _ from 'lodash';

    export default {
        data() {
            return {
                filterText: ''
            }
        },
        computed: {
            issues() {
              return this.$store.state.issues;
            },
            orderedItemsByDate: function () {
                let orderedItems = [];
                let status = this.filterText;
                let result;

                if (status === '') {
                    orderedItems = _.orderBy(this.issues, 'date').reverse()
                } else {
                    orderedItems = _.orderBy(this.issues.filter(issue =>
                        issue.status === status
                    ), 'date').reverse()
                }

            result = _.chain(orderedItems)
                .groupBy('date')
                .toPairs()
                .map(function (pair) {
                    return _.zipObject(['date', 'issues'], pair); }).value();

                return result;
            }
        },
        methods: {
            // catch filter params from navigation
            filterIssues(name) {
                this.filterText = name;
            }
        },
        components: {
            App,
            appNavigation: navigation,
            appIssueBar: issueBar
        },
    }
</script>

<style>
    .app-container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 650px;
        width: 100%;
        height: 500px;
    }

    .app-navigation {
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);
        background-color: rgba(16, 16, 34, 0.95);
        width: 150px;
        height: 100%;
    }

    .app-navigation--icons {
        justify-content: center;
        padding: 10px 15px;
    }

    .dot {
        display: inline-flex;
        border-radius: 50%;
        width: 10px;
        height: 10px;
        margin-right: 5px;
    }

    .dot--red {
        background-color: #ff594f;
    }

    .dot--yellow {
        background-color: #ffbc1b;
    }

    .dot--green {
        background-color: #00cd46;
    }

    .app-content {
        border-bottom-right-radius: 10px;
        border-top-right-radius: 10px;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);
        background-color: #f6f6f6;
        max-width: 500px;
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 10px 20px;
    }

    .app-content__date {
        color: #8a8995;
        font-size: 12px;
        font-weight: 400;
        float: left;
        margin: 5px 0 10px;
        width: 100%;
    }

    .app-content::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
    }

    .app-content::-webkit-scrollbar {
        width: 4px;
        background-color: #e0e0e0;
    }

    .app-content::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: #e0e0e0;
    }

    @media (max-width: 676px) {
        .app-container {
            flex-direction: column;
            height: auto;
        }

        .app-navigation {
            border-bottom-left-radius: 0;
            border-top-right-radius: 10px;
            width: 100%;
            height: auto;
        }

        .app-content {
            border-bottom-left-radius: 10px;
            border-top-right-radius: 0;
            max-width: 100%;
        }
    }

</style>