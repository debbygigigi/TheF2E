<template lang="pug">
.wrapper
    .title-bar
        h1 OVERVIEW
        .right
            span.range 2018/6/6 - 2018/6/13
            // input(type="select", value="Weekly")
            // el-select(v-model="value" placeholder="请选择")
                el-option( v-for="item in options", :key="item.value", :label="item.label", :value="item.value")
            el-dropdown.dropdown-date(@command="handleCommand")
                span.el-dropdown-link Weekly
                    i.el-icon-arrow-down.el-icon--right
                el-dropdown-menu(slot="dropdown")
                    el-dropdown-item(v-for="(option, index) in dateOptions", :key="index", :command="option.value") {{ option.name }}
    el-row.total(:gutter="20")
        el-col.item(:span="8").total-revenue
            .grid-content
                .title
                    font-awesome-icon.icon(:icon="['fas', 'hand-holding-usd']")
                    span TOTAL REVENUE
                .mount 54,540
        el-col.item(:span="8").total-cost
            .grid-content
                .title
                    font-awesome-icon.icon(:icon="['fas', 'boxes']")
                    span TOTAL COST
                .mount 54,540
        el-col.item(:span="8").net-income
            .grid-content
                .title
                    font-awesome-icon.icon(:icon="['fas', 'money-bill-alt']")
                    span NET INCOME
                .mount 54,540
    el-row.activity(:gutter="20")
        el-col
            .grid-content
                h1 Activity
                h1 圖表
    el-row(:gutter="20")
        el-col(:span="12")
            .grid-content.transaction
                h1 Transaction Website
                el-row(v-for="i in 4", :key="i")
                    el-col.icon(:span="4") icon
                    el-col.sitename(:span="8") Facebook.com
                    el-col.mount(:span="6") 45,836
                    el-col.rate(:span="6") 箭頭 20%
        el-col(:span="12")
            .grid-content.latest
                h1 Latest Orders
                el-row(v-for="i in 4", :key="i")
                    el-col.left(:span="20")
                        .img
                            img(src="https://fakeimg.pl/100/")
                        .content
                            h2 Vintage T-shirt
                            div 2018/6/13  13:42
                            div Belle Willis
                    el-col(:span="4")
                        | Total
                        h2 3,200
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

const refDateOptions = [
  { name: 'Daily', value: 'daily' },
  { name: 'Weekly', value: 'weekly' },
  { name: 'Monthly', value: 'monthly' },
  { name: 'Yearly', value: 'yearly' },
  { name: 'Custom', value: 'custom' }
];
export default {
  components: {
    FontAwesomeIcon
  },
  data () {
    return {
      dateOptions: refDateOptions,
      activeDateSelect: 'weekly'
    };
  }
};
</script>

<style lang="sass">

</style>

<style lang="sass" scoped>
@import @/pages/adminOrder/main.sass
*
    // border: 1px solid

.grid-content
    box-shadow: 0 0 10px 5px #EBEBEB
    border-radius: 3px
    padding: 30px 40px
    background: white
.el-row
    margin-bottom: 20px
.title-bar
    display: flex
    justify-content: space-between
    margin-bottom: 20px
    .right
        color: #989898
        .range
            margin-right: 20px
.total
    .item
        .grid-content
            text-align: center
            padding: 30px 0
            .title
                margin-bottom: 16px
                font-weight: bold
                display: flex
                justify-content: center
                align-items: center
                .icon
                    margin-right: 8px
                    font-size: 25px
                span
                    font-size: 16px
            .mount
                font-size: 36px
                font-weight: bold
        &.total-revenue
            .mount
                color: $green
        &.total-cost
            .mount
                color: $red
        &.net-income
            .mount
                color: $blue

.transaction
    h1
        margin-bottom: 30px
    .el-row
        margin-bottom: 0
        padding: 24px 0
        border-bottom: 1px solid #EBEBEB
        &:last-child
            border-bottom: 0
    .sitename
        font-size: 16px
    .mount
        text-align: right
        font-size: 20px
    .rate
        font-size: 16px
        text-align: center

.latest
    h1
        margin-bottom: 30px
    .left
        display: flex
        align-items: center
        .img
            margin-right: 20px
    .el-row
        border-bottom: 1px solid #EBEBEB
        &:last-child
            border-bottom: 0
</style>
