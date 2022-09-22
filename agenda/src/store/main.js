import { defineStore } from "pinia";
import { computed } from "vue";

export const useMainStore = defineStore('main', () => {
    const first_name_user = ref('Giulia');
    const last_name_user = ref('Ferreira');
    const type_user = ref('super')
    const name_user = computed(() => `${first_name_user.value} ${last_name_user.value}`)

    return {name_user, type_user}
})