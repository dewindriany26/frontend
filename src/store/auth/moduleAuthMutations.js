/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

// import axios from "../../http/axios/index.js"

export default {
  SET_AUTH(state, payload) {
    if (payload) {
      state.token = payload.token
      state.user = payload.user
      state.role = payload.role
    } else {
      state.token = null
      state.user = null
      state.role = null
    }
  }
}
