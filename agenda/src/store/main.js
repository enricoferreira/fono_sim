import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useMainStore = defineStore('main', () => {

    const first_name_user = ref('Giulia');
    const last_name_user = ref('Ferreira');
    const type_user = ref('super')
    const name_user = computed(() => `${first_name_user.value} ${last_name_user.value}`)
    const title_page = ref('Bem vindo');

    function changeTitlePage (name){
        title_page.value = name
    }
    
    return {name_user, type_user, title_page, changeTitlePage}
})