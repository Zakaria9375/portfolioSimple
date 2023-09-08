<template>
	<div class="contact-background">
		<div class="contact-container myGcontainer">
		<div class="main-heading">
			<h2>Contact me</h2>
			<p>Thank you for visiting my portfolio. Your ideas and inquiries are important to me. Feel free to reach me out using the contact form below, or through email or phone. </p>
		</div>
		<div class="content">
			<div class="info">
					<h4>Get in touch</h4>
					<span class="by-phone">+371 28012310</span>
					
					<h4>Send a message</h4>
					<a href="mailto:alizakaria9375@email.com">
						by <span>Email</span>
					</a>
					<a href="http://www.linkedin.com/in/zakaria-ali-java/" target="_blank" rel="noopener noreferrer">
						by <span>Linkedin</span>
					</a>				
				</div>
				<div class="form">
					<form action="submit">
						<input type="text" name="name" class="form-input" placeholder="ENTER YOUR NAME">
						<input type="text" name="mail" class="form-input" placeholder="ENTER YOUR EMAIL">
						<textarea name="message" class="form-input" placeholder="ENTER YOUR MESSAGE"></textarea>
						<input type="submit" value="send message" >
					</form>
				</div>

			</div>
		</div>
	</div>
</template>
<style scoped lang="sass">
@use '@/assets/global.sass' as * 

.contact-background 
	background-color: $bgclr1
	width: 100%
	height: 100%
	@include flexoo(row, nowrap, center, center)
	min-height: 100vh
	.contact-container
		margin-bottom: 10px
		margin-top: 10px 
		.main-heading
			text-align: center
			h2
				@include fontoo(42px, 800, $wclr)
				margin-bottom: 30px
				text-transform: uppercase
				letter-spacing: 2px
			p
				@include fontoo(20px, 400, $wclr)
				line-height: 1.8
				max-width: 798px
				margin: 0 auto 40px
		.content
			@include flexoo(row, wrap, space-evenly, flex-start)
			.form
				flex-basis: 65%
				.form-input
					padding: 20px
					display: block
					border: 1px solid #ccc
					border-radius: 10px
					margin-bottom: 40px
					width: 100%
					background-color: rgb(28, 40, 73)
					@include fontoo(16px, normal, $wclr)
					&:focus
						border-color: $rclr
				textarea.form-input
					height: 200px
					resize: none
				input[type="submit"]
					color: $wclr
					background-color: $rclr
					padding: 20px
					border: none
					display: flex
					margin-left: auto
					text-transform: uppercase
					cursor: pointer
					&:hover
						scale: 1.1
			.info
				flex-basis: 25%
				h4
					@include fontoo(22px, 600, $wclr)
					text-transform: uppercase
					margin-bottom: 40px
					&:nth-of-type(2)
						margin-top: 100px
				> span
					display: block
					@include fontoo(18px, normal, $wclr)
					margin-bottom: 10px
					letter-spacing: 1px
				a
					display: block
					@include fontoo(18px, normal, $wclr)
					span
						display: inline-block
						@include fontoo(22px, normal, $rclr)
						font-style: italic

</style>