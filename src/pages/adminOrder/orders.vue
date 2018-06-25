<template lang="pug">
.order-wrapper
    .toolbar
      .checkbox
        el-dropdown(@command="handleFilter")
          el-checkbox(v-model="isChecked")
            i.el-icon-arrow-down.el-icon--right
          el-dropdown-menu(slot="dropdown")
            el-dropdown-item(command="selectAll") SelectAll
            el-dropdown-item(command="unSelectAll") UnselectAll
            el-dropdown-item(command="paid") Paid
            el-dropdown-item(command="unpaid") Unpaid
            el-dropdown-item(command="shipping") Shipping
            el-dropdown-item(command="done") Done
      .editSection
        el-dropdown(@command="handleColumn", :hide-on-click="false")
          span EDIT SECTION
          el-dropdown-menu(slot="dropdown")
            el-dropdown-item(v-for="section in orderConfig.sections", command="section.key")
              el-checkbox-group(v-model="chosenSections")
                el-checkbox(:label="section.key") {{ section.name }}

    el-table(:data="filteredData", stripe, style="width: 100%", @row-click="rowClick")
        el-table-column(v-if="isSectionChosen('customer')", prop="customer", label="Customer", min-width="188")
            template(slot-scope="scope")
              el-checkbox-group(v-model="chosenData")
                el-checkbox(:label="scope.row.id") {{ scope.row.customer }}
        el-table-column(v-if="isSectionChosen('productList')", prop="productList", label="ProductList", min-width="195")
            template(slot-scope="scope")
                .product-item
                    .name stibulum.
                    .detail
                        .price $1,400
                        .volumn 1
                .product-item
                    .name stibulum.
                    .detail
                        .price $1,400
                        .volumn 1

                // span {{ scope.row.productList }}
        el-table-column(v-if="isSectionChosen('total')", prop="total", label="Total", min-width="67")
            template(slot-scope="scope")
                span $2,200
        el-table-column(v-if="isSectionChosen('addToCart')", prop="addToCart", label="Add To Cart", min-width="115")
        el-table-column(v-if="isSectionChosen('checkout')", prop="checkout", label="Checkout", min-width="145")
        el-table-column(v-if="isSectionChosen('status')", prop="status", label="Status", min-width="128")
            template(slot-scope="scope")
                span {{ scope.row.status}}
                // el-button(@click="handleClick(scope.row)" type="text" size="small") 查看

</template>

<script>
import _ from 'lodash';
import { Order } from '@/pages/adminOrder/config/order';
var faker = require('faker');
const orderData = [];
const num = 5;
for (let i = 0; i < num; i++) {
  orderData.push({
    id: Math.floor(Math.random() * 100),
    customer: faker.fake('{{name.firstName}} {{name.lastName}}'),
    productList: [
      {
        name: faker.fake('{{commerce.productName}}'),
        price: faker.fake('{{commerce.price}}'),
        volumn: 1
      },
      {
        name: faker.fake('{{commerce.productName}}'),
        price: faker.fake('{{commerce.price}}'),
        volumn: 1
      }
    ],
    total: '',
    addToCart: faker.fake('{{date.past}}'),
    checkout: faker.fake('{{date.past}}'),
    address: faker.fake('{{address.streetAddress}}'),
    status: 'paid'
  });
}
const state = ['paid', 'unpaid', 'shipping', 'done'];

export default {
  data () {
    return {
      orderData: orderData,
      orderConfig: Order,
      isChecked: false,
      chosenData: [],
      chosenSections: ['customer', 'status'],
      filter: ''
    };
  },
  computed: {
    filteredData () {
      if (!this.filter) return this.orderData;
      return this.orderData.filter(item => {
        return this.filter && item.status === this.filter;
      });
    }
  },
  methods: {
    handleFilter (filter) {
      if (filter === 'selectAll') {
        this.selectAll();
      } else if (filter === 'unSelectAll') {
        this.unSelectAll();
      } else {
        this.filter = filter;
      }
    },
    handleColumn () {},
    selectAll () {
      this.chosenData = _.map(orderData, item => item.id);
    },
    unSelectAll () {
      this.chosenData = [];
    },
    isSectionChosen (val) {
      return this.chosenSections.includes(val);
    },
    rowClick (val) {
      console.log(val);
    }
  }
};
</script>

<style lang="sass">
@import @/pages/adminOrder/main.sass
.el-table th
    color: black
    font-weight: bold
    font-family: HelveticaNeue-Bold
    .cell
        font-size: 16px
.el-table tr
    background: $gray-white
    color: black
</style>

<style lang="sass" scoped>
.product-item
    padding-right: 24px
    padding-top: 8px
    padding-bottom: 8px
    &:not(:last-of-type)
        border-bottom: 1px solid #fff
    .detail
        display: flex
        justify-content: space-between
        .price
            color: #9B9B9B
</style>
