// products.js - New JS for product management page

// Global variables
let allProducts = [];
let categories = [];

// Fetch all products
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

// Fetch products by category
async function fetchProductsByCategory(category) {
    try {
        const response = await fetch(`http://localhost:8082/api/v1/products/category/${category}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.content || [];
    } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
    }
}

// Extract unique categories from products
function extractCategories(products) {
    const catSet = new Set(products.map(p => p.productCategory));
    return Array.from(catSet).sort();
}

// Render categories in sidebar
function renderCategories(cats) {
    const list = document.getElementById('category-list');
    list.innerHTML = `
        <li><a href="#" class="block px-3 py-2 text-sm text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md" onclick="loadAllProducts(event)">All Products</a></li>
        ${cats.map(cat => `
            <li><a href="#" class="block px-3 py-2 text-sm text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md" onclick="loadCategoryProducts('${cat}', event)">${cat}</a></li>
        `).join('')}
    `;
}

// Map API product to display format
function mapProduct(apiProduct) {
    return {
        id: apiProduct.productId,
        name: apiProduct.productName,
        price: apiProduct.productNewPrice,
        rating: apiProduct.ratings,
        image: `http://localhost:8082${apiProduct.productImageUrl}`,
        category: apiProduct.productCategory,
        reviewCount: apiProduct.reviews || 0,
        originalPrice: apiProduct.productOldPrice,
        deliveryType: apiProduct.deliveryTime ? `${apiProduct.deliveryTime} Delivery` : null,
        badge: apiProduct.productDiscount ? { text: apiProduct.productDiscount, color: 'bg-red-500' } : null
    };
}

// Render products
function renderProducts(products) {
    const container = document.getElementById('products-container');
    if (products.length === 0) {
        container.innerHTML = '<p class="text-gray-500 col-span-full text-center">No products found.</p>';
        return;
    }
    const cardsHTML = products.map(product => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            ${product.badge ? `
                <div class="absolute top-3 left-3 ${product.badge.color} text-white px-3 py-1 rounded-md text-sm font-medium z-10">
                    ${product.badge.text}
                </div>
            ` : ''}
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-semibold text-gray-800 mb-2">${product.name}</h3>
                <div class="flex items-center mb-2">
                    <span class="text-lg font-bold text-gray-900">₹${product.price}</span>
                    ${product.originalPrice ? `<span class="text-sm text-gray-500 line-through ml-2">₹${product.originalPrice}</span>` : ''}
                </div>
                <div class="flex items-center mb-4">
                    <span class="text-yellow-500">★${product.rating}</span>
                    <span class="text-sm text-gray-600 ml-2">(${product.reviewCount} reviews)</span>
                </div>
                <div class="flex space-x-2">
                    <button onclick="viewProduct(${product.id})" class="flex-1 bg-primary text-white py-2 px-4 rounded text-sm">View</button>
                    <button onclick="editProduct(${product.id})" class="flex-1 bg-blue-500 text-white py-2 px-4 rounded text-sm">Edit</button>
                    <button onclick="deleteProduct(${product.id})" class="flex-1 bg-red-500 text-white py-2 px-4 rounded text-sm">Delete</button>
                </div>
            </div>
        </div>
    `).join('');
    container.innerHTML = cardsHTML;
}

// Load all products
async function loadAllProducts(event) {
    event.preventDefault();
    const products = await fetchAllProducts();
    allProducts = products.map(mapProduct);
    renderProducts(allProducts);
}

// Load products by category
async function loadCategoryProducts(category, event) {
    event.preventDefault();
    const products = await fetchProductsByCategory(category);
    const mappedProducts = products.map(mapProduct);
    renderProducts(mappedProducts);
}

// View product details
function viewProduct(id) {
    window.location.href = `product-details.html?id=${id}`;
}

// Edit product (placeholder - can link to update form)
function editProduct(id) {
    alert(`Edit product ${id}`);
    // TODO: Open update form with PATCH API
}

// Delete product
async function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        try {
            const response = await fetch(`http://localhost:8082/api/v1/products/delete-product/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error('Failed to delete');
            }
            const data = await response.json();
            showNotification(data.message || 'Product deleted successfully!');
            // Refresh products
            loadAllProducts({ preventDefault: () => {} });
        } catch (error) {
            console.error('Error deleting product:', error);
            showNotification('Error deleting product');
        }
    }
}

