<template>
    <v-container>
        <v-sheet class="mx-auto" elevation="0">
            <div class="d-flex align-center">
                <h4 class="text-h5 mb-2">Meus próximos atendimentos</h4>
                <v-spacer></v-spacer>
                <v-menu width="300" location="start" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" icon="mdi-tune" variant="text" elevation="0"></v-btn>
                    </template>
                    <v-list>
                        <v-list-item variant="plain">
                            <v-text-field append-inner-icon="mdi-filter-outline" v-model="search" label="Pesquisar nome" type="text" placeholder="Digite o que deseja pesquisar">
                            </v-text-field>
                            <!-- <template v-slot:prepend>
                                <v-icon icon=""></v-icon>
                            </template> -->
                            <!-- <v-list-item-title>{{ item.title }}</v-list-item-title> -->
                        </v-list-item>
                    </v-list>
                </v-menu>
            </div>
            <div class="overflow-auto py-2">
                <v-card variant="tonal" min-width="220" v-for="(item, index_item) in prox_atendimentos" :key="index_item + 'prox_aten'" class="mr-4">
                    <v-card-title class="py-2 d-flex">
                        {{item.nome}}
                        <v-spacer></v-spacer>
                        <v-icon size="21" :color="item.cancelado ? 'error' : 'success'">{{item.cancelado ? 'mdi-cancel' : 'mdi-check'}}</v-icon>
                    </v-card-title>
                    <v-card-subtitle>
                        {{item.data}}
                    </v-card-subtitle>
                    <v-card-text>
                        {{item.ultima_secao}}
                    </v-card-text>
                </v-card>
            </div>
        </v-sheet>
    </v-container>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const model = ref(null)
const search = ref('')
const prox_atendimentos = ref([
    {
        cancelado: false,
        nome: 'Pedro',
        data: '10/10/2009 10:00',
        ultima_secao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet cum saepe odio
        fuga explicabo fugit reiciendis ex, earum vero, numquam totam expedita`
    },
    {
        cancelado: true,
        nome: 'Maria',
        data: '10/10/2009 10:00',
        ultima_secao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet cum saepe odio
        fuga explicabo fugit reiciendis ex, earum vero, numquam totam expedita`
    },
    {
        cancelado: false,
        nome: 'Ana',
        data: '10/10/2009 10:00',
        ultima_secao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet cum saepe odio
        fuga explicabo fugit reiciendis ex, earum vero, numquam totam expedita`
    },
    {
        cancelado: false,
        nome: 'Carla',
        data: '10/10/2009 10:00',
        ultima_secao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet cum saepe odio
        fuga explicabo fugit reiciendis ex, earum vero, numquam totam expedita`
    },
    {
        cancelado: false,
        nome: 'Patrick',
        data: '10/10/2005 10:00',
        ultima_secao: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eveniet cum saepe odio
        fuga explicabo fugit reiciendis ex, earum vero, numquam totam expedita`
    },
])
</script>

<style>
.overflow-auto{
    display: flex;
    overflow: auto;
}

/* width */
.overflow-auto::-webkit-scrollbar {
  width: 10px;
  height: 5px;
}

/* Track */
.overflow-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.overflow-auto::-webkit-scrollbar-thumb {
  background: rgb(185, 184, 184);
}

/* Handle on hover */
.overflow-auto::-webkit-scrollbar-thumb:hover {
  background: rgb(172, 172, 172);
}
</style>