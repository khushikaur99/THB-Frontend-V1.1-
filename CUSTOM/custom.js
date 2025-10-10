// Product Data
const WHATSAPP_NUMBER = '7972026004'; // Your WhatsApp business number

const productData = [
    {
        id: 1,
        name: 'Photo Cake - Custom Design',
        price: 1295,
        description: 'Personalized photo cake with edible print. Perfect for birthdays, anniversaries, and special occasions.',
        originalPrice: 1450,
        rating: 4.9,
        reviewCount: 287,
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        badge: {
            text: 'Most Popular',
            color: 'bg-teal-700'
        },
        deliveryTime: 'In 24 hours',
        categories: ['birthday', 'anniversary'],
        hasDeliveryInfo: true
    },
    {
        id: 2,
        name: 'Bento Cake - Mini Celebration',
        price: 395,
        description: 'Adorable mini cake perfect for individual celebrations. Customizable message and design.',
        originalPrice: null,
        rating: 4.8,
        reviewCount: 421,
        image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
        badge: {
            text: 'Trending',
            color: 'bg-purple-600'
        },
        deliveryTime: 'In 12 hours',
        categories: ['kids'],
        hasDeliveryInfo: true
    },
    {
        id: 3,
        name: 'Heart Shaped Romance Cake',
        price: 1095,
        description: 'Beautiful heart-shaped cake perfect for expressing love. Customizable with your choice of flavor and message.',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 356,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80',
        deliveryTime: 'In 24 hours',
        categories: ['anniversary'],
        hasDeliveryInfo: true
    },
    {
        id: 4,
        name: 'Pull Me Up Cake',
        price: 1595,
        description: 'Interactive pull-me-up cake with hidden surprise inside. Choose your favorite flavors and decorations.',
        originalPrice: 1750,
        rating: 4.9,
        reviewCount: 198,
        image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=429&q=80',
        badge: {
            text: 'Unique',
            color: 'bg-yellow-500'
        },
        deliveryTime: 'In 48 hours',
        categories: ['birthday'],
        hasDeliveryInfo: true
    },
    {
        id: 5,
        name: 'Pinata Cake - Surprise Inside',
        price: 1695,
        description: 'Exciting pinata cake filled with candies and surprises. Break it open for a sweet celebration!',
        originalPrice: null,
        rating: 4.8,
        reviewCount: 167,
        image: 'https://images.unsplash.com/photo-1558301214-0c68d8dc93b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80',
        deliveryTime: 'In 48 hours',
        categories: ['birthday'],
        hasDeliveryInfo: true
    },
    {
        id: 6,
        name: 'Money Bomb Cake',
        price: 1895,
        description: 'Exploding money cake with hidden compartment for cash gifts. Perfect for special celebrations.',
        originalPrice: 2100,
        rating: 4.9,
        reviewCount: 143,
        image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=429&q=80',
        badge: {
            text: 'Premium',
            color: 'bg-gray-800'
        },
        deliveryTime: 'In 48 hours',
        categories: ['birthday'],
        hasDeliveryInfo: true
    },
    {
        id: 7,
        name: 'Fondant Theme Cake',
        price: 2495,
        description: 'Exquisitely crafted fondant cake with custom theme. Bring your imagination to life!',
        originalPrice: null,
        rating: 4.9,
        reviewCount: 234,
        image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
        badge: {
            text: 'Luxury',
            color: 'bg-amber-600'
        },
        deliveryTime: 'In 72 hours',
        categories: ['birthday', 'anniversary'],
        hasDeliveryInfo: true
    },
    {
        id: 8,
        name: 'Multi-Tier Wedding Cake',
        price: 4995,
        description: 'Elegant multi-tier cake perfect for weddings and grand celebrations. Fully customizable design.',
        originalPrice: null,
        rating: 5.0,
        reviewCount: 89,
        image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
        deliveryTime: 'In 7 days',
        categories: ['anniversary'],
        hasDeliveryInfo: true
    }
];