function showNotification(message) {
    // Simple notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Initialize page
async function initializePage() {
    const products = await fetchAllProducts();
    allProducts = products.map(mapProduct);
    categories = extractCategories(products);
    renderCategories(categories);
    renderProducts(allProducts);

    // Delivery modal setup (same as before)
    // ... (include the delivery modal JS code from previous)
    const modal = document.getElementById('deliveryModal');
    const deliveryLocationBtn = document.getElementById('deliveryLocationBtn');
    const closeModal = document.getElementById('closeModal');
    const locationInput = document.getElementById('locationInput');
    const confirmLocationBtn = document.getElementById('confirmLocation');
    const useCurrentLocationBtn = document.getElementById('useCurrentLocation');
    const locationOptions = document.querySelectorAll('.location-option');
    const selectedLocationSpan = document.getElementById('selectedLocation');
    const locationError = document.getElementById('locationError');
    const locationSuccess = document.getElementById('locationSuccess');

    let selectedLocation = '';
    let isValidLocation = false;

    const puneDeliveryAreas = ['Koregaon Park', 'Baner', 'Wakad', 'Hinjewadi', 'FC Road', 'Viman Nagar']; // abbreviated
    const punePincodes = ['411001', '411002']; // abbreviated

    function openModal() {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    function validateLocation(location) {
        const isAreaValid = puneDeliveryAreas.some(area => area.toLowerCase().includes(location.toLowerCase()));
        const isPincodeValid = punePincodes.includes(location);
        return isAreaValid || isPincodeValid;
    }

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

    function saveLocation(location) {
        localStorage.setItem('deliveryLocation', location);
    }

    if (deliveryLocationBtn) deliveryLocationBtn.addEventListener('click', openModal);
    if (closeModal) closeModal.addEventListener('click', closeModalFunc);

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

    locationOptions.forEach(option => {
        option.addEventListener('click', function() {
            const location = this.textContent.trim().replace(/^.*?\s/, '').trim();
            locationInput.value = location;
            updateLocationUI(true, location);
        });
    });

    if (confirmLocationBtn) {
        confirmLocationBtn.addEventListener('click', function() {
            if (isValidLocation && selectedLocation) {
                selectedLocationSpan.textContent = selectedLocation;
                saveLocation(selectedLocation);
                closeModalFunc();
            }
        });
    }

    if (useCurrentLocationBtn) {
        useCurrentLocationBtn.addEventListener('click', function() {
            const demoLocation = "Koregaon Park";
            locationInput.value = demoLocation;
            updateLocationUI(true, demoLocation);
        });
    }

    const savedLocation = localStorage.getItem('deliveryLocation');
    if (savedLocation && selectedLocationSpan) {
        selectedLocationSpan.textContent = savedLocation;
        selectedLocation = savedLocation;
    }

    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModalFunc();
        });
    }

    // Mobile menu (same as before)
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

    // Other mobile toggles (abbreviated)
    const mobileCakesToggle = document.getElementById('mobileCakesToggle');
    const mobileCakesMenu = document.getElementById('mobileCakesMenu');
    if (mobileCakesToggle && mobileCakesMenu) {
        mobileCakesToggle.addEventListener('click', function() {
            mobileCakesMenu.classList.toggle('hidden');
            const icon = this.querySelector('i');
            if (icon) icon.classList.toggle('rotate-180');
        });
    }

    // Scroll to top
    const scrollToTopBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.remove('opacity-0', 'invisible');
            scrollToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            scrollToTopBtn.classList.add('opacity-0', 'invisible');
            scrollToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

document.addEventListener('DOMContentLoaded', initializePage);