import React, { Component } from "react";
import Layout from "../../container/components/layouts/Layout";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <Layout>
                <h2>Đây là trang về chúng tôi</h2>
            </Layout>
        )
    }
}

export default About;