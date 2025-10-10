// Enhanced JavaScript for full functionality
document.addEventListener("DOMContentLoaded", function () {
    // ==================== HEADER FUNCTIONALITY ====================
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('hidden')) {
                icon.className = 'fas fa-bars text-lg sm:text-xl';
            } else {
                icon.className = 'fas fa-times text-lg sm:text-xl';
            }
        });
    }

    // Mobile dropdown toggles
    const mobileCakesToggle = document.getElementById('mobileCakesToggle');
    const mobileCakesMenu = document.getElementById('mobileCakesMenu');
    const mobilePastriesToggle = document.getElementById('mobilePastriesToggle');
    const mobilePastriesMenu = document.getElementById('mobilePastriesMenu');

    if (mobileCakesToggle && mobileCakesMenu) {
        mobileCakesToggle.addEventListener('click', function() {
            mobileCakesMenu.classList.toggle('hidden');
            const icon = this.querySelector('i');
            icon.classList.toggle('rotate-180');
        });
    }

    if (mobilePastriesToggle && mobilePastriesMenu) {
        mobilePastriesToggle.addEventListener('click', function() {
            mobilePastriesMenu.classList.toggle('hidden');
            const icon = this.querySelector('i');
            icon.classList.toggle('rotate-180');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('#navLinks') && !event.target.closest('#menuToggle')) {
            if (navLinks) navLinks.classList.add('hidden');
        }
    });

    // ==================== DELIVERY LOCATION ====================
    const puneDeliveryAreas = [
        'Koregaon Park', 'Baner', 'Wakad', 'Hinjewadi', 'FC Road', 'Viman Nagar',
        'Kothrud', 'Aundh', 'Shivaji Nagar', 'Camp', 'Deccan', 'Karve Nagar'
    ];

    const punePincodes = [
        '411001', '411002', '411003', '411004', '411005', '411006', '411007', '411008'
    ];

    // Get all elements
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

    // Delivery location functions
    function openModal() {
        if (modal) modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        if (modal) modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
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

    function saveLocation(location) {
        try {
            localStorage.setItem('deliveryLocation', location);
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
    }

    // Event listeners for delivery modal
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
                saveLocation(selectedLocation);
                closeModalFunc();
            }
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModalFunc();
            }
        });
    }

    // Load saved location
    try {
        const savedLocation = localStorage.getItem('deliveryLocation');
        if (savedLocation && selectedLocationSpan) {
            selectedLocationSpan.textContent = savedLocation;
            selectedLocation = savedLocation;
        }
    } catch (e) {
        console.warn('Could not load saved location:', e);
    }

    // ==================== SLIDESHOW FUNCTIONALITY ====================
    const slideshow = document.getElementById('imageSlideshow');
    const slides = document.querySelectorAll('#imageSlideshow > div');
    const dots = document.querySelectorAll('.image-slide-dot');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function updateSlideshow() {
        if (slideshow) {
            slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        dots.forEach((dot, index) => {
            if (dot) {
                dot.classList.toggle('bg-opacity-100', index === currentIndex);
                dot.classList.toggle('w-3', index === currentIndex);
                dot.classList.toggle('h-3', index === currentIndex);
            }
        });
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlideshow();
    }
    
    // Auto slide every 4 seconds
    let slideshowInterval = setInterval(nextSlide, 4000);
    
    // Pause slideshow on hover
    if (slideshow) {
        slideshow.parentElement.addEventListener('mouseenter', () => {
            clearInterval(slideshowInterval);
        });
        
        slideshow.parentElement.addEventListener('mouseleave', () => {
            slideshowInterval = setInterval(nextSlide, 4000);
        });
    }
    
    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.getAttribute('data-index'));
            updateSlideshow();
        });
    });
    
    // Initialize
    updateSlideshow();

    // ==================== PRODUCT GRID FUNCTIONALITY ====================
    const sortSelect = document.getElementById("sortSelect");
    const grid = document.getElementById("productGrid");
    let products = Array.from(grid.children);

    // Wishlist management
    let wishlistDetails = JSON.parse(localStorage.getItem('wishlistDetails')) || [];

    // Extract data
    function getProductData(card) {
        const priceElement = card.querySelector("p.text-xl, p.text-2xl");
        const priceText = priceElement ? priceElement.textContent : '0';
        const reviewSpan = card.querySelector("span.text-gray-500");
        const reviewText = reviewSpan ? reviewSpan.textContent : '0';
        const ratingDiv = card.querySelector('div.flex.items-center.bg-green-600');
        const ratingText = ratingDiv ? ratingDiv.innerText : '4.5';
        const deliveryDiv = card.querySelector('div.flex.items-center.text-sm.text-gray-600');
        const deliveryText = deliveryDiv ? deliveryDiv.textContent : '';
        const img = card.querySelector("img");
        const originalPriceElement = card.querySelector('.line-through');
        const originalPriceText = originalPriceElement ? originalPriceElement.textContent : null;

        return {
            id: card.dataset.id,
            name: card.querySelector("h3").textContent.trim(),
            price: parseInt(priceText.replace(/[^0-9]/g, "")),
            reviewCount: parseInt(reviewText.replace(/[^0-9]/g, "")) || 0,
            rating: parseFloat(ratingText.match(/[\d.]+/)?.[0] || 4.5),
            image: img ? img.src : '',
            deliveryTime: deliveryText.replace('Earliest Delivery: ', '').trim(),
            originalPrice: originalPriceText ? parseInt(originalPriceText.replace(/[^0-9]/g, "")) : null
        };
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 2000);
    }

    // Wishlist functionality with localStorage
    function toggleWishlist(button, productId, event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        const card = button.closest('[data-id]');
        if (!card) return;
        
        const product = getProductData(card);
        if (!product) return;

        const isInWishlist = wishlistDetails.some(item => item.id === productId);
        const icon = button.querySelector("i");
        
        if (isInWishlist) {
            wishlistDetails = wishlistDetails.filter(item => item.id !== productId);
            // Update UI to inactive - white circle with black outline heart
            if (icon) {
                icon.classList.remove("fas", "text-red-500");
                icon.classList.add("far", "text-black");
            }
            button.classList.remove("bg-red-500");
            showNotification('Removed from wishlist!');
        } else {
            wishlistDetails.push(product);
            // Update UI to active - white circle with filled red heart
            if (icon) {
                icon.classList.remove("far", "text-black");
                icon.classList.add("fas", "text-red-500");
            }
            button.classList.remove("bg-red-500");
            showNotification('Added to wishlist!');
        }
        
        try {
            localStorage.setItem('wishlistDetails', JSON.stringify(wishlistDetails));
        } catch (e) {
            console.warn('LocalStorage not available:', e);
        }
        
        updateWishlistCount();
    }

    function updateWishlistCount() {
        try {
            const wishlistCount = document.getElementById('wishlist-count');
            if (wishlistCount) {
                wishlistCount.textContent = wishlistDetails.length;
            }
        } catch (e) {
            console.warn('Could not update wishlist count:', e);
        }
    }

    // Initialize wishlist count
    updateWishlistCount();

    // Sorting logic
    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            let sorted;

            if (this.value === "low-high") {
                sorted = products.sort((a, b) => getProductData(a).price - getProductData(b).price);
            } else if (this.value === "high-low") {
                sorted = products.sort((a, b) => getProductData(b).price - getProductData(a).price);
            } else if (this.value === "popular") {
                sorted = products.sort((a, b) => getProductData(b).reviewCount - getProductData(a).reviewCount);
            } else if (this.value === "newest") {
                sorted = products.sort(() => Math.random() - 0.5);
            } else {
                sorted = products;
            }

            grid.innerHTML = "";
            sorted.forEach(p => grid.appendChild(p));
            
            // Reattach event listeners after sorting
            attachProductCardListeners();
        });
    }

    // Product card click handlers
    function attachProductCardListeners() {
        const productCards = document.querySelectorAll('#productGrid > div');
        const wishlistButtons = document.querySelectorAll('#productGrid > div .wishlist-btn');
        
        // Set initial wishlist states
        wishlistButtons.forEach(button => {
            const productId = button.closest('[data-id]').dataset.id;
            const isInWishlist = wishlistDetails.some(item => item.id === productId);
            const icon = button.querySelector('i');
            
            if (isInWishlist) {
                // Active state: filled red heart on white background
                if (icon) {
                    icon.classList.add("fas", "text-red-500");
                    icon.classList.remove("far", "text-black");
                }
                button.classList.remove("bg-red-500");
            } else {
                // Inactive state: outline black heart on white background
                if (icon) {
                    icon.classList.add("far", "text-black");
                    icon.classList.remove("fas", "text-red-500");
                }
                button.classList.remove("bg-red-500");
            }
            
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                toggleWishlist(button, productId, e);
            });
        });
        
        // Product detail navigation
        productCards.forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                if (e.target.closest('.wishlist-btn')) return;
                const id = card.dataset.id;
                const url = `productdetails1.html?id=${id}`;
                window.location.href = url;
            });
        });
    }

    // Initial attachment of event listeners
    attachProductCardListeners();
});