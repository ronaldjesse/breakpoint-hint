const addBreakPointToast = () => {
    if (!document.querySelector('body > .bb-tailwind-breakpoint-tool')) {
        const toastDiv = document.createElement('div');
        toastDiv.className = 'bb-tailwind-breakpoint-tool bottom-0 left-1/2 -translate-x-1/2 fixed text-nowrap rounded-full p-3 m-3 text-white z-[999] transition-all pointer-events-none bg-primary';
        toastDiv.style.opacity = '1';

        const breakpoints = [
            { class: 'block sm:hidden', text: 'Extra Small (xs)' },
            { class: 'hidden sm:block md:hidden', text: 'Small (sm)' },
            { class: 'hidden md:block lg:hidden', text: 'Medium (md)' },
            { class: 'hidden lg:block xl:hidden', text: 'Large (lg)' },
            { class: 'hidden xl:block 2xl:hidden', text: 'X-Large (xl)' },
            { class: 'hidden 2xl:block 3xl:hidden', text: '2X-Large (2xl)' },
            { class: 'hidden 3xl:block 4xl:hidden', text: '3X-Large (3xl)' },
            { class: 'hidden 4xl:block', text: '4X-Large (xxl)' }
        ];

        breakpoints.forEach(bp => {
            const bpDiv = document.createElement('div');
            bpDiv.className = `${bp.class} p-3 pt-1 pb-1`;
            bpDiv.textContent = bp.text;
            toastDiv.appendChild(bpDiv);
        });

        document.body.appendChild(toastDiv);

        function bbFadeOut() {
            return setTimeout(() => {
                toastDiv.style.opacity = 0;
            }, 2500);
        }

        let currentBbFadeOut = bbFadeOut();

        window.addEventListener('resize', () => {
            toastDiv.style.opacity = 1;
            clearTimeout(currentBbFadeOut);
            currentBbFadeOut = bbFadeOut();
        });
    }
};

export default addBreakPointToast;
