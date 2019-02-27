<template lang="pug">
    div
        form.form
            label Account
            el-input(v-model="formData.account", placeholder="example@email.com")
            label Password
            el-input(v-model="formData.password", placeholder="●●●●●●●●")
            label Confirm Password
            el-input(v-model="formData.confirmPassword", placeholder="●●●●●●●●")

            el-button(type="submit", @click="submit") SUBMIT & NEXT
</template>

<script>
export default {
  data () {
    return {
      formData: {
        account: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    submit () {
      this.validate().then(res => {
        console.log(res);
      });
    },
    validate () {
      return new Promise((resolve, reject) => {
        resolve('123');
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.form
    label
        margin-bottom: 8px
    .el-input
        border-radius: 8px;
        margin-bottom: 24px
        input
            border: 2px solid #000000;

</style>
