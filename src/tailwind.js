if(process.env.NODE_ENV !== 'production') {

	if(!document.querySelector('body > .bb-tailwind-breakpoint-tool')) {
        document.querySelector('body').innerHTML += '<div class="bb-tailwind-breakpoint-tool bottom-0 left-1/2 -translate-x-1/2 fixed text-nowrap rounded-full p-3 m-3 text-white z-[999] transition-all pointer-events-none bg-primary" style="opacity: 1;">' +
    	    '<div class="block sm:hidden p-3 pt-1 pb-1">Extra Small (xs)</div>' +
            '<div class="hidden sm:block md:hidden p-3 pt-1 pb-1">Small (sm)</div>' +
            '<div class="hidden md:block lg:hidden p-3 pt-1 pb-1">Medium (md)</div>' +
            '<div class="hidden lg:block xl:hidden p-3 pt-1 pb-1">Large (lg)</div>' +
            '<div class="hidden xl:block 2xl:hidden p-3 pt-1 pb-1">X-Large (xl)</div>' +
            '<div class="hidden 2xl:block 3xl:hidden p-3 pt-1 pb-1">2X-Large (2xl)</div>' +
            '<div class="hidden 3xl:block 4xl:hidden p-3 pt-1 pb-1">3X-Large (3xl)</div>' +
            '<div class="hidden 4xl:block p-3 pt-1 pb-1">4X-Large (xxl)</div>' +
        '</div>';

		function bbFadeOut() {
			return setTimeout(function() {
				document.querySelector('body > .bb-tailwind-breakpoint-tool').style.opacity = 0;
			}, 2500);
		}

		let currentBbFadeOut = bbFadeOut();

		window.addEventListener('resize', function() {
			document.querySelector('body > .bb-tailwind-breakpoint-tool').style.opacity = 1;
			clearTimeout(currentBbFadeOut);

			currentBbFadeOut = bbFadeOut();
		})
	}
}
