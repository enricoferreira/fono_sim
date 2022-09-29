<template>
    <v-container>
        Aqui é a home page
    </v-container>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useMainStore} from '../store/main'
import {onMounted} from 'vue'

const store_main = useMainStore();

const {changeTitlePage} = storeToRefs(store_main);

onMounted(() => {
  store_main.changeTitlePage('Início')
})

</script>

<style>

</style>