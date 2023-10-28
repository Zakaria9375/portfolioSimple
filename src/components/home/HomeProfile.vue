<script setup>
	import sourceData from "myData.json"
	import { reactive } from "vue";
	const projects = reactive(sourceData.projects);
	const project = projects[(projects.length-1)]
</script>

<template>

	<div class="pro-container">
		<div class="heading">
			<h1>Best Work</h1>
		</div>
		<routerLink :to="{ name: 'projectDetail', params: { id: project.id}}">
			<div class="pro-image">
				<img :src="`/images/${project.photo}`" :alt="project.title" />
			</div>
			<div class="pro-header">
				<h4>{{ project.title }}</h4>
				<p>{{ project.about }}</p>
			</div>
		</routerLink>
	</div>
</template>

<style scoped lang="sass">
@use '@/assets/global.sass' as *
.heading
	text-align: center
	margin: 0
	padding: 10px
	opacity: 0.5
.pro-container
	width: 330px
	height: 380px
	padding: 0 16px
	position: relative
	color: white
	margin-bottom: 16px
	border-radius: 4px
	&:hover
		

	.pro-header
		width: 298px
		height: 80px
		padding: 10px
		background: $lgPORTO
		@include flexoo(column, wrap, space-between, center)
		h4
			@include fontoo(20px, bold, $wclr)
			transition: 0.5s ease
		p
			@include fontoo(16px, normal, white)
			transition: 0.5s ease
	.pro-image
		width: 298px
		height: 168px
		img
			width: 298px
			height: 168px
			background-position: center
			background-size: cover

</style>
