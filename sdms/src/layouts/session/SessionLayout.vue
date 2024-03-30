<template>
  <router-view v-slot="{ Component }">
    <v-layout full-height class="bg-grey">
      <v-row dense>
        <v-col align="center" align-self="center">
          <Card maxWidth="420">
            <v-row dense>
              <!-- <v-col v-if="!xs">
                <Image
                :src="image"
                :width="undefined"
                cover
                :aspect-ratio="16 / 15"
                />
              </v-col> -->
              <!-- <v-col :cols="xs ? 12 : 4"> -->
              <v-col>
                <Sheet :minHeight="700">
                  <Logo
                    :width="200"
                    :aspect-ratio="16 / 16"
                    position="vertical"
                    class="rounded-circle bg-blue-lighten-2 mt-6"
                    color="lighten-3"
                  />
                  <!-- <Label bold header class="text-primary mt-3">
                    Supplier's Deliveries Monitoring System
                  </Label> -->

                  <!-- <v-fade-transition leave-absolute :mode="'out-in'"> -->
                  <v-slide-y-transition leave-absolute :mode="'out-in'">
                    <component :is="Component" />
                  </v-slide-y-transition>
                </Sheet>
              </v-col>
            </v-row>
          </Card>
        </v-col>
      </v-row>
    </v-layout>
  </router-view>
</template>

<script setup>
import Sheet from "@/components/common/Sheet.vue";
import Card from "@/components/common/Card.vue";
import Logo from "@/components/common/Logo.vue";

import Label from "@/components/common/Label.vue";

import { useDisplay } from "vuetify";
const { xs, sm } = useDisplay();

import { useProgressLineStore } from "@/store/progress-line";
const { start, stop } = useProgressLineStore();

import { onMounted } from "vue";

onMounted(() => {
  start();

  stop();
});
</script>
