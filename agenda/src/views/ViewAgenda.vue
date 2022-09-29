<template>
  <div>
    <v-tabs  grow color="primary" v-model="tab">
      <v-tab value="por_dia">Calendário</v-tab>
      <v-tab value="por_paciente">Pacientes</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="por_dia">
        Por dia
        <calendar-view  class="theme-default holiday-us-traditional holiday-us-official">
          <template #header="{ headerProps }">
            <calendar-view-header :header-props="headerProps" @input="setShowDate" />
          </template>
        </calendar-view>
      </v-window-item>
      <v-window-item value="por_paciente">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="4">
              <v-card variant="outlined">
                <v-card-title>
                  Joãozinho da Silva
                </v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta laudantium est autem, reiciendis
                  libero provident atque consequuntur impedit veritatis ad! Eos ex repellat possimus consequatur cumque
                  optio numquam doloremque ipsum.
                </v-card-text>
                <v-card-actions>
                  <v-btn color="error" text prepend-icon="mdi-cancel">
                    Cancelar
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn color="success" prepend-icon="mdi-check" text>
                    Confirmar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup>
import {useMainStore} from '../store/main'
import { onMounted, ref } from '@vue/runtime-core'
import { storeToRefs } from 'pinia'
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar'
import '../../node_modules/vue-simple-calendar/dist/style.css'
const store_main = useMainStore()

const {changeTitlePage} = storeToRefs(store_main)

onMounted(() => {
  store_main.changeTitlePage('Agenda')
})

const tab = ref('por_dia')


</script>

<style>

</style>