<template>
  <div>
    <vs-input
        v-validate="'required'"
        data-vv-validate-on="blur"
        name="username"
        icon-no-border
        icon="icon icon-user"
        icon-pack="feather"
        label-placeholder="Username"
        v-model="credentials.username"
        class="w-full"/>
    <span class="text-danger text-sm">{{ errors.first('username') }}</span>

    <vs-input
        data-vv-validate-on="blur"
        v-validate="'required'"
        type="password"
        name="password"
        icon-no-border
        icon="icon icon-lock"
        icon-pack="feather"
        label-placeholder="Password"
        v-model="credentials.password"
        class="w-full mt-6" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <div class="flex flex-wrap justify-end my-3">
      <vs-button :disabled="!validateForm" @click="doLogin">Login</vs-button>
    </div>
  </div>
</template>

<script>

// import axios from '../../../axios.js'

import { mapActions } from 'vuex'

export default {
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      }
    }
  },
  computed: {
    validateForm() {
      return !this.errors.any() && this.username != '' && this.password != '';
    },
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signInDosen'
    }),

    checkLogin() {
      // If user is already logged in notify
      if (this.$store.state.auth.user) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        this.$router.push('/dosen')

        return false
      }
      return true
    },
    async doLogin() {

      if (!this.checkLogin()) return

      // Loading
      this.$vs.loading()

      this.signIn(this.credentials)
      .then(() => {
        this.$vs.loading.close()
        this.$router.push('/dosen')
      })
      .catch(() => {
        this.$vs.loading.close()
      })

      // this.$store.dispatch('auth/signIn', this.credentials)
      //   .then(() => { this.$vs.loading.close() })
      //   .catch(error => {
      //     this.$vs.loading.close()
      //     this.$vs.notify({
      //       title: 'Error',
      //       text: error.message,
      //       iconPack: 'feather',
      //       icon: 'icon-alert-circle',
      //       color: 'danger'
      //     })
      //   })
    },
  }
}

</script>

