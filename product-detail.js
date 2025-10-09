// product-detail.js

// Product data structure - updated to remove non-veg ingredients
const productDatabase = {
    '1': {
        id: '1',
        name: 'Truffle Bliss Birthday Cake',
        category: 'Cakes',
        price: 695,
        originalPrice: 795,
        rating: 4.9,
        reviewCount: 165,
        orderCount: '500+',
        images: [
            '/cakes/IMG/chocolate 2.jpg',
            '/cakes/IMG/chocolate 2.jpg',
            '/cakes/IMG/chocolate 2.jpg',
            '/cakes/IMG/chocolate 2.jpg'
        ],
        thumbnails: [
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=150&fit=crop'
        ],
        highlights: [
            'Rich chocolate truffle cake with dark chocolate ganache',
            'Velvety chocolate mousse layers',
            'Topped with premium chocolate shavings',
            'Serves 8-10 people'
        ],
        sizes: [
            { label: '500g ', value: '500g', price: 495 },
            { label: '1kg', value: '1kg', price: 695, default: true },
            { label: '1.5kg', value: '1.5kg', price: 995 }
        ],
        description: `
            <p class="mb-4">Indulge in the ultimate chocolate experience with our Truffle Bliss Birthday Cake. This decadent masterpiece features multiple layers of rich chocolate sponge, each separated by a generous helping of dark chocolate ganache and velvety chocolate mousse.</p>
            <p class="mb-4">Every bite delivers an explosion of chocolate flavors with the perfect balance of sweetness, making it ideal for true chocolate connoisseurs.</p>
            <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
            <p class="mb-4">Perfect for birthdays, anniversaries, celebrations, or just when you need a chocolate fix.</p>
        `,
        specifications: {
            'Cake Details': {
                'Flavor': 'Chocolate Truffle',
                'Shape': 'Round',
                'Weight': '1 kg ',
                'Layers': '3 layers'
            },
            'Storage & Care': {
                'Storage': 'Refrigerate (0-5°C)',
                'Shelf Life': '2 days',
                'Best Served': 'Room temperature',
                'Preparation': '3-4 hours'
            }
        },
        ingredients: {
            'Cake Base': [
                'Premium dark chocolate',
                'All-purpose flour',
                'Plant-based butter',
                'Pure vanilla extract',
                'Baking powder'
            ],
            'Truffle & Frosting': [
                'Dark chocolate ganache',
                'Coconut cream',
                'Chocolate mousse (plant-based)',
                'Cocoa powder',
                'Chocolate shavings',
                'Powdered sugar'
            ]
        },
        allergens: 'Contains: Dairy (Milk), Gluten (Wheat). May contain traces of nuts.',
        deliveryTime: 'Today, In 3 hours',
        deliveryOffer: 'Free Delivery on orders above ₹500',
        discountInfo: {
            freeDelivery: true,
            offer: 'Get 10% off on orders above ₹1000'
        }
    },
    '2': {
        id: '2',
        name: 'Tropical Pineapple Cake',
        category: 'Cakes',
        price: 695,
        originalPrice: 795,
        rating: 4.9,
        reviewCount: 165,
        orderCount: '500+',
        images: [
            '/IMG/pineapple cake.jpg',
            '/IMG/pineapple cake.jpg',
            '/IMG/pineapple cake.jpg',
            '/IMG/pineapple cake.jpg'
        ],
        thumbnails: [
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=150&fit=crop'
        ],
        highlights: [
            'Tropical pineapple flavor with creamy frosting',
            'Layered with fresh pineapple chunks',
            'Topped with toasted coconut flakes',
            'Serves 8-10 people'
        ],
        sizes: [
            { label: '500g (4-6 People)', value: '500g', price: 495 },
            { label: '1kg (8-10 People)', value: '1kg', price: 695, default: true },
            { label: '1.5kg (12-15 People)', value: '1.5kg', price: 995 }
        ],
        description: `
            <p class="mb-4">Enjoy the tropical delight of our Pineapple Cake, featuring layers of moist vanilla sponge infused with fresh pineapple chunks and topped with a creamy frosting.</p>
            <p class="mb-4">The perfect balance of sweet and tangy, ideal for summer celebrations or any special occasion.</p>
            <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
            <p class="mb-4">Perfect for birthdays, anniversaries, or tropical-themed parties.</p>
        `,
        specifications: {
            'Cake Details': {
                'Flavor': 'Pineapple',
                'Shape': 'Round',
                'Weight': '1 kg (serves 8-10 people)',
                'Layers': '3 layers'
            },
            'Storage & Care': {
                'Storage': 'Refrigerate (0-5°C)',
                'Shelf Life': '2 days',
                'Best Served': 'Room temperature',
                'Preparation': '3-4 hours'
            }
        },
        ingredients: {
            'Cake Base': [
                'All-purpose flour',
                'Plant-based butter',
                'Pineapple puree',
                'Pure vanilla extract',
                'Baking powder'
            ],
            'Frosting & Topping': [
                'Vegan whipped cream',
                'Fresh pineapple chunks',
                'Toasted coconut flakes',
                'Powdered sugar'
            ]
        },
        allergens: 'Contains: Dairy (Milk), Gluten (Wheat). May contain traces of nuts.',
        deliveryTime: 'Today, In 3 hours',
        deliveryOffer: 'Free Delivery on orders above ₹500',
        discountInfo: {
            freeDelivery: true,
            offer: 'Get 10% off on orders above ₹1000'
        }
    },
    '3': {
        id: '3',
        name: 'Decadent Red Velvet Cake',
        category: 'Cakes',
        price: 695,
        originalPrice: 795,
        rating: 4.9,
        reviewCount: 165,
        orderCount: '500+',
        images: [
            '/cakes/IMG/red velvet.jpg',
            '/cakes/IMG/red velvet.jpg',
            '/cakes/IMG/red velvet.jpg',
            '/cakes/IMG/red velvet.jpg'
        ],
        thumbnails: [
            'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
            'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=150&fit=crop'
        ],
        highlights: [
            'Velvety red velvet layers with cream cheese frosting',
            'Infused with natural beetroot extract',
            'Topped with edible rose petals',
            'Serves 8-10 people'
        ],
        sizes: [
            { label: '500g (4-6 People)', value: '500g', price: 495 },
            { label: '1kg (8-10 People)', value: '1kg', price: 695, default: true },
            { label: '1.5kg (12-15 People)', value: '1.5kg', price: 995 }
        ],
        description: `
            <p class="mb-4">Savor the elegance of our Decadent Red Velvet Cake, featuring soft red velvet layers made with natural beetroot extract and topped with creamy vegan frosting.</p>
            <p class="mb-4">A visually stunning and delicious treat perfect for any celebration.</p>
            <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
            <p class="mb-4">Ideal for birthdays, weddings, or special gatherings.</p>
        `,
        specifications: {
            'Cake Details': {
                'Flavor': 'Red Velvet',
                'Shape': 'Round',
                'Weight': '1 kg (serves 8-10 people)',
                'Layers': '3 layers'
            },
            'Storage & Care': {
                'Storage': 'Refrigerate (0-5°C)',
                'Shelf Life': '2 days',
                'Best Served': 'Room temperature',
                'Preparation': '3-4 hours'
            }
        },
        ingredients: {
            'Cake Base': [
                'All-purpose flour',
                'Plant-based butter',
                'Beetroot extract',
                'Pure vanilla extract',
                'Baking powder'
            ],
            'Frosting & Topping': [
                'Vegan cream cheese frosting',
                'Edible rose petals',
                'Powdered sugar'
            ]
        },
        allergens: 'Contains: Dairy (Milk), Gluten (Wheat). May contain traces of nuts.',
        deliveryTime: 'Today, In 3 hours',
        deliveryOffer: 'Free Delivery on orders above ₹500',
        discountInfo: {
            freeDelivery: true,
            offer: 'Get 10% off on orders above ₹1000'
        }
    },
};

