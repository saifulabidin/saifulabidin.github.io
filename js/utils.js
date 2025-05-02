// =======================================================================
//  Utility Functions (Reusable Helpers)
// =======================================================================

/**
 * Debounce function: Membatasi seberapa sering fungsi dijalankan.
 * @param {Function} func - Fungsi yang akan didebounce
 * @param {number} wait - Waktu tunggu dalam ms
 * @returns {Function}
 */
export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Helper untuk cek apakah elemen ada di viewport
 * @param {Element} el
 * @returns {boolean}
 */
export function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

/**
 * Helper untuk menambahkan/mereset animasi pada elemen (reflow)
 * @param {Element} el
 * @param {string} className
 */
export function resetAnimation(el, className = 'animate') {
    el.classList.remove(className);
    void el.offsetWidth;
    el.classList.add(className);
}