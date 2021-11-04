import { Component } from "react";
import Layout from "../../container/components/layouts/Layout";

class DetailProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <Layout>
                <h2>Đây là thông tin của sản phẩm số 1 </h2>
            </Layout>
        )
    }
}

export default DetailProduct;