// =======================================================================
//  Project Filtering Functionality
// =======================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi filter project, sorting, search, dan animasi filter saat DOM siap
    initProjectFilters();
    initSortingOptions();
    initSearchFilter();
    initAnimatedFiltering();
});

// Inisialisasi tombol filter project
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    if (!filterButtons.length || !projectItems.length) return;
    // Event click untuk setiap tombol filter
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filterValue = button.getAttribute('data-filter');
            filterProjects(projectItems, filterValue);
        });
    });
}

// Filter project berdasarkan kategori
function filterProjects(projects, filterValue) {
    projects.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
        if (filterValue === 'all' || projectCategory === filterValue) {
            project.classList.remove('hide');
            setTimeout(() => { project.style.display = 'block'; }, 300);
        } else {
            project.classList.add('hide');
            setTimeout(() => { project.style.display = 'none'; }, 300);
        }
    });
}

// Inisialisasi sorting project
function initSortingOptions() {
    const sortSelect = document.querySelector('.sort-select');
    if (!sortSelect) return;
    sortSelect.addEventListener('change', () => {
        const sortValue = sortSelect.value;
        const projectsContainer = document.querySelector('.projects-grid');
        const projects = Array.from(document.querySelectorAll('.project-item'));
        // Sorting berdasarkan value
        if (sortValue === 'newest') {
            projects.sort((a, b) => new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date')));
        } else if (sortValue === 'oldest') {
            projects.sort((a, b) => new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date')));
        } else if (sortValue === 'name-asc') {
            projects.sort((a, b) => a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent));
        } else if (sortValue === 'name-desc') {
            projects.sort((a, b) => b.querySelector('h3').textContent.localeCompare(a.querySelector('h3').textContent));
        }
        projects.forEach(project => projectsContainer.appendChild(project));
    });
}

// Inisialisasi filter pencarian project
function initSearchFilter() {
    const searchInput = document.querySelector('.project-search');
    if (!searchInput) return;
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase().trim();
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach(project => {
            const projectTitle = project.querySelector('h3').textContent.toLowerCase();
            const projectDescription = project.querySelector('p').textContent.toLowerCase();
            const projectTechnologies = Array.from(project.querySelectorAll('.project-tech span'))
                .map(tech => tech.textContent.toLowerCase()).join(' ');
            const searchContent = projectTitle + ' ' + projectDescription + ' ' + projectTechnologies;
            if (searchContent.includes(searchValue)) {
                project.classList.remove('hide');
                setTimeout(() => { project.style.display = 'block'; }, 300);
            } else {
                project.classList.add('hide');
                setTimeout(() => { project.style.display = 'none'; }, 300);
            }
        });
    });
}

// Animasi transisi filter project
function initAnimatedFiltering() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.1}s`;
    });
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filterValue = button.getAttribute('data-filter');
            setTimeout(() => {
                const visibleProjects = Array.from(projectItems).filter(project => {
                    const category = project.getAttribute('data-category');
                    return filterValue === 'all' || category === filterValue;
                });
                visibleProjects.forEach((project, index) => {
                    project.classList.remove('animate');
                    void project.offsetWidth;
                    project.classList.add('animate');
                    project.style.animationDelay = `${index * 0.1}s`;
                });
            }, 100);
        });
    });
}

// Multi-filtering: filter project dengan beberapa filter aktif sekaligus
function initMultipleFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const projectItems = document.querySelectorAll('.project-item');
    if (!filterCheckboxes.length) return;
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const activeFilters = Array.from(filterCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            if (activeFilters.length === 0) {
                projectItems.forEach(project => {
                    project.classList.remove('hide');
                    project.style.display = 'block';
                });
                return;
            }
            projectItems.forEach(project => {
                const projectCategories = project.getAttribute('data-category').split(' ');
                const shouldShow = activeFilters.some(filter => projectCategories.includes(filter));
                if (shouldShow) {
                    project.classList.remove('hide');
                    setTimeout(() => { project.style.display = 'block'; }, 300);
                } else {
                    project.classList.add('hide');
                    setTimeout(() => { project.style.display = 'none'; }, 300);
                }
            });
        });
    });
}

// Inisialisasi filtering dengan Isotope.js jika tersedia
function initIsotopeFiltering() {
    if (typeof Isotope === 'function') {
        const grid = document.querySelector('.projects-grid');
        const iso = new Isotope(grid, {
            itemSelector: '.project-item',
            layoutMode: 'fitRows',
            transitionDuration: '0.6s',
            stagger: 100
        });
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                iso.arrange({ filter: filterValue === 'all' ? '*' : `.${filterValue}` });
            });
        });
    }
}

// Inisialisasi tag cloud untuk filtering project
function initTagCloud() {
    const tagCloud = document.querySelector('.tag-cloud');
    if (!tagCloud) return;
    const projectItems = document.querySelectorAll('.project-item');
    const allTags = new Set();
    projectItems.forEach(project => {
        const tags = project.getAttribute('data-tags')?.split(',') || [];
        tags.forEach(tag => { if (tag.trim()) allTags.add(tag.trim()); });
    });
    allTags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        tagElement.addEventListener('click', () => {
            tagElement.classList.toggle('active');
            const activeTags = Array.from(document.querySelectorAll('.tag.active')).map(el => el.textContent);
            projectItems.forEach(project => {
                const projectTags = project.getAttribute('data-tags')?.split(',').map(t => t.trim()) || [];
                if (activeTags.length === 0 || activeTags.some(tag => projectTags.includes(tag))) {
                    project.classList.remove('hide');
                    project.style.display = 'block';
                } else {
                    project.classList.add('hide');
                    project.style.display = 'none';
                }
            });
        });
        tagCloud.appendChild(tagElement);
    });
}