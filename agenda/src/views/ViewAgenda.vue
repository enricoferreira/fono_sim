<template>
  <v-container>
    <v-tabs  grow color="primary" v-model="tab">
      <v-tab value="por_dia">Calendário</v-tab>
      <v-tab value="por_colab">Colaboradores</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="por_dia">
        Por dia
      </v-window-item>
      <v-window-item value="por_colab">
        Por colab
      </v-window-item>
    </v-window>
  </v-container>
</template>

<script setup>
import {useMainStore} from '../store/main'
import { onMounted, ref } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'

const store_main = useMainStore()

const {changeTitlePage} = storeToRefs(store_main)

onMounted(() => {
  store_main.changeTitlePage('Agenda')
})

const tab = ref('por_dia')


</script>

<style>

</style>