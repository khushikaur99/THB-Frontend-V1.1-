// product-detail.js

const API_BASE_URL = 'http://localhost:8082/api/v1';
const API_BASE_URL_IMG = 'http://localhost:8082';

// Generic product loading system
class ProductDetailManager {
    constructor() {
        this.currentProduct = null;
        this.currentQuantity = 1;
        this.selectedSize = null;
        this.currentImageIndex = 0;
        this.selectedAddons = new Map(); // Track selected add-ons with quantities
        this.relatedProducts = []; // Cache for related products
        this.init();
    }

    init() {
        this.loadProduct();
        this.setupEventListeners();
    }

    // Get product ID from URL parameters
    getProductId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id') || urlParams.get('product') || '1'; // fallback to first product
    }

    // Load product from API
    async loadProduct() {
        try {
            const productId = this.getProductId();
            
            // Fetch product by ID
            const response = await fetch(`${API_BASE_URL}/products/${productId}`);
            if (!response.ok) {
                throw new Error('Product not found');
            }
            const apiData = await response.json();
            const productData = apiData.data;

            if (!productData || productData.deleted) {
                this.showError();
                return;
            }

            // Map API data to frontend structure
            const mappedProduct = this.mapApiToProduct(productData);
            this.currentProduct = mappedProduct;
            this.selectedSize = mappedProduct.sizes?.find(s => s.default) || mappedProduct.sizes?.[0];
            
            // Load related products
            await this.loadRelatedProducts(mappedProduct.category, productId);
            
            this.renderProduct();
            this.hideLoading();
            
        } catch (error) {
            console.error('Error loading product:', error);
            this.showError();
        }
    }

    // Map API response to frontend product structure
    mapApiToProduct(apiProduct) {
        const baseImageUrl = `${API_BASE_URL_IMG}${apiProduct.productImageUrl}`;
        const subImages = (apiProduct.productSubImageUrls || []).map(url => `${API_BASE_URL_IMG}${url}`);
        const images = [baseImageUrl, ...subImages];

        // Sizes from weights and weightPrices
        const sizes = [];
        if (apiProduct.weights && apiProduct.weightPrices) {
            apiProduct.weights.forEach((weight, index) => {
                const price = apiProduct.weightPrices[index];
                const isDefault = weight === apiProduct.defaultWeight;
                sizes.push({
                    label: `${weight} (Serves ${apiProduct.serves})`,
                    value: weight,
                    price: price,
                    default: isDefault
                });
            });
        }

        // Highlights from features
        const highlights = apiProduct.features || [];

        // Order count formatting
        const orderCount = apiProduct.orderCount > 500 ? '500+' : apiProduct.orderCount.toString();

        // Ingredients split
        const ingredients = {
            'Cake Base': (apiProduct.productIngredients || '').split(',').map(i => i.trim())
        };

        // Specifications
        const specifications = {
            'Cake Details': {
                'Flavor': apiProduct.flavor || 'N/A',
                'Shape': apiProduct.shape || 'Round',
                'Weight': apiProduct.defaultWeight || '1 kg',
                'Layers': apiProduct.layers || '2'
            },
            'Storage & Care': {
                'Storage': apiProduct.storageInstructions || apiProduct.careInstructions || 'Refrigerate',
                'Shelf Life': apiProduct.shelfLife || '3 days',
                'Best Served': apiProduct.bestServed || 'Chilled',
                'Preparation': apiProduct.preparationTime || '2 hours'
            }
        };

        // Description with additional fields
        const description = `
            <p class="mb-4">${apiProduct.description || 'No description available.'}</p>
            <p class="mb-4">SKU: ${apiProduct.skuNumber || 'N/A'}</p>
            ${apiProduct.nameOnCake ? `<p class="mb-4"><strong>Name on Cake:</strong> ${apiProduct.nameOnCake}</p>` : ''}
            ${apiProduct.note ? `<p class="mb-4"><strong>Note:</strong> ${apiProduct.note}</p>` : ''}
            <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
            <p class="mb-4">Perfect for birthdays, anniversaries, or any celebration.</p>
        `;

        // Discount info
        let discountPercent = 0;
        if (apiProduct.productOldPrice && apiProduct.productNewPrice) {
            discountPercent = Math.round(((apiProduct.productOldPrice - apiProduct.productNewPrice) / apiProduct.productOldPrice) * 100);
        }

        return {
            id: apiProduct.productId.toString(),
            name: apiProduct.productName,
            category: apiProduct.productCategory,
            foodType: apiProduct.productFoodType,
            price: apiProduct.productNewPrice, // Default price
            originalPrice: apiProduct.productOldPrice,
            rating: apiProduct.ratings || 4.5,
            reviewCount: apiProduct.reviews || 0,
            orderCount: orderCount,
            images: images,
            thumbnails: images, // Use same for thumbnails
            highlights: highlights,
            sizes: sizes,
            description: description,
            specifications: specifications,
            ingredients: ingredients,
            allergens: apiProduct.allergenInfo || 'No allergen info available.',
            deliveryTime: apiProduct.deliveryTime || 'Same day delivery',
            deliveryOffer: `Free Delivery on orders above ₹${apiProduct.freeDeliveryThreshold || 500}`,
            discountInfo: {
                freeDelivery: true,
                offer: apiProduct.productDiscount || `${discountPercent}% OFF`
            }
        };
    }

    // Load related products by category
    async loadRelatedProducts(category, currentId) {
        try {
            // Fetch paginated products for the category, page 0 size 20
            const response = await fetch(`${API_BASE_URL}/products/category/${encodeURIComponent(category)}?page=0&size=20`);
            if (!response.ok) throw new Error('Failed to fetch related products');
            const apiData = await response.json();
            const allProducts = apiData.data.content || [];

            // Map and filter
            this.relatedProducts = allProducts
                .filter(p => p.productId.toString() !== currentId && !p.deleted)
                .map(p => ({
                    id: p.productId.toString(),
                    name: p.productName,
                    category: p.productCategory,
                    price: p.productNewPrice,
                    rating: p.ratings || 4.5,
                    images: [`${API_BASE_URL_IMG}${p.productImageUrl}`]
                }))
                .slice(0, 4); // Limit to 4
        } catch (error) {
            console.error('Error loading related products:', error);
            this.relatedProducts = []; // Fallback to empty
        }
    }

    renderProduct() {
        const product = this.currentProduct;
        
        // Update page title and breadcrumb
        document.getElementById('pageTitle').textContent = `${product.name} | Artisan Bakery Delights`;
        document.getElementById('productBreadcrumb').textContent = product.name;
        document.getElementById('categoryBreadcrumb').textContent = product.category;
        
        // Main product info
        this.renderMainInfo();
        this.renderImages();
        this.renderSizes();
        this.renderAddons();
        this.renderTabs();
        this.renderRelatedProducts();
    }

    renderMainInfo() {
        const product = this.currentProduct;
        const currentPrice = (this.selectedSize ? this.selectedSize.price : product.price) * this.currentQuantity;
        let totalAddonsPrice = 0;
        this.selectedAddons.forEach((count, addon) => {
            totalAddonsPrice += count * parseInt(document.querySelector(`[data-item="${addon}"]`).dataset.price) * this.currentQuantity;
        });
        const totalPrice = currentPrice + totalAddonsPrice;
        
        // Set badge based on food type
        const badgeText = product.foodType === 'Vegetarian' ? 'Veg' : 'Non-Veg';
        const badgeClass = product.foodType === 'Vegetarian' ? 'bg-green-500' : 'bg-red-500';
        document.getElementById('productBadge').textContent = badgeText;
        document.getElementById('productBadge').className = `px-3 py-1 rounded-full text-xs font-medium mr-2 ${badgeClass} text-white`;
        
        document.getElementById('orderCount').textContent = product.orderCount ? `${product.orderCount} orders` : '';
        document.getElementById('productTitle').textContent = product.name;
        
        // Rating
        const ratingHtml = this.generateRatingStars(product.rating);
        document.getElementById('ratingStars').innerHTML = ratingHtml;
        document.getElementById('reviewCount').textContent = `(${product.reviewCount} reviews)`;
        
        // Price
        this.updatePriceDisplay(totalPrice);
        
        if (product.originalPrice && product.originalPrice > (this.selectedSize ? this.selectedSize.price : product.price)) {
            document.getElementById('originalPrice').textContent = `₹${product.originalPrice * this.currentQuantity}`;
            document.getElementById('originalPrice').classList.remove('hidden');
            
            const discount = Math.round(((product.originalPrice - (this.selectedSize ? this.selectedSize.price : product.price)) / product.originalPrice) * 100);
            document.getElementById('discountInfo').innerHTML = `
                <i class="fas fa-tag mr-1"></i>Save ${discount}% (₹${(product.originalPrice - (this.selectedSize ? this.selectedSize.price : product.price)) * this.currentQuantity})
            `;
        }
        
        // Highlights
        if (product.highlights) {
            const highlightsHtml = product.highlights.map(highlight => 
                `<li class="flex items-center"><i class="fas fa-check text-primary mr-2"></i>${highlight}</li>`
            ).join('');
            document.getElementById('keyHighlights').innerHTML = highlightsHtml;
        }
        
        // Delivery info
        document.getElementById('deliveryTime').textContent = product.deliveryTime || 'Same day delivery';
        document.getElementById('deliveryOffer').textContent = product.deliveryOffer || 'Free delivery available';
    }

    updatePriceDisplay(totalPrice) {
        document.getElementById('productPrice').textContent = `₹${totalPrice}`;
        document.getElementById('mobilePrice').textContent = `₹${totalPrice}`;
    }

    renderImages() {
        const product = this.currentProduct;
        if (!product.images || product.images.length === 0) return;
        
        // Main image
        document.getElementById('mainProductImage').src = product.images[0];
        document.getElementById('mainProductImage').alt = product.name;
        
        // Thumbnails
        const thumbnailsHtml = product.images.map((image, index) => `
            <div class="thumbnail-container rounded-lg overflow-hidden border-2 ${index === 0 ? 'border-primary' : 'border-gray-200'} shadow-sm" 
                 onclick="productManager.changeMainImage(${index})">
                <img src="${image}" alt="${product.name}" class="w-full h-24 object-cover hover:opacity-90 transition-all">
            </div>
        `).join('');
        
        document.getElementById('thumbnailGallery').innerHTML = thumbnailsHtml;
    }

    renderSizes() {
        const product = this.currentProduct;
        if (!product.sizes || product.sizes.length === 0) {
            document.getElementById('sizeSelection').classList.add('hidden');
            return;
        }
        
        document.getElementById('sizeSelection').classList.remove('hidden');
        
        const sizesHtml = product.sizes.map(size => `
            <button onclick="productManager.selectSize('${size.value}')" 
                    class="size-option p-4 border rounded-lg text-center text-sm transition-all
                           ${this.selectedSize?.value === size.value ? 'floweraura-option-active' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}">
                <div class="font-semibold">${size.label}</div>
                <div class="text-primary font-bold mt-1">₹${size.price}</div>
            </button>
        `).join('');
        
        document.getElementById('sizeOptions').innerHTML = sizesHtml;
    }

    renderAddons() {
        const addons = document.querySelectorAll('.addon-card');
        addons.forEach(addon => {
            addon.addEventListener('click', () => this.incrementAddon(addon.dataset.item));
            const itemId = addon.dataset.item;
            const count = this.selectedAddons.get(itemId) || 0;
            const countSpan = document.getElementById(`count-${itemId}`);
            if (count > 0) {
                countSpan.textContent = count;
                countSpan.style.display = 'flex';
                addon.classList.add('floweraura-option-active');
                addon.classList.remove('border-gray-200');
            } else {
                countSpan.style.display = 'none';
                addon.classList.remove('floweraura-option-active');
                addon.classList.add('border-gray-200');
            }
        });
    }

    incrementAddon(itemId) {
        let count = this.selectedAddons.get(itemId) || 0;
        count++;
        this.selectedAddons.set(itemId, count);
        this.renderAddons();
        this.renderMainInfo(); // Recalculate total price
    }

    renderTabs() {
        const product = this.currentProduct;
        
        // Product Details
        document.getElementById('productDescription').innerHTML = product.description || '';
        document.getElementById('tabReviewCount').textContent = product.reviewCount || 0;
        
        // Specifications
        if (product.specifications) {
            const specsHtml = Object.entries(product.specifications).map(([category, specs]) => `
                <div class="bg-gray-50 p-5 rounded-lg">
                    <h4 class="font-semibold text-gray-900 mb-3">${category}</h4>
                    ${Object.entries(specs).map(([key, value]) => `
                        <div class="flex justify-between py-2 border-b border-gray-200 last:border-0">
                            <span class="text-gray-600">${key}</span>
                            <span class="font-medium">${value}</span>
                        </div>
                    `).join('')}
                </div>
            `).join('');
            
            document.getElementById('productSpecs').innerHTML = specsHtml;
        }
        
        // Ingredients
        if (product.ingredients) {
            const ingredientsHtml = Object.entries(product.ingredients).map(([category, items]) => `
                <div>
                    <h4 class="font-semibold text-gray-900 mb-3">${category}</h4>
                    <ul class="space-y-2">
                        ${items.map(item => `
                            <li class="flex items-center text-gray-700">
                                <i class="fas fa-leaf text-green-500 mr-2 text-sm"></i>
                                ${item}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `).join('');
            
            document.getElementById('ingredientsList').innerHTML = ingredientsHtml;
        }
        
        if (product.allergens) {
            document.getElementById('allergenText').textContent = product.allergens;
        }
    }

    renderRelatedProducts() {
        const relatedHtml = this.relatedProducts.map(product => `
            <div class="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-all cursor-pointer"
                 onclick="window.location.href='?id=${product.id}'">
                <div class="relative aspect-square overflow-hidden">
                    <img src="${product.images[0]}" alt="${product.name}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2">${product.name}</h3>
                    <div class="flex items-center justify-between">
                        <span class="text-primary font-bold">₹${product.price}</span>
                        <div class="flex items-center text-yellow-400 text-sm">
                            ${this.generateRatingStars(product.rating)}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('relatedProducts').innerHTML = relatedHtml;
    }

    setupEventListeners() {
        // Quantity controls
        document.getElementById('decreaseQty').addEventListener('click', () => {
            if (this.currentQuantity > 1) {
                this.currentQuantity--;
                document.getElementById('quantity').textContent = this.currentQuantity;
                const currentPrice = this.selectedSize ? this.selectedSize.price : this.currentProduct.price;
                this.updatePriceDisplay(currentPrice * this.currentQuantity);
                this.renderMainInfo(); // Update original price and discount
            }
        });
        
        document.getElementById('increaseQty').addEventListener('click', () => {
            this.currentQuantity++;
            document.getElementById('quantity').textContent = this.currentQuantity;
            const currentPrice = this.selectedSize ? this.selectedSize.price : this.currentProduct.price;
            this.updatePriceDisplay(currentPrice * this.currentQuantity);
            this.renderMainInfo(); // Update original price and discount
        });
        
        // Add to cart
        document.getElementById('addToCartBtn').addEventListener('click', () => this.addToCart());
        document.getElementById('mobileAddToCart').addEventListener('click', () => this.addToCart());
        
        // Buy now
        document.getElementById('buyNowBtn').addEventListener('click', () => this.buyNow());
        
        // Wishlist - Updated to use the new toggleWishlist function
        document.getElementById('wishlistBtn').addEventListener('click', (e) => {
            const product = this.currentProduct;
            toggleWishlist(e.currentTarget, product.id, product.name, product.price, product.description, product.images[0]);
        });
        
        // Share
        document.getElementById('shareBtn').addEventListener('click', () => this.shareProduct());
    }

    // Helper methods
    generateRatingStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHtml = '';
        
        for (let i = 0; i < fullStars; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHtml += '<i class="far fa-star"></i>';
        }
        
        return starsHtml;
    }

    changeMainImage(index) {
        const product = this.currentProduct;
        document.getElementById('mainProductImage').src = product.images[index];
        
        // Update thumbnail selection
        const thumbnails = document.querySelectorAll('#thumbnailGallery > div');
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('border-primary', i === index);
            thumb.classList.toggle('border-gray-200', i !== index);
        });
        
        this.currentImageIndex = index;
    }

    selectSize(sizeValue) {
        this.selectedSize = this.currentProduct.sizes.find(s => s.value === sizeValue);
        this.renderMainInfo();
        this.renderSizes();
    }

    addToCart() {
        const cartItem = {
            productId: this.currentProduct.id,
            name: this.currentProduct.name,
            price: this.selectedSize ? this.selectedSize.price : this.currentProduct.price,
            quantity: this.currentQuantity,
            size: this.selectedSize ? this.selectedSize.value : null,
            image: this.currentProduct.images[0]
        };
        
        // Add add-ons to cart
        const addonsArray = Array.from(this.selectedAddons.entries()).map(([addon, count]) => ({
            item: addon,
            price: parseInt(document.querySelector(`[data-item="${addon}"]`).dataset.price),
            quantity: count * this.currentQuantity
        }));

        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItemIndex = existingCart.findIndex(item => 
            item.productId === cartItem.productId && item.size === cartItem.size
        );
        
        if (existingItemIndex > -1) {
            existingCart[existingItemIndex].quantity += cartItem.quantity;
        } else {
            existingCart.push(cartItem);
        }
        
        // Add or update add-ons
        addonsArray.forEach(addon => {
            if (addon.quantity > 0) {
                const existingAddonIndex = existingCart.findIndex(item => item.productId === `addon-${addon.item}`);
                if (existingAddonIndex > -1) {
                    existingCart[existingAddonIndex].quantity += addon.quantity;
                } else {
                    existingCart.push({
                        productId: `addon-${addon.item}`,
                        name: addon.item.charAt(0).toUpperCase() + addon.item.slice(1).replace(/([A-Z])/g, ' $1'),
                        price: addon.price,
                        quantity: addon.quantity,
                        image: document.querySelector(`[data-item="${addon.item}"] img`).src
                    });
                }
            }
        });
        
        localStorage.setItem('cart', JSON.stringify(existingCart));
        
        // Show success message
        this.showNotification('Product and add-ons added to cart!', 'success');
    }

    buyNow() {
        this.addToCart();
        window.location.href = 'checkout.html';
    }

    shareProduct() {
        if (navigator.share) {
            navigator.share({
                title: this.currentProduct.name,
                text: `Check out this amazing ${this.currentProduct.name}!`,
                url: window.location.href
            });
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(window.location.href);
            this.showNotification('Product link copied to clipboard!', 'success');
        }
    }

    showNotification(message, type = 'info') {
        // Create and show notification
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    hideLoading() {
        document.getElementById('loadingState').classList.add('hidden');
        document.getElementById('productContent').classList.remove('hidden');
    }

    showError() {
        document.getElementById('loadingState').classList.add('hidden');
        document.getElementById('errorState').classList.remove('hidden');
    }
}

