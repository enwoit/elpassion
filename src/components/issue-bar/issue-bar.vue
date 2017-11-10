<template>
        <div class="issue__bar" v-on:click="isChecked">
            {{ item.name }}
            <img src="../../assets/icon-star.svg" class="issue__icon" v-if="item.checked">
            <img src="../../assets/icon-star-transparent.png" class="issue__icon" v-else>
        </div>
</template>
<script>
    export default  {
        props: ['item'],
        methods: {
            isChecked() {
                this.item.checked = !this.item.checked
            }
        }
    }
</script>

<style lang="scss">
    @import '../../vars';

    .issue__bar {
        align-items: center;
        border-radius: $border-radius-small;
        border: 1px solid $border-color ;
        background-color:  $white;
        color:  $issue-font-color;
        cursor: pointer;
        display: flex;
        font-size: 14px;
        font-weight: 400;
        justify-content: space-between;
        margin-bottom: 5px;
        min-height: 38px;
        outline: none;
        padding:3px 10px;
        width:100%;
    }

    .issue__icon {
        display: inline-block;
        height: 16px;
        width: 17px;
    }
</style>

