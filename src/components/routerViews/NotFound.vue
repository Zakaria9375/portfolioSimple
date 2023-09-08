<template>
	<div class="notFound myGcontainer">
		<h1>Not Found</h1>
		<p><span>Ops!! </span> We could not find the page that you are looking for, go back</p>
		<router-link to="/"><span class="home">home</span></router-link>
	</div>
</template>
<style scoped lang="sass">
@use '@/assets/global.sass' as * 
.notFound
	h1
		margin-top: 50px 
	p
		font-size: 20px
		padding: 10px
		display: inline-block
		span
			color: $rclr

	.home
		color: $gclr
		text-transform: uppercase
		font-size: 32px
		padding: 10px
</style>