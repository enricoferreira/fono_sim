<template>
    <v-app-bar elevation="0" color="primary">
        <v-app-bar-nav-icon @click="store_drawer.toggle"></v-app-bar-nav-icon>
        
        <v-spacer></v-spacer>

        <v-app-bar-title class="justify-center text-center">
            {{title_page}}
            <!-- <v-img width="73"  src="http://www.fonosim.com.br/img/elements/logotipo.png"></v-img> -->
        </v-app-bar-title>

        <v-spacer></v-spacer>
        
        <v-btn icon="mdi-dots-vertical" color="white"></v-btn>
    </v-app-bar>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useDrawerStore} from '../store/menu_drawer'
import {useMainStore} from '../store/main'

const store_drawer = useDrawerStore();
const store_main = useMainStore();

const { toggle } = storeToRefs(store_drawer);
const { title_page } = storeToRefs(store_main);

</script>

<style>

</style>