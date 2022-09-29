<template>
  <v-container>Relatórios</v-container>
</template>

<script setup>
import {useMainStore} from '../store/main'
import { onMounted } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'

const store_main = useMainStore()

const {changeTitlePage} = storeToRefs(store_main)

onMounted(() => {
  store_main.changeTitlePage('Relatórios')
})

</script>

<style>

</style>