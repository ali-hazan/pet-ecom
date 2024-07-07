<template>
  <div class="bg-slate-50">
    <MainLayout>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </MainLayout>
  </div>
</template>

<script setup lang="ts">
import MainLayout from "@/layout/Main.vue";
</script>

<style scoped></style>
