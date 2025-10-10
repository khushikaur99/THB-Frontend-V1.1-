document.addEventListener('DOMContentLoaded', () => {
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
                    icon: 'fas fa-donut',
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
                    const seed = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    const imgSrc = `https://picsum.photos/seed/${seed}/400/300`;
                    const card = document.createElement('div');
                    card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 relative';
                    card.innerHTML = `
                        <img src="${imgSrc}" alt="${product.name}" class="w-full h-48 object-cover">
                        <a href="wishlist.html" class="absolute top-3 right-3 p-2 text-gray-400 hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 rounded" title="Add to Wishlist">
                            <i class="fas fa-heart text-lg"></i>
                        </a>
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
            };

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
        });