<template>
	<div class="sliderContainer" @mouseover="stopAutoSlide" @mouseout="startAutoSlide">
		<div class="slides">
			<transition-group name="fade" tag="div"
			>
				<div v-for="currentIndex in [currentIndex]" :key="currentIndex" 
				>
					<img
						:src="`/images/${currentImage}`"
						:alt="currentImage" 
						:key="currentIndex"
						class="image"
					>
				</div>
			</transition-group>
		</div>
		<div class="btns">
			<span class="next" @click="goToNextImg">&#10095;</span>
			<span class="prev" @click="goToPreviousImg">&#10094;</span>
		</div>
		<div class="dotsContainer">
			<div class="dot" 
				v-for="(photo, index) in project.gallery" 
				:key="index"
				:class="{ active: (index === currentIndex) }"
				@click="currentIndex = index"
			></div>
		</div>
	</div>
</template>
<script>
export default {
	props:{
		project: {type: Object, required: true}
	},
	data(){
		return {
			currentIndex: 0,
			direction: 1,
			mySlidingInterval: null
		}
	},
	methods: {
	goToNextImg() {
		if (this.currentIndex >= this.project.gallery.length - 1) {
			this.currentIndex = 0;
		} else {
			this.currentIndex += 1;
		}
		this.direction = 1
	},
	goToPreviousImg() {
		if (this.currentIndex === 0) {
			this.currentIndex = this.project.gallery.length - 1;
		} else {
			this.currentIndex -= 1;
		}
		this.direction = -1
	},
	startAutoSlide() {
		if(!this.mySlidingInterval){
		this.mySlidingInterval = setInterval(this.goToNextImg, 5000)}},
	stopAutoSlide() {
		clearInterval(this.mySlidingInterval)
		this.mySlidingInterval = null
	},
	}, 
	computed: {
		currentImage: function() {
			return this.project.gallery[this.currentIndex]
    }
	},
	mounted: function() {
    this.startAutoSlide();
  },
}
</script>

<style scoped lang="sass">
@use '@/assets/global.sass' as *

.sliderContainer
	position: relative
	width: 720px
	width: 100%
	height: 400px
	margin-bottom: 60px
	.slides
		width: 100%
		height: calc( 100% - 40px )
		position: relative

		.image
			width: 100%
			height: 100%
			position: absolute
			object-fit: cover
			top: 0
			left: 0
			&.active
				left: 0
	.btns
		
		span
			position: absolute
			top: calc(50% - 20px)
			transform: translateY(-50%)
			width: 90px
			height: calc( 100% - 40px )
			@include fontoo(28px, bold, $wclr)
			@include flexoo(row, nowrap, center, center)
			user-select: none
			cursor: pointer
			z-index: 2
			&.next
				right: 0
				&:hover
					animation: bouncingBtnRight 1.5s infinite
			&.prev
				left: 0
				&:hover 
					animation: bouncingBtnLeft 1.5s infinite

	.dotsContainer
		position: absolute
		bottom: 5px
		z-index: 2
		left: 50%
		transform: translateX(-50%)
		.dot
			width: 15px
			height: 15px
			margin: 0px 5px
			cursor: pointer
			border-radius: 50%
			display: inline-block
			transition: background-color 0.6s ease
			background-color: rgb(36, 52 , 95)
			&.active
				background-color: $rclr

// .movee-enter-active,
// .movee-leave-active 
// 	transition: all 0.9s ease

// .movee-enter-from
// 	left: {{ direction * -100 }}%
// .movee-enter-to,
// .movee-leave-from 
// 	left: 0
// .movee-leave-to
// 	left: {{ direction * 100 }}%

.movee-enter-active,
.movee-leave-active 
	transition: all 10s ease

.movee-enter-from
	left: -100%
.movee-enter-to,
.movee-leave-from 
	left: 0
.movee-leave-to
	left: 100%

.fade-enter-active,
.fade-leave-active 
	transition: all 2s ease


.fade-enter-from,
.fade-leave-to
	opacity: 0

.fade-enter-to,
.fade-leave-from 
	opacity: 1

</style>