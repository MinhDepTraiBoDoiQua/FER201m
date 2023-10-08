import { useParams } from 'react-router-dom';

const Product = ({ id, name, price, image }) => (
    <div className="product-item">
        <div className="product-item-id">{id}</div>
        <div className="product-item-name">{name}</div>
        <div className="product-item-price">{price}</div>
        <div className="product-item-img">{image}</div>
    </div>
);

const ProductList = ({ data = [] }) => (
    <div className="container">
        {data.map(({ id, name, price, image }) => (
            <Product id={id} name={name} price={price} image={image} key={id} />
        ))}
    </div>
);

const ProductListByCateID = ({ data = [] }) => {
    const { cateId } = useParams();
    const filteredProducts = data.filter(product => product.cateId === cateId);
    return <ProductList data={filteredProducts} />;
};

export { ProductListByCateID };
