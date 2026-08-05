async function loadProducts() {
    const response = await fetch('products.json');
    const categories = await response.json();

    const catalog = document.getElementById('catalog');

    categories.forEach(category => {

        // Create category section
        const section = document.createElement('section');
        section.className = 'category-section';
        section.id = category.slug;

        // Category title
        const title = document.createElement('h2');
        title.className = 'category-title';
        title.textContent = category.category;

        section.appendChild(title);

        // Product grid
        const grid = document.createElement('div');
        grid.className = 'product-grid';

        category.products.forEach(product => {

            const card = document.createElement('div');
            card.className = 'product-card';

            card.innerHTML = `
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="product-image"
                >

                <h3>${product.name}</h3>

                <p class="description">
                    ${product.description}
                </p>

                <p class="price">
                    $${product.price}
                </p>

               <a
                    href="${product.paymentLink}"
                    class="button"
                    target="_blank">
                    Order Now
                </a>
            `;

            grid.appendChild(card);

        });

        section.appendChild(grid);

        catalog.appendChild(section);

    });
}

loadProducts();
