<template>
    <div>
        <nav class="app-nav">
            <a href="#" class="app-nav__item active">
                <i class="app-nav-icon app-nav-icon__github"></i> All
                <span class="app-badge">12</span>
            </a>
            <a href="#" class="app-nav__item">
                <i class="app-nav-icon app-nav-icon__open-issue"></i> Open
                <span class="app-badge">4</span>
            </a>
            <a href="#" class="app-nav__item">
                <i class="app-nav-icon app-nav-icon__closed-issue"></i> Closed
                <span class="app-badge">8</span>
            </a>
        </nav>
    </div>
</template>
<script>
    export default  {
        data () {
            return {

            }
        },
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

    .app-nav__item:hover {
        background-color: #292a48;
    }

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

