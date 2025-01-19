class Product {
  // title = 'DEFAULT';
  // imageUrl;
  // decription;
  // price;

  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.decription = desc;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class ="product-item__content">
         <h2>${this.product.title}</h2>
         <h3>${this.product.price}</h3>
         <p>${this.product.descripton}</p>
         <button>Add to Cart </button>
        </div>
      </div>
      `;
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://www.fbf-bedandmore.de/out/pictures/master/product/1/139_graubraun.jpg',
      'A soft pillow!',
      53.56
    ),
    new Product(
      'A Carpet',
      'https://m.media-amazon.com/images/I/91jubmmoJZL.jpg',
      'carpet',
      24.99
    ),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
        const productItem= new ProductItem(prod);
        const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
