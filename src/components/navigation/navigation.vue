<template>
    <div>
        <nav class="app-nav">
            <a href="#"
               class="app-nav__item"
               :class="{ active: isActive('') }"
               v-on:click.prevent="filter('')">
                <i class="app-nav__icon app-nav__icon--github"></i> All
                <span class="app-badge">{{ allIssues.length }}</span>
            </a>
            <a href="#"
               class="app-nav__item"
               :class="{ active: isActive('open') }"
               v-on:click.prevent="filter('open')">
                <i class="app-nav__icon app-nav__icon--open-issue"></i> Open
                <span class="app-badge">{{ openIssues.length }}</span>
            </a>
            <a href="#"
               class="app-nav__item"
               :class="{ active: isActive('closed') }"
               v-on:click.prevent="filter('closed')">
                <i class="app-nav__icon app-nav__icon--closed-issue"></i> Closed
                <span class="app-badge">{{ doneIssues.length }}</span>
            </a>
        </nav>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'

    export default  {
        data() {
            return {
                activeItem: ''
            }
        },
        computed: {
            ...mapGetters([
                'allIssues',
                'doneIssues',
                'openIssues',
            ]),
        },
        methods: {
            isActive: function (menuItem) {
                return this.activeItem === menuItem
            },
            filter(name) {
                this.activeItem = name;
                this.$emit('filtering', name);
            },
        }
    }
</script>

<style lang="scss">
    .app-nav {
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 20;

        &__item {
             align-items: center;
             background-color: transparent;
             color: #fff;
             display: flex;
             font-size: 14px;
             height: 50px;
             line-height: 16px;
             padding: 0 15px;
             text-decoration: none;
             transition: .2s all ease-out;

            &:hover, &:focus, &:active, &.active {
                background-color: #292a48;
            }
         }
    }

    .app-nav__icon {
        display: inline-block;
        height: 16px;
        margin-right: 10px;
        width: 16px;

        &--github {background: url('../../assets/icon-github.svg') top center no-repeat;}
        &--open-issue {background: url('../../assets/icon-open-issue.svg') top center no-repeat;}
        &--closed-issue {background: url('../../assets/icon-closed-issue.svg') top center no-repeat;}
    }

    .app-badge {
        color:  #8a8995;
        font-size: 13px;
        font-weight: 400;
        margin-left: auto;
    }
</style>

