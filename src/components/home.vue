<template>
    <div class="app-container">
        <section class="app-navigation">
            <div class="app-navigation--icons">
                <span class="dot dot--red"></span>
                <span class="dot dot--yellow"></span>
                <span class="dot dot--green"></span>
            </div>

            <app-navigation
                    v-on:filtering="filterIssues"
            ></app-navigation>
            <div class="blur"></div>
        </section>

        <section class="app-content">
            <div v-for="items in orderedItemsByDate">
                <div class="app-content__date">
                    {{ items.date }}
                </div>
                <app-issue-bar  v-for="item in items.issues"
                               :key="item.name"
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
    import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                issueStatus: ''
            }
        },
        computed: {
            ...mapGetters([
                'allIssues',
                'doneIssues',
                'openIssues',
            ]),
            orderedItemsByDate: function () {
                let orderedItems = [];
                let status = this.issueStatus;
                let result;

                if (status === '') {
                    orderedItems = _.orderBy(this.allIssues, 'date').reverse()
                } else if (status === 'open') {
                    orderedItems = _.orderBy(this.openIssues, 'date').reverse()
                } else {
                    orderedItems = _.orderBy(this.doneIssues)
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
                this.issueStatus = name;
            },
        },
        components: {
            App,
            appNavigation: navigation,
            appIssueBar: issueBar
        },
    }
</script>

<style lang="scss">
    @import '../vars';

    .app-container {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 650px;
        width: 100%;
        height: 500px;
    }

    .app-navigation {
        background-color: rgba(16, 16, 34, 0.3);
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.4);
        width: 150px;
        height: 100%;
        position: relative;
        overflow: hidden;

        &--icons {
            justify-content: center;
            padding: 10px 15px;
            position: relative;
            z-index: 20;
        }
    }

    .blur {
        background-color: rgba(16, 16, 34, 0.9);
        border-bottom-left-radius: 10px;
        border-top-left-radius: 10px;
        filter: blur(2px);
        bottom: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .dot {
        border-radius: 50%;
        display: inline-flex;
        height: 10px;
        margin-right: 5px;
        width: 10px;

        &--red {
            background-color: $red;
        }

        &--yellow {
            background-color: $yellow;
        }

        &--green {
            background-color: $green;
        }
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

        &__date {
            color: $date-color;
            font-size: 12px;
            font-weight: 400;
            float: left;
            margin: 5px 0 10px;
            width: 100%;
        }
    }

    .app-content::-webkit-scrollbar-track {
        background-color: $scrollbar-track;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: $border-radius;
    }

    .app-content::-webkit-scrollbar {
        background-color: $scrollbar;
        width: 4px;
    }

    .app-content::-webkit-scrollbar-thumb {
        border-radius: $border-radius;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
        background-color: $border-color;
    }

    @media (max-width: 676px) {
        .app-container {
            flex-direction: column;
            height: auto;
        }

        .app-navigation {
            border-bottom-left-radius: 0;
            border-top-right-radius: $border-radius;
            height: auto;
            width: 100%;
        }

        .app-content {
            border-bottom-left-radius: $border-radius;
            border-top-right-radius: 0;
            max-width: 100%;
        }
    }

</style>