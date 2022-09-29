<template>
    <v-navigation-drawer v-model="drawer" temporary>

        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="Giulia Isabella"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item :to="{name: 'Home'}" prepend-icon="mdi-home-outline" title="Início" value="home"></v-list-item>
            <v-list-item :to="{name: 'Agenda'}" prepend-icon="mdi-calendar-outline" title="Agenda" value="agenda"></v-list-item>
            <v-list-item prepend-icon="mdi-finance" title="Evolução" value="evolucao"></v-list-item>
            <v-list-item prepend-icon="mdi-handshake-outline" title="Atendimentos" value="atendimentos"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Pacientes" value="pacientes"></v-list-item>
            <v-list-item :to="{name: 'RelatoriosGeralRoute'}" prepend-icon="mdi-account-group-outline" title="Relatórios" value="relatorios"></v-list-item>
        </v-list>

    </v-navigation-drawer>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import {ref} from 'vue'
import { useDrawerStore } from '../store/menu_drawer.js'
    const store = useDrawerStore();
    const {drawer} = storeToRefs(store)
</script>

<style>

</style>