<script type="text/javascript">
    //creates css for iFrame
		var style = document.createElement('style');
			style.innerHTML = `
			    /* hides something class*/
				.something {
					visibility: hidden;
				}
			`;
    // appends CSS into iFrame to run
	parent.document.getElementById('iFrameID').contentDocument.body.innerHTML.appendChild(style);
</script>
