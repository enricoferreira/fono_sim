<template>
  <div>
    <ProximosAtendimentos/>
    <AtendimentosAtuais/>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useMainStore} from '../store/main'
import ProximosAtendimentos from '../components/home/ProximosAtendimentos.vue'
import AtendimentosAtuais from '../components/home/AtendimentosAtuais.vue'
import {onMounted} from 'vue'

const store_main = useMainStore();

const {changeTitlePage} = storeToRefs(store_main);

onMounted(() => {
  store_main.changeTitlePage('Início')
})

</script>

<style>

</style>