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

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
    <h2>Total: /$${0} </h2>
    <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    return cartEl;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCard() {
    console.log('Adding product to card...');
    console.log(this.product);
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
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click', this.addToCard.bind(this));
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
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    return prodList;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById('app');

    const cart = new ShoppingCart();
    const cartEl = cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(cartEl);
    renderHook.append(prodListEl);
  }
}

const shop = new Shop();
shop.render();
