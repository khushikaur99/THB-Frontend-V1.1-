

// Dynamic banner population
function populateMainBanner() {
    const mainBanner = document.getElementById('mainBanner');
    if (mainBanner) {
        mainBanner.innerHTML = `
            <img src="/CAKES/IMG/B4.jpg" alt="Banner" class="w-full h-full object-cover object-center">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-center px-4">
                <h1 class="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold text-white drop-shadow-lg fade-in-up">
                    "Freshly Baked Happiness – Just a Click Away!"
                </h1>
            </div>
        `;
    }
}

function populateBottomBanner() {
    const bottomBanner = document.getElementById('bottomBanner');
    if (bottomBanner) {
        bottomBanner.innerHTML = `
            <img src="/CAKES/IMG/B4.jpg" alt="Banner" class="w-full h-full object-cover object-center">
            <div class="absolute inset-0 bg-black/30"></div>
            <div class="absolute inset-0 flex items-center justify-center text-center px-4">
                <h1 class="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold text-white drop-shadow-lg fade-in-up">
                    "Freshly Baked Happiness – Just a Click Away!"
                </h1>
            </div>
        `;
    }
}

// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function toggleWishlist(button, id, name, price, description, image) {
    const heartIcon = button.querySelector('i');
    const isInWishlist = wishlist.some(item => item.id === id);
    
    if (isInWishlist) {
        // Remove from wishlist
        wishlist = wishlist.filter(item => item.id !== id);
        heartIcon.classList.remove('text-red-500', 'fa-solid');
        heartIcon.classList.add('text-gray-600', 'fa-regular');
        showNotification(`${name} removed from wishlist`);
    } else {
        // Add to wishlist
        wishlist.push({ id, name, price, description, image });
        heartIcon.classList.remove('text-gray-600', 'fa-regular');
        heartIcon.classList.add('text-red-500', 'fa-solid');
        showNotification(`${name} added to wishlist`);
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const text = document.getElementById('notification-text');
    text.textContent = message;
    notification.classList.remove('hidden');
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);
}

