<script setup>
  import AppHeader from "@/components/header/AppHeader.vue";
	import { store } from "@/store/store.js";
  import { computed } from 'vue'
  //computed
  const rightsideMarginLeft = computed(() => `${store.collapsed ? 75 : 220}px`);
  const rightsideWidth = computed(() => `calc(100% - ${store.collapsed ? 75 : 220}px)`);
</script>
<template>
	<div class="main">
  <AppHeader />
  <div class="right-side" :style="{marginLeft: rightsideMarginLeft, width: rightsideWidth}">
  <router-view v-slot="{ Component }" >
    <transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path"/>
    </transition>
  </router-view>
	</div>
	</div>
</template>

<style lang="sass" scoped>
@use '@/assets/global.sass' as * 

.main
	background-color: rgb(22, 32, 58)
	.right-side
		transition: $ctrans
		// background-color: red
		height: 100vh

.fade-enter-active,
.fade-leave-active
	transition: opacity 0.5s ease, scale 0.5s ease

.fade-enter-from,
.fade-leave-to
	opacity: 0
	scale: 0.7
.fade-enter-to,
.fade-leave-from
	opacity: 1
	scale: 1
</style>
