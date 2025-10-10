// Wishlist functionality
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let wishlistDetails = JSON.parse(localStorage.getItem('wishlistDetails')) || [];

function toggleWishlist(element, id, name, price, description, image) {
    const isInWishlist = wishlist.includes(id);
    if (isInWishlist) {
        wishlist = wishlist.filter(item => item !== id);
        wishlistDetails = wishlistDetails.filter(item => item.id !== id);
        element.classList.remove('active');
        element.style.color = '#9ca3af';
        showNotification('Removed from wishlist');
    } else {
        wishlist.push(id);
        wishlistDetails.push({ id, name, price, description, image });
        element.classList.add('active');
        element.style.color = '#ef4444';
        showNotification('Added to wishlist');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    localStorage.setItem('wishlistDetails', JSON.stringify(wishlistDetails));
    updateWishlistCount();
}

function updateWishlistCount() {
    const wishlistCount = document.getElementById('wishlist-count');
    if (wishlistCount) {
        wishlistCount.textContent = wishlist.length;
    }
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    if (notification && notificationText) {
        notificationText.textContent = message;
        notification.classList.remove('hidden');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 3000);
    }
}

// Categories from sideby products
const categories = {
    'cheesecake-jars': {
        name: 'Cheesecake Jars',
        icon: 'fas fa-jar',
        products: [
            { name: 'Lotus Biscoff', price: 200 },
            { name: 'Blueberry', price: 170 },
            { name: 'Nutella', price: 200 },
            { name: 'Strawberry', price: 170 },
            { name: 'Chocolate', price: 200 },
            { name: 'Choco Hazelnut', price: 200 }
        ]
    },
    'brownie': {
        name: 'Brownie',
        icon: 'fas fa-square',
        products: [
            { name: 'Chocolate brownie', price: 80 },
            { name: 'Walnut brownie', price: 80 }
        ]
    },
    'cookies': {
        name: 'Cookies',
        icon: 'fas fa-cookie-bite',
        products: [
            { name: 'Dry fruits cookies', price: 150 },
            { name: 'Choco chips cookies', price: 150 },
            { name: 'Coconut cookies', price: 150 },
            { name: 'Dry fruits cookies (large)', price: 200 },
            { name: 'Choco chips cookies (large)', price: 200 }
        ]
    },
    'croissant': {
        name: 'Croissant',
        icon: 'fas fa-bread-slice',
        products: [
            { name: 'French butter croissant', price: 140 },
            { name: 'Almond croissant', price: 160 },
            { name: 'Chocolate croissant', price: 180 }
        ]
    },
    'donuts': {
        name: 'Donuts',
        icon: 'fas fa-donut',
        products: [
            { name: 'Dark chocolate donut', price: 120 },
            { name: 'White chocolate donut', price: 120 },
            { name: 'Milk chocolate donut', price: 120 },
            { name: 'Nutella donut', price: 120 },
            { name: 'Biscoff donut', price: 120 }
        ]
    },
    'bombolonis': {
        name: 'Bombolonis',
        icon: 'fas fa-gem',
        products: [
            { name: 'Chocolate bomboloni', price: 150 },
            { name: 'Nutella bomboloni', price: 150 },
            { name: 'Biscoff bomboloni', price: 150 },
            { name: 'Cream Cheese Korean', price: 160 },
            { name: 'Cakesickles', price: 80 }
        ]
    },
    'cupcakes': {
        name: 'Cupcakes',
        icon: 'fas fa-birthday-cake',
        products: [
            { name: 'Vanilla cupcake', price: 70 },
            { name: 'Pineapple cupcake', price: 70 },
            { name: 'Strawberry Cupcake', price: 70 },
            { name: 'Blueberry cupcake', price: 70 },
            { name: 'Chocolate cupcake', price: 80 }
        ]
    },
    'muffins': {
        name: 'Muffins',
        icon: 'fas fa-mug-hot',
        products: [
            { name: 'Vanilla Dryfruits', price: 60 },
            { name: 'Chocolate', price: 60 },
            { name: 'Banana', price: 60 },
            { name: 'Date & Walnut', price: 70 }
        ]
    },
    'others': {
        name: 'Others',
        icon: 'fas fa-ellipsis-h',
        products: [
            { name: 'Cold Coffee', price: 60 },
            { name: 'French Fries', price: 90 }
        ]
    }
};

