import React, { Component } from "react";
import Layout from "../../container/components/layouts/Layout";
import Link from "next/link";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <Layout>
                <h2>Đây là trang sản phẩm</h2>
                <Link href={`/products/${1}`} passHref>
                    <h4>Sản phảm số 1</h4>
                </Link>
            </Layout>
        )
    }
}

export default Products;