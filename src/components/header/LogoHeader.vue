<script setup>
	import { store } from "@/store/store.js";
</script>
<template>
  <div class="logo">
    <div class="zname">
      <span class="z">Z</span>
			<transition name="diplayNone">
      <span class="name" v-show="!store.collapsed">akaria Ali</span>
			</transition>
    </div>
		<transition name="diplayNone">
    <div class="desc" v-show="!store.collapsed">
      <span>Web Developer</span>
    </div>
		</transition>
  </div>
</template>

<style lang="sass" scoped>
@use '@/assets/global.sass' as * 
@include show(0.5s, 0.2s, 0.5s, 0.2s, 135px)
.logo
	@include flexoo(column, nowrap, center, center)
	
	.zname
		transition: $mtrans
		
		span.z
			display: inline-block
			padding: 5px
			@include fontoo(30px, bold, $gclr)
			animation: bouncing 7.5s infinite
			@keyframes bouncing
				0%, 2%, 10%, 16%, 20%
					transform: translateY(0)
				8% , 12%
					transform: translateY(-15px)
		span.name
			letter-spacing: 2px
			display: inline-block
			max-height: 59px
			padding-top: 35px
			overflow: hidden
			@include fontoo(24px, bold, $wclr)
	.desc
		span
			display: block
			max-height: 22px
			overflow: hidden
			@include fontoo(16px, normal, $wclr)
</style>