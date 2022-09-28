<template>
    <v-app-bar dense elevation="0" color="primary">
        <v-app-bar-nav-icon @click="store.toggle"></v-app-bar-nav-icon>
        <v-app-bar-title>{{title_page}}</v-app-bar-title>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
import {storeToRefs} from 'pinia'
import {useDrawerStore} from '../store/menu_drawer'
// export default{
//     setup(){
        const store = useDrawerStore();
        
        const { toggle } = storeToRefs(store);
            
        const title_page = ref('teste');
    
    //     return {title_page, teste}
    // }
// }
</script>

<style>

</style>