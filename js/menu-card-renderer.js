
const SHOW_MENU_PRICES = false;

function createMenuCard(item) {
    const card = document.createElement('div');
    card.className = 'menu-card';

    // Create image/icon element
    const imageDiv = document.createElement('div');
    imageDiv.className = 'item-image';

    // Check if this item has a custom picture (from JSON)
    if (item.picture && item.picture.src) {
        const img = document.createElement('img');
        img.src = item.picture.src;
        img.alt = item.picture.alt || item.name;
        imageDiv.appendChild(img);
    } else {
        // Use icon from JSON or default
        const icon = document.createElement('i');
        icon.className = item.icon || 'fas fa-utensils';
        imageDiv.appendChild(icon);
    }

    // Create content element
    const contentDiv = document.createElement('div');
    contentDiv.className = 'item-content';

    // Create name element
    const nameDiv = document.createElement('div');
    nameDiv.className = 'item-name';
    nameDiv.setAttribute('data-i18n', `${item.id}-name`);
    nameDiv.textContent = item.name;

    // Create description element
    const descDiv = document.createElement('div');
    descDiv.className = 'item-desc';
    descDiv.setAttribute('data-i18n', `${item.id}-desc`);
    descDiv.textContent = item.description;

    // Create price element
    if (SHOW_MENU_PRICES && item.price) {
        const priceDiv = document.createElement('div');
        priceDiv.className = 'item-price';
        priceDiv.textContent = item.price;
        contentDiv.appendChild(priceDiv);
    }

    // Assemble card
    contentDiv.appendChild(nameDiv);
    contentDiv.appendChild(descDiv);
    card.appendChild(imageDiv);
    card.appendChild(contentDiv);
    return card;
}

function renderMenuCards(items, container) {
    items.forEach((item) => {
        const card = createMenuCard(item);
        container.appendChild(card);
    });
}

// Load and render menu items from JSON
async function loadAndRenderMenu() {
    try {
        const response = await fetch('data/menu.json');
        const menuData = response.ok ? await response.json() : {};
        
        console.log('Menu data loaded:', menuData);
        
        // Get main element to insert sections
        const mainElement = document.querySelector('main');
        if (!mainElement) {
            console.error('main element not found');
            return;
        }

        // Get category keys from JSON (in order)
        const categories = Object.keys(menuData);
        console.log('Categories found:', categories);
        
        // Create sections dynamically from JSON
        categories.forEach((category, index) => {
            // Create section
            const section = document.createElement('section');
            section.className = 'menu-section';
            section.id = category;
            if (index === 0) {
                section.classList.add('active');
            }

            // Create inner wrapper
            const wrapper = document.createElement('div');
            wrapper.className = 'py-12 px-6';

            // Create max-width container
            const container = document.createElement('div');
            container.className = 'max-w-7xl mx-auto';

            // Create grid
            const grid = document.createElement('div');
            grid.className = 'grid gap-8';

            // Append grid to container, container to wrapper, wrapper to section
            container.appendChild(grid);
            wrapper.appendChild(container);
            section.appendChild(wrapper);

            // Add section to main
            mainElement.appendChild(section);

            // Populate grid with items
            const items = menuData[category] || [];
            console.log(`Category "${category}" has ${items.length} items`);
            if (items.length > 0) {
                renderMenuCards(items, grid);
            }
        });

        console.log('All sections created and populated');

        // Initialize translations for the newly rendered cards
        if (typeof initI18n === 'function') {
            initI18n();
        }

        // Set up scroll reveal for dynamically created menu cards
        const menuCards = document.querySelectorAll('.menu-card');
        if (typeof observeRevealElements === 'function' && menuCards.length > 0) {
            observeRevealElements(Array.from(menuCards));
        }

        // Initialize tab system after sections are created
        if (typeof initMenuTabs === 'function') {
            initMenuTabs();
        }
    } catch (error) {
        console.error('Error loading menu:', error);
    }
}

// Load menu when DOM is ready
document.addEventListener('DOMContentLoaded', loadAndRenderMenu);
