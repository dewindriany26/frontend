import axios from "../../http/axios/index.js"

export default {
  async signInUser({ commit }, credentials) {
    let response = await axios.post('login', credentials)
    commit('SET_AUTH', response.data)
  },
  async signInDosen({ commit }, credentials) {
    let response = await axios.post('dosen/login', credentials)
    commit('SET_AUTH', response.data)
  },
  async signInAdmin({ commit }, credentials) {
    let response = await axios.post('admin/login', credentials)
    commit('SET_AUTH', response.data)
  },
  signOut({ state, commit }) {
    switch (state.role) {
      case 'user':
        return axios.get('logout', {
          headers: {
            'Authorization': 'Bearer ' + state.token
          }
        }).then(() => {
          commit('SET_AUTH', null)
        })

      case 'dosen':
        return axios.get('dosen/logout', {
          headers: {
            'Authorization': 'Bearer ' + state.token
          }
        }).then(() => {
          commit('SET_AUTH', null)
        })

      case 'admin':
        return axios.get('admin/logout', {
          headers: {
            'Authorization': 'Bearer ' + state.token
          }
        }).then(() => {
          commit('SET_AUTH', null)
        })


      default:
        break;
    }
  }
}
