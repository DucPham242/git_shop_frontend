import Head from 'next/head';
import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import Footer from './footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        // <div>
        //     aaaaaa
        //     <main>{children}</main> 
        // </div>
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="title" content="SM Market | Tools Store Magento Theme - MagenTech" />
                <meta name="description"
                    content="Market is a Premium Responsive Magento Theme which is fully customizable and suitable for online stores, especially for tools store. Built by MagenTech." />
                <meta name="keywords"
                    content="Magento 2 Template, Fashion magento Template, technology magento template, furniture magento template, diamond magento template, marketplace magento 2, best magento 2 theme, best ecommerce template, magentech magento 2" />
                <meta name="robots" content="INDEX,FOLLOW" />
                <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta name="format-detection" content="telephone=no" />
                <meta content="IE=edge" />
                <title>SM Market | Tools Store Magento Theme - MagenTech</title>
                <link rel="icon" type="image/x-icon"
                    href="http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/Magento_Theme/favicon.ico" />
                <link rel="shortcut icon" type="image/x-icon"
                    href="http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/Magento_Theme/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;