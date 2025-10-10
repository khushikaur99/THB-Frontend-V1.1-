document.addEventListener('DOMContentLoaded', function() {
    const slideshow = document.getElementById('imageSlideshow');
    const slides = document.querySelectorAll('#imageSlideshow > div');
    const dots = document.querySelectorAll('.image-slide-dot');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function updateSlideshow() {
      slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('bg-opacity-100', index === currentIndex);
        dot.classList.toggle('w-3', index === currentIndex);
        dot.classList.toggle('h-3', index === currentIndex);
      });
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlideshow();
    }
    
    // Auto slide every 4 seconds
    setInterval(nextSlide, 4000);
    
    // Dot navigation
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentIndex = parseInt(dot.getAttribute('data-index'));
        updateSlideshow();
      });
    });
    
    // Initialize
    updateSlideshow();
  });

    const productData = [
    // Existing products (1-5) remain unchanged...
    {
        id: 1,
        name: 'Truffle Bliss Birthday Cake',
        price: 695,
        description: 'Rich chocolate truffle cake with layers of dark chocolate ganache and chocolate mousse, topped with chocolate shavings.',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 165,
        image: '/CAKES/IMG/chocolate 2.jpg',
        badge: {
            text: 'Best Seller',
            color: 'bg-teal-700'
        },
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 2,
        name: 'Tropical Pineapple Cake',
        price: 545,
        description: 'Light and fluffy vanilla cake with pineapple filling, topped with whipped cream and fresh pineapple slices.',
        originalPrice: null,
        rating: 4.8,
        reviewCount: 145,
        image: '/CAKES/IMG/pineapple cake.jpg',
        badge: {
            text: 'Best Seller',
            color: 'bg-teal-700'
        },
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 3,
        name: 'Decadent Red Velvet Cake',
        price: 745,
        description: 'Classic red velvet cake with cream cheese frosting, decorated with red velvet crumbs and white chocolate shavings.',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 319,
        image: '/CAKES/IMG/red velvet.jpg',
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: '30-Min Delivery'
    },
    {
        id: 4,
        name: 'Rasmalai Pista Cream Cake',
        price: 895,
        description: 'Innovative fusion cake with layers of rasmalai and pistachio cream, topped with saffron strands and chopped pistachios.',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 271,
        image: '/CAKES/IMG/Rasmalai Pista Cream Cake.jpg',
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 5,
        name: 'Classic Vanilla Cake',
        price: 595,
        description: 'Delicious vanilla sponge cake with vanilla buttercream frosting and fresh berries decoration.',
        originalPrice: 650,
        rating: 4.7,
        reviewCount: 98,
        image: '/CAKES/IMG/Classic Vanilla Cake.jpg',
        badge: {
            text: 'New',
            color: 'bg-purple-600'
        },
        deliveryTime: 'In 4 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    // New products (6-25)
    {
        id: 6,
        name: 'Mango Meringue Dream Cake',
        price: 725,
        description: 'Layers of mango mousse and vanilla sponge with torched meringue topping and fresh mango slices.',
        originalPrice: 800,
        rating: 4.8,
        reviewCount: 210,
        image: '/CAKES/IMG/Mango Meringue Dream Cake.jpg',
        badge: {
            text: 'Seasonal',
            color: 'bg-yellow-500'
        },
        deliveryTime: 'In 4 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 7,
        name: 'Salted Caramel Chocolate Cake',
        price: 675,
        description: 'Moist chocolate cake with layers of salted caramel and chocolate ganache, topped with caramel drizzle.',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 185,
        image: '/CAKES/IMG/Salted Caramel Chocolate Cake.jpg',
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 8,
        name: 'Berry Cheesecake Delight',
        price: 825,
        description: 'New York style cheesecake with mixed berry compote and fresh berry topping on a graham cracker crust.',
        originalPrice: null,
        rating: 4.7,
        reviewCount: 132,
        image: '/CAKES/IMG/Berry Cheesecake Delight.jpg',
        deliveryTime: 'In 5 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 9,
        name: 'Coffee Walnut Crunch Cake',
        price: 655,
        description: 'Coffee infused cake with walnut pieces, layered with coffee buttercream and topped with caramelized walnuts.',
        originalPrice: 700,
        rating: 4.6,
        reviewCount: 98,
        image: '/CAKES/IMG/Coffee Walnut Crunch Cake.jpg',
        badge: {
            text: 'Limited',
            color: 'bg-red-600'
        },
        deliveryTime: 'In 4 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 10,
        name: 'Lemon Blueberry Burst Cake',
        price: 595,
        description: 'Zesty lemon cake with blueberry filling and cream cheese frosting, decorated with fresh blueberries.',
        originalPrice: null,
        rating: 4.8,
        reviewCount: 167,
        image: '/CAKES/IMG/Lemon Blueberry Burst Cake.jpg',
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 11,
        name: 'Black Forest Gateau',
        price: 775,
        description: 'Classic German chocolate cake with layers of cherries and whipped cream, topped with chocolate shavings.',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 245,
        image: '/CAKES/IMG/Black Forest Gateau.jpg',
        badge: {
            text: 'Premium',
            color: 'bg-gray-800'
        },
        deliveryTime: 'In 4 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 12,
        name: 'Carrot Walnut Cake',
        price: 625,
        description: 'Moist carrot cake with walnuts and raisins, layered with cream cheese frosting and topped with fondant carrots.',
        originalPrice: 675,
        rating: 4.7,
        reviewCount: 112,
        image: '/CAKES/IMG/Carrot Walnut Cake.jpg',
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 13,
        name: 'Cookies & Cream Cake',
        price: 695,
        description: 'Vanilla cake with crushed Oreo cookies throughout, layered with cookies & cream frosting and cookie pieces.',
        originalPrice: null,
        rating: 4.8,
        reviewCount: 178,
        image: '/CAKES/IMG/Cookies & Cream Cake.jpg',
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: '30-Min Delivery'
    },
    {
        id: 14,
        name: 'Strawberry Shortcake',
        price: 545,
        description: 'Light sponge cake layered with fresh strawberries and whipped cream, topped with strawberry slices.',
        originalPrice: null,
        rating: 4.7,
        reviewCount: 156,
        image: '/CAKES/IMG/Strawberry Shortcake.jpg',
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 15,
        name: 'Tiramisu Layer Cake',
        price: 845,
        description: 'Coffee soaked ladyfingers layered with mascarpone cream and dusted with cocoa powder in cake form.',
        originalPrice: 900,
        rating: 4.9,
        reviewCount: 231,
        image: '/CAKES/IMG/Tiramisu Layer Cake.jpg',
        badge: {
            text: 'Gourmet',
            color: 'bg-amber-600'
        },
        deliveryTime: 'In 5 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 16,
        name: 'Hazelnut Praline Cake',
        price: 795,
        description: 'Hazelnut sponge cake with praline filling and chocolate hazelnut ganache, topped with roasted hazelnuts.',
        originalPrice: null,
        rating: 4.8,
        reviewCount: 187,
        image: '/CAKES/IMG/Hazelnut Praline Cake.jpg',
        deliveryTime: 'In 4 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 17,
        name: 'Matcha Green Tea Cake',
        price: 725,
        description: 'Japanese inspired matcha green tea cake with white chocolate ganache and matcha powder dusting.',
        originalPrice: null,
        rating: 4.7,
        reviewCount: 143,
        image: '/CAKES/IMG/Matcha Green Tea Cake.jpg',
        badge: {
            text: 'Trending',
            color: 'bg-green-600'
        },
        deliveryTime: 'In 4 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 18,
        name: 'Peanut Butter Chocolate Cake',
        price: 695,
        description: 'Rich chocolate cake with peanut butter frosting and chocolate peanut butter ganache drizzle.',
        originalPrice: 750,
        rating: 4.9,
        reviewCount: 201,
        image: '/CAKES/IMG/Peanut Butter Chocolate Cake.jpg',
        deliveryTime: 'In 3 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 19,
        name: 'Coconut Lime Cake',
        price: 625,
        description: 'Fluffy coconut cake with lime curd filling and coconut cream cheese frosting, topped with toasted coconut.',
        originalPrice: null,
        rating: 4.6,
        reviewCount: 97,
        image: '/CAKES/IMG/Coconut Lime Cake.jpg',
        deliveryTime: 'In 4 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    {
        id: 20,
        name: 'Pistachio Rose Cake',
        price: 875,
        description: 'Middle Eastern inspired cake with pistachio sponge, rosewater cream and crushed pistachio topping.',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 176,
        image: '/CAKES/IMG/Pistachio Rose Cake.jpg',
        badge: {
            text: 'Exotic',
            color: 'bg-pink-500'
        },
        deliveryTime: 'In 5 hours',
        hasDeliveryInfo: true,
        deliveryType: null
    },
    
];

    // Wishlist management
    let wishlistDetails = JSON.parse(localStorage.getItem('wishlistDetails')) || [];

    function toggleWishlist(button, productId, event) {
        event.preventDefault();
        event.stopPropagation();
        
        const product = productData.find(p => p.id === productId);
        if (!product) return;

        const isInWishlist = wishlistDetails.some(item => item.id === productId);
        
        if (isInWishlist) {
            wishlistDetails = wishlistDetails.filter(item => item.id !== productId);
            button.classList.remove('active');
            showNotification('Removed from wishlist!');
        } else {
            wishlistDetails.push(product);
            button.classList.add('active');
            showNotification('Added to wishlist!');
        }
        
        localStorage.setItem('wishlistDetails', JSON.stringify(wishlistDetails));
        updateWishlistCount();
    }

    function updateWishlistCount() {
        const wishlistCount = document.getElementById('wishlist-count');
        if (wishlistCount) {
            wishlistCount.textContent = wishlistDetails.length;
        }
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

    function handleProductClick(productId) {
        const product = productData.find(p => p.id === productId);
        sessionStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href = `../product-details.html?id=${productId}`;
    }

    function createProductCard(product, index) {
        const isInWishlist = wishlistDetails.some(item => item.id === product.id);
        
        return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden relative cursor-pointer hover:shadow-lg transition-shadow duration-300">
                ${product.badge ? `
                    <div class="absolute top-3 left-3 ${product.badge.color} text-white px-3 py-1 rounded-md text-sm font-medium z-10">
                        ${product.badge.text}
                    </div>
                ` : ''}
                
                <button class="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md wishlist-btn z-10 ${isInWishlist ? 'active' : ''}" 
                       onclick="toggleWishlist(this, ${product.id}, event)">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z">
                        </path>
                    </svg>
                </button>

                <div onclick="handleProductClick(${product.id})">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
                </div>

                ${product.deliveryType ? `
                    <div class="absolute top-60 right-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        ${product.deliveryType}
                    </div>
                ` : ''}

                <div class="p-6" onclick="handleProductClick(${product.id})">
                    <h3 class="font-semibold text-gray-800 mb-3 text-lg line-clamp-2">${product.name}</h3>
                    
                    <div class="flex items-center mb-3">
                        <span class="text-xl font-bold text-gray-900">₹ ${product.price}</span>
                        ${product.originalPrice ? `
                            <span class="text-sm text-gray-500 line-through ml-2">₹ ${product.originalPrice}</span>
                        ` : ''}
                    </div>

                    <div class="flex items-center mb-4">
                        <div class="flex items-center bg-green-600 text-white px-2 py-1 rounded text-sm">
                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            ${product.rating}
                        </div>
                        <span class="text-sm text-gray-600 ml-2">(${product.reviewCount} Reviews)</span>
                    </div>

                    <button onclick="handleProductClick(${product.id})" class="w-full bg-primary text-white py-2 rounded-lg mt-3 hover:bg-secondary transition-colors">View Details</button>
                </div>
            </div>
        `;
    }

    function sortProducts(sortType) {
        let sortedProducts = [...productData];
        
        switch(sortType) {
            case 'price-low':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            case 'popularity':
                sortedProducts.sort((a, b) => b.reviewCount - a.reviewCount);
                break;
            case 'rating':
                sortedProducts.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }
        
        return sortedProducts;
    }

    function renderProducts(sortedProducts) {
        const grid = document.getElementById('product-grid');
        const cardsHTML = sortedProducts.map((product, index) => createProductCard(product, index)).join('');
        grid.innerHTML = cardsHTML;
        updateWishlistCount();
    }

    function initializePage() {
        const sortFilter = document.getElementById('sort-filter');
        if (sortFilter) {
            sortFilter.addEventListener('change', (e) => {
                const sortedProducts = sortProducts(e.target.value);
                renderProducts(sortedProducts);
            });
        }
        
        renderProducts(productData);
    }

    document.addEventListener('DOMContentLoaded', function() {
        initializePage();

        // Initialize wishlist count on page load
        updateWishlistCount();

        // Initialize slideshow
        const slideshow = document.getElementById('imageSlideshow');
        const slides = document.querySelectorAll('#imageSlideshow > div');
        const dots = document.querySelectorAll('.image-slide-dot');
        
        let currentIndex = 0;
        const slideCount = slides.length;
        
        function updateSlideshow() {
            slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('bg-opacity-100', index === currentIndex);
                dot.classList.toggle('w-3', index === currentIndex);
                dot.classList.toggle('h-3', index === currentIndex);
            });
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlideshow();
        }
        
        setInterval(nextSlide, 4000);
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.getAttribute('data-index'));
                updateSlideshow();
            });
        });
        
        updateSlideshow();
    });

    document.addEventListener('DOMContentLoaded', function() {
      // Delivery areas and pincodes
      const puneDeliveryAreas = [
        'Koregaon Park', 'Baner', 'Wakad', 'Hinjewadi', 'FC Road', 'Viman Nagar',
        'Kothrud', 'Aundh', 'Shivaji Nagar', 'Camp', 'Deccan', 'Karve Nagar',
        'Pune Station', 'Swargate', 'Katraj', 'Kondhwa', 'Bibwewadi', 'Fursungi',
        'Magarpatta', 'Hadapsar', 'Kharadi', 'Wagholi', 'Chinchwad', 'Pimpri',
        'Warje', 'Bavdhan', 'Pashan', 'Sus', 'Balewadi', 'Nigdi', 'Akurdi',
        'Ravet', 'Tathawade', 'Vishrantwadi', 'Yerawada', 'Kalyani Nagar',
        'Nagar Road', 'Dhanori', 'Lohegaon', 'Mundwa', 'Ghorpadi', 'Wanowrie',
        'Fatima Nagar', 'Salisbury Park', 'Parvati', 'Dhankawadi', 'Balaji Nagar',
        'Bhavani Peth', 'Budhwar Peth', 'Kasba Peth', 'Rasta Peth', 'Sadashiv Peth'
      ];

      const punePincodes = [
        '411001', '411002', '411003', '411004', '411005', '411006', '411007', '411008', 
        '411009', '411010', '411011', '411012', '411013', '411014', '411015', '411016'
      ];

      // DOM elements
      const modal = document.getElementById('deliveryModal');
      const deliveryLocationBtn = document.getElementById('deliveryLocationBtn');
      const mobileDeliveryBtn = document.getElementById('mobileDeliveryBtn');
      const closeModal = document.getElementById('closeModal');
      const locationInput = document.getElementById('locationInput');
      const confirmLocationBtn = document.getElementById('confirmLocation');
      const useCurrentLocationBtn = document.getElementById('useCurrentLocation');
      const locationOptions = document.querySelectorAll('.location-option');
      const selectedLocationSpan = document.getElementById('selectedLocation');
      const mobileSelectedLocationSpan = document.getElementById('mobileSelectedLocation');
      const locationError = document.getElementById('locationError');
      const locationSuccess = document.getElementById('locationSuccess');

      let selectedLocation = '';
      let isValidLocation = false;

      // Open modal
      function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }

      // Close modal
      function closeModalFunc() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
      }

      // Validate location
      function validateLocation(location) {
        const isAreaValid = puneDeliveryAreas.some(area => 
          area.toLowerCase().includes(location.toLowerCase())
        );
        const isPincodeValid = punePincodes.includes(location);
        
        return isAreaValid || isPincodeValid;
      }

      // Update UI based on validation
      function updateLocationUI(isValid, location = '') {
        if (isValid) {
          locationError.classList.add('hidden');
          locationSuccess.classList.remove('hidden');
          confirmLocationBtn.disabled = false;
          locationSuccess.textContent = `Great! We deliver to ${location}.`;
          isValidLocation = true;
          selectedLocation = location;
        } else {
          locationError.classList.remove('hidden');
          locationSuccess.classList.add('hidden');
          confirmLocationBtn.disabled = true;
          locationError.textContent = location ? "We don't deliver to this location yet." : "Please enter a valid location.";
          isValidLocation = false;
        }
      }

      // Save location to localStorage
      function saveLocation(location) {
        localStorage.setItem('deliveryLocation', location);
      }

      // Event listeners
      if (deliveryLocationBtn) {
        deliveryLocationBtn.addEventListener('click', openModal);
      }

      if (mobileDeliveryBtn) {
        mobileDeliveryBtn.addEventListener('click', openModal);
      }

      if (closeModal) {
        closeModal.addEventListener('click', closeModalFunc);
      }

      // Handle location input
      if (locationInput) {
        locationInput.addEventListener('input', function(e) {
          const location = e.target.value.trim();
          if (location.length > 2) {
            const isValid = validateLocation(location);
            updateLocationUI(isValid, location);
          } else {
            updateLocationUI(false);
          }
        });
      }

      // Handle location option clicks
      locationOptions.forEach(option => {
        option.addEventListener('click', function() {
          // Get the location text (excluding the icon)
          const location = this.textContent.trim().replace(/^.*?\s/, '').trim();
          locationInput.value = location;
          updateLocationUI(true, location);
        });
      });

      // Handle confirm location
      if (confirmLocationBtn) {
        confirmLocationBtn.addEventListener('click', function() {
          if (isValidLocation && selectedLocation) {
            selectedLocationSpan.textContent = selectedLocation;
            mobileSelectedLocationSpan.textContent = selectedLocation;
            saveLocation(selectedLocation);
            closeModalFunc();
          }
        });
      }

      // Handle current location
      if (useCurrentLocationBtn) {
        useCurrentLocationBtn.addEventListener('click', function() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function(position) {
                // In a real app, you would use the coordinates to determine the location
                // For demo purposes, we'll just use a sample location
                const demoLocation = "Koregaon Park";
                locationInput.value = demoLocation;
                updateLocationUI(true, demoLocation);
              },
              function(error) {
                locationError.classList.remove('hidden');
                locationError.textContent = "Unable to get your location. Please enter manually.";
                console.error("Geolocation error:", error);
              }
            );
          } else {
            locationError.classList.remove('hidden');
            locationError.textContent = "Geolocation is not supported by your browser.";
          }
        });
      }

      // Load saved location if exists
      const savedLocation = localStorage.getItem('deliveryLocation');
      if (savedLocation && selectedLocationSpan && mobileSelectedLocationSpan) {
        selectedLocationSpan.textContent = savedLocation;
        mobileSelectedLocationSpan.textContent = savedLocation;
        selectedLocation = savedLocation;
      }

      // Close modal when clicking outside
      if (modal) {
        modal.addEventListener('click', function(e) {
          if (e.target === modal) {
            closeModalFunc();
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
      const mobileCustomToggle = document.getElementById('mobileCustomToggle');
      const mobileCustomMenu = document.getElementById('mobileCustomMenu');

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

      if (mobileCustomToggle && mobileCustomMenu) {
        mobileCustomToggle.addEventListener('click', function() {
          mobileCustomMenu.classList.toggle('hidden');
          const icon = this.querySelector('i');
          if (icon) {
            icon.classList.toggle('rotate-180');
          }
        });
      }

      // Update cart count function (placeholder)
      function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        if (cartCount) cartCount.textContent = '0';
      }

      updateCartCount();
    });