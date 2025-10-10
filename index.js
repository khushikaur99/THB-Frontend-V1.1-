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