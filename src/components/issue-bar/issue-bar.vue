<template>
        <div class="issue-bar" v-on:click="isChecked">
            {{ item.name }}
            <img src="../../assets/icon-star.svg" class="issue-icon" v-if="clicked">
            <img src="../../assets/icon-star-transparent.png" class="issue-icon" v-else>
        </div>
</template>
<script>
    export default  {
        props: ['item'],
        data () {
            return {
                clicked: false
            }
        },
        methods: {
            isChecked() {
                this.clicked = ! this.clicked
            }
        }
    }
</script>

<style>
    .issue-bar {
        border-radius: 5px;
        border: 1px solid #e0e0e0 ;
        background-color:  #ffffff;
        cursor: pointer;
        max-width: 463px;
        width:100%;
        min-height: 38px;
        display: flex;
        align-items: center;
        padding:3px 10px;
        justify-content: space-between;
        color:  #080606;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 5px;
    }

    .issue-icon {
        width: 17px;
        display: inline-block;
        height: 16px;
    }
</style>

