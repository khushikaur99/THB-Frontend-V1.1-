// Global variables
let allProducts = [];
let productData = [];

// Search functions
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
    const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        (product.category && product.category.toLowerCase().includes(query.toLowerCase()))
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
                <div class="text-xs text-gray-500 truncate">${product.category || 'Cakes'}</div>
            </div>
        `;
        suggestions.appendChild(suggestion);
    });
}

// Fetch all products from API
async function fetchAllProducts() {
    try {
        const response = await fetch('http://localhost:8082/api/v1/products/get-all-products?page=0&size=100');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.content || [];
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

// Map API product to frontend format
function mapProduct(apiProduct) {
    return {
        id: apiProduct.productId,
        name: apiProduct.productName,
        price: apiProduct.productNewPrice,
        rating: apiProduct.ratings,
        image: `http://localhost:8082${apiProduct.productImageUrl}`,
        category: apiProduct.productCategory,
        reviewCount: 0, // Default, as not provided in list API
        originalPrice: null,
        deliveryType: null,
        badge: null,
        description: '' // Default
    };
}

// Wishlist management
let wishlistDetails = JSON.parse(localStorage.getItem('wishlistDetails')) || [];

function toggleWishlist(button, productId, event) {
    event.preventDefault();
    event.stopPropagation();
    
    const product = allProducts.find(p => p.id === productId);
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

async function handleProductClick(productId) {
    try {
        const response = await fetch(`http://localhost:8082/api/v1/products/${productId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        const fullProduct = data.data;
        sessionStorage.setItem('selectedProduct', JSON.stringify(fullProduct));
        window.location.href = `../product-details.html?id=${productId}`;
    } catch (error) {
        console.error('Error fetching product:', error);
        // Fallback: redirect with limited info or show error
        alert('Error loading product details');
    }
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

function sortProducts(sortType, products) {
    let sortedProducts = [...products];
    
    switch(sortType) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'popularity':
            sortedProducts.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
            break;
        case 'rating':
            sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
            break;
        default:
            break;
    }
    
    return sortedProducts;
}

function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    const cardsHTML = products.map((product, index) => createProductCard(product, index)).join('');
    grid.innerHTML = cardsHTML;
    updateWishlistCount();
}

async function initializePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('filter') || 'all';

    // Fetch all products
    const apiProducts = await fetchAllProducts();
    allProducts = apiProducts.map(mapProduct);
    let currentProducts = [...allProducts];

    // Filter if needed
    if (filter !== 'all') {
        currentProducts = allProducts.filter(p => 
            p.name.toLowerCase().includes(filter.toLowerCase())
        );
        const heading = document.getElementById('page-heading');
        if (heading) {
            heading.textContent = `${filter.charAt(0).toUpperCase() + filter.slice(1)} Cakes`;
        }
    }

    productData = currentProducts;

    const sortFilter = document.getElementById('sort-filter');
    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            const sortedProducts = sortProducts(e.target.value, productData);
            renderProducts(sortedProducts);
        });
    }
    
    renderProducts(productData);
}

document.addEventListener('DOMContentLoaded', async () => {
    await initializePage();

    // Search setup
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

    // Slideshow
    const slideshow = document.getElementById('imageSlideshow');
    const slides = document.querySelectorAll('#imageSlideshow > div');
    const dots = document.querySelectorAll('.image-slide-dot');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function updateSlideshow() {
      if (slideshow && slides.length > 0) {
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
    setInterval(nextSlide, 4000);
    
    // Dot navigation
    dots.forEach(dot => {
      if (dot) {
        dot.addEventListener('click', () => {
          currentIndex = parseInt(dot.getAttribute('data-index'));
          updateSlideshow();
        });
      }
    });
    
    // Initialize
    updateSlideshow();

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
          if (mobileSelectedLocationSpan) mobileSelectedLocationSpan.textContent = selectedLocation;
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
    if (savedLocation && selectedLocationSpan) {
      selectedLocationSpan.textContent = savedLocation;
      if (mobileSelectedLocationSpan) mobileSelectedLocationSpan.textContent = savedLocation;
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

    // Initialize wishlist count on page load
    updateWishlistCount();
});