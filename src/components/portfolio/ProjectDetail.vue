<script setup>
	//imports
	import { reactive, computed } from 'vue';
	import { useRoute, useRouter } from 'vue-router';
	import sourceData from '@/myData.json'
	import ProjectDetailaSide from './ProjectDetailaSide.vue';
	import ProjectGallery from './ProjectGallery.vue';
	//states
	const state = reactive({
		projects: sourceData.projects
	})
	//route info and method accessing
	const route = useRoute();
	const router = useRouter();
	const routeId = computed(() => {
  return Number(route.params.id);
	});
	//props
		// const {id} = defineProps({
		// 	id: {type: Number, required: true}
		// })
	//computed
	const project = computed(() => {
		return state.projects.find( project => project.id === routeId.value)
	});
	const isIdExist = computed(() => {
		let l = state.projects.length
			if(1 <= routeId.value < l){
				return true
			}
			return false
	});
	//methods
	function goToPreviousId(){
			if(isIdExist.value){
				let previousId = routeId.value - 1
				router.push({name: 'projectDetail', params: {id: previousId}})
			}
		};
		function goToNextId(){
			if(isIdExist.value){
				let nextId = routeId.value + 1
				router.push({name: 'projectDetail', params: {id: nextId}})
			}
		};
</script>

<template>
	<div class="project-background">
		<div class="project-container">
			<div class="heading myGcontainer">
				<div class="btnNav">
					<button :disabled="project.id === 1" @click="goToPreviousId"><i class="fa-solid fa-arrow-left"></i></button>
					<button>
						<router-link :to="{name: 'portfolio'}">
						<i class="fa-solid fa-arrow-up-from-bracket"></i>
						</router-link>
					</button>				
					<button :disabled="project.id >= state.projects.length" @click="goToNextId"><i class="fa-solid fa-arrow-right"></i></button>
				</div>
				<div class="main-heading">
					<h1>{{project.title}}</h1>
					<p>{{ project.about }}</p>
				</div>
			</div>
			<div class="content myGcontainer">
				<div class="description">
					<div class="gallery">
					<ProjectGallery :project="project"/>
					</div>
					<div class="desc-sec">
						<h2>Description</h2>
						<p>{{ project.description }}</p>
					</div>
				</div>
				<aside>
					<ProjectDetailaSide :project="project"/>
				</aside>
			</div>
		</div>
	</div>
</template>

<style scoped lang="sass">
@use '@/assets/global.sass' as *

.project-background
	background: $lgPORTO
	width: 100%
	height: 100%
	min-height: 100vh
	.project-container
		text-align: center
		.heading
			// background-color: #24345f
			width: 100%
			padding-top: 25px
			@include flexoo(row-reverse, nowrap, space-between, flex-start)
			
			.btnNav
				@include flexoo(row, nowrap, center, center)
				gap: 20px
				padding: 15px
				button
					padding: 10px
					border-radius: 50%
					border: none
					cursor: pointer
					background-color: $rclr
					transition: 0.2s
					i
						color: black
					&:hover
						box-shadow: $bxShadow
						scale: 1.05
					&:disabled
						display: none
			.main-heading
				padding-left: 30px
				h1
					padding: 15px 0 10px
					@include fontoo(32px, bold, $wclr)
				p
					padding: 10px 0 15px
					@include fontoo(18px, normal, $pclr)
		.content
			min-height: calc( 100vh - 142px)
			width: 100%
			background-color: $bclr
			padding-top: 40px
			padding-bottom: 30px
			@include flexoo(row, wrap, space-between,flex-start)
			.description
				padding: 0 16px
				flex-basis: 65%
				.gallery
					@include flexoo(row, nowrap, center,center)
				.desc-sec
					text-align: left
					h2
						@include fontoo(24px, 600, $wclr)
						margin-bottom: 10px
					p
						@include fontoo(16px, normal, $pclr)
			aside
				padding: 0 16px
				flex-basis: 30%

</style>