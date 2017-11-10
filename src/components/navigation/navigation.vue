<template>
    <div>
        <nav class="app-nav">
            <a href="#"
               class="app-nav__item"
               :class="{ active: isActive('') }"
               v-on:click.prevent="filter('')">
                <i class="app-nav-icon app-nav-icon__github"></i> All
                <span class="app-badge">{{ allIssues.length }}</span>
            </a>
            <a href="#"
               class="app-nav__item"
               :class="{ active: isActive('open') }"
               v-on:click.prevent="filter('open')">
                <i class="app-nav-icon app-nav-icon__open-issue"></i> Open
                <span class="app-badge">{{ openIssues.length }}</span>
            </a>
            <a href="#"
               class="app-nav__item"
               :class="{ active: isActive('closed') }"
               v-on:click.prevent="filter('closed')">
                <i class="app-nav-icon app-nav-icon__closed-issue"></i> Closed
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

<style>

    .app-nav {
        display: flex;
        flex-direction: column;
    }

    .app-nav__item {
        background-color: transparent;
        display: flex;
        align-items: center;
        padding: 0 15px;
        color: #fff;
        height: 50px;
        font-size: 14px;
        line-height: 16px;
        text-decoration: none;
        transition: .2s all ease-out;
    }

    .app-nav__item:hover,
    .app-nav__item:focus,
    .app-nav__item:active,
    .app-nav__item.active {
        background-color: #292a48;
    }

    .app-nav-icon {
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }

    .app-nav-icon__github {
        background: url('../../assets/icon-github.svg') top center no-repeat;
    }
    .app-nav-icon__open-issue {
        background: url('../../assets/icon-open-issue.svg') top center no-repeat;
    }
    .app-nav-icon__closed-issue {
        background: url('../../assets/icon-closed-issue.svg') top center no-repeat;
    }

    .app-badge {
        color:  #8a8995;
        font-size: 13px;
        font-weight: 400;
        margin-left: auto;
    }

</style>

