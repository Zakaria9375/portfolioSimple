<script setup>
	import sourceData from "@/myData.json"
	import { reactive } from "vue";
	import ProjectCard from "@/components/portfolio/ProjectCard.vue";
	const projects = reactive(sourceData.projects);
</script>

<template>
	<div class="portfolio-background">
		<div class="portfolio-container">
			<div class="main-heading">
				<h2>Web developer portfolio</h2>
				<p>And this is just <span>a start</span></p>
			</div>
			<div class="content">
				<div class="projects-container myGcontainer">
					<router-link
						v-for="project in projects"
						:key="project.id"
						:to="{ name: 'projectDetail', params: { id: project.id}}"
					>
						<ProjectCard :project="project" />
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="sass">
@use '@/assets/global.sass' as *
.portfolio-background
	background: $lgPORTO
	width: 100%
	min-height: 100vh
	.portfolio-container
		text-align: center
		.main-heading
			// background-color: #24345f
			width: 100%
			h2
				padding: 30px 0 10px
				@include fontoo(32px, bold, $wclr)
				letter-spacing: 1px
			p
				padding: 15px 0 25px
				> span
					@include fontoo(20px, 400, rgb(250 146 100))
					font-style: italic
		.content
			min-height: calc( 100vh - 140px)
			width: 100%
			background-color: $bclr
			.projects-container
				@include flexoo(row, wrap, center, center)
</style>
