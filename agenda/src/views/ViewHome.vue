<template>
    <div>
        Home {{drawer}}
        <v-btn :to="{name: 'About'}" color="success">text</v-btn>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import {useDrawerStore} from '../store/menu_drawer'
const store = useDrawerStore()
const {drawer} = storeToRefs(store)
</script>

<style>

</style>