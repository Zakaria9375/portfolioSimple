<script setup>
	import sourceData from "@/myData.json";
	import { reactive } from "vue";
	const mainSkills = reactive(sourceData.MainSkills);
	const projects = reactive(sourceData.projects)
	const topProject = reactive(
		projects.filter((project) => project.top === true)
	)[0];
</script>
<template>
	<div class="info">
		<span>Hi, I'm</span>
		<h1><span>Z</span>akaria Ali</h1>
		<h2>a <span>Web Developer</span></h2>
		<div class="skills">
			<p>
				with deep knowledge and hands-on exerience with
				<span class="rec">
					<span class="technologies">
						<span class="techno" v-for="skill in mainSkills" :key="skill.id">
							<span class="logoSVG">
								<img
									alt="Vue logo"
									class="logo"
									:src="`src/assets/svgs/${skill.source}`"
								/>
							</span>
							<span class="name">{{ skill.name }}</span>
						</span>
					</span>
				</span>
				<!-- <br />
				let me draw your attention with one of my best work
				<span>
					<router-link
						:to="{
							name: 'projectDetail',
							params: { id: topProject.id },
						}"
					>
						<span class="top"><i class="fa-solid fa-trophy"></i></span>
					</router-link
				></span> -->
			</p>
		</div>
	</div>
</template>
<style scoped lang="sass">
@use '@/assets/global.sass' as *
.info
	padding: 20px
	span
		@include fontoo(36px, normal, $wclr)
	h1
		@include fontoo(46px, bold, $gclr)
		span
			@include fontoo(56px, bold, $gclr)
	h2
		@include fontoo(46px, bold, $wclr)
		span
			@include fontoo(46px, bold, $rclr)
	.skills
		p
			@include fontoo(28px, normal, $pclr)
			padding-top: 20px
			padding-bottom: 20px
			line-height: 1.7
			span.top
				@include fontoo(28px, normal, $rclr)
				font-style: italic
				text-transform: lowercase
			.rec
				display: inline-block
				position: relative
				height: 48px
				overflow: hidden
				vertical-align: top
				.technologies
					@include flexoo(column, nowrap, center, flex-start)
					transition: transform $mtrans ease
					animation: spinWords 8s ease infinite
					.techno
						@include flexoo(row, nowrap, flex-start, center)
						@include fontoo(28px, normal, $wclr)
						.logo
							width: 28px
							height: 28px
							margin-right: 10px
							margin-left: 10px
						.name
							@include fontoo(28px, normal, $wclr)

@keyframes spinWords
	0%, 20%, 100%
		transform: translateY(0%)
	25%, 45%
		transform: translateY(-25%)
	50%, 70%
		transform: translateY(-50%)
	75%, 95%
		transform: translateY(-75%)
</style>
