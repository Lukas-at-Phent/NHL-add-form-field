<!-- För att se användning se: https://www.flowbase.co/blog/how-to-add-simple-tooltips-in-webflow --->

<!--Tippy Tooltip Scripts--> 
<script src="https://unpkg.com/popper.js@1"></script>
<script src="https://unpkg.com/tippy.js@4"></script>

<!--Tippy Light Theme CSS--> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.4/themes/light.css"/>

<!--Tippy Default Settings--> 
<!--Override these settings with custom attributes--> 
<script>
tippy('.tippy', {          // Add the class tippy to your element
	theme: 'light',          // Dark or Light
	animation: 'scale',      // Options, shift-away, shift-toward, scale, persepctive
	duration: 250,           // Duration of the Animation
	arrow: true,             // Add arrow to the tooltip
	arrowType: 'round',      // Sharp, round or empty for none
	delay: [0, 50],          // Trigger delay in & out
	maxWidth: 240,           // Optional, max width settings
})
</script>
