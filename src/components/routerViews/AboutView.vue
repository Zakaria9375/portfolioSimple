<script setup>
	import AboutStory from '../about/AboutStory.vue';
	import AboutSkills from '../about/AboutSkills.vue';
</script>
<template>
	<div class="about-container">
		<div class="main-heading">
			<h2>About me</h2>
		</div>
		<div class="about-content myGconainer">
			<AboutStory/>
			<AboutSkills/>
		</div>
	</div>
</template>

<style scoped lang="sass">
@use '@/assets/global.sass' as *
.about-container
	background: $bgclr1
	width: 100%
	min-height: 100vh
	.main-heading
		text-align: center
		transition: $mtrans
		h2
			padding: 30px 0 10px
			@include fontoo(40px, bold, $wclr)
			text-transform: capitalize
			letter-spacing: 1px
	.about-content
		@include flexoo(column, nowrap, center, center)
</style>
