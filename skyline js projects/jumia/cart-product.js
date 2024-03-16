// saving the data
const products = [
  {
    image: "./images/cat2.png",
    name: "XIAOMI Redmi 12C 6.71 3GB RAM/64GB ROM Andriod 12- Graphite Grey",
    price: "74,000"
  }
]

// generating the html
let productHTML = '';

products.forEach((product) => {
  productHTML += `
  <div class="cart-img">
    <img src="${product.image}" alt="">
  </div>

  <div class="cart-content">
    <a id="store">Official Store</a>
    <a id="order">0000111177735 to Order</a>

    <h1>${product.name}
    </h1>

    <p id="ob">Brand: XIAOMI <span id="bod">Similar products from XIAOMI</span></p>

    <div class="cart-time">
      <div class="flash-head">
        <p><span><i class="fa-regular fa-star"></i></span>Flash sales</p>

        <div class="flash-countdown">
          <span>Time left:</span>
          <span class="day"></span>
          <span>d:</span>
          <span class="hour"></span>
          <span>h:</span>
          <span class="minute"></span>
          <span>m:</span>
          <span class="seconds"></span>
          <span>s</span>
        </div>

      
      </div>
      <div class="flash-price">
        <span id="np">&#8358 ${product.price}</span>
        <span id="op">&#8358 90,000</span>
        <span id="cent">-25%</span>
      </div>

      
    </div>
    <div class="add-to-cart">
      <a href="">
        <span><i class="fa-solid fa-cart-plus"></i></span>
        <button class="js-cart">ADD TO CART</button>
      </a>
    </div>
  </div>
  `
});

document.querySelector('.js-container').innerHTML = productHTML;

// making it interactive

document.querySelectorAll('.js-cart').forEach((button) => {
  button.addEventListener('click', () => {
    console.log('my boy')
  })
})