<template>
    <v-app-bar dense elevation="0" color="primary">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>{{title_page}}</v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute();
console.log(route.name);
let title_page = ref('teste');
</script>

<style>

</style>