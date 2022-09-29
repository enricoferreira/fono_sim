<template>
    <v-app-bar elevation="0" color="primary">
        <v-app-bar-nav-icon @click="store_drawer.toggle"></v-app-bar-nav-icon>
        
        <v-spacer></v-spacer>

        <v-app-bar-title class="justify-center text-center">
            {{title_page}}
            <!-- <v-img width="73"  src="http://www.fonosim.com.br/img/elements/logotipo.png"></v-img> -->
        </v-app-bar-title>

        <v-spacer></v-spacer>

        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon="mdi-dots-vertical" color="white"></v-btn>
            </template>
            <v-list>
                
                <v-list-item variant="plain" v-for="(item, index) in menu_items_config" :key="index" :value="index">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon"></v-icon>
                    </template>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        
    </v-app-bar>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useDrawerStore} from '../store/menu_drawer'
import {useMainStore} from '../store/main'
import { ref } from '@vue/reactivity';

const store_drawer = useDrawerStore();
const store_main = useMainStore();

const { toggle } = storeToRefs(store_drawer);
const { title_page } = storeToRefs(store_main);

const menu_items_config = [
    {
        title: 'Configurações',
        value: 'config',
        icon: 'mdi-cog-outline'
    },
    {
        title: 'Permissões',
        value: 'permissoes',
        icon: 'mdi-account-key-outline'
    },
    {
        title: 'Sobre',
        value: 'sobre',
        icon: 'mdi-book-cog-outline'
    },
    {
        title: 'Sair',
        value: 'sair',
        icon: 'mdi-exit-to-app'
    },
]

</script>

<style>

</style>