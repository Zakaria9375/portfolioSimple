<script setup>
	import AboutStory from '../about/AboutStory.vue';
	import AboutSkills from '../about/AboutSkills.vue';
	import { storeGetters } from '@/store/store.js'
	const specialContainer = storeGetters.specialContainer
</script>
<template>
	<div class="about-container" :class="specialContainer">
		<AboutStory/>
		<AboutSkills/>
	</div>
</template>

<style scoped lang="sass">
@use '@/assets/global.sass' as *
.about-container
	margin-top: 30px
	margin-bottom: 30px
	@include flexoo(column, nowrap, center, center)

</style>
