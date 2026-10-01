// Portfolio. Milimo Mukkuli.
// Only one interaction: hide the fixed contact bar when the contact
// section is on screen.

const fixedContact = document.getElementById('fixedContact');
const contactSection = document.getElementById('contact');

if (fixedContact && contactSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fixedContact.classList.add('hidden');
            } else {
                fixedContact.classList.remove('hidden');
            }
        });
    }, { threshold: 0.3 });

    observer.observe(contactSection);
}

/* Hero fade: as you scroll, the hero fades and lifts slightly.
   It's a normal section — no fixed positioning, no lock. */
(function () {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    const FADE_DISTANCE = 400;
    let ticking = false;
    function update() {
        const y = window.scrollY;
        const progress = Math.min(y / FADE_DISTANCE, 1);
        hero.style.opacity = String(1 - progress);
        hero.style.transform = `translateY(${-40 * progress}px)`;
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(update);
            ticking = true;
        }
    }, { passive: true });
    update();
})();