let wishlistDetails = JSON.parse(localStorage.getItem('wishlistDetails')) || [];
let currentCategory = 'all';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
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

    // Customise form submit
    const form = document.getElementById('customize-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const flavour = document.getElementById('flavour').value;
        const size = document.getElementById('size').value;
        const addons = document.getElementById('addons').value;

        let details = '';
        if (flavour) details += `Flavour: ${flavour}\n`;
        if (size) details += `Size: ${size}\n`;
        if (addons) details += `Add-ons: ${addons}\n`;

        const message = `Hello! I would like to order a custom cake.\n\n` +
                        `🎂 Custom Cake Details:\n${details}\n` +
                        `Please help me customize this cake. Thank you!`;

        const whatsappNumber = WHATSAPP_NUMBER;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

        // Close modal & reset form
        closeModal();
    });

    // Close modal button
    document.getElementById('close-modal').addEventListener('click', closeModal);

    // Category filters
    const categoryBtns = ['all', 'birthday', 'anniversary', 'kids'];
    categoryBtns.forEach(cat => {
        const btn = document.getElementById(`filter-${cat}`);
        btn.addEventListener('click', () => {
            categoryBtns.forEach(c => {
                document.getElementById(`filter-${c}`).classList.remove('bg-primary', 'text-white');
                document.getElementById(`filter-${c}`).classList.add('bg-gray-200');
            });
            btn.classList.remove('bg-gray-200');
            btn.classList.add('bg-primary', 'text-white');
            currentCategory = cat;
            updateProducts();
        });
    });

    // Delivery Location Modal
    const deliveryModal = document.getElementById('deliveryModal');
    const deliveryLocationBtn = document.getElementById('deliveryLocationBtn');
    const closeModalBtn = document.getElementById('closeModal');
    const locationOptions = document.querySelectorAll('.location-option');
    const confirmLocationBtn = document.getElementById('confirmLocation');
    const selectedLocation = document.getElementById('selectedLocation');

    if (deliveryLocationBtn && deliveryModal) {
        deliveryLocationBtn.addEventListener('click', () => {
            deliveryModal.classList.remove('hidden');
        });
    }

    if (closeModalBtn && deliveryModal) {
        closeModalBtn.addEventListener('click', () => {
            deliveryModal.classList.add('hidden');
        });
    }

    locationOptions.forEach(option => {
        option.addEventListener('click', () => {
            const location = option.textContent.trim();
            selectedLocation.textContent = location;
            confirmLocationBtn.disabled = false;
        });
    });

    if (confirmLocationBtn) {
        confirmLocationBtn.addEventListener('click', () => {
            deliveryModal.classList.add('hidden');
        });
    }

    // Initial render
    updateProducts();
});

function openModal() {
    document.getElementById('customize-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('customize-modal').classList.add('hidden');
    document.getElementById('customize-form').reset();
}

function updateProducts() {
    let products = [...productData];

    // Apply category filter
    if (currentCategory !== 'all') {
        products = products.filter(p => p.categories && p.categories.includes(currentCategory));
    }

    renderProducts(products);
}

async function orderOnWhatsApp(productInput, event) {
    event.preventDefault();
    event.stopPropagation();
    
    // Handle both object and stringified input (fix for onclick calls)
    const product = typeof productInput === 'string' ? JSON.parse(productInput) : productInput;
    
    const fullImageURL = product.image;
    
    // Formatted message matching the sample
    const baseMessage = `Hello! I would like to order:\n\n` +
                      `  ${product.name}\n` +
                      `  Price: ₹${product.price}\n` +
                      `  Rating: ${product.rating} (${product.reviewCount} reviews)\n` +
                      `  Delivery: ${product.deliveryTime}\n\n` +
                      `Please help me customize this cake. Thank you!`;
    
    // Try to use Web Share API to share image and text (works on mobile browsers)
    if (navigator.share) {
        try {
            const response = await fetch(fullImageURL);
            if (!response.ok) throw new Error('Failed to fetch image');
            const blob = await response.blob();
            const imageFile = new File([blob], `${product.name.replace(/\s+/g, '_')}.jpg`, { type: blob.type });
            
            const shareData = {
                title: 'Order Custom Cake - The Home Bakery',
                text: baseMessage,
                files: [imageFile]
            };
            
            if (navigator.canShare && navigator.canShare(shareData)) {
                await navigator.share(shareData);
                return;
            } else {
                // Fallback share without files if possible
                await navigator.share({
                    title: 'Order Custom Cake - The Home Bakery',
                    text: baseMessage + `\n\n📸 View product image: ${fullImageURL}`
                });
                return;
            }
        } catch (error) {
            console.warn('Web Share API failed:', error);
            // Continue to wa.me fallback
        }
    }
    
    // Fallback: Open WhatsApp with enhanced message including image URL
    const fallbackMessage = baseMessage + `\n\n📸 View/Download Product Image: ${fullImageURL}\n(You can attach this image when replying if needed.)`;
    const encodedMessage = encodeURIComponent(fallbackMessage);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

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

function handleProductClick(productId, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const product = productData.find(p => p.id === productId);
    if (product) {
        orderOnWhatsApp(product, event || new Event('click'));
    }
}

function createProductCard(product) {
    const isInWishlist = wishlistDetails.some(item => item.id === product.id);
    
    return `
        <div class="bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-lg transition-shadow duration-300">
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

            <div class="cursor-pointer" onclick="handleProductClick(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover">
            </div>

            <div class="p-6">
                <h3 class="font-semibold text-gray-800 mb-3 text-lg line-clamp-2 cursor-pointer" onclick="handleProductClick(${product.id})">${product.name}</h3>
                
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

                <div class="flex items-center text-sm text-gray-600 mb-4">
                    <span>Earliest Delivery: ${product.deliveryTime}</span>
                </div>

                <div class="flex gap-2">
                    <button onclick="orderOnWhatsApp('${JSON.stringify(product).replace(/"/g, '&quot;')}', event)" 
                            class="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 whatsapp-btn text-sm">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        WhatsApp
                    </button>
                    <button onclick="openModal()" 
                            class="flex-1 bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-1 customize-btn text-sm">
                        <i class="fas fa-magic"></i> Customise
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProducts(products) {
    const grid = document.getElementById('product-grid');
    const cardsHTML = products.map(product => createProductCard(product)).join('');
    grid.innerHTML = cardsHTML;
    updateWishlistCount();
}

// Initialize wishlist count on page load
updateWishlistCount();