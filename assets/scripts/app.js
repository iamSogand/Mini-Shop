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

class ElementAttribute {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
        return this.rootElement;
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutPut.innerHTML = `<h2>Total: /$${this.totalAmount.toFixed(
      2
    )} </h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce(
      (preValue, curItem) => preValue + curItem.price,
      0
    );
    return sum;
  }

  constructor(renderHookId) {
    super(renderHookId);
  }

  addProduct(product) {
    const updatedItems = [...this.items];
    updatedItems.push(product);
    this.cartItems = updatedItems;
  }

  render() {
    const cartEl = this.createRootElement('section', 'cart');
    cartEl.innerHTML = `
    <h2>Total: /$${0} </h2>
    <button>Order Now!</button>
    `;
    this.totalOutPut = cartEl.querySelector('h2');
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCard() {
    App.addProductToCart(this.product);
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

    this.cart = new ShoppingCart('app');
    this.cart.render();
    const productList = new ProductList();
    const prodListEl = productList.render();

    renderHook.append(prodListEl);
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }
  static addProductToCart(product) {
    this.cart.addProduct(product);
  }
}
App.init();
