<template>
  <v-app>
    <TheAppBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import TheAppBar from './components/TheAppBar.vue'
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)

// functions that mutate state and trigger updates
function increment() {
  count.value++
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>
