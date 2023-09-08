<script setup>
import HomeBtns from '@/components/home/HomeBtns.vue';
import HomeInfo from '@/components/home/HomeInfo.vue';
import HomeProfile from '@/components/home/HomeProfile.vue';
</script>
<template>
	<div class="home-background myGcontainer">
		<div class="row">
			<section class="homeinfo">
				<HomeInfo/>
			</section>
			<section class="profileProject">
				<HomeProfile/>
			</section>
		</div>
	<section class="homeBtns">
		<HomeBtns/>
	</section>
	</div>
</template>
<script>

</script>
<style scoped lang="sass">
@use '@/assets/global.sass' as * 
.home-background
	background-color: $bgclr1
	width: 100%
	@include flexoo(column, wrap, center, flex-start)
	min-height: 100vh
	.row
		@include flexoo(row, wrap, center, center)
		.homeinfo
			width: 65% 
		.profileProject
			width: 35% 

</style>