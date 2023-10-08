import { Link } from 'react-router-dom';

const Category = ({ id, name }) => (
    <div className="cate-item">
        <div className="cate-item-id">{id}</div>
        <div className="cate-item-name">
            <Link to={`/category/${id}`} key={id}>
                {name}
            </Link>
        </div>
    </div>
);

const CategoryList = ({ data = [] }) => (
    <div className="cate-container">
        {data.map(({ id, name }) => (
            <Category id={id} name={name} key={id} />
        ))}
    </div>
);

export { CategoryList };
