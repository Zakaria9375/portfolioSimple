<template>
  <div class="social">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/zakaria-ali-java/" target="_blank">
          <i class='bx bxl-linkedin-square'></i></a>
      </li>
      <li>
        <a href="https://github.com/Zakaria9375" target="_blank">
          <i class='bx bxl-github' ></i></a>
      </li>
    </ul>
  </div>
</template>
<style lang="sass" scoped>
@use '@/assets/global.sass' as *	
.social
	padding: 10px
	li:first-child
		margin-bottom: 15px
	li
		a
			@include fontoo(28px, bold, white)
			&:hover
				i
					scale: 1.3
					color: $rclr
</style>