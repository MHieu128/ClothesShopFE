import { Row, Col} from 'antd'
import products from '../fakedata/products'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map(
                (product) => (
                    <Col key={product._id} sm={{span:12}} md={{span:6}} lg={{span:4}} xl={{span:3}}>
                        <Product product={product} />
                    </Col>
                )
            )}
        </Row>
    </>
  )
}

export default HomeScreen