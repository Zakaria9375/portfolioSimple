<script setup>
  import AppHeader from "@/components/header/AppHeader.vue";
	import { store } from "@/store/store.js";
  import { computed } from 'vue'
	import SmallHeader from "./components/header/SmallHeader.vue";
	import { ref, onMounted, onBeforeUnmount } from 'vue';

	const windowWidth = ref(window.innerWidth);
	const updateWindowWidth = () => {
		windowWidth.value = window.innerWidth;
	};
	onMounted(() => {
		window.addEventListener('resize', updateWindowWidth);
	});
	onBeforeUnmount(() => {
		window.removeEventListener('resize', updateWindowWidth);
	});
  //computed
	const viewMarginLeft = computed(() => {
		if (windowWidth.value > 768) {
			return `${store.collapsed ? 75 : 220}px`;
		} else {
			return '0';
		}
	});
  const viewWidth = computed(() => {
	if (windowWidth.value > 768) {
		return `calc(100% - ${store.collapsed ? 75 : 220}px)`;
		} else {
			return '100%';
		}
	});
</script>
<template>
	<div class="main">
  <AppHeader v-if="windowWidth >= 768.5"/>
	<SmallHeader v-else/>
  <div class="theView" :style="{marginLeft: viewMarginLeft, width: viewWidth}">
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
	background-color: $bgclr1
	min-height: 100dvh
	.theView
		transition: $ctrans
		@include flexoo(column, wrap, center, center)
@include less($smS)
	.theView
		margin-top: 64px 
@include more($smS)
	.theView
		height: 100dvh

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
