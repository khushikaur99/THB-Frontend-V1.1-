document.addEventListener("DOMContentLoaded", function () {
  // Slideshow initialization
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

  // Product grid functionality
  const sortSelect = document.getElementById("sortSelect");
  const grid = document.getElementById("productGrid");
  let products = Array.from(grid.children);

  // Extract data
  function getProductData(card) {
    return {
      element: card,
      id: card.dataset.id,
      price: parseInt(card.querySelector("p.text-2xl").textContent.replace(/[^0-9]/g, "")),
      reviews: parseInt(card.querySelector("span.text-gray-500").textContent.replace(/[^0-9]/g, "")) || 0,
      name: card.querySelector("h3").textContent.trim()
    };
  }

  // Sorting logic
  sortSelect.addEventListener("change", function () {
    let sorted;

    if (this.value === "low-high") {
      sorted = products.sort((a, b) => getProductData(a).price - getProductData(b).price);
    } else if (this.value === "high-low") {
      sorted = products.sort((a, b) => getProductData(b).price - getProductData(a).price);
    } else if (this.value === "popular") {
      sorted = products.sort((a, b) => getProductData(b).reviews - getProductData(a).reviews);
    } else if (this.value === "newest") {
      sorted = products.sort(() => Math.random() - 0.5); // shuffle demo
    } else {
      sorted = products;
    }

    grid.innerHTML = "";
    sorted.forEach(p => grid.appendChild(p));
  });

  // Wishlist toggle
  grid.addEventListener("click", function (e) {
    if (e.target.closest("button")) {
      const icon = e.target.closest("button").querySelector("i");
      icon.classList.toggle("fas"); // solid heart
      icon.classList.toggle("far"); // outline heart
      e.target.closest("button").classList.toggle("bg-red-500");
      icon.classList.toggle("text-white");
      icon.classList.toggle("text-red-500");
    }
  });

  // Product click to details page
  const productCards = document.querySelectorAll('#productGrid > div');
  productCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      if (e.target.closest('button')) return; // Prevent navigation on heart click
      const id = getProductData(card).id;
      const url = `productdetails1.html?id=${id}`;
      window.location.href = url;
    });
  });

  // Re-attach click listeners after sorting (since sorting recreates the grid)
  sortSelect.addEventListener('change', function() {
    setTimeout(() => {
      const updatedCards = document.querySelectorAll('#productGrid > div');
      updatedCards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
          if (e.target.closest('button')) return;
          const id = getProductData(card).id;
          const url = `productdetails1.html?id=${id}`;
          window.location.href = url;
        });
      });
    }, 0);
  });

  // Load header content and initialize functionality
  // Load header HTML
  fetch('Mainheader.html')
      .then(response => response.text())
      .then(html => {
          document.getElementById('header-container').innerHTML = html;
          
          // Initialize all header functionality
          initializeHeader();
      })
      .catch(error => console.error('Error loading header:', error));

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
});