// Generic product loading system
class ProductDetailManager {
    constructor() {
        this.currentProduct = null;
        this.currentQuantity = 1;
        this.selectedSize = null;
        this.currentImageIndex = 0;
        this.selectedAddons = new Map(); // Track selected add-ons with quantities
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

    // Load product from API or database
    async loadProduct() {
        try {
            const productId = this.getProductId();
            
            // In a real application, this would be an API call
            // const response = await fetch(`/api/products/${productId}`);
            // const product = await response.json();
            
            // For now, using local database
            const product = productDatabase[productId];
            
            if (!product) {
                this.showError();
                return;
            }

            this.currentProduct = product;
            this.selectedSize = product.sizes?.find(s => s.default) || product.sizes?.[0];
            this.renderProduct();
            this.hideLoading();
            
        } catch (error) {
            console.error('Error loading product:', error);
            this.showError();
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
        
        // Set badge to Veg only
        document.getElementById('productBadge').textContent = 'Veg';
        document.getElementById('productBadge').className = 'px-3 py-1 rounded-full text-xs font-medium mr-2 bg-green-500 text-white';
        
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
        // Get other products as related (excluding current)
        const relatedProducts = Object.values(productDatabase)
            .filter(p => p.id !== this.currentProduct.id)
            .slice(0, 4);
        
        const relatedHtml = relatedProducts.map(product => `
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

// API Integration Helper (for when you connect to real backend)
class ProductAPI {
    static baseURL = '/api'; // Change this to your API base URL
    
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
            const response = await fetch(`${this.baseURL}/products/${productId}/related?category=${category}`);
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            return [];
        }
    }
    
    static async getReviews(productId) {
        try {
            const response = await fetch(`${this.baseURL}/products/${productId}/reviews`);
            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            return [];
        }
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