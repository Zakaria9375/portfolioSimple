<script setup>
	import sourceData from "myData.json";
	import { reactive } from "vue";
	const skills = reactive(sourceData.Skills);
</script>
<template>
	<div class="skills">
		<h1>Most used technologies</h1>
		<div class="skillContainer">
		<span v-for="skill in skills" :key="skill.id" class="skill">
			<span class="skilllogo">
				<img
					alt="skill"
					class="logo"
					:src="`src/assets/svgs/${skill.source}`"
				/>
			</span>
			<span class="svg">{{ skill.name }}</span>
		</span>
		</div>
	</div>
</template>
<style lang="sass" scoped>
@use '@/assets/global.sass' as *
.skills
	h1
		text-align: center
		@include fontoo(1.8rem, 700, $wclr)
		opacity: 0.5
	.skillContainer
		@include flexoo(row, wrap, center, center)
		gap: 1rem
		.skill
			.skilllogo
				.logo
					width: 1.5rem
					height: 1.5rem
					margin-right: 10px
					margin-left: 10px
			.svg
				@include fontoo(1.6rem, normal, $wclr)
				opacity: 0.95

</style>