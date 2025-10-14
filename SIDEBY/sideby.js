  // Wishlist functionality
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        function toggleWishlist(button, id, name, price, description, image) {
            const heartIcon = button.querySelector('i');
            const isInWishlist = wishlist.some(item => item.id === id);
            
            if (isInWishlist) {
                // Remove from wishlist
                wishlist = wishlist.filter(item => item.id !== id);
                heartIcon.classList.remove('text-red-500', 'fa-solid');
                heartIcon.classList.add('text-gray-600', 'fa-regular');
                showNotification(`${name} removed from wishlist`);
            } else {
                // Add to wishlist
                wishlist.push({ id, name, price, description, image });
                heartIcon.classList.remove('text-gray-600', 'fa-regular');
                heartIcon.classList.add('text-red-500', 'fa-solid');
                showNotification(`${name} added to wishlist`);
            }
            
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateWishlistCount();
        }

        function showNotification(message) {
            const notification = document.getElementById('notification');
            const text = document.getElementById('notification-text');
            text.textContent = message;
            notification.classList.remove('hidden');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 3000);
        }

        function updateWishlistCount() {
            const countElement = document.getElementById('wishlist-count');
            if (countElement) {
                countElement.textContent = wishlist.length;
            }
        }

        // Search functionality
        const products = [
            { id: 'chocolate-fudge-cake', name: 'Chocolate Fudge Cake', category: 'Cakes' },
            { id: 'red-velvet-dream', name: 'Red Velvet Dream', category: 'Cakes' },
            { id: 'berry-cheesecake', name: 'Berry Cheesecake', category: 'Cakes' },
            { id: 'lemon-meringue', name: 'Lemon Meringue', category: 'Cakes' },
            { id: 'mango-saffron-pastry', name: 'Mango Saffron Pastry', category: 'Pastries' },
            { id: 'masala-chai-puff', name: 'Masala Chai Puff', category: 'Pastries' },
            { id: 'rose-gulab-jamun-tart', name: 'Rose Gulab Jamun Cheesecake', category: 'Pastries' },
            { id: 'pista-kulfi-pastry', name: 'Pistachio Cheesecake Cups', category: 'Pastries' },
            { id: 'cheesecake-jars', name: 'Cheesecake Jars', category: 'Pastries' },
            { id: 'brownie', name: 'Chocolate Brownie', category: 'Pastries' },
            { id: 'cookies', name: 'Assorted Cookies', category: 'Pastries' },
            { id: 'croissant', name: 'Butter Croissant', category: 'Pastries' },
            { id: 'donuts', name: 'Glazed Donuts', category: 'Pastries' },
            { id: 'bombolonis', name: 'Cream Filled Bombolonis', category: 'Pastries' },
            { id: 'cupcakes', name: 'Vanilla Cupcakes', category: 'Pastries' },
            { id: 'muffins', name: 'Blueberry Muffins', category: 'Pastries' },
            { id: 'cold-coffee', name: 'Iced Cold Coffee', category: 'Beverages' },
            { id: 'french-fries', name: 'Crispy French Fries', category: 'Snacks' },
            { id: 'vanilla-cake', name: 'Vanilla Cake', category: 'Cakes' },
            { id: 'pineapple-cake', name: 'Pineapple Cake', category: 'Cakes' },
            { id: 'blueberry-cake', name: 'Blueberry Cake', category: 'Cakes' },
            { id: 'mango-cake', name: 'Mango Cake', category: 'Cakes' },
            { id: 'butterscotch-cake', name: 'Butterscotch Cake', category: 'Cakes' },
            { id: 'kulfi-falooda-cake', name: 'Kulfi Falooda Cake', category: 'Cakes' },
            { id: 'dutch-chocolate-cake', name: 'Dutch Chocolate Cake', category: 'Cakes' },
            { id: 'black-forest-cake', name: 'Black Forest Cake', category: 'Cakes' },
            { id: 'white-forest-cake', name: 'White Forest Cake', category: 'Cakes' },
            { id: 'choco-chips-cake', name: 'Choco Chips Cake', category: 'Cakes' },
            { id: 'choco-truffle-cake', name: 'Choco Truffle Cake', category: 'Cakes' },
            { id: 'choco-coffee-cake', name: 'Choco Coffee Cake', category: 'Cakes' },
            { id: 'tiramisu-cake', name: 'Tiramisu Cake', category: 'Cakes' },
            { id: 'choco-vanilla-cake', name: 'Choco Vanilla Cake', category: 'Cakes' },
            { id: 'choco-hazelnut-cake', name: 'Choco Hazelnut Cake', category: 'Cakes' },
            { id: 'choco-vanilla-oreo-cake', name: 'Choco Vanilla Oreo Cake', category: 'Cakes' },
            { id: 'pistachio-rose-cake', name: 'Pistachio Rose Cake', category: 'Cakes' },
            { id: 'banana-choco-walnut-cake', name: 'Banana Choco Walnut Cake', category: 'Cakes' },
            { id: 'date-walnut-cake', name: 'Date & Walnut Cake', category: 'Cakes' },
            { id: 'mava-cake', name: 'Mava Cake', category: 'Cakes' },
            { id: 'paan-gulkand-cake', name: 'Paan Gulkand Cake', category: 'Cakes' },
            { id: 'gulab-jamun-cake', name: 'Gulab Jamun Cake', category: 'Cakes' },
            { id: 'rasmalai-cake', name: 'Rasmalai Cake', category: 'Cakes' },
            { id: 'fresh-mix-fruit-cake', name: 'Fresh Mix Fruit Cake', category: 'Cakes' },
            { id: 'pineapple-pastry', name: 'Pineapple', category: 'Pastries' },
            { id: 'butterscotch-pastry', name: 'Butterscotch', category: 'Pastries' },
            { id: 'kulfi-falooda-pastry', name: 'Kulfi Falooda', category: 'Pastries' },
            { id: 'dutch-chocolate-pastry', name: 'Dutch Chocolate', category: 'Pastries' },
            { id: 'chocolate-truffle-pastry', name: 'Chocolate Truffle', category: 'Pastries' },
            { id: 'chocolate-bomboloni', name: 'Chocolate Bomboloni', category: 'Pastries' },
            { id: 'nutella-bomboloni', name: 'Nutella Bomboloni', category: 'Pastries' },
            { id: 'biscoff-bomboloni', name: 'Biscoff Bomboloni', category: 'Pastries' },
            { id: 'lotus-biscoff-cheesecake-jar', name: 'Lotus Biscoff Cheesecake Jar', category: 'Pastries' },
            { id: 'blueberry-cheesecake-jar', name: 'Blueberry Cheesecake Jar', category: 'Pastries' },
            { id: 'nutella-cheesecake-jar', name: 'Nutella Cheesecake Jar', category: 'Pastries' },
            { id: 'strawberry-cheesecake-jar', name: 'Strawberry Cheesecake Jar', category: 'Pastries' },
            { id: 'chocolate-cheesecake-jar', name: 'Chocolate Cheesecake Jar', category: 'Pastries' },
            { id: 'choco-hazelnut-cheesecake-jar', name: 'Choco Hazelnut Cheesecake Jar', category: 'Pastries' },
            { id: 'chocolate-brownie', name: 'Chocolate Brownie', category: 'Pastries' },
            { id: 'walnut-brownie', name: 'Walnut Brownie', category: 'Pastries' },
            { id: 'cream-cheese-korean-bun', name: 'Cream Cheese Korean Bun', category: 'Pastries' },
            { id: 'vanilla-dryfruits', name: 'Vanilla Dryfruits', category: 'Pastries' },
            { id: 'chocolate-muffin', name: 'Chocolate Muffin', category: 'Pastries' },
            { id: 'banana-muffin', name: 'Banana Muffin', category: 'Pastries' },
            { id: 'date-walnut-muffin', name: 'Date & Walnut Muffin', category: 'Pastries' },
            { id: 'lotus-biscoff-cheesecake', name: 'Lotus Biscoff Cheesecake', category: 'Pastries' },
            { id: 'blueberry-cheesecake', name: 'Blueberry Cheesecake', category: 'Pastries' },
            { id: 'nutella-cheesecake', name: 'Nutella Cheesecake', category: 'Pastries' },
            { id: 'strawberry-cheesecake', name: 'Strawberry Cheesecake', category: 'Pastries' },
            { id: 'newyork-cheesecake', name: 'Newyork Cheesecake', category: 'Pastries' },
            { id: 'chocolate-cheesecake', name: 'Chocolate Cheesecake', category: 'Pastries' },
            { id: 'rasmalai-cheesecake', name: 'Rasmalai Cheesecake', category: 'Pastries' },
            { id: 'motichoor-cheesecake', name: 'Motichoor Cheesecake', category: 'Pastries' },
            { id: 'dark-chocolate-donut', name: 'Dark Chocolate Donut', category: 'Pastries' },
            { id: 'white-chocolate-donut', name: 'White Chocolate Donut', category: 'Pastries' },
            { id: 'milk-chocolate-donut', name: 'Milk Chocolate Donut', category: 'Pastries' },
            { id: 'nutella-donut', name: 'Nutella Donut', category: 'Pastries' },
            { id: 'biscoff-donut', name: 'Biscoff Donut', category: 'Pastries' },
            { id: 'french-butter-croissant', name: 'French Butter Croissant', category: 'Pastries' },
            { id: 'almond-croissant', name: 'Almond Croissant', category: 'Pastries' },
            { id: 'chocolate-croissant', name: 'Chocolate Croissant', category: 'Pastries' },
            { id: 'vanilla-cupcake', name: 'Vanilla Cupcake', category: 'Pastries' },
            { id: 'pineapple-cupcake', name: 'Pineapple Cupcake', category: 'Pastries' },
            { id: 'strawberry-cupcake', name: 'Strawberry Cupcake', category: 'Pastries' },
            { id: 'blueberry-cupcake', name: 'Blueberry Cupcake', category: 'Pastries' },
            { id: 'chocolate-cupcake', name: 'Chocolate Cupcake', category: 'Pastries' },
            { id: 'dry-fruits-cookies', name: 'Dry Fruits Cookies', category: 'Pastries' },
            { id: 'choco-chips-cookies', name: 'Choco Chips Cookies', category: 'Pastries' },
            { id: 'coconut-cookies', name: 'Coconut Cookies', category: 'Pastries' },
            { id: 'healthy-dry-fruits-cookies', name: 'Healthy Dry Fruits Cookies', category: 'Pastries' },
            { id: 'healthy-chocochips-cookies', name: 'Healthy Chocochips Cookies', category: 'Pastries' },
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

        document.addEventListener('DOMContentLoaded', function() {
            // Wishlist initialization
            updateWishlistCount();

            // Search toggle
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

            let currentCategory = 'all';
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
                      icon: 'fas fa-bread-slice',
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

            const getProducts = (category) => {
                if (category === 'all') {
                    return Object.values(categories).flatMap(cat => cat.products);
                } else {
                    return categories[category]?.products || [];
                }
            };

            const renderProducts = (products) => {
                const grid = document.getElementById('product-grid');
                grid.innerHTML = '';
                products.forEach(product => {
                    const productSlug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    const id = `${currentCategory}-${productSlug}`;
                    const seed = productSlug;
                    const imgSrc = `https://picsum.photos/seed/${seed}/400/300`;
                    const description = 'Delicious baked good from The Home Bakery';
                    const isInWishlist = wishlist.some(item => item.id === id);
                    const heartClass = isInWishlist ? 'text-red-500 fa-solid' : 'text-gray-600 fa-regular';
                    const card = document.createElement('div');
                    card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative';
                    card.innerHTML = `
                        <img src="${imgSrc}" alt="${product.name}" class="w-full h-48 object-cover">
                        <button onclick="toggleWishlist(this, '${id}', '${product.name}', ${product.price}, '${description}', '${imgSrc}')" class="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 transition-colors">
                            <i class="far fa-heart ${heartClass} text-lg"></i>
                        </button>
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">${product.name}</h3>
                            <div class="flex justify-between items-center">
                                <p class="text-xl font-bold text-primary">₹${product.price}</p>
                                <a href="product-details.html?category=${currentCategory}&product=${encodeURIComponent(product.name)}" class="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-primary">
                                    <i class="fas fa-eye mr-1"></i>View Details
                                </a>
                            </div>
                        </div>
                    `;
                    grid.appendChild(card);
                });
                // Re-init wishlist icons after rendering
                initWishlistIcons();
            };

            function initWishlistIcons() {
                const buttons = document.querySelectorAll('button[onclick^="toggleWishlist"]');
                buttons.forEach(button => {
                    const onclick = button.getAttribute('onclick');
                    const match = onclick.match(/'([^']+)'/);
                    if (match) {
                        const id = match[1];
                        const isInWishlist = wishlist.some(item => item.id === id);
                        const heartIcon = button.querySelector('i');
                        if (isInWishlist) {
                            heartIcon.classList.remove('text-gray-600', 'fa-regular');
                            heartIcon.classList.add('text-red-500', 'fa-solid');
                        } else {
                            heartIcon.classList.remove('text-red-500', 'fa-solid');
                            heartIcon.classList.add('text-gray-600', 'fa-regular');
                        }
                    }
                });
            }

            const ul = document.getElementById('category-list');
            const sidebar = document.getElementById('sidebar');

            // Add 'All' category
            const allLi = document.createElement('li');
            allLi.innerHTML = `
                <a href="#" class="group flex items-center py-3 px-3 w-full text-left text-sm font-medium text-primary bg-amber-50 rounded-md border border-primary" data-category="all">
                    <i class="fas fa-list mr-3 text-primary/70"></i>
                    All Products
                </a>
            `;
            ul.appendChild(allLi);

            // Add other categories
            Object.keys(categories).forEach(slug => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <a href="#" class="group flex items-center py-3 px-3 w-full text-left text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary" data-category="${slug}">
                        <i class="${categories[slug].icon} mr-3 text-gray-400 group-hover:text-primary/70"></i>
                        ${categories[slug].name}
                    </a>
                `;
                ul.appendChild(li);
            });

            // Event listener for category clicks
            ul.addEventListener('click', (e) => {
                if (e.target.closest('a')) {
                    e.preventDefault();
                    const link = e.target.closest('a');
                    const category = link.dataset.category;
                    currentCategory = category;
                    
                    // Update active state
                    ul.querySelectorAll('a').forEach(a => {
                        a.classList.remove('bg-amber-50', 'text-primary', 'border', 'border-primary');
                    });
                    link.classList.add('bg-amber-50', 'text-primary', 'border', 'border-primary');
                    
                    const products = getProducts(category);
                    renderProducts(products);
                    
                    // Close mobile sidebar if open
                    if (window.innerWidth < 1024) {
                        closeMobileSidebar();
                    }
                }
            });

            // Initial render
            renderProducts(getProducts('all'));

            // Mobile sidebar functionality
            const closeMobileSidebarBtn = document.getElementById('closeMobileSidebar');
            const overlay = document.getElementById('overlay');
            const seeOurMenuBtn = document.getElementById('seeOurMenuBtn');

            const openMobileSidebar = () => {
                sidebar.classList.add('sidebar-open');
                document.body.style.overflow = 'hidden';
            };

            const closeMobileSidebar = () => {
                sidebar.classList.remove('sidebar-open');
                document.body.style.overflow = '';
            };

            seeOurMenuBtn.addEventListener('click', openMobileSidebar);
            closeMobileSidebarBtn.addEventListener('click', closeMobileSidebar);
            overlay.addEventListener('click', closeMobileSidebar);

            // Close sidebar on window resize to desktop
            window.addEventListener('resize', () => {
                if (window.innerWidth >= 1024) {
                    closeMobileSidebar();
                }
            });

            // Modal functionality
            const deliveryBtn = document.getElementById('deliveryLocationBtn');
            const modal = document.getElementById('deliveryModal');
            const closeModal = document.getElementById('closeModal');
            const confirmBtn = document.getElementById('confirmLocation');
            const locationInput = document.getElementById('locationInput');
            const selectedLocation = document.getElementById('selectedLocation');
            const locationError = document.getElementById('locationError');
            const locationSuccess = document.getElementById('locationSuccess');

            let currentLocation = '';

            deliveryBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                modal.classList.remove('hidden');
            });

            closeModal.addEventListener('click', () => {
                modal.classList.add('hidden');
                locationSuccess.classList.add('hidden');
                locationError.classList.add('hidden');
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                    locationSuccess.classList.add('hidden');
                    locationError.classList.add('hidden');
                }
            });

            document.querySelectorAll('.location-option').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    currentLocation = btn.children[1].textContent.trim();
                    locationInput.value = currentLocation;
                    confirmBtn.disabled = false;
                    locationError.classList.add('hidden');
                });
            });

            locationInput.addEventListener('input', () => {
                currentLocation = locationInput.value;
                confirmBtn.disabled = !currentLocation.trim();
                locationError.classList.add('hidden');
            });

            confirmBtn.addEventListener('click', () => {
                if (currentLocation.trim()) {
                    selectedLocation.textContent = currentLocation;
                    locationSuccess.textContent = `Delivery to ${currentLocation} confirmed!`;
                    locationSuccess.classList.remove('hidden');
                    setTimeout(() => {
                        modal.classList.add('hidden');
                        locationSuccess.classList.add('hidden');
                    }, 1500);
                } else {
                    locationError.textContent = 'Please enter a location.';
                    locationError.classList.remove('hidden');
                }
            });

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

            // Mobile dropdowns
            const mobileCakesToggle = document.getElementById('mobileCakesToggle');
            const mobileCakesMenu = document.getElementById('mobileCakesMenu');
            mobileCakesToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileCakesMenu.classList.toggle('hidden');
                const icon = mobileCakesToggle.querySelector('i');
                icon.style.transform = mobileCakesMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            });

            const mobilePastriesToggle = document.getElementById('mobilePastriesToggle');
            const mobilePastriesMenu = document.getElementById('mobilePastriesMenu');
            mobilePastriesToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                mobilePastriesMenu.classList.toggle('hidden');
                const icon = mobilePastriesToggle.querySelector('i');
                icon.style.transform = mobilePastriesMenu.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            });

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
        });