// Tab functionality
function openTab(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('floweraura-tab-active');
        btn.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.remove('hidden');
    
    // Add active class to clicked tab
    event.target.classList.add('floweraura-tab-active');
    event.target.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
}

// Initialize the product manager
let productManager;

// API Integration Helper
class ProductAPI {
    static baseURL = API_BASE_URL;
    
    static async getProduct(productId) {
        try {
            const response = await fetch(`${this.baseURL}/products/${productId}`);
            if (!response.ok) throw new Error('Product not found');
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }
    
    static async getRelatedProducts(productId, category) {
        try {
            const response = await fetch(`${this.baseURL}/products/category/${encodeURIComponent(category)}?page=0&size=20`);
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            return { data: { content: [] } };
        }
    }
    
    static async getReviews(productId) {
        // No API for reviews, return dummy
        return [];
    }
}

// Load header content and initialize functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product manager
    productManager = new ProductDetailManager();

    function initializeHeader() {
        // ==================== DELIVERY LOCATION ====================
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

        // Get all elements
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
                    if (mobileSelectedLocationSpan) mobileSelectedLocationSpan.textContent = selectedLocation;
                    saveLocation(selectedLocation);
                    closeModalFunc();
                }
            });
        }

        if (useCurrentLocationBtn) {
            useCurrentLocationBtn.addEventListener('click', function() {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(
                        function() {
                            const demoLocation = "Koregaon Park";
                            if (locationInput) locationInput.value = demoLocation;
                            updateLocationUI(true, demoLocation);
                        },
                        function(error) {
                            if (locationError) {
                                locationError.classList.remove('hidden');
                                locationError.textContent = "Unable to get your location. Please enter manually.";
                            }
                            console.error("Geolocation error:", error);
                        }
                    );
                } else if (locationError) {
                    locationError.classList.remove('hidden');
                    locationError.textContent = "Geolocation is not supported by your browser.";
                }
            });
        }

        // ==================== MOBILE MENU ====================
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // ==================== SEARCH FUNCTIONALITY ====================
        const searchInput = document.getElementById('searchInput');
        const searchButton = document.getElementById('searchButton');
        const suggestions = document.getElementById('suggestions');

        if (searchInput && suggestions) {
            const searchData = [
                // Cake Types
                'Chocolate Cake', 'Vanilla Cake', 'Cheesecake', 'Red Velvet Cake', 'Fruit Cake',
                'Mango Cake', 'Butterscotch Cake', 'Black Forest Cake', 'Pineapple Cake',
                'Strawberry Cake', 'Photo Cake', 'Bento Cake', 'Heart Shaped Cake',
                'Pull Me Up Cake', 'Pinata Cake', 'Bomb Cake', 'Fondant Cake', 'Multi Tier Cake',
                
                // Cake Occasions
                'Birthday Cake', 'Anniversary Cake', 'Wedding Cake', 'Graduation Cake',
                'Baby Shower Cake', 'Engagement Cake', 'Retirement Cake', 'Farewell Cake',
                
                // Kids Cakes
                'Barbie Cake', 'Car Theme Cake', 'Cartoon Cake', 'Spiderman Cake',
                'Superhero Cake', 'Cricket Cake',
                
                // Pastry Types
                'Cupcake', 'Muffin', 'Donut', 'Macaron', 'Croissant', 'Danish Pastry',
                
                // Pastry Flavors
                'Chocolate Pastry', 'Vanilla Pastry', 'Strawberry Pastry', 'Blueberry Pastry',
                'Lemon Pastry', 'Matcha Pastry',
                
                // Specialty Pastries
                'Gluten-Free Pastry', 'Sugar-Free Pastry', 'Vegan Pastry', 'Keto-Friendly Pastry',
                'Seasonal Special Pastry', 'Mini Pastry Box', 'Eggless Cake',
            ];

            // Show search suggestions
            function showSuggestions(matches) {
                suggestions.innerHTML = '';
                
                if (matches.length === 0) {
                    suggestions.classList.add('hidden');
                    return;
                }
                
                matches.forEach(match => {
                    const li = document.createElement('li');
                    li.className = 'px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors text-sm';
                    li.textContent = match;
                    
                    li.addEventListener('click', function() {
                        searchInput.value = match;
                        suggestions.classList.add('hidden');
                        performSearch(match);
                    });
                    
                    suggestions.appendChild(li);
                });
                
                suggestions.classList.remove('hidden');
            }

            // Get matching suggestions
            function getSuggestions(input) {
                if (input.length < 2) return [];
                
                const inputLower = input.toLowerCase();
                return searchData.filter(item => 
                    item.toLowerCase().includes(inputLower)
                ).slice(0, 8); // Limit to 8 suggestions
            }

            // Perform search (redirect to search page)
            function performSearch(query) {
                // In a real implementation, this would redirect to a search results page
                console.log('Searching for:', query);
                // window.location.href = `/search.html?q=${encodeURIComponent(query)}`;
            }

            // Event listeners for search
            searchInput.addEventListener('input', function(e) {
                const input = e.target.value.trim();
                const matches = getSuggestions(input);
                showSuggestions(matches);
            });
            
            searchInput.addEventListener('focus', function() {
                if (searchInput.value.trim().length > 1) {
                    const matches = getSuggestions(searchInput.value.trim());
                    showSuggestions(matches);
                }
            });
            
            searchInput.addEventListener('blur', function() {
                // Hide suggestions after a small delay to allow click events to register
                setTimeout(() => {
                    suggestions.classList.add('hidden');
                }, 200);
            });

            searchButton.addEventListener('click', function() {
                const query = searchInput.value.trim();
                if (query) {
                    performSearch(query);
                }
            });

            // Handle Enter key press
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const query = searchInput.value.trim();
                    if (query) {
                        performSearch(query);
                    }
                }
            });

            // Close suggestions when clicking outside
            document.addEventListener('click', function(e) {
                if (!searchInput.contains(e.target)) {
                    suggestions.classList.add('hidden');
                }
            });
        }

        // Load saved location
        const savedLocation = localStorage.getItem('deliveryLocation');
        if (savedLocation) {
            if (selectedLocationSpan) selectedLocationSpan.textContent = savedLocation;
            if (mobileSelectedLocationSpan) mobileSelectedLocationSpan.textContent = savedLocation;
            selectedLocation = savedLocation;
        }
    }

    initializeHeader();

});

// ==================== ADDED HEADER SCRIPT ====================
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
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white bg-green-500`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Delivery Location Modal (merged with existing - using the extended version)
document.addEventListener('DOMContentLoaded', function() {
    // ... (existing delivery code already merged above)

    // Mobile menu toggle (merged)
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

    // Mobile Dropdown Toggles (merged)
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

    // Horizontal scroll functionality (if applicable to header)
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