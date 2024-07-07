<template>
  <div class="container mx-auto h-screen">
    <nav>
      <TopBar />
    </nav>
    <main class="px-4 pb-16">
      <slot></slot>
    </main>
  </div>
</template>

<script lang="ts" setup></script>
