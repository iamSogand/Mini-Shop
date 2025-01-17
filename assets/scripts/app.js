const productList = {
  products: [
    {
      title: 'A Pillow',
      imageUrl:
        'https://m.media-amazon.com/images/I/71YAboIsyAL.jpg',
      price: 53.56,
      description: 'A soft pillow!',
    },
    {
      title: 'A Carpet',
      imageUrl: 'https://m.media-amazon.com/images/I/71FAXZVa3KL.jpg',
      price: 24.99,
      description: 'Persian Carpet',
    },
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.classList = 'product-list';
    for (const prod of this.products) {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
      <div>
        <img src="${prod.imageUrl}" alt="${prod.title}">
        <div>
         <h2>${prod.title}</h2>
         <h3>${prod.price}</h3>
         <p>${prod.description}</p>
         <button>Add to Cart </button>
        </div>
      </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  },
};

productList.render();
