<script setup>
	import sourceData from "@/myData.json"
	import { store } from "@/store/store.js";
</script>

<template>
  <div class="main-links">
    <ul>
      <li v-for="link in sourceData.MainLinks">
        <RouterLink
				:key="link.id"
				:to="link.url"
        >
					<i :class="link.iclass"></i>
					<transition name="diplayNone">
          <span v-show="!store.collapsed">{{link.name}}</span>
					</transition>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
@use '@/assets/global.sass' as * 
@include show(0.5s, 0.2s, 0.5s, 0.2s, 101px)
.main-links
	ul
		padding: 10px
		height: 260px
		@include flexoo(column, nowrap, space-between, center)
		li
			width: 100%
			a
				border-radius: 10px
				@include flexoo(row, nowrap, space-between, center)
				i
					@include fontoo(24px, bold, white)
					padding: 10px
				span
					width: 101px
					@include fontoo(20px, 500, white)
					padding: 10px
					overflow: hidden
.main-links
	ul
		li a.active,
		li:hover a
			cursor: pointer
			background-color: $bclr
			span,
			i
				color: $rclr
</style>