/*=========================================================================================
  File Name: moduleChatActions.js
  Description: Chat Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/axios.js";
import state from "../state";

export default {
    setChatSearchQuery({ commit }, query){
        commit('SET_CHAT_SEARCH_QUERY', query)
    },
    updateAboutChat({ commit, rootState }, value) {
        commit('UPDATE_ABOUT_CHAT', {rootState: rootState, value: value})
    },
    updateStatusChat({ commit, rootState }, value) {
        commit('UPDATE_STATUS_CHAT', {rootState: rootState, value: value})
    },

    // API CALLS
    sendChatMessage({ getters, commit, dispatch }, payload) {
      return new Promise((resolve, reject) => {
        axios.post("apps/chat/msg", {payload: payload})
          .then((response) => {
            console.log(response.data);
            payload.chatData = getters.chatDataOfUser(payload.id)
            if(!payload.chatData) { dispatch("fetchChatContacts") }
            commit('SEND_CHAT_MESSAGE', payload)
            resolve(response)
          })
          .catch((error) => { reject(error) })

          axios.post("apps/chat/msg", {payload: sendmsg})
          .then((response) => {

            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },

    // Get contacts from server. Also change in store
    fetchContacts({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios.get("/apps/chat/contacts", {params: {q: id}})
          .then((response) => {
            commit('UPDATE_CONTACTS', response.data)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },

    // Get chat-contacts from server. Also change in store
    fetchChatContacts({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios.get("/apps/chat/contacts", {params: {q: id}})
          .then((response) => {
            commit('UPDATE_CHAT_CONTACTS', response.data)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },

    // Get chats from server. Also change in store
    fetchChats({ commit }, id) {
      return new Promise((resolve, reject) => {
        axios.get("api/apps/chat/chats", {params: {q: id}})
          .then((response) => {
            commit('UPDATE_CHATS', response.data)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },

    markSeenAllMessages({ getters, commit }, id) {

      return new Promise((resolve, reject) => {
        axios.post("/api/apps/chat/mark-all-seen", {id: id})
          .then((response) => {
            commit('MARK_SEEN_ALL_MESSAGES', {
              id: id,
              chatData: getters.chatDataOfUser(id)
            })
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },

    toggleIsPinned({ commit }, payload) {
      return new Promise((resolve, reject) => {
        axios.post("/api/apps/chat/set-pinned/", {contactId: payload.id, value: payload.value})
          .then((response) => {
            commit('TOGGLE_IS_PINNED', payload)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    },
}
