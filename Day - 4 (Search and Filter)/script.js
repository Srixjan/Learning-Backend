const products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Phone", category: "Electronics", price: 20000 },
    { name: "Chair", category: "Furniture", price: 5000 },
    { name: "Table", category: "Furniture", price: 10000 },
    { name: "Headphones", category: "Electronics", price: 3000 }
];

function filterProducts(products, options = {}) {
    const {category, minPrice, maxPrice, search} = options;

    return products.filter(product => {
        const matchesCategory = !category || product.category === category;
        const matchesMinPrice = minPrice === undefined || product.price >= minPrice;
        const matchesMaxPrice = maxPrice === undefined || product.price <= maxPrice;
        const matchesSearch = !search || product.name.toLowerCase().includes(
            search.toLowerCase()
        )
        
        return (
            matchesCategory &&
            matchesMinPrice &&
            matchesMaxPrice &&
            matchesSearch
        )
    })
}

const testing = filterProducts(products, {
    category: "Electronics",
    minPrice: 5000,
    maxPrice: 30000,
    search: "phone"
})

console.log(testing);