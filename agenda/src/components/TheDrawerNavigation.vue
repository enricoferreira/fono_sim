<template>
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
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