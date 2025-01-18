class product {
  title = 'DEFAULT';
  imageUrl;
  decription;
  price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.decription = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new product(
      'A Pillow',
      'https://www.fbf-bedandmore.de/out/pictures/master/product/1/139_graubraun.jpg',
      'A soft pillow!',
      53.56
    ),
    new product(
      'A Carpet',
      'https://m.media-amazon.com/images/I/91jubmmoJZL.jpg',
      'carpet',
      24.99
    )
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
