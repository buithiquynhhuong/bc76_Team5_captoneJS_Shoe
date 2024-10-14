document.addEventListener("DOMContentLoaded", function () {
  // Get the product ID from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  // Check if the product ID exists
  if (productId) {
    // Fetch product details using the product ID
    fetch(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${productId}`)
      .then((response) => response.json())
      .then((data) => {
        // Check if product data is valid
        if (data.content) {
          displayProductDetails(data.content);
        } else {
          console.error("Product not found");
        }
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  } else {
    console.error("No product ID found in the URL");
  }

  // Function to display product details
  function displayProductDetails(product) {
    // Set product image
    document.querySelector(".product-image").src = product.image;

    // Set product name
    document.querySelector(".product-right h1").textContent = product.name;

    // Set product description
    document.querySelector(".description").textContent = product.description;

    // Set product price
    document.querySelector(
      ".price"
    ).textContent = `$ ${product.price.toLocaleString()}`;

    // Set product quantity (corrected this line)
    document.querySelector(
      ".quantity"
    ).textContent = `Available quantity: ${product.quantity.toLocaleString()}`;

    // Populate available sizes in the dropdown
    const sizeSelect = document.getElementById("sizes");
    if (Array.isArray(product.size)) {
      product.size.forEach((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
      });
    } else {
      console.error("Product sizes are not available.");
    }
  }
});
