document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("menu-open");
});
document.addEventListener("DOMContentLoaded", function () {
  // Gọi API
  fetch("https://shop.cyberlearn.vn/api/Product")
    .then((response) => response.json())
    .then((data) => {
      // Xử lý dữ liệu
      const products = data.content;
      const container = document.querySelector(".container_product .row");

      // Đổ dữ liệu ra ngoài .container_product .row
      products.forEach((product) => {
        const discountedPrice = product.price;
        const originalPrice = (product.price + 100).toFixed(2);
        const productHTML = `
                        <div class="col-12 col-md-4">
                            <div class="custom-card">
                                <div class="custom-card-img-container position-relative">
                                    <a href="./details.html?id=${product.id}">
                                        <img src="${product.image}" class="custom-card-img" alt="${product.name}">
                                    </a>
                                    <a href="#" class="add-to-cart position-absolute">
                                        <i class="fa fa-shopping-cart fs-4"></i>
                                    </a>
                                </div>
                                <div class="custom-card-body">
                                    <p class="custom-card-text">${product.name}</p>
                                    <p class="price_product">
                                        <span class="text-danger fw-bold">$${discountedPrice}</span>
                                        <del class="text-muted">$${originalPrice}</del>
                                    </p>
                                    <div class="custom-card-footer d-flex justify-content-between align-items-center">
                                        <div class="rating">
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                            <span class="fa fa-star checked"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        container.insertAdjacentHTML("beforeend", productHTML);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
