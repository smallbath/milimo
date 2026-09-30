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
