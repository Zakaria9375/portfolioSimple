<template>
	<div class="story" >
		<div class="me">
			<h1>Who I am?</h1>
			<p>I am Zakaria, or zica, orginally from Egypt.. My current location now is Riga, Latvia.. I have a mechanical engineering background.
			</p>
			<h4>personality and mindest</h4>
			<p>
				I am friendly, advice lisener and I do not talk much
				I have this kind of personality that makes me going to the hardest challenge to do. I have never been satisfied of my achievements. So, I always work hard to be distinctive.
			</p>
		</div>
		<div class="photo">
			<img src="/public/images/cat-05.jpg" alt="">
		</div>
	</div>
</template>
<style lang="sass" scoped>
@use '@/assets/global.sass' as *
.story
	@include flexoo(row, wrap, center,center)
	padding: 30px
	// background: $aSide
</style>