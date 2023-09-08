<script setup>
	import LogoHeader from './LogoHeader.vue'
	import SocialHeader from './SocialHeader.vue'
	import MainLinks from './MainLinks.vue'
	import { store } from '@/store/store.js'
	import { computed } from 'vue'
	//computed
	const headerWidth = computed(()=> `${ store.collapsed ? 75 : 220}px` )
	//methods
	function mytimer(){
		setTimeout(() => {
			store.collapsed = true;
			console.log("collapsed is now true");
		}, 25000);
	};
	function toggleHeader () {
		store.collapsed = !store.collapsed;
		const togglei = document.querySelector('.togglei');
		togglei.classList.toggle('rotate')
		mytimer();
		return store.collapsed;
	};
</script>

<template>
	<header class="header" :style="{width: headerWidth}">
    <nav>
			<LogoHeader/>
			<MainLinks/>
			<div class="toggleb">
      <div class="toggleBtn" @click="toggleHeader">
        <i class="bx bx-chevron-left togglei"></i>
      </div>
			</div>
			<SocialHeader/>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
@use '@/assets/global.sass' as * 
header
	background: $lgHEAD
	box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px
	position: fixed
	top: 0
	left: 0
	bottom: 0
	z-index: 999
	transition: $ctrans

	nav
		@include flexoo(column, nowrap, space-between, center)
		height: 100%
		width: 100%
		padding: 30px 10px
		.toggleb
			position: relative
			width: 38px
			height: 38px
			.toggleBtn
				width: 38px
				height: 38px
				margin: 5px
				position: absolute
				transform: translate(-5px,-5px)
				background-color: $rclr
				border-radius: 50%
				cursor: pointer
				z-index: 103
				@include flexoo(row, nowrap, center, center)
				i
					@include fontoo(28px, bold, white)
			&:before 
				content: ""
				border: 8px solid rgba(55, 140, 63, 0.6)
				border-radius: 50%
				height: 38px
				width: 38px
				position: absolute
				top: -8px
				left: -8px
				animation: pulsate 7.5s ease-out infinite
				z-index: 101
.rotate
	transform: rotate(180deg)
@keyframes pulsate
	0%, 20%, 30%, 100%
		transform: scale(0.6)
		opacity: 0.0
	10%, 25%
		opacity: 1.0
	15%, 30% 
		transform: scale(1.0)
		opacity: 0.0
	

</style>