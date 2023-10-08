import { ProductListByCateID } from './components/Product';
import { CategoryList } from './components/Category';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
    // Call API -> return product list
    // Fake data:
    const products = [
        {
            id: 'P001',
            name: 'S23',
            price: 20,
            image: 'assest/image/1.png',
            cateId: 'C001',
        },
        {
            id: 'P002',
            name: 'S23 Ultra',
            price: 23,
            image: 'assest/image/1.png',
            cateId: 'C001',
        },
        {
            id: 'P003',
            name: 'Acer Nitro 5',
            price: 24,
            image: 'assest/image/1.png',
            cateId: 'C002',
        },
        {
            id: 'P004',
            name: 'Asus Tuf',
            price: 20,
            image: 'assest/image/1.png',
            cateId: 'C002',
        },
    ];

    // Fake category data: (id, name)
    const category = [
        {
            id: 'C001',
            name: 'Phone',
        },
        {
            id: 'C002',
            name: 'Laptop',
        },
    ];
    return (
        <Router>
            <div>
                <h1>Category List</h1>
                <CategoryList data={category} />
            </div>
            <div>
                <h1>Product List</h1>
                <Routes>
                    <Route
                        path="/category/:cateId"
                        element={<ProductListByCateID data={products} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
