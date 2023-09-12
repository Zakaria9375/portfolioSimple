<script setup>
import HomeBtns from '@/components/home/HomeBtns.vue';
import HomeInfo from '@/components/home/HomeInfo.vue';
</script>
<template>
	<div class="home myGcontainer">
		<section class="homeinfo">
			<HomeInfo/>
		</section>
		<section class="homeBtns">
			<HomeBtns/>
		</section>
	</div>
</template>
<script>

</script>
<style scoped lang="sass">
@use '@/assets/global.sass' as * 
.homeBtns
	margin-bottom: 60px
</style>