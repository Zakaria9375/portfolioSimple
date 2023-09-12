<template>
	<div class="story" >
		<div class="me">
			<h4>About me</h4>
			<p>I'm Zakaria, but you can call me Zica. Originally from Egypt. I'm more of a traveler than a stationary soul. Currently, residing in Riga, Latvia.
			</p>
			<h4>personal skills</h4>
			<div class="ps">
				<span>Flexible</span>
				<span>Driven by Challenge</span>
				<span>Advice Listener</span>
				<span>Working hard to be Distinctive</span>
				<span>Collaborative Team Player</span>
			</div>
		</div>
		<div class="photo">
			<img src="/images/cat-05.jpg" alt="">
		</div>
	</div>
</template>
<style lang="sass" scoped>
@use '@/assets/global.sass' as *
.story
	@include more($smS)
		@include flexoo(row, wrap, space-between,center)
	@include less($smS)
		@include flexoo(column, wrap, center,center)	
	padding: 20px
	margin-bottom: 30px
	background: $about
	.me
		@include more($smS)
			width: 60%
		h4
			@include fontoo(1.4rem, 600, $wclr)
			text-transform: uppercase
			padding: 0 20px 10px
			opacity: 0.5
		p
			@include fontoo(1.2rem, 500, $wclr)
			line-height: 1.8
			opacity: 0.9
			padding-bottom: 1.25rem
		.ps
			@include flexoo(row, wrap, space-evenly,center)
			margin-bottom: 1.25rem
			gap: 10px
			span
				padding: 0.8rem
				text-align: center
				width: fit-content
				background-color: rgb(14 19 53 / 70%)
				border-radius: 1rem
				@include fontoo(1.2rem, 500, $wclr)
				opacity: 0.95
	.photo
		@include more($smS)
			flex-basis: 35%
		@include less($smS)
			width: min(400px, 100%)
		img
			max-width: 100%
			aspect-ratio: 1
			height: auto
			object-fit: cover 
			border-radius: 50%
			filter: brightness(80%)
			filter: grayscale(20%)
	</style>