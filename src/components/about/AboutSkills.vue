<script setup>
	import sourceData from "@/myData.json";
	import { reactive } from "vue";
	const skills = reactive(sourceData.Skills);
</script>
<template>
	<div class="skills">
		<span v-for="skill in skills" :key="skill.id" class="skill">
			<span class="skillName">
				<img
					alt="skill"
					class="logo"
					:src="`src/assets/svgs/${skill.source}`"
				/>
			</span>
			<span class="svg">{{ skill.name }}</span>
		</span>
	</div>
</template>
<style lang="sass" scoped>
@use '@/assets/global.sass' as *

.logo
	width: 28px
	height: 28px
	margin-right: 10px
	margin-left: 10px
</style>