<template>
	<div class="btns">
		<div class="porto">
			<router-link :to="{ name: 'portfolio' }">
				<button>
					<span class="all">
						<span class="logo"><i class="fa-solid fa-briefcase"></i></span>
						<span class="title">My portfolio</span>
					</span>
				</button>
			</router-link>
		</div>
		<div class="contact">
			<router-link :to="{ name: 'contact' }">
				<button>
					<span class="all">
						<span class="logo"><i class="fa-regular fa-envelope"></i></span>
						<span class="title">Get in touch</span>
					</span>
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
				cursor: pointer
				span.all
					@include fontoo(22px, 600, $wclr)
					text-align: center
					padding: 10px
					span.logo
						display: none
						transition: $mtrans
					span.title
						padding-left: 10px
		&:hover
			button
				background-color: $rclr
				span.all
					span.logo
						display: inline-block
					span.title
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
