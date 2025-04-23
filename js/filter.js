// =======================================================================
//  Project Filtering Functionality
// =======================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize project filtering
    initProjectFilters();
    
    // Initialize any additional filtering functionality
    initSortingOptions();
    initSearchFilter();
    initAnimatedFiltering();
});

// Function to initialize project filters
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (!filterButtons.length || !projectItems.length) return;
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Filter projects
            filterProjects(projectItems, filterValue);
        });
    });
}

// Function to filter projects
function filterProjects(projects, filterValue) {
    projects.forEach(project => {
        // Get project category
        const projectCategory = project.getAttribute('data-category');
        
        // Check if project should be visible
        if (filterValue === 'all' || projectCategory === filterValue) {
            // Show project with animation
            project.classList.remove('hide');
            setTimeout(() => {
                project.style.display = 'block';
            }, 300);
        } else {
            // Hide project with animation
            project.classList.add('hide');
            setTimeout(() => {
                project.style.display = 'none';
            }, 300);
        }
    });
}

// Function to initialize sorting options
function initSortingOptions() {
    const sortSelect = document.querySelector('.sort-select');
    
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', () => {
        // Get sort value
        const sortValue = sortSelect.value;
        const projectsContainer = document.querySelector('.projects-grid');
        const projects = Array.from(document.querySelectorAll('.project-item'));
        
        // Sort projects based on selected option
        if (sortValue === 'newest') {
            projects.sort((a, b) => {
                return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
            });
        } else if (sortValue === 'oldest') {
            projects.sort((a, b) => {
                return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
            });
        } else if (sortValue === 'name-asc') {
            projects.sort((a, b) => {
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            });
        } else if (sortValue === 'name-desc') {
            projects.sort((a, b) => {
                return b.querySelector('h3').textContent.localeCompare(a.querySelector('h3').textContent);
            });
        }
        
        // Re-append projects in new order
        projects.forEach(project => {
            projectsContainer.appendChild(project);
        });
    });
}

// Function to initialize search filter
function initSearchFilter() {
    const searchInput = document.querySelector('.project-search');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', () => {
        // Get search value
        const searchValue = searchInput.value.toLowerCase().trim();
        const projectItems = document.querySelectorAll('.project-item');
        
        // Filter projects based on search value
        projectItems.forEach(project => {
            const projectTitle = project.querySelector('h3').textContent.toLowerCase();
            const projectDescription = project.querySelector('p').textContent.toLowerCase();
            const projectTechnologies = Array.from(project.querySelectorAll('.project-tech span'))
                .map(tech => tech.textContent.toLowerCase())
                .join(' ');
                
            const searchContent = projectTitle + ' ' + projectDescription + ' ' + projectTechnologies;
            
            if (searchContent.includes(searchValue)) {
                project.classList.remove('hide');
                setTimeout(() => {
                    project.style.display = 'block';
                }, 300);
            } else {
                project.classList.add('hide');
                setTimeout(() => {
                    project.style.display = 'none';
                }, 300);
            }
        });
    });
}

// Function for animated filtering transitions
function initAnimatedFiltering() {
    const projectItems = document.querySelectorAll('.project-item');
    
    // Apply staggered animation to project items
    projectItems.forEach((project, index) => {
        project.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Re-apply animation on filter change
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get filter value
            const filterValue = button.getAttribute('data-filter');
            
            // Get visible projects after filtering
            setTimeout(() => {
                const visibleProjects = Array.from(projectItems).filter(project => {
                    const category = project.getAttribute('data-category');
                    return filterValue === 'all' || category === filterValue;
                });
                
                // Reset animation
                visibleProjects.forEach((project, index) => {
                    project.classList.remove('animate');
                    void project.offsetWidth; // Trigger reflow
                    project.classList.add('animate');
                    project.style.animationDelay = `${index * 0.1}s`;
                });
            }, 100);
        });
    });
}

// Function to handle multi-filtering (when multiple filters can be active at once)
function initMultipleFilters() {
    const filterCheckboxes = document.querySelectorAll('.filter-checkbox');
    const projectItems = document.querySelectorAll('.project-item');
    
    if (!filterCheckboxes.length) return;
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            // Get all active filters
            const activeFilters = Array.from(filterCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);
            
            // If no filters are selected, show all projects
            if (activeFilters.length === 0) {
                projectItems.forEach(project => {
                    project.classList.remove('hide');
                    project.style.display = 'block';
                });
                return;
            }
            
            // Filter projects based on selected filters
            projectItems.forEach(project => {
                const projectCategories = project.getAttribute('data-category').split(' ');
                
                // Check if project matches any active filter
                const shouldShow = activeFilters.some(filter => 
                    projectCategories.includes(filter)
                );
                
                if (shouldShow) {
                    project.classList.remove('hide');
                    setTimeout(() => {
                        project.style.display = 'block';
                    }, 300);
                } else {
                    project.classList.add('hide');
                    setTimeout(() => {
                        project.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Initialize isotope filtering with animation if isotope.js is loaded
function initIsotopeFiltering() {
    // Check if Isotope is available
    if (typeof Isotope === 'function') {
        // Initialize Isotope
        const grid = document.querySelector('.projects-grid');
        const iso = new Isotope(grid, {
            itemSelector: '.project-item',
            layoutMode: 'fitRows',
            transitionDuration: '0.6s',
            stagger: 100
        });
        
        // Filter items on button click
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                iso.arrange({ filter: filterValue === 'all' ? '*' : `.${filterValue}` });
            });
        });
    }
}

// Initialize tag cloud for project filtering
function initTagCloud() {
    const tagCloud = document.querySelector('.tag-cloud');
    
    if (!tagCloud) return;
    
    // Get all unique tags from projects
    const projectItems = document.querySelectorAll('.project-item');
    const allTags = new Set();
    
    projectItems.forEach(project => {
        const tags = project.getAttribute('data-tags')?.split(',') || [];
        tags.forEach(tag => {
            if (tag.trim()) {
                allTags.add(tag.trim());
            }
        });
    });
    
    // Create tag cloud
    allTags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('tag');
        tagElement.textContent = tag;
        
        tagElement.addEventListener('click', () => {
            // Toggle active state
            tagElement.classList.toggle('active');
            
            // Get all active tags
            const activeTags = Array.from(document.querySelectorAll('.tag.active'))
                .map(el => el.textContent);
            
            // Filter projects
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