// Search functionality
const products = [
    { id: 'chocolate-fudge-cake', name: 'Chocolate Fudge Cake', category: 'Cakes' },
    { id: 'red-velvet-dream', name: 'Red Velvet Dream', category: 'Cakes' },
    { id: 'berry-cheesecake', name: 'Berry Cheesecake', category: 'Cakes' },
    { id: 'lemon-meringue', name: 'Lemon Meringue', category: 'Cakes' },
    { id: 'mango-saffron-pastry', name: 'Mango Saffron Pastry', category: 'Pastries' },
    { id: 'masala-chai-puff', name: 'Masala Chai Puff', category: 'Pastries' },
    { id: 'rose-gulab-jamun-tart', name: 'Rose Gulab Jamun Cheesecake', category: 'Pastries' },
    { id: 'pista-kulfi-pastry', name: 'Pistachio Cheesecake Cups', category: 'Pastries' },
    { id: 'cheesecake-jars', name: 'Cheesecake Jars', category: 'Pastries' },
    { id: 'brownie', name: 'Chocolate Brownie', category: 'Pastries' },
    { id: 'cookies', name: 'Assorted Cookies', category: 'Pastries' },
    { id: 'croissant', name: 'Butter Croissant', category: 'Pastries' },
    { id: 'donuts', name: 'Glazed Donuts', category: 'Pastries' },
    { id: 'bombolonis', name: 'Cream Filled Bombolonis', category: 'Pastries' },
    { id: 'cupcakes', name: 'Vanilla Cupcakes', category: 'Pastries' },
    { id: 'muffins', name: 'Blueberry Muffins', category: 'Pastries' },
    { id: 'cold-coffee', name: 'Iced Cold Coffee', category: 'Beverages' },
    { id: 'french-fries', name: 'Crispy French Fries', category: 'Snacks' },
    { id: 'vanilla-cake', name: 'Vanilla Cake', category: 'Cakes' },
    { id: 'pineapple-cake', name: 'Pineapple Cake', category: 'Cakes' },
    { id: 'blueberry-cake', name: 'Blueberry Cake', category: 'Cakes' },
    { id: 'mango-cake', name: 'Mango Cake', category: 'Cakes' },
    { id: 'butterscotch-cake', name: 'Butterscotch Cake', category: 'Cakes' },
    { id: 'kulfi-falooda-cake', name: 'Kulfi Falooda Cake', category: 'Cakes' },
    { id: 'dutch-chocolate-cake', name: 'Dutch Chocolate Cake', category: 'Cakes' },
    { id: 'black-forest-cake', name: 'Black Forest Cake', category: 'Cakes' },
    { id: 'white-forest-cake', name: 'White Forest Cake', category: 'Cakes' },
    { id: 'choco-chips-cake', name: 'Choco Chips Cake', category: 'Cakes' },
    { id: 'choco-truffle-cake', name: 'Choco Truffle Cake', category: 'Cakes' },
    { id: 'choco-coffee-cake', name: 'Choco Coffee Cake', category: 'Cakes' },
    { id: 'tiramisu-cake', name: 'Tiramisu Cake', category: 'Cakes' },
    { id: 'choco-vanilla-cake', name: 'Choco Vanilla Cake', category: 'Cakes' },
    { id: 'choco-hazelnut-cake', name: 'Choco Hazelnut Cake', category: 'Cakes' },
    { id: 'choco-vanilla-oreo-cake', name: 'Choco Vanilla Oreo Cake', category: 'Cakes' },
    { id: 'pistachio-rose-cake', name: 'Pistachio Rose Cake', category: 'Cakes' },
    { id: 'banana-choco-walnut-cake', name: 'Banana Choco Walnut Cake', category: 'Cakes' },
    { id: 'date-walnut-cake', name: 'Date & Walnut Cake', category: 'Cakes' },
    { id: 'mava-cake', name: 'Mava Cake', category: 'Cakes' },
    { id: 'paan-gulkand-cake', name: 'Paan Gulkand Cake', category: 'Cakes' },
    { id: 'gulab-jamun-cake', name: 'Gulab Jamun Cake', category: 'Cakes' },
    { id: 'rasmalai-cake', name: 'Rasmalai Cake', category: 'Cakes' },
    { id: 'fresh-mix-fruit-cake', name: 'Fresh Mix Fruit Cake', category: 'Cakes' },
    { id: 'pineapple-pastry', name: 'Pineapple', category: 'Pastries' },
    { id: 'butterscotch-pastry', name: 'Butterscotch', category: 'Pastries' },
    { id: 'kulfi-falooda-pastry', name: 'Kulfi Falooda', category: 'Pastries' },
    { id: 'dutch-chocolate-pastry', name: 'Dutch Chocolate', category: 'Pastries' },
    { id: 'chocolate-truffle-pastry', name: 'Chocolate Truffle', category: 'Pastries' },
    { id: 'chocolate-bomboloni', name: 'Chocolate Bomboloni', category: 'Pastries' },
    { id: 'nutella-bomboloni', name: 'Nutella Bomboloni', category: 'Pastries' },
    { id: 'biscoff-bomboloni', name: 'Biscoff Bomboloni', category: 'Pastries' },
    { id: 'lotus-biscoff-cheesecake-jar', name: 'Lotus Biscoff Cheesecake Jar', category: 'Pastries' },
    { id: 'blueberry-cheesecake-jar', name: 'Blueberry Cheesecake Jar', category: 'Pastries' },
    { id: 'nutella-cheesecake-jar', name: 'Nutella Cheesecake Jar', category: 'Pastries' },
    { id: 'strawberry-cheesecake-jar', name: 'Strawberry Cheesecake Jar', category: 'Pastries' },
    { id: 'chocolate-cheesecake-jar', name: 'Chocolate Cheesecake Jar', category: 'Pastries' },
    { id: 'choco-hazelnut-cheesecake-jar', name: 'Choco Hazelnut Cheesecake Jar', category: 'Pastries' },
    { id: 'chocolate-brownie', name: 'Chocolate Brownie', category: 'Pastries' },
    { id: 'walnut-brownie', name: 'Walnut Brownie', category: 'Pastries' },
    { id: 'cream-cheese-korean-bun', name: 'Cream Cheese Korean Bun', category: 'Pastries' },
    { id: 'vanilla-dryfruits', name: 'Vanilla Dryfruits', category: 'Pastries' },
    { id: 'chocolate-muffin', name: 'Chocolate Muffin', category: 'Pastries' },
    { id: 'banana-muffin', name: 'Banana Muffin', category: 'Pastries' },
    { id: 'date-walnut-muffin', name: 'Date & Walnut Muffin', category: 'Pastries' },
    { id: 'lotus-biscoff-cheesecake', name: 'Lotus Biscoff Cheesecake', category: 'Pastries' },
    { id: 'blueberry-cheesecake', name: 'Blueberry Cheesecake', category: 'Pastries' },
    { id: 'nutella-cheesecake', name: 'Nutella Cheesecake', category: 'Pastries' },
    { id: 'strawberry-cheesecake', name: 'Strawberry Cheesecake', category: 'Pastries' },
    { id: 'newyork-cheesecake', name: 'Newyork Cheesecake', category: 'Pastries' },
    { id: 'chocolate-cheesecake', name: 'Chocolate Cheesecake', category: 'Pastries' },
    { id: 'rasmalai-cheesecake', name: 'Rasmalai Cheesecake', category: 'Pastries' },
    { id: 'motichoor-cheesecake', name: 'Motichoor Cheesecake', category: 'Pastries' },
    { id: 'dark-chocolate-donut', name: 'Dark Chocolate Donut', category: 'Pastries' },
    { id: 'white-chocolate-donut', name: 'White Chocolate Donut', category: 'Pastries' },
    { id: 'milk-chocolate-donut', name: 'Milk Chocolate Donut', category: 'Pastries' },
    { id: 'nutella-donut', name: 'Nutella Donut', category: 'Pastries' },
    { id: 'biscoff-donut', name: 'Biscoff Donut', category: 'Pastries' },
    { id: 'french-butter-croissant', name: 'French Butter Croissant', category: 'Pastries' },
    { id: 'almond-croissant', name: 'Almond Croissant', category: 'Pastries' },
    { id: 'chocolate-croissant', name: 'Chocolate Croissant', category: 'Pastries' },
    { id: 'vanilla-cupcake', name: 'Vanilla Cupcake', category: 'Pastries' },
    { id: 'pineapple-cupcake', name: 'Pineapple Cupcake', category: 'Pastries' },
    { id: 'strawberry-cupcake', name: 'Strawberry Cupcake', category: 'Pastries' },
    { id: 'blueberry-cupcake', name: 'Blueberry Cupcake', category: 'Pastries' },
    { id: 'chocolate-cupcake', name: 'Chocolate Cupcake', category: 'Pastries' },
    { id: 'dry-fruits-cookies', name: 'Dry Fruits Cookies', category: 'Pastries' },
    { id: 'choco-chips-cookies', name: 'Choco Chips Cookies', category: 'Pastries' },
    { id: 'coconut-cookies', name: 'Coconut Cookies', category: 'Pastries' },
    { id: 'healthy-dry-fruits-cookies', name: 'Healthy Dry Fruits Cookies', category: 'Pastries' },
    { id: 'healthy-chocochips-cookies', name: 'Healthy Chocochips Cookies', category: 'Pastries' },
    { id: 'cakesickles', name: 'Cakesickles', category: 'Pastries' }
];

function showSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    setTimeout(() => overlay.querySelector('.scale-95').classList.add('scale-100'), 10);
}

function hideSearchOverlay() {
    const overlay = document.getElementById('searchOverlay');
    overlay.querySelector('.scale-95').classList.remove('scale-100');
    setTimeout(() => {
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

function performSearch(query) {
    const suggestions = document.getElementById('searchSuggestions');
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Limit to 5 suggestions

    suggestions.innerHTML = '';

    if (query.length === 0) {
        suggestions.innerHTML = '<p class="text-xs text-gray-500 p-2">Start typing to see suggestions...</p>';
        return;
    }

    if (filtered.length === 0) {
        suggestions.innerHTML = '<p class="text-xs text-gray-500 p-2">No products found.</p>';
        return;
    }

    filtered.forEach(product => {
        const suggestion = document.createElement('a');
        suggestion.href = `product-details.html?id=${product.id}`;
        suggestion.className = 'flex items-center p-3 border-b border-gray-100 hover:bg-gray-50 transition-colors text-sm';
        suggestion.innerHTML = `
            <i class="fas fa-search text-primary mr-3"></i>
            <div class="flex-1 min-w-0">
                <div class="font-medium text-gray-900 truncate">${product.name}</div>
                <div class="text-xs text-gray-500 truncate">${product.category}</div>
            </div>
        `;
        suggestions.appendChild(suggestion);
    });
}

// Combined DOMContentLoaded for wishlist init, scroll functionality, search, mobile menu, and banner population
document.addEventListener('DOMContentLoaded', function() {
    populateMainBanner();
    populateBottomBanner();

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const hamburgerIcon = menuToggle.querySelector('i');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('hidden');
            const isOpen = !navLinks.classList.contains('hidden');
            if (isOpen) {
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-times');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            } else {
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
                document.body.style.overflow = ''; // Restore scroll
            }
        });

        // Close menu when clicking on a link
        const mobileLinks = navLinks.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.add('hidden');
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
                document.body.style.overflow = '';
            });
        });

        // Close menu on outside click (optional, but enhances UX)
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.add('hidden');
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    }

    // Mobile Dropdown Toggles
    const mobileCakesToggle = document.getElementById('mobileCakesToggle');
    const mobileCakesMenu = document.getElementById('mobileCakesMenu');
    const cakesIcon = mobileCakesToggle?.querySelector('i');

    if (mobileCakesToggle && mobileCakesMenu && cakesIcon) {
        mobileCakesToggle.addEventListener('click', () => {
            mobileCakesMenu.classList.toggle('hidden');
            cakesIcon.classList.toggle('rotate-180');
        });
    }

    const mobilePastriesToggle = document.getElementById('mobilePastriesToggle');
    const mobilePastriesMenu = document.getElementById('mobilePastriesMenu');
    const pastriesIcon = mobilePastriesToggle?.querySelector('i');

    if (mobilePastriesToggle && mobilePastriesMenu && pastriesIcon) {
        mobilePastriesToggle.addEventListener('click', () => {
            mobilePastriesMenu.classList.toggle('hidden');
            pastriesIcon.classList.toggle('rotate-180');
        });
    }

    // Wishlist initialization
    const buttons = document.querySelectorAll('button[onclick^="toggleWishlist"]');
    buttons.forEach(button => {
        const onclick = button.getAttribute('onclick');
        const match = onclick.match(/'([^']+)'/);
        if (match) {
            const id = match[1];
            const isInWishlist = wishlist.some(item => item.id === id);
            const heartIcon = button.querySelector('i');
            if (isInWishlist) {
                heartIcon.classList.remove('text-gray-600', 'fa-regular');
                heartIcon.classList.add('text-red-500', 'fa-solid');
            } else {
                heartIcon.classList.remove('text-red-500', 'fa-solid');
                heartIcon.classList.add('text-gray-600', 'fa-regular');
            }
        }
    });

    // Search toggle
    const searchToggle = document.getElementById('searchToggle');
    const mobileSearchToggle = document.getElementById('mobileSearchToggle');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');

    if (searchToggle) searchToggle.addEventListener('click', (e) => { e.preventDefault(); showSearchOverlay(); });
    if (mobileSearchToggle) mobileSearchToggle.addEventListener('click', (e) => { e.preventDefault(); showSearchOverlay(); });
    if (closeSearch) closeSearch.addEventListener('click', hideSearchOverlay);

    // Close on overlay click
    document.getElementById('searchOverlay').addEventListener('click', (e) => {
        if (e.target.id === 'searchOverlay') hideSearchOverlay();
    });

    // Search input handler
    if (searchInput) {
        searchInput.addEventListener('input', (e) => performSearch(e.target.value));
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.length > 0) performSearch(searchInput.value);
        });
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') hideSearchOverlay();
            if (e.key === 'Enter' && searchInput.value) {
                window.location.href = `product-details.html?q=${encodeURIComponent(searchInput.value)}`;
            }
        });
    }

    // Scroll to Top functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
            scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
        }
    });
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Updated Horizontal scroll functionality
    const scrollContainer = document.getElementById('scrollContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let autoScrollInterval;
    let isUserInteracting = false;
    let isScrolling = false;

    function getCardWidth() {
        if (!scrollContainer || scrollContainer.children.length === 0) return 0;
        const firstCard = scrollContainer.children[0];
        const style = window.getComputedStyle(scrollContainer);
        const gap = parseFloat(style.gap) || 0;
        return firstCard.offsetWidth + gap;
    }

    function scrollToCard(index) {
        if (isScrolling) return;
        isScrolling = true;
        const cardWidth = getCardWidth();
        const totalCards = scrollContainer.children.length;
        const maxIndex = Math.max(0, totalCards - 1);
        const boundedIndex = Math.max(0, Math.min(index, maxIndex));
        const scrollPosition = boundedIndex * cardWidth;
        
        scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
            currentIndex = boundedIndex;
        }, 600);
    }

    function nextCard() {
        if (isScrolling) return;
        const totalCards = scrollContainer.children.length;
        const nextIndex = (currentIndex + 1) % totalCards;
        scrollToCard(nextIndex);
    }

    function prevCard() {
        if (isScrolling) return;
        const totalCards = scrollContainer.children.length;
        const prevIndex = currentIndex === 0 ? totalCards - 1 : currentIndex - 1;
        scrollToCard(prevIndex);
    }

    function startAutoScroll() {
        if (!isUserInteracting && !isScrolling) {
            autoScrollInterval = setInterval(() => {
                nextCard();
            }, 6000);
        }
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            isUserInteracting = true;
            stopAutoScroll();
            nextCard();
            setTimeout(() => {
                isUserInteracting = false;
                startAutoScroll();
            }, 5000);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            isUserInteracting = true;
            stopAutoScroll();
            prevCard();
            setTimeout(() => {
                isUserInteracting = false;
                startAutoScroll();
            }, 5000);
        });
    }

    if (scrollContainer) {
        scrollContainer.addEventListener('mouseenter', stopAutoScroll);
        scrollContainer.addEventListener('mouseleave', () => {
            if (!isUserInteracting) startAutoScroll();
        });

        let scrollTimeout;
        scrollContainer.addEventListener('scroll', () => {
            isUserInteracting = true;
            stopAutoScroll();
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                isUserInteracting = false;
                startAutoScroll();
            }, 1500);
        });
    }

    window.addEventListener('load', () => {
        currentIndex = 0;
        scrollToCard(0);
        setTimeout(() => {
            startAutoScroll();
        }, 1000);
    });

    window.addEventListener('resize', () => {
        setTimeout(() => {
            scrollToCard(currentIndex);
        }, 100);
    });
});
