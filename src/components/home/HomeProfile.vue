<template>
<div class="profile">
	<canvas ref="myCanvas" @mousemove="handleMouseMove">
	</canvas>
</div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    // Create a ref for the canvas element
    const myCanvas = ref(null);

    // Function to initialize the canvas and start animation
    const initializeCanvas = () => {
      const canvas = myCanvas.value;
      const context = canvas.getContext('2d');
      const effect = new Effect(context, canvas.width, canvas.height);

      effect.wraptext('Z');

      function animate() {
        // Your animation logic goes here
        // You can use requestAnimationFrame or setInterval for animation
        // Update particles and render them
        // Example: effect.update();
        //          effect.render();

        // Request the next animation frame
        requestAnimationFrame(animate);
      }

      // Start the animation loop
      animate();
    };

    // Call the initializeCanvas function when the component is mounted
    onMounted(() => {
      initializeCanvas();
    });

    return {
      myCanvas,
    };
  },
	methods: {
		handleMouseMove(event){
			const mouseX= event.clientX - this.canvas.getBoundingClientRect().left
			const mouseY= event.clientY - this.canvas.getBoundingClientRect().top
			console.log(`x: ${mouseX}`)
		}
	}
};

// Define your particle and Effect classes here, same as in your vanilla JS code
class particle {
  constructor() {
    // Constructor logic for particles
  }

  draw() {
    // Particle drawing logic
  }

  update() {
    // Particle update logic
  }
}

class Effect {
	constructor(context, canvasWidth, canvasHeight){
		this.context = context
		this.canvasWidth = canvasWidth
		this.canvasHeight = canvasHeight
		this.textX = this.canvasWidth/2
		this.textY = this.canvasHeight/2
		this.particles = []
		this.gap = 3
		this.mouse = {
			radius: 20000,
			x:0,
			y:0
		}
  }

	wraptext(text){
		this.context.fillStyle = 'white'
		this.context.font = '300px'
		this.context.textAlign = 'center'
		this.context.textBaseline = 'middle'
		this.context.lineWidth = 3
		this.context.fillText(text, textX, textY)
		this.convertToParticles()
  }

  convertToParticles() {
    // convertToParticles logic
		this.particles=[]
		const pxls = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight)
		for (let y= 0; y < this.canvasHeight; y += this.gap){
			for(let x=0; x< this.canvasWidth; x += this.gap){
				const index = (y*this.canvasWidth+ x) * 4
				const alpha = pxls[index+3]
				if(alpha > 0){
					const red = pxls[index]
					const green = pxls[index +1 ]
					const blue = pxls[index+2]
					const color = `rgb( ${red} , ${green} , ${blue})`
				}
			}
		}
  }

  render() {
    // Render logic for the Effect class
  }
}
</script>


<style lang="sass" scoped>
@use '@/assets/global.sass' as *

.profile
	// background: $aSide
	padding: 16px
	text-align: center
	position: relative
	canvas
		// position: absolute
		
</style>
