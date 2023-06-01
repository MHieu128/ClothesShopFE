import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const Product = ({ product }) => {
  let navigate = useNavigate();
  function productDetailNavigate(props, id) {
    console.log(id);
    navigate(`/product/${id}`);
  }
  return (
    //<Link to={`/product/${product._id}`}>
        <Card hoverable
            cover={
                <img alt={product._id} src={product.image} />
            }
            onClick={(event) => productDetailNavigate(event, product._id)}
            >
                <Meta title={product.name} />
        </Card>
    //</Link>
  )
}

Product.propTypes = Product;

export default Product