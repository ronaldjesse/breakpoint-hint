if(process.env.NODE_ENV === 'production') return;

if(!document.querySelector('body > .bb-bootstrap-breakpoint-tool')) {
    document.querySelector('body').innerHTML += '<div class="bb-bootstrap-breakpoint-tool bottom-0 start-50 translate-middle position-fixed text-nowrap rounded-pill p-1 m-3 bg-info" style="z-index:999; opacity: 1; pointer-events:none; transition: all 0.3s ease;">\n' +
        '  <div class="d-block d-sm-none p-3 pt-1 pb-1">Extra Small (xs)</div>\n' +
        '  <div class="d-none d-sm-block d-md-none p-3 pt-1 pb-1">Small (sm)</div>\n' +
        '  <div class="d-none d-md-block d-lg-none p-3 pt-1 pb-1">Medium (md)</div>\n' +
        '  <div class="d-none d-lg-block d-xl-none p-3 pt-1 pb-1">Large (lg)</div>\n' +
        '  <div class="d-none d-xl-block d-xxl-none p-3 pt-1 pb-1">X-Large (xl)</div>\n' +
        '  <div class="d-none d-xxl-block p-3 pt-1 pb-1">XX-Large (xxl)</div>\n' +
        '</div>';

    function fadeOut() {
        return setTimeout(function() {
            document.querySelector('body > .bb-bootstrap-breakpoint-tool').style.opacity = 0;
        }, 2000);
    }

    let currentFadeOut = fadeOut();

    window.addEventListener('resize', function() {
        document.querySelector('body > .bb-bootstrap-breakpoint-tool').style.opacity = 1;
        clearTimeout(currentFadeOut);

        currentFadeOut = fadeOut();
    })
}
