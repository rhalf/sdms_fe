<template>
  <div id="progress-line" />
  <v-app>
    <router-view v-slot="{ Component }">
      <!-- <v-fade-transition> -->
      <component :is="Component" />
      <!-- </v-fade-transition> -->
    </router-view>

    <Snackbar />
    <ProgressLine />
  </v-app>
</template>

<script setup>
import { cloneDeep } from "lodash";

import Snackbar from "@/components/common/Snackbar.vue";

import ProgressLine from "@/components/common/ProgressLine.vue";

import { useProgressLineStore } from "@/store/progress-line";

const { start, stop } = useProgressLineStore();
const progressLine = useProgressLineStore();

import { useSnackbarStore } from "@/store/snackbar";
const { show } = useSnackbarStore();

import { User } from "@/constants";

import { get, create } from "@/api/user";

import { useRouter } from "vue-router";
const router = useRouter();

// import { useUserStore } from "@/store/user";
// const user = useUserStore();

import { ref, provide } from "vue";

const user = ref(null);
provide("user", user);

const loadUser = async (authUser) => {
  try {
    start();

    if (!authUser) return;

    const result = await get(authUser.uid);

    if (result === null) {
      const user = cloneDeep(User);
      user.id = authUser.uid;
      user.email = authUser.email;
      user.emailVerified = authUser.emailVerified;

      user.value = await create(user);
      show("success", "created a user");
    } else {
      user.value = result;
    }
  } catch ({ message }) {
    show("error", message);
  } finally {
    stop();
  }
};

import { auth } from "@/plugins/firebase";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    await loadUser(user);
    console.log("signedIn");
  } else {
    console.log("signedOut");
  }
});
</script>

<style scoped></style>
