document.addEventListener('DOMContentLoaded', () => {
    const productArray = [
      { id: 'prod1', name: 'Product 1' },
      { id: 'prod2', name: 'Product 2' },
      { id: 'prod3', name: 'Product 3' }
    ];
  
    // Populate product select
    const productSelect = document.getElementById('product-name');
    productArray.forEach(product => {
      const option = document.createElement('option');
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  
    // Generate rating options (1-5 stars)
    const ratingDiv = document.getElementById('rating');
    for (let i = 1; i <= 5; i++) {
      const input = document.createElement('input');
      input.type = 'radio';
      input.id = `rating-${i}`;
      input.name = 'rating';
      input.value = i;
      input.required = true;
  
      const label = document.createElement('label');
      label.setAttribute('for', `rating-${i}`);
      label.innerHTML = '☆';
  
      ratingDiv.appendChild(input);
      ratingDiv.appendChild(label);
    }
  
    // Generate features checkboxes
    const features = ['Feature 1', 'Feature 2', 'Feature 3'];
    const featuresDiv = document.getElementById('features');
    features.forEach((feature, index) => {
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.id = `feature-${index + 1}`;
      input.name = 'features';
      input.value = feature;
  
      const label = document.createElement('label');
      label.setAttribute('for', `feature-${index + 1}`);
      label.textContent = feature;
  
      featuresDiv.appendChild(input);
      featuresDiv.appendChild(label);
    });
  });
  
  // Increment review counter on form submission and save to localStorage
  const form = document.getElementById('product-review-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let reviewCount = localStorage.getItem('reviewCount') || 0;
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
  
    // Redirect to the confirmation page
    window.location.href = 'review.html';
  });
  