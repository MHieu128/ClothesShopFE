import { Card } from "antd"

const { Meta } = Card;

const Product = ({ product }) => {
  return (
    //<Link to={`/product/${product._id}`}>
        <Card hoverable
            cover={
                <img alt={product._id} src={product.image} />
            }>
                <Meta title={product.name} />
        </Card>
    //</Link>
  )
}

Product.propTypes = Product;

export default Product