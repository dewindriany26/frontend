<!-- =========================================================================================
    File Name: KnowledgeBase.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div id="knowledge-base-page">
        <!-- JUMBOTRON -->
        <div class="knowledge-base-jumbotron">
            <div class="knowledge-base-jumbotron-content lg:p-32 md:p-24 sm:p-16 p-8 rounded-lg mb-base">
                <h1 class="mb-1 text-white">Selamat datang</h1>
                <p class="text-white">Selamat datang di Web E-Learning App.</p>
            </div>
        </div>

        <Modal v-if="showJoinClass" @close="toggleJoin">
            <h6>Masukkan Kode Kelas</h6>

            <vs-input
                data-vv-validate-on="keyup"
                type="text"
                name="kode"
                icon-no-border
                icon="icon icon-lock"
                icon-pack="feather"
                label-placeholder="Kode Kelas"
                v-model="kodeKelas"
                class="w-full mt-6" />

            <div class="flex flex-wrap justify-end my-3">
              <vs-button :disabled="!validateForm">Gabung</vs-button>
            </div>
        </Modal>
    </div>
</template>

<script>

import Modal from '../../../layouts/components/modal/Modal.vue'

export default{
    data() {
        return {
            kodeKelas: '',
            showJoinClass: false
        }
    },
    components: {
      Modal
    },
    computed: {
      validateForm() {
        if (this.kodeKelas != '' && this.kodeKelas.length == 8) {
          return true
        }
        return false
      },
    },
    methods: {
      toggleJoin() {
        this.showJoinClass = !this.showJoinClass
      },
    }
}
</script>

<style lang="scss">
.knowledge-base-jumbotron-content {
    background-image: url('../../../assets/images/pages/knowledge-base-cover.jpg');
    background-size: cover;
}
</style>
