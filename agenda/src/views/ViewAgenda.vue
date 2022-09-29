<template>
  <v-container>Agenda</v-container>
</template>

<script setup>
import {useMainStore} from '../store/main'
import { onMounted } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'

const store_main = useMainStore()

const {changeTitlePage} = storeToRefs(store_main)

onMounted(() => {
  store_main.changeTitlePage('Agenda')
})

</script>

<style>

</style>