    // Product data structure - focused on Choco Pastry and extended for Chocolate category
        const productDatabase = {
            '1': {
                id: '1',
                name: 'Choco Pastry',
                category: 'Pastries',
                price: 65,
                originalPrice: 85,
                rating: 4.9,
                reviewCount: 165,
                orderCount: '500+',
                images: [
                    '/pastries/IMG/choco-pastry.jpg',
                    '/pastries/IMG/choco-pastry-2.jpg',
                    '/pastries/IMG/choco-pastry-3.jpg',
                    '/pastries/IMG/choco-pastry-4.jpg'
                ],
                thumbnails: [
                    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=150&fit=crop'
                ],
                highlights: [
                    'Rich chocolate sponge with creamy frosting',
                    'Topped with chocolate ganache and sprinkles',
                    'Decadent chocolate flavor in every bite',
                    'Single serving delight - Sold in pairs for sharing'
                ],
                sizes: [
                    { label: '2 Pieces', value: '2pieces', price: 130, default: true },
                    { label: '4 Pieces', value: '4pieces', price: 240 },
                    { label: '6 Pieces', value: '6pieces', price: 360 }
                ],
                description: `
                    <p class="mb-4">Dive into pure indulgence with our Choco Pastry, a heavenly treat featuring moist chocolate sponge layered with silky chocolate frosting and crowned with a glossy ganache drizzle.</p>
                    <p class="mb-4">This classic favorite delivers intense chocolate satisfaction in a convenient single-serve size, perfect for satisfying sweet cravings anytime. Available in even numbers of pieces for easy sharing.</p>
                    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
                    <p class="mb-4">Ideal for daily treats, parties, or gifting to chocolate enthusiasts.</p>
                `,
                specifications: {
                    'Pastry Details': {
                        'Flavor': 'Chocolate',
                        'Shape': 'Round',
                        'Size': 'Single serving',
                        'Layers': '2 layers',
                        'Pieces per Pack': 'Even numbers (2, 4, 6)'
                    },
                    'Storage & Care': {
                        'Storage': 'Refrigerate (0-5°C)',
                        'Shelf Life': '2 days',
                        'Best Served': 'Room temperature',
                        'Preparation': 'Ready to eat'
                    }
                },
                ingredients: {
                    'Pastry Base': [
                        'All-purpose flour',
                        'Cocoa powder',
                        'Plant-based butter',
                        'Pure vanilla extract',
                        'Baking powder'
                    ],
                    'Frosting & Topping': [
                        'Chocolate frosting (coconut cream, cocoa)',
                        'Chocolate ganache',
                        'Sprinkles',
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
                name: 'Vanilla Pastry',
                category: 'Pastries',
                price: 55,
                originalPrice: 75,
                rating: 4.8,
                reviewCount: 120,
                orderCount: '400+',
                images: [
                    '/pastries/IMG/vanilla-pastry.jpg',
                    '/pastries/IMG/vanilla-pastry.jpg',
                    '/pastries/IMG/vanilla-pastry.jpg',
                    '/pastries/IMG/vanilla-pastry.jpg'
                ],
                thumbnails: [
                    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=150&fit=crop'
                ],
                highlights: [
                    'Light vanilla sponge with whipped cream',
                    'Topped with fresh fruits',
                    'Delicate and fluffy texture',
                    'Single serving delight - Sold in pairs for sharing'
                ],
                sizes: [
                    { label: '2 Pieces', value: '2pieces', price: 110, default: true },
                    { label: '4 Pieces', value: '4pieces', price: 200 },
                    { label: '6 Pieces', value: '6pieces', price: 300 }
                ],
                description: `
                    <p class="mb-4">Enjoy the subtle sweetness of our Vanilla Pastry, made with fluffy vanilla sponge and topped with light whipped cream and seasonal fresh fruits.</p>
                    <p class="mb-4">A refreshing and elegant choice for any occasion. Available in even numbers of pieces for easy sharing.</p>
                    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
                    <p class="mb-4">Perfect for tea time or light desserts.</p>
                `,
                specifications: {
                    'Pastry Details': {
                        'Flavor': 'Vanilla',
                        'Shape': 'Round',
                        'Size': 'Single serving',
                        'Layers': '2 layers',
                        'Pieces per Pack': 'Even numbers (2, 4, 6)'
                    },
                    'Storage & Care': {
                        'Storage': 'Refrigerate (0-5°C)',
                        'Shelf Life': '2 days',
                        'Best Served': 'Chilled',
                        'Preparation': 'Ready to eat'
                    }
                },
                ingredients: {
                    'Pastry Base': [
                        'All-purpose flour',
                        'Plant-based butter',
                        'Pure vanilla extract',
                        'Baking powder'
                    ],
                    'Frosting & Topping': [
                        'Whipped cream (coconut based)',
                        'Fresh fruits',
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
                name: 'Strawberry Pastry',
                category: 'Pastries',
                price: 70,
                originalPrice: 90,
                rating: 4.9,
                reviewCount: 200,
                orderCount: '600+',
                images: [
                    '/pastries/IMG/strawberry-pastry.jpg',
                    '/pastries/IMG/strawberry-pastry.jpg',
                    '/pastries/IMG/strawberry-pastry.jpg',
                    '/pastries/IMG/strawberry-pastry.jpg'
                ],
                thumbnails: [
                    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=150&fit=crop'
                ],
                highlights: [
                    'Vanilla base with strawberry cream',
                    'Fresh strawberry slices on top',
                    'Tangy and sweet balance',
                    'Single serving delight - Sold in pairs for sharing'
                ],
                sizes: [
                    { label: '2 Pieces', value: '2pieces', price: 140, default: true },
                    { label: '4 Pieces', value: '4pieces', price: 260 },
                    { label: '6 Pieces', value: '6pieces', price: 390 }
                ],
                description: `
                    <p class="mb-4">A burst of summer in every bite with our Strawberry Pastry, combining soft vanilla layers with strawberry-infused cream and topped with fresh strawberries.</p>
                    <p class="mb-4">Light, fruity, and utterly delightful. Available in even numbers of pieces for easy sharing.</p>
                    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
                    <p class="mb-4">Great for celebrations or casual snacking.</p>
                `,
                specifications: {
                    'Pastry Details': {
                        'Flavor': 'Strawberry',
                        'Shape': 'Round',
                        'Size': 'Single serving',
                        'Layers': '2 layers',
                        'Pieces per Pack': 'Even numbers (2, 4, 6)'
                    },
                    'Storage & Care': {
                        'Storage': 'Refrigerate (0-5°C)',
                        'Shelf Life': '2 days',
                        'Best Served': 'Chilled',
                        'Preparation': 'Ready to eat'
                    }
                },
                ingredients: {
                    'Pastry Base': [
                        'All-purpose flour',
                        'Plant-based butter',
                        'Strawberry puree',
                        'Pure vanilla extract'
                    ],
                    'Frosting & Topping': [
                        'Strawberry cream',
                        'Fresh strawberries',
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
            '4': {
                id: '4',
                name: 'Death by Chocolate Pastry',
                category: 'Chocolate Pastries',
                price: 395,
                originalPrice: 450,
                rating: 4.9,
                reviewCount: 245,
                orderCount: '300+',
                images: [
                    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=600&fit=crop&crop=entropy',
                    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=600&fit=crop&crop=bottom',
                    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=600&fit=crop&crop=left'
                ],
                thumbnails: [
                    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=150&fit=crop'
                ],
                highlights: [
                    'Triple layer chocolate indulgence',
                    'Layers of brownie, mousse, and ganache',
                    'Ultimate chocolate lover\'s dream',
                    'Serves 6-8 people - Available in sets of 2 pastries'
                ],
                sizes: [
                    { label: '2 Pastries ', value: '2pastries', price: 790, default: true },
                    { label: '4 Pastries ', value: '4pastries', price: 1500 }
                ],
                description: `
                    <p class="mb-4">Experience the ultimate chocolate ecstasy with our Death by Chocolate Pastry. This decadent masterpiece features three sinful layers: fudgy brownie base, velvety chocolate mousse, and a glossy ganache topping.</p>
                    <p class="mb-4">Every bite is a journey through chocolate heaven, perfect for celebrations or when you need to satisfy the deepest chocolate cravings. Sold in sets of 2 pastries for larger gatherings.</p>
                    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
                    <p class="mb-4">Ideal for birthday parties, anniversaries, or chocolate-themed events.</p>
                `,
                specifications: {
                    'Pastry Details': {
                        'Flavor': 'Triple Chocolate',
                        'Shape': 'Round',
                        'Size': '8-inch diameter',
                        'Layers': '3 layers',
                        'Pieces per Set': 'Even numbers (2, 4)'
                    },
                    'Storage & Care': {
                        'Storage': 'Refrigerate (0-5°C)',
                        'Shelf Life': '3 days',
                        'Best Served': 'Room temperature',
                        'Preparation': 'Ready to eat'
                    }
                },
                ingredients: {
                    'Pastry Base': [
                        'All-purpose flour',
                        'Dark cocoa powder',
                        'Unsweetened chocolate',
                        'Butter',
                        'Brown sugar',
                        'Eggs'
                    ],
                    'Frosting & Topping': [
                        'Chocolate mousse (cream, dark chocolate)',
                        'Ganache (heavy cream, dark chocolate)',
                        'Chocolate shards',
                        'Cocoa nibs'
                    ]
                },
                allergens: 'Contains: Dairy (Milk), Eggs, Gluten (Wheat). May contain traces of nuts.',
                deliveryTime: 'Today, In 3 hours',
                deliveryOffer: 'Free Delivery on orders above ₹500',
                discountInfo: {
                    freeDelivery: true,
                    offer: 'Get 10% off on orders above ₹1000'
                }
            },
            '5': {
                id: '5',
                name: 'Chocolate Truffle Pastry',
                category: 'Chocolate Pastries',
                price: 345,
                originalPrice: 400,
                rating: 4.8,
                reviewCount: 198,
                orderCount: '250+',
                images: [
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop&crop=entropy',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop&crop=bottom',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&h=600&fit=crop&crop=left'
                ],
                thumbnails: [
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=200&h=150&fit=crop'
                ],
                highlights: [
                    'Silky smooth truffle center',
                    'Dark chocolate exterior',
                    'Rich and intense flavor',
                    'Serves 4-6 people - Available in sets of 2 pastries'
                ],
                sizes: [
                    { label: '2 Pastries ', value: '2pastries', price: 690, default: true },
                    { label: '4 Pastries ', value: '4pastries', price: 1300 }
                ],
                description: `
                    <p class="mb-4">Indulge in the luxurious texture of our Chocolate Truffle Pastry, featuring a melt-in-your-mouth truffle filling enveloped in a crisp dark chocolate shell.</p>
                    <p class="mb-4">This sophisticated treat balances intense cocoa notes with subtle sweetness, making it a favorite among chocolate connoisseurs. Sold in sets of 2 pastries.</p>
                    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
                    <p class="mb-4">Perfect for dinner parties, romantic evenings, or as a premium gift.</p>
                `,
                specifications: {
                    'Pastry Details': {
                        'Flavor': 'Dark Chocolate Truffle',
                        'Shape': 'Round',
                        'Size': '6-inch diameter',
                        'Layers': '2 layers',
                        'Pieces per Set': 'Even numbers (2, 4)'
                    },
                    'Storage & Care': {
                        'Storage': 'Refrigerate (0-5°C)',
                        'Shelf Life': '4 days',
                        'Best Served': 'Chilled',
                        'Preparation': 'Ready to eat'
                    }
                },
                ingredients: {
                    'Pastry Base': [
                        'Dark chocolate (70% cocoa)',
                        'Heavy cream',
                        'Butter',
                        'Cocoa powder',
                        'Sea salt'
                    ],
                    'Frosting & Topping': [
                        'Truffle ganache',
                        'Chocolate glaze',
                        'Gold leaf accents',
                        'Cocoa dust'
                    ]
                },
                allergens: 'Contains: Dairy (Milk), Gluten (Wheat). May contain traces of soy.',
                deliveryTime: 'Today, In 3 hours',
                deliveryOffer: 'Free Delivery on orders above ₹500',
                discountInfo: {
                    freeDelivery: true,
                    offer: 'Get 10% off on orders above ₹1000'
                }
            },
            '6': {
                id: '6',
                name: 'Chocolate Fudge Pastry',
                category: 'Chocolate Pastries',
                price: 425,
                originalPrice: 480,
                rating: 4.7,
                reviewCount: 176,
                orderCount: '200+',
                images: [
                    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&h=600&fit=crop&crop=entropy',
                    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&h=600&fit=crop&crop=bottom',
                    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=800&h=600&fit=crop&crop=left'
                ],
                thumbnails: [
                    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=200&h=150&fit=crop'
                ],
                highlights: [
                    'Dense and fudgy texture',
                    'Pure chocolate bliss',
                    'Handmade with premium cocoa',
                    'Serves 6-8 people - Available in sets of 2 pastries'
                ],
                sizes: [
                    { label: '2 Pastries ', value: '2pastries', price: 850, default: true },
                    { label: '4 Pastries ', value: '4pastries', price: 1600 }
                ],
                description: `
                    <p class="mb-4">Satisfy your deepest chocolate desires with our Chocolate Fudge Pastry. This dense, moist fudge is crafted from single-origin cocoa beans for an authentic, rich flavor profile.</p>
                    <p class="mb-4">No frills, just pure, unadulterated chocolate perfection in every decadent slice. Sold in sets of 2 pastries for sharing.</p>
                    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
                    <p class="mb-4">Great for chocolate tasting events or as a comforting treat.</p>
                `,
                specifications: {
                    'Pastry Details': {
                        'Flavor': 'Pure Fudge',
                        'Shape': 'Square',
                        'Size': '8x8 inch',
                        'Layers': '1 layer',
                        'Pieces per Set': 'Even numbers (2, 4)'
                    },
                    'Storage & Care': {
                        'Storage': 'Room temperature (up to 2 days) or refrigerate',
                        'Shelf Life': '5 days',
                        'Best Served': 'Room temperature',
                        'Preparation': 'Ready to eat'
                    }
                },
                ingredients: {
                    'Pastry Base': [
                        'Single-origin cocoa powder',
                        'Dark chocolate couverture',
                        'Condensed milk',
                        'Butter',
                        'Vanilla beans'
                    ],
                    'Frosting & Topping': [
                        'Fudge icing',
                        'Chocolate curls',
                        'Sea salt flakes'
                    ]
                },
                allergens: 'Contains: Dairy (Milk), Gluten (Wheat). Processed in facility with nuts.',
                deliveryTime: 'Today, In 3 hours',
                deliveryOffer: 'Free Delivery on orders above ₹500',
                discountInfo: {
                    freeDelivery: true,
                    offer: 'Get 10% off on orders above ₹1000'
                }
            },
            '7': {
                id: '7',
                name: 'Dark Chocolate Mousse Pastry',
                category: 'Chocolate Pastries',
                price: 475,
                originalPrice: 520,
                rating: 4.9,
                reviewCount: 215,
                orderCount: '280+',
                images: [
                    'https://images.unsplash.com/photo-1586985289906-406988974504?w=800&h=600&fit=crop',
                    'https://images.unsplash.com/photo-1586985289906-406988974504?w=800&h=600&fit=crop&crop=entropy',
                    'https://images.unsplash.com/photo-1586985289906-406988974504?w=800&h=600&fit=crop&crop=bottom',
                    'https://images.unsplash.com/photo-1586985289906-406988974504?w=800&h=600&fit=crop&crop=left'
                ],
                thumbnails: [
                    'https://images.unsplash.com/photo-1586985289906-406988974504?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=200&h=150&fit=crop',
                    'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=200&h=150&fit=crop'
                ],
                highlights: [
                    'Airy and light mousse texture',
                    '70% dark chocolate intensity',
                    'Balanced with subtle sweetness',
                    'Serves 4-6 people - Available in sets of 2 pastries'
                ],
                sizes: [
                    { label: '2 Pastries (8-12 servings)', value: '2pastries', price: 950, default: true },
                    { label: '4 Pastries (16-24 servings)', value: '4pastries', price: 1800 }
                ],
                description: `
                    <p class="mb-4">Elevate your dessert experience with our Dark Chocolate Mousse Pastry. Whipped to airy perfection, this mousse captures the essence of premium dark chocolate with notes of berry and spice.</p>
                    <p class="mb-4">Light yet intensely flavorful, it's the sophisticated choice for those who appreciate nuanced chocolate profiles. Sold in sets of 2 pastries.</p>
                    <h4 class="text-lg font-semibold text-gray-900 mt-6 mb-3">Occasions</h4>
                    <p class="mb-4">Excellent for elegant dinners, corporate events, or as a refined gift.</p>
                `,
                specifications: {
                    'Pastry Details': {
                        'Flavor': 'Dark Chocolate Mousse',
                        'Shape': 'Round',
                        'Size': '7-inch diameter',
                        'Layers': '2 layers',
                        'Pieces per Set': 'Even numbers (2, 4)'
                    },
                    'Storage & Care': {
                        'Storage': 'Refrigerate (0-5°C)',
                        'Shelf Life': '2 days',
                        'Best Served': 'Chilled',
                        'Preparation': 'Ready to eat'
                    }
                },
                ingredients: {
                    'Pastry Base': [
                        'Dark chocolate (70% cocoa)',
                        'Egg whites',
                        'Heavy whipping cream',
                        'Sugar',
                        'Gelatin'
                    ],
                    'Frosting & Topping': [
                        'Chocolate mousse',
                        'Whipped cream rosettes',
                        'Chocolate tempering',
                        'Fresh berries'
                    ]
                },
                allergens: 'Contains: Dairy (Milk), Eggs, Gluten (Wheat). May contain alcohol traces.',
                deliveryTime: 'Today, In 3 hours',
                deliveryOffer: 'Free Delivery on orders above ₹500',
                discountInfo: {
                    freeDelivery: true,
                    offer: 'Get 10% off on orders above ₹1000'
                }
            }
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
                
                // Wishlist
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
        
        document.addEventListener('DOMContentLoaded', function() {
            productManager = new ProductDetailManager();
        });

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

        // ==================== SEARCH FUNCTIONALITY ====================
// EXACT SAME AS FIRST CODE - Search functionality
const products = [
    { id: '1', name: 'Choco Pastry', category: 'Pastries' },
    { id: '2', name: 'Vanilla Pastry', category: 'Pastries' },
    { id: '3', name: 'Strawberry Pastry', category: 'Pastries' },
    { id: '4', name: 'Death by Chocolate Pastry', category: 'Chocolate Pastries' },
    { id: '5', name: 'Chocolate Truffle Pastry', category: 'Chocolate Pastries' },
    { id: '6', name: 'Chocolate Fudge Pastry', category: 'Chocolate Pastries' },
    { id: '7', name: 'Dark Chocolate Mousse Pastry', category: 'Chocolate Pastries' },
    // Add more products from your database as needed
    { id: 'chocolate-fudge-cake', name: 'Chocolate Fudge Cake', category: 'Cakes' },
    { id: 'red-velvet-dream', name: 'Red Velvet Dream', category: 'Cakes' },
    { id: 'berry-cheesecake', name: 'Berry Cheesecake', category: 'Cakes' },
    { id: 'lemon-meringue', name: 'Lemon Meringue', category: 'Cakes' },
    { id: 'mango-saffron-pastry', name: 'Mango Saffron Pastry', category: 'Pastries' },
    { id: 'masala-chai-puff', name: 'Masala Chai Puff', category: 'Pastries' },
    { id: 'rose-gulab-jamun-tart', name: 'Rose Gulab Jamun Cheesecake', category: 'Pastries' },
    { id: 'pista-kulfi-pastry', name: 'Pistachio Cheesecake Cups', category: 'Pastries' },
    // ... include all products from the first code's array ...
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

// Search toggle handlers
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