// Products data for search suggestions
let allProducts = [
    // Existing cakes and pastries
    { id: 'chocolate-fudge-cake', name: 'Chocolate Fudge Cake', category: 'Cakes', type: 'id' },
    { id: 'red-velvet-dream', name: 'Red Velvet Dream', category: 'Cakes', type: 'id' },
    { id: 'berry-cheesecake', name: 'Berry Cheesecake', category: 'Cakes', type: 'id' },
    { id: 'lemon-meringue', name: 'Lemon Meringue', category: 'Cakes', type: 'id' },
    { id: 'mango-saffron-pastry', name: 'Mango Saffron Pastry', category: 'Pastries', type: 'id' },
    { id: 'masala-chai-puff', name: 'Masala Chai Puff', category: 'Pastries', type: 'id' },
    { id: 'rose-gulab-jamun-tart', name: 'Rose Gulab Jamun Cheesecake', category: 'Pastries', type: 'id' },
    { id: 'pista-kulfi-pastry', name: 'Pistachio Cheesecake Cups', category: 'Pastries', type: 'id' },
    // New products from categories
    ...Object.entries(categories).flatMap(([slug, cat]) => 
        cat.products.map(p => {
            const productId = `${slug}-${p.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
            return {
                id: productId,
                name: p.name,
                category: cat.name,
                slug: slug,
                type: 'category_product'
            };
        })
    )
];

// Delivery Location Modal
document.addEventListener('DOMContentLoaded', function() {
    const puneDeliveryAreas = [
        'Koregaon Park', 'Baner', 'Wakad', 'Hinjewadi', 'FC Road', 'Viman Nagar',
        'Kothrud', 'Aundh', 'Shivaji Nagar', 'Camp', 'Deccan', 'Karve Nagar'
    ];

    const punePincodes = ['411001', '411002', '411003', '411004', '411005', '411006'];

    const modal = document.getElementById('deliveryModal');
    const deliveryLocationBtn = document.getElementById('deliveryLocationBtn');
    const closeModal = document.getElementById('closeModal');
    const locationInput = document.getElementById('locationInput');
    const confirmLocationBtn = document.getElementById('confirmLocation');
    const locationOptions = document.querySelectorAll('.location-option');
    const selectedLocationSpan = document.getElementById('selectedLocation');
    const locationError = document.getElementById('locationError');
    const locationSuccess = document.getElementById('locationSuccess');

    let selectedLocation = '';
    let isValidLocation = false;

    function openModal() {
        if (modal) {
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModalFunc() {
        if (modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    }

    function validateLocation(location) {
        const isAreaValid = puneDeliveryAreas.some(area => 
            area.toLowerCase().includes(location.toLowerCase())
        );
        const isPincodeValid = punePincodes.includes(location);
        return isAreaValid || isPincodeValid;
    }

    function updateLocationUI(isValid, location = '') {
        if (isValid) {
            if (locationError) locationError.classList.add('hidden');
            if (locationSuccess) {
                locationSuccess.classList.remove('hidden');
                locationSuccess.textContent = `Great! We deliver to ${location}.`;
            }
            if (confirmLocationBtn) confirmLocationBtn.disabled = false;
            isValidLocation = true;
            selectedLocation = location;
        } else {
            if (locationError) {
                locationError.classList.remove('hidden');
                locationError.textContent = location ? "We don't deliver to this location yet." : "Please enter a valid location.";
            }
            if (locationSuccess) locationSuccess.classList.add('hidden');
            if (confirmLocationBtn) confirmLocationBtn.disabled = true;
            isValidLocation = false;
        }
    }

    if (deliveryLocationBtn) {
        deliveryLocationBtn.addEventListener('click', openModal);
    }

    if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
    }

    if (locationInput) {
        locationInput.addEventListener('input', function(e) {
            const location = e.target.value.trim();
            if (location.length > 2) {
                updateLocationUI(validateLocation(location), location);
            } else {
                updateLocationUI(false);
            }
        });
    }

    if (locationOptions) {
        locationOptions.forEach(option => {
            option.addEventListener('click', function() {
                const location = this.textContent.trim().replace(/^.*?\s/, '').trim();
                if (locationInput) locationInput.value = location;
                updateLocationUI(true, location);
            });
        });
    }

    if (confirmLocationBtn) {
        confirmLocationBtn.addEventListener('click', function() {
            if (isValidLocation && selectedLocation) {
                if (selectedLocationSpan) selectedLocationSpan.textContent = selectedLocation;
                localStorage.setItem('deliveryLocation', selectedLocation);
                closeModalFunc();
            }
        });
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModalFunc();
        });
    }

    // Search functionality
    const searchToggle = document.getElementById('searchToggle');
    const mobileSearchToggle = document.getElementById('mobileSearchToggle');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchSuggestions = document.getElementById('searchSuggestions');

    function openSearch() {
        if (searchOverlay) {
            searchOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
        if (searchInput) searchInput.focus();
    }

    function closeSearchFunc() {
        if (searchOverlay) {
            searchOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
        if (searchInput) searchInput.value = '';
        if (searchSuggestions) searchSuggestions.innerHTML = '';
    }

    function displaySuggestions(suggestions) {
        if (suggestions.length === 0) {
            searchSuggestions.innerHTML = '<p class="text-gray-500 text-sm p-2">No products found.</p>';
            return;
        }
        searchSuggestions.innerHTML = suggestions.map(product => {
            let href;
            if (product.type === 'id') {
                href = `product-details.html?id=${product.id}`;
            } else {
                href = `product-details.html?category=${product.slug}&product=${encodeURIComponent(product.name)}`;
            }
            return `
                <a href="${href}" class="block p-2 hover:bg-gray-100 border-b border-gray-100 last:border-b-0">
                    <div class="flex items-center">
                        <i class="fas fa-search text-primary mr-2"></i>
                        <div>
                            <h4 class="font-medium text-sm">${product.name}</h4>
                            <p class="text-xs text-gray-500">${product.category}</p>
                        </div>
                    </div>
                </a>
            `;
        }).join('');
    }

    if (searchToggle) {
        searchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            openSearch();
        });
    }

    if (mobileSearchToggle) {
        mobileSearchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            openSearch();
            // Close mobile menu if open
            const navLinks = document.getElementById('navLinks');
            const menuToggle = document.getElementById('menuToggle');
            if (navLinks && !navLinks.classList.contains('hidden')) {
                navLinks.classList.add('hidden');
                const icon = menuToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars text-lg sm:text-xl';
                }
            }
        });
    }

    if (closeSearch) {
        closeSearch.addEventListener('click', closeSearchFunc);
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) closeSearchFunc();
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length > 0) {
                const filtered = allProducts.filter(product => 
                    product.name.toLowerCase().includes(query) ||
                    product.category.toLowerCase().includes(query)
                );
                displaySuggestions(filtered);
            } else {
                searchSuggestions.innerHTML = '';
            }
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-lg sm:text-xl';
            } else {
                icon.className = 'fas fa-times text-lg sm:text-xl';
            }
        });
    }

    // Mobile Dropdown Toggles
    const mobileCakesToggle = document.getElementById('mobileCakesToggle');
    const mobileCakesMenu = document.getElementById('mobileCakesMenu');
    const mobilePastriesToggle = document.getElementById('mobilePastriesToggle');
    const mobilePastriesMenu = document.getElementById('mobilePastriesMenu');

    if (mobileCakesToggle && mobileCakesMenu) {
        mobileCakesToggle.addEventListener('click', function() {
            mobileCakesMenu.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    }

    if (mobilePastriesToggle && mobilePastriesMenu) {
        mobilePastriesToggle.addEventListener('click', function() {
            mobilePastriesMenu.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
        });
    }

    // Horizontal scroll functionality
    const scrollContainer = document.getElementById('scrollContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let autoScrollInterval;
    let isUserInteracting = false;
    let isScrolling = false;

    function getCardWidth() {
        const firstCard = scrollContainer.children[0];
        const cardWidth = firstCard.offsetWidth;
        const gap = window.innerWidth < 640 ? 12 : window.innerWidth < 768 ? 16 : 24;
        return cardWidth + gap;
    }

    function scrollToCard(index) {
        if (isScrolling) return;
        isScrolling = true;
        const cardWidth = getCardWidth();
        const scrollPosition = index * cardWidth;
        
        scrollContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
            isScrolling = false;
            currentIndex = index;
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
        const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
        scrollToCard(prevIndex);
    }

    function startAutoScroll() {
        if (!isUserInteracting && !isScrolling) {
            autoScrollInterval = setInterval(() => {
                nextCard();
            }, 5000);
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

    updateWishlistCount();

    const savedLocation = localStorage.getItem('deliveryLocation');
    if (savedLocation && selectedLocationSpan) {
        selectedLocationSpan.textContent = savedLocation;
        selectedLocation = savedLocation;
    }
});