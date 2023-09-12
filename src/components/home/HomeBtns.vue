<template>
	<div class="btns">
		<div class="porto">
			<router-link :to="{ name: 'portfolio' }">
				<button>
					<span class="title">My portfolio</span>
				</button>
			</router-link>
		</div>
		<div class="contact">
			<router-link :to="{ name: 'contact' }">
				<button>
					<span >Get in touch</span>
				</button>
			</router-link>
		</div>
		<div class="about">
			<p>or learn more</p>
			<router-link :to="{ name: 'about' }">
				<span>about me.</span>
			</router-link>
		</div>
	</div>
</template>
<style scoped lang="sass">
@use '@/assets/global.sass' as *

.btns
	@include flexoo(row, wrap, flex-start, center)
	.porto,
	.contact
		padding: 8px
		a
			cursor: pointer
			button
				background-color: transparent
				border: 2px solid $rclr
				color: white
				width: 210px
				height: 75px
				position: relative
				transition: 0.3s ease
				cursor: pointer
				&::after
					content: ""
					position: absolute
					transform-origin: 100% 100% 
					width: 100%
					height: 100%
					left: 0
					top: 0
					transform: scale(0)
					transition: transform 0.3s ease
					background-color: $rclr
				&:hover::after
					transform: scale(1)
				span
					@include fontoo(22px, 600, $wclr)
					@include flexoo(row, nowrap, center, center)
					@include absoo(100%, 100%, 0, 0)
					z-index: 1
	.about
		p
			@include fontoo(20px, normal, $wclr)
			display: inline-block
			padding: 10px
		a
			span
				@include fontoo(22px, normal, $rclr)
				display: inline-block
				font-style: italic
</style>
