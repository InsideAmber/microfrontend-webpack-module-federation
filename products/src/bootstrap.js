import faker from "faker";


const mount = (el) => {
let products = "";

for (let i = 0; i < 5; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

el.innerHTML = products;
}

// Context: Situation 1:
// We are running this fle in development in isolation
// We are using our local index.html file
// Which definitely has a div with id of dev-products
// We want to immediately render the products list
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector("#dev-products");

    // Assuming that we are in development and the div exists and conatiner doesn't have a div with id of dev-products
    if (el) {
        // We are probably running this file in isolation
        mount(el);
    }
}


// Context: Situation 2:
// We are running this file in development or production
// Through the container app
// No guarantee that the container app has a div with id of dev-products
// We do not want to render anything in this case

export { mount };