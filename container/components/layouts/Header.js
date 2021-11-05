import { Nav, Navbar, Image } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
    return (
        // <Navbar bg="dark" variant="dark">
        //     <Link href='/' passHref>
        //         <Navbar.Brand>My store</Navbar.Brand>
        //     </Link>
        //     <Nav>
        //         <Link href='/products' passHref>
        //             <Nav.Link>Sản phẩm</Nav.Link>
        //         </Link>
        //     </Nav>
        // </Navbar>
        <header className="page-header">
        <div className="header-container header-style-25">
            <div className="header-top">
                <div className="container">
                    <div className="hd-top-content">
                        <div className="logo-container">
                            <h1 className="logo-content"> <strong> Market - All-in-One eCommerce Magento Theme</strong>
                                <a className="logo" href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/"
                                    title="Market - All-in-One eCommerce Magento Theme"><Image src="/img/logo.png"
                                        title="Market&#x20;-&#x20;All-in-One&#x20;eCommerce&#x20;Magento&#x20;Theme"
                                        alt="Market&#x20;-&#x20;All-in-One&#x20;eCommerce&#x20;Magento&#x20;Theme"
                                        width="168" height="42" /></a> </h1>
                        </div>
                        <div className="r-container">
                            <div className="language-currency">
                                <div className="switcher language switcher-language" data-ui-id="language-switcher" id="switcher-language">
                                    <strong className="label switcher-label"><span>Language</span></strong>
                                    <div className="switcher-content">
                                        <div className="action-switcher" id="switcher-language-trigger">
                                            <div className="heading-switcher view-spain"
                                                style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_spain.svg')` }}>
                                                <span>Spain</span></div>
                                        </div>
                                        <div className="dropdown-switcher">
                                            <ul className="list-item">
                                                <li className="view-french switcher-option"><a href="#"><span
                                                    style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_default.svg')` }}>English</span></a>
                                                </li>
                                                <li className="view-french switcher-option"><a href="#"><span
                                                    style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_french.svg')` }}>French</span></a>
                                                </li>
                                                <li className="view-german switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_german.svg')` }}>German</span></a>
                                                </li>
                                                <li className="view-honduras switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_honduras.svg')` }}>Honduras</span></a>
                                                </li>
                                                <li className="view-india switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_india.svg')` }}>India</span></a>
                                                </li>
                                                <li className="view-argentina switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_argentina.svg')` }}>Argentina</span></a>
                                                </li>
                                                <li className="view-benin switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_benin.svg')` }}>Benin</span></a>
                                                </li>
                                                <li className="view-andorra switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_andorra.svg')` }}>Andorra</span></a>
                                                </li>
                                                <li className="view-bolivia switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_bolivia.svg')` }}>Bolivia</span></a>
                                                </li>
                                                <li className="view-somaliland switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_somaliland.svg')` }}>Somaliland</span></a>
                                                </li>
                                                <li className="view-iran switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_iran.svg')` }}>Iran</span></a>
                                                </li>
                                                <li className="view-armenia switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_armenia.svg')` }}>Armenia</span></a>
                                                </li>
                                                <li className="view-cameroon switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_cameroon.svg')` }}>Cameroon</span></a>
                                                </li>
                                                <li className="view-dominica switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_dominica.svg')` }}>Dominica</span></a>
                                                </li>
                                                <li className="view-venezuela switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_venezuela.svg')` }}>Venezuela</span></a>
                                                </li>
                                                <li className="view-thailand switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_thailand.svg')` }}>Thailand</span></a>
                                                </li>
                                                <li className="view-guatemala switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_guatemala.svg')` }}>Guatemala</span></a>
                                                </li>
                                                <li className="view-mauritius switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_mauritius.svg')` }}>Mauritius</span></a>
                                                </li>
                                                <li className="view-maldives switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_maldives.svg')` }}>Maldives</span></a>
                                                </li>
                                                <li className="view-colombia switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_colombia.svg')` }}>Colombia</span></a>
                                                </li>
                                                <li className="view-bahamas switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_bahamas.svg')` }}>Bahamas</span></a>
                                                </li>
                                                <li className="view-abkhazia switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_abkhazia.svg')` }}>Abkhazia</span></a>
                                                </li>
                                                <li className="view-lebanon switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_lebanon.svg')` }}>Lebanon</span></a>
                                                </li>
                                                <li className="view-swaziland switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_swaziland.svg')` }}>Swaziland</span></a>
                                                </li>
                                                <li className="view-mongolia switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_mongolia.svg')` }}>Mongolia</span></a>
                                                </li>
                                                <li className="view-nigeria switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_nigeria.svg')` }}>Nigeria</span></a>
                                                </li>
                                                <li className="view-romania switcher-option"><a href="#"><span
                                                            style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url('http://magento2.magentech.com/themes/sm_marketnew/pub/static/version1634972318/frontend/Sm/market/en_US/images/flags/flag_romania.svg')` }}>Romania</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="switcher currency switcher-currency" id="switcher-currency"><strong
                                        className="label switcher-label"><span>Currency</span></strong>
                                    <div className="switcher-content">
                                        <div className="action-switcher" id="switcher-currency-trigger">
                                            <div className="heading-switcher language-USD"><span>USD</span></div>
                                        </div>
                                        <div className="dropdown-switcher">
                                            <ul className="list-item">
                                                <li className="currency-EUR switcher-option"><a href="#">EUR
                                                        - Euro</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hd-r-customer">
                                <div className="phone-free">
                                    <div data-content-type="html" data-appearance="default" data-element="main"
                                        data-decoded="true">
                                        <p>Need Help? Call Us:</p>
                                        <a href="tel:+1 268268668">(+1) 268 268 668</a>
                                    </div>
                                </div>
                                <div className="header-block account-block"><a
                                        href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/customer/account/">My
                                        Account</a>
                                    <div className="header-dropdown">
                                        <div className="customer-links" data-move="customer-mobile">
                                            <ul className="header links">
                                                <li className="link authorization-link" data-label="or"><Link
                                                        href='/user/login'>Login</Link>
                                                </li>
                                                <li><Link href="/user/register"
                                                        id="idPpgfX5uf">Register</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="minicart-header" data-move="minicart-mobile">
                                    <div data-block="minicart" className="minicart-wrapper"><a className="action showcart"
                                            href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/checkout/cart/"
                                            data-bind="scope: 'minicart_content'"><span className="text">Shopping
                                                Cart</span> <span className="text-min-cart">My Cart</span> <span
                                                className="counter qty empty"
                                                data-bind="css: { empty: !!getCartParam('summary_count') == false }, blockLoader: isLoading">
                                                <span
                                                    className="counter-number">
                                                </span><span
                                                    className="counter-number">0</span><span
                                                    className="counter-label">
                                                </span><span
                                                    className="price-minicart">
                                                </span>
                                                <span
                                                    className="price-minicart">
                                                    <div className="subtotal">
                                                        <div className="amount price-container"><span
                                                                className="price-wrapper"><span
                                                                    className="price">$0.00</span></span></div>
                                                    </div>
                                                </span>
                                            </span></a>
                                        <div className="block block-minicart" data-role="dropdownDialog">
                                            <div id="minicart-content-wrapper"
                                                data-bind="scope: 'minicart_content'">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom ontop-element">
                <div className="container">
                    <div className="menu-search">
                        <div className="horizontal-block">
                            <div className="horizontal-menu">
                                <div className="horizontal-megamenu-block">
                                    <nav className="sm_megamenu_wrapper_horizontal_menu sambar"
                                        id="sm_megamenu_menu617954119edab" data-sam="15338457181635341329">
                                        <div className="sambar-inner">
                                            <div className="mega-content">
                                                <ul className="horizontal-type sm-megamenu-hover sm_megamenu_menu sm_megamenu_menu_black"
                                                    data-jsapi="on">
                                                    <li className="home-item other-toggle sm_megamenu_lv1 sm_megamenu_drop"><a className="sm_megamenu_head sm_megamenu_drop" href=""><span className="sm_megamenu_icon sm_megamenu_nodesc"><span className="sm_megamenu_title"></span></span></a></li>
                                                    <li
                                                        className="home-item-parent other-toggle  sm_megamenu_lv1 sm_megamenu_drop parent  ">
                                                        <a className="sm_megamenu_head sm_megamenu_drop sm_megamenu_haschild"
                                                            href="javascript:void(0)" id="sm_megamenu_50"> <span
                                                                className="sm_megamenu_icon sm_megamenu_nodesc"> <span
                                                                    className="sm_megamenu_title">Home</span>
                                                            </span></a>
                                                        <div
                                                            className="sm-megamenu-child sm_megamenu_dropdown_6columns ">
                                                            <div data-link
                                                                className="sm_megamenu_col_6 sm_megamenu_firstcolumn    home-item">
                                                                <div data-link className="sm_megamenu_col_6    ">
                                                                    <div className="sm_megamenu_head_item">
                                                                        <div className="sm_megamenu_title  ">
                                                                            <div className="sm_megamenu_content">
                                                                                <div data-content-type="html"
                                                                                    data-appearance="default"
                                                                                    data-element="main"
                                                                                    data-decoded="true">
                                                                                    <div className="mega-feature-content"
                                                                                        style={{ padding: '0px' }}>
                                                                                        <div
                                                                                            className="home-layout feature-column">
                                                                                            <h3
                                                                                                className="feature-title">
                                                                                                Layouts</h3>
                                                                                            <div className="row">
                                                                                                <div
                                                                                                    className="col-xl-3">
                                                                                                    <ul
                                                                                                        className="layout-prev">
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                1</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-hot">Hot</span>
                                                                                                            <span
                                                                                                                className="ft-label ft-featured">Featured</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-1.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li>
                                                                                                            <a href="#"
                                                                                                                data-sm-store="french"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                2</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-2.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="german"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                3</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-3.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="argentina"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                4</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-featured">Featured</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-4.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1" 
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="benin"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                5</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-hot">Hot</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-5.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="andorra"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                6</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-6.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="bolivia"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                7</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-featured">Featured</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-7.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="somaliland"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                8</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-hot">Hot</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-8.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>

                                                                                                <div
                                                                                                    className="col-xl-3">
                                                                                                    <ul
                                                                                                        className="layout-prev">
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="iran"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                9</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-featured">Featured</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-9.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="armenia"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                10</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-10.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="cameroon"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                11</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-hot">Hot</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-11.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="dominica"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                12</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-12.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="venezuela"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                13</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-13.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="thailand"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                14</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-hot">Hot</span>
                                                                                                            <span
                                                                                                                className="ft-label ft-featured">Featured</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-14.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="guatemala"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                15</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-15.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="mauritius"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                16</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-featured">Featured</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-16.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>

                                                                                                <div
                                                                                                    className="col-xl-3">
                                                                                                    <ul
                                                                                                        className="layout-prev">
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="maldives"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                17</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-17.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="colombia"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                18</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-18.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="bahamas"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                19</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-19.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="abkhazia"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                20</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-hot">Hot</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-20.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a data-sm-store="lebanon"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                21</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-21.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a data-sm-store="swaziland"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                22</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-22.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a data-sm-store="mongolia"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                23</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-23.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a data-sm-store="nigeria"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                24</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-new">New</span>
                                                                                                            <span
                                                                                                                className="ft-label ft-featured">Featured</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-24.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>

                                                                                                <div
                                                                                                    className="col-xl-3">
                                                                                                    <ul
                                                                                                        className="layout-prev">
                                                                                                        <li><a data-sm-store="spain"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                25</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-new">New</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-25.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a data-sm-store="romania"
                                                                                                                data-sm-link>Home
                                                                                                                Demo
                                                                                                                26</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-new">New</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-26.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="honduras"
                                                                                                                data-sm-link>Layout
                                                                                                                Boxed</a>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-boxed.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="india"
                                                                                                                data-sm-link>Right
                                                                                                                to
                                                                                                                Left</a>
                                                                                                            <span
                                                                                                                className="ft-label ft-featured">Featured</span>
                                                                                                            <span
                                                                                                                className="ft-label ft-hot">Hot</span>
                                                                                                            <div className="prev-layout"
                                                                                                                data-src-prev="http://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/layout-demo/layout-rtl.jpg">
                                                                                                                <Image src="/img/blank.png"
                                                                                                                    alt
                                                                                                                    width="1"
                                                                                                                    height="1"
                                                                                                                />
                                                                                                            </div>
                                                                                                        </li>

                                                                                                        <li
                                                                                                            className="note-item">
                                                                                                            <strong>Attention:</strong>
                                                                                                            All
                                                                                                            demos
                                                                                                            support
                                                                                                            RTL
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>

                                                                                        <div
                                                                                            className="other-layout feature-column">
                                                                                            <div className="row">
                                                                                                <div
                                                                                                    className="col-xl-3">
                                                                                                    <h3
                                                                                                        className="feature-title">
                                                                                                        Listing
                                                                                                        Layout</h3>
                                                                                                    <ul>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="listing-layout/without-sidebar.html">Without
                                                                                                                Sidebar</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="listing-layout/left-sidebar.html">Left
                                                                                                                Sidebar</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="listing-layout/right-sidebar.html">Right
                                                                                                                Sidebar</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="thailand"
                                                                                                                data-sm-link="listing-layout/left-right-sidebar.html">Left
                                                                                                                Right
                                                                                                                Sidebar</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="col-xl-3">
                                                                                                    <h3
                                                                                                        className="feature-title">
                                                                                                        Detail
                                                                                                        Layouts</h3>
                                                                                                    <ul>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="ipad-pro-9-7-inch-wifi-cellular-16gb.html">Detail
                                                                                                                -
                                                                                                                Full</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="acer-aspire-s24-all-in-one-pc.html">Detail
                                                                                                                -
                                                                                                                Left
                                                                                                                Sidebar</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="apple-iphone-plus-silicon-case.html">Detail
                                                                                                                -
                                                                                                                Right
                                                                                                                Sidebar</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="apple-iphone-plus-silicon-case.html">Thumb
                                                                                                                Horizontal</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="french"
                                                                                                                data-sm-link="apple-iphone-plus-silicon-case.html">Thumb
                                                                                                                Vertical</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="col-xl-3">
                                                                                                    <h3
                                                                                                        className="feature-title">
                                                                                                        Tab Types
                                                                                                    </h3>
                                                                                                    <ul>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="german"
                                                                                                                data-sm-link="ipad-pro-9-7-inch-wifi-cellular-16gb.html#tab-label-description">Vertical</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="apple-iphone-plus-silicon-case.html#tab-label-description">Horizontal</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="argentina"
                                                                                                                data-sm-link="apple-iphone-plus-silicon-case.html#tab-label-description">Accordion</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="col-xl-3">
                                                                                                    <h3
                                                                                                        className="feature-title">
                                                                                                        Product
                                                                                                        Types</h3>
                                                                                                    <ul>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="simple-product.html">Simple
                                                                                                                Product</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="configurable-product.html">Configurable</a><span
                                                                                                                className="ft-label ft-hot">Size
                                                                                                                Chart</span>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="grouped-product.html">Grouped
                                                                                                                Product</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="bundle-product.html">Bundle
                                                                                                                Product</a>
                                                                                                        </li>
                                                                                                        <li><a href="#"
                                                                                                                data-sm-store="default"
                                                                                                                data-sm-link="downloadable-product.html">Downloadable
                                                                                                                Product</a>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div><span className="btn-submobile"></span>
                                                    </li>
                                                    <li
                                                        className="features-item-parent other-toggle  sm_megamenu_lv1 sm_megamenu_drop parent  ">
                                                        <a className="sm_megamenu_head sm_megamenu_drop sm_megamenu_haschild"
                                                            href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/catalog/category/view/s/features/id/145/"
                                                            id="sm_megamenu_3"> <span
                                                                className="sm_megamenu_icon sm_megamenu_nodesc"> <span
                                                                    className="sm_megamenu_title">Features</span>
                                                            </span></a>
                                                        <div
                                                            className="sm-megamenu-child sm_megamenu_dropdown_6columns ">
                                                            <div data-link="http://magento2.magentech.com/themes/sm_marketnew/pub/spain"
                                                                className="sm_megamenu_col_6 sm_megamenu_firstcolumn    features-item">
                                                                <div data-link className="sm_megamenu_col_6    ">
                                                                    <div className="sm_megamenu_head_item">
                                                                        <div className="sm_megamenu_title  ">
                                                                            <div className="sm_megamenu_content">
                                                                                <div className="mega-feature-content"
                                                                                    style={{ padding: '0px' }}>
                                                                                    <div
                                                                                        className="feature-layout feature-column">
                                                                                        <ul>
                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-1">
                                                                                                    New Framework
                                                                                                    <span
                                                                                                        className="ft-label ft-hot">Hot</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-2">
                                                                                                    Listing Tabs
                                                                                                    <span
                                                                                                        className="ft-label ft-featured">Featured</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-3">
                                                                                                    Product Label
                                                                                                    <span
                                                                                                        className="ft-label ft-hot">Hot</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-4">
                                                                                                    Mobile Layout
                                                                                                    <span
                                                                                                        className="ft-label ft-new">New</span>
                                                                                                    <span
                                                                                                        className="ft-label ft-hot">Hot</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-5">
                                                                                                    Filter Product
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-6">
                                                                                                    Lazyload Image
                                                                                                    <span
                                                                                                        className="ft-label ft-featured">Featured</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-7">
                                                                                                    Megamenu
                                                                                                    <span
                                                                                                        className="ft-label ft-hot">Hot</span>
                                                                                                    <span
                                                                                                        className="ft-label ft-featured">Featured</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-8">
                                                                                                    Icomoon
                                                                                                    <span
                                                                                                        className="ft-label ft-new">New</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-9">
                                                                                                    Ajax Cart,
                                                                                                    Quickview
                                                                                                    <span
                                                                                                        className="ft-label ft-featured">Featured</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-10">
                                                                                                    Ajax Layered
                                                                                                    Navigation
                                                                                                    <span
                                                                                                        className="ft-label ft-hot">Hot</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-11">
                                                                                                    Google Font
                                                                                                    <span
                                                                                                        className="ft-label ft-featured">Featured</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-12">
                                                                                                    Attributes
                                                                                                    Search
                                                                                                    <span
                                                                                                        className="ft-label ft-hot">Hot</span>
                                                                                                    <span
                                                                                                        className="ft-label ft-new">New</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-13">
                                                                                                    Size Chart
                                                                                                    <span
                                                                                                        className="ft-label ft-new">New</span>
                                                                                                </div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-14">
                                                                                                    Categories</div>
                                                                                            </li>

                                                                                            <li>
                                                                                                <div
                                                                                                    className="ft-item ft-icon-15">
                                                                                                    Sticky Tabs /
                                                                                                    Add to Cart
                                                                                                    <span
                                                                                                        className="ft-label ft-hot">Hot</span>
                                                                                                </div>
                                                                                            </li>
                                                                                        </ul>
                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div><span className="btn-submobile"></span>
                                                    </li>
                                                    <li
                                                        className="other-toggle  sm_megamenu_lv1 sm_megamenu_drop parent  ">
                                                        <a className="sm_megamenu_head sm_megamenu_drop "
                                                            href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/under-price"
                                                            id="sm_megamenu_5"> <span
                                                                className="sm_megamenu_icon sm_megamenu_nodesc"> <span
                                                                    className="sm_megamenu_title">Under $100</span>
                                                            </span></a> </li>
                                                    <li
                                                        className="other-toggle  sm_megamenu_lv1 sm_megamenu_drop parent  ">
                                                        <a className="sm_megamenu_head sm_megamenu_drop "
                                                            href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/new-arrivals"
                                                            id="sm_megamenu_4"> <span className="icon_items"><Image
                                                                    src="/img/hot-icon.png" alt="icon items"
                                                                    width="1" height="1"/></span> <span
                                                                className="sm_megamenu_icon sm_megamenu_nodesc"> <span
                                                                    className="sm_megamenu_title">New Arrivals</span>
                                                            </span></a> </li>
                                                    <li
                                                        className="other-toggle  sm_megamenu_lv1 sm_megamenu_drop parent  ">
                                                        <a className="sm_megamenu_head sm_megamenu_drop "
                                                            href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/daily-deals"
                                                            id="sm_megamenu_6"> <span
                                                                className="sm_megamenu_icon sm_megamenu_nodesc"> <span
                                                                    className="sm_megamenu_title">Deals</span>
                                                            </span></a> </li>
                                                    <li
                                                        className="other-toggle  sm_megamenu_lv1 sm_megamenu_drop parent  ">
                                                        <a className="sm_megamenu_head sm_megamenu_drop "
                                                            href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/about-us"
                                                            id="sm_megamenu_7"> <span
                                                                className="sm_megamenu_icon sm_megamenu_nodesc"> <span
                                                                    className="sm_megamenu_title">About Us</span>
                                                            </span></a> </li>
                                                    <li
                                                        className="other-toggle  sm_megamenu_lv1 sm_megamenu_drop parent  ">
                                                        <a className="sm_megamenu_head sm_megamenu_drop "
                                                            href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/contact"
                                                            id="sm_megamenu_8"> <span
                                                                className="sm_megamenu_icon sm_megamenu_nodesc"> <span
                                                                    className="sm_megamenu_title">Contact Us</span>
                                                            </span></a> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="search-container">
                            <div id="sm_searchbox21288754501635382549" className="block block-search search-pro">
                                <div className="block block-content">
                                    <form className="form minisearch" id="searchbox_mini_form"
                                        action="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/catalogsearch/result/"
                                        method="get">
                                        <div className="field search">
                                            <div className="control"><select className="cat searchbox-cat" name="cat">
                                                    <option value>All Categories</option>
                                                    <option value="3">- - Electronics</option>
                                                    <option value="18">- - - - Televisions</option>
                                                    <option value="22">- - - - - - Top Selling TVs</option>
                                                    <option value="23">- - - - - - Full HD TVs</option>
                                                    <option value="24">- - - - - - Smart TVs</option>
                                                    <option value="25">- - - - - - Ultra HD TVs</option>
                                                    <option value="26">- - - - - - DTH Services</option>
                                                    <option value="19">- - - - Small Appliances</option>
                                                    <option value="27">- - - - - - Microwaves & OTG</option>
                                                    <option value="28">- - - - - - Air Purifiers</option>
                                                    <option value="29">- - - - - - Vacuum Cleaners</option>
                                                    <option value="30">- - - - - - Irons</option>
                                                    <option value="31">- - - - - - Landline Phones</option>
                                                    <option value="32">- - - - - - Home Security Systems</option>
                                                    <option value="33">- - - - - - Sewing Machines</option>
                                                    <option value="42">- - - - - - Air Conditioning</option>
                                                    <option value="20">- - - - Top Brands</option>
                                                    <option value="43">- - - - - - Panasonic</option>
                                                    <option value="44">- - - - - - Micromax</option>
                                                    <option value="45">- - - - - - Intex</option>
                                                    <option value="46">- - - - - - Samsung</option>
                                                    <option value="47">- - - - - - Karbonn</option>
                                                    <option value="21">- - - - Cameras & Accessories</option>
                                                    <option value="34">- - - - - - DSLRs</option>
                                                    <option value="35">- - - - - - Camera Lenses</option>
                                                    <option value="36">- - - - - - Action Cameras</option>
                                                    <option value="37">- - - - - - Binoculars and Telescopes
                                                    </option>
                                                    <option value="38">- - - - - - Digital Cameras</option>
                                                    <option value="39">- - - - - - Filters for MPTV</option>
                                                    <option value="40">- - - - - - Consumables</option>
                                                    <option value="41">- - - - - - Phantom Cameras</option>
                                                    <option value="4">- - Smartphones & Tablets</option>
                                                    <option value="99">- - - - Mobile Cases & Covers</option>
                                                    <option value="103">- - - - - - New Launches Covers</option>
                                                    <option value="104">- - - - - - Printed Back Covers</option>
                                                    <option value="105">- - - - - - Plain Back Covers</option>
                                                    <option value="106">- - - - - - Flip Covers</option>
                                                    <option value="107">- - - - - - Premium Covers</option>
                                                    <option value="100">- - - - Mobile Accessories</option>
                                                    <option value="108">- - - - - - Batteries</option>
                                                    <option value="109">- - - - - - Screen Guards</option>
                                                    <option value="110">- - - - - - Cables & Chargers</option>
                                                    <option value="111">- - - - - - Smartwatch Accessories</option>
                                                    <option value="112">- - - - - - Selfie Sticks</option>
                                                    <option value="113">- - - - - - Bluetooth Devices</option>
                                                    <option value="114">- - - - - - Mobile Holders</option>
                                                    <option value="115">- - - - - - Mobile Enhancements</option>
                                                    <option value="101">- - - - Tablets</option>
                                                    <option value="116">- - - - - - Tablet Accessories</option>
                                                    <option value="117">- - - - - - Tablet Covers</option>
                                                    <option value="118">- - - - - - Tablet Keyboards</option>
                                                    <option value="119">- - - - - - Stylus Pen</option>
                                                    <option value="120">- - - - - - Anti Radiation Chips</option>
                                                    <option value="102">- - - - Popular Smartphones</option>
                                                    <option value="121">- - - - - - Redmi Note 5 Pro</option>
                                                    <option value="122">- - - - - - Samsung Galaxy J6+</option>
                                                    <option value="123">- - - - - - Vivo V11 Pro</option>
                                                    <option value="124">- - - - - - Oppo F9 Pro</option>
                                                    <option value="125">- - - - - - Honor 9 Lite</option>
                                                    <option value="126">- - - - - - Vivo Y83 Pro</option>
                                                    <option value="127">- - - - - - Lenovo K8 Plus</option>
                                                    <option value="128">- - - - - - Samsung Galaxy J2</option>
                                                    <option value="5">- - Health & Beauty</option>
                                                    <option value="129">- - - - Bath & Body</option>
                                                    <option value="130">- - - - Shaving & Hair Removal</option>
                                                    <option value="131">- - - - Fragrances</option>
                                                    <option value="132">- - - - Salon & Spa Equipment</option>
                                                    <option value="193">- - - - Shop Skincare</option>
                                                    <option value="194">- - - - Shop Lips & Eyes</option>
                                                    <option value="195">- - - - Shop Perfume</option>
                                                    <option value="196">- - - - Shop Facecare</option>
                                                    <option value="197">- - - - Shop Brushes</option>
                                                    <option value="6">- - Toys & Hobbies</option>
                                                    <option value="141">- - - - Arts & Crafts</option>
                                                    <option value="142">- - - - Grown-Up Toys</option>
                                                    <option value="143">- - - - Puppets</option>
                                                    <option value="144">- - - - Baby & Toddler Toys</option>
                                                    <option value="7">- - Sports & Outdoors</option>
                                                    <option value="78">- - - - Sports</option>
                                                    <option value="81">- - - - - - Team Sports</option>
                                                    <option value="82">- - - - - - Golf</option>
                                                    <option value="83">- - - - - - Running</option>
                                                    <option value="84">- - - - - - Swimming</option>
                                                    <option value="79">- - - - Fitness</option>
                                                    <option value="85">- - - - - - Exercise & Fitness</option>
                                                    <option value="86">- - - - - - Yoga</option>
                                                    <option value="87">- - - - - - Sports Medicine</option>
                                                    <option value="88">- - - - - - Bodyweight</option>
                                                    <option value="89">- - - - - - Line Dancing</option>
                                                    <option value="80">- - - - Outdoor Recreation</option>
                                                    <option value="90">- - - - - - Outdoor Clothing</option>
                                                    <option value="91">- - - - - - Camping & Hiking</option>
                                                    <option value="92">- - - - - - Climbing</option>
                                                    <option value="93">- - - - - - Cycling</option>
                                                    <option value="94">- - - - - - Skateboards & Scooters</option>
                                                    <option value="95">- - - - - - Water Sports</option>
                                                    <option value="96">- - - - - - Winter Sports</option>
                                                    <option value="97">- - - - - - Performance Training</option>
                                                    <option value="98">- - - - - - Accessories</option>
                                                    <option value="198">- - - - Clothing</option>
                                                    <option value="199">- - - - Bag & Backpack</option>
                                                    <option value="200">- - - - Sport Shoes</option>
                                                    <option value="201">- - - - Gym Equipment</option>
                                                    <option value="202">- - - - Accessories</option>
                                                    <option value="203">- - - - Sport Bike</option>
                                                    <option value="204">- - - - Women Products</option>
                                                    <option value="205">- - - - Men Products</option>
                                                    <option value="8">- - Furniture</option>
                                                    <option value="151">- - - - Bathroom</option>
                                                    <option value="152">- - - - Mirror</option>
                                                    <option value="153">- - - - Sofa</option>
                                                    <option value="154">- - - - Shelves</option>
                                                    <option value="155">- - - - Chest</option>
                                                    <option value="156">- - - - Chair</option>
                                                    <option value="157">- - - - Bedroom</option>
                                                    <option value="158">- - - - Wardrobe</option>
                                                    <option value="159">- - - - Garden</option>
                                                    <option value="190">- - - - Arts, Crafts & Sewing</option>
                                                    <option value="9">- - Automotive & Motorcycle</option>
                                                    <option value="48">- - - - Motorcycle</option>
                                                    <option value="52">- - - - - - Diagnostic Tools</option>
                                                    <option value="53">- - - - - - Motorcycle Fairings</option>
                                                    <option value="54">- - - - - - Car GPS & Accessories</option>
                                                    <option value="55">- - - - - - Car DVRs</option>
                                                    <option value="56">- - - - - - Car Electronics</option>
                                                    <option value="57">- - - - - - Car Decals & Stickers</option>
                                                    <option value="58">- - - - - - Car Lighting</option>
                                                    <option value="59">- - - - - - Car Parts & Exterior Accessories
                                                    </option>
                                                    <option value="60">- - - - - - Motorcycle Helmets</option>
                                                    <option value="61">- - - - - - Motorcyle Lighting</option>
                                                    <option value="62">- - - - - - Motorcycle Accessories</option>
                                                    <option value="63">- - - - - - Car Interior Accessories</option>
                                                    <option value="49">- - - - Car Lights</option>
                                                    <option value="64">- - - - - - Car LED Light Bulbs</option>
                                                    <option value="65">- - - - - - HID Xenon Kits</option>
                                                    <option value="66">- - - - - - Car Decoration Lights</option>
                                                    <option value="67">- - - - - - Car Fog Lights</option>
                                                    <option value="68">- - - - - - Car Tail Lights</option>
                                                    <option value="50">- - - - Car Accessories</option>
                                                    <option value="69">- - - - - - Car Chargers & Adapters</option>
                                                    <option value="70">- - - - - - Car Decorations</option>
                                                    <option value="71">- - - - - - Car Thermometers</option>
                                                    <option value="51">- - - - Motorcycle Gadgets</option>
                                                    <option value="72">- - - - - - Motorcycle Gear</option>
                                                    <option value="73">- - - - - - Motorcycle Lights</option>
                                                    <option value="74">- - - - - - Motorcycle Decorations</option>
                                                    <option value="75">- - - - - - Motorcycle Parts & Accessories
                                                    </option>
                                                    <option value="76">- - - - - - Mirrors</option>
                                                    <option value="77">- - - - - - Other Gadgets</option>
                                                    <option value="10">- - Laptops & Accessories</option>
                                                    <option value="11">- - Jewelry & Watches</option>
                                                    <option value="137">- - - - Men Watches</option>
                                                    <option value="138">- - - - Wedding Rings</option>
                                                    <option value="139">- - - - Earrings</option>
                                                    <option value="140">- - - - Necklaces</option>
                                                    <option value="192">- - - - Jewelry</option>
                                                    <option value="12">- - Flashlights & Lamps</option>
                                                    <option value="13">- - Bags, Shoes & Accessories</option>
                                                    <option value="14">- - Cameras & Photo</option>
                                                    <option value="15">- - Holiday Supplies & Gifts</option>
                                                    <option value="133">- - - - Gift & Lifestyle Gadgets</option>
                                                    <option value="134">- - - - Gift for Man</option>
                                                    <option value="135">- - - - Gift for Woman</option>
                                                    <option value="136">- - - - Lighter & Cigar Supplies</option>
                                                    <option value="16">- - Apparel</option>
                                                    <option value="147">- - - - Men's Clothing</option>
                                                    <option value="148">- - - - Women's wear</option>
                                                    <option value="149">- - - - Accessories</option>
                                                    <option value="160">- - - - Women</option>
                                                    <option value="162">- - - - - - Clothing</option>
                                                    <option value="163">- - - - - - Shoes</option>
                                                    <option value="164">- - - - - - HandBags</option>
                                                    <option value="165">- - - - - - Sunglasses</option>
                                                    <option value="166">- - - - - - Accessories</option>
                                                    <option value="161">- - - - Men</option>
                                                    <option value="167">- - - - - - Clothing</option>
                                                    <option value="168">- - - - - - Shoes</option>
                                                    <option value="169">- - - - - - HandBags</option>
                                                    <option value="170">- - - - - - Sunglasses</option>
                                                    <option value="171">- - - - - - Accessories</option>
                                                    <option value="17">- - Video Games</option>
                                                    <option value="145">- - Features</option>
                                                    <option value="150">- - Product Types</option>
                                                    <option value="172">- - Listing Layout</option>
                                                    <option value="173">- - - - Without Sidebar</option>
                                                    <option value="174">- - - - Left Sidebar</option>
                                                    <option value="175">- - - - Right Sidebar</option>
                                                    <option value="176">- - - - Left Right Sidebar</option>
                                                    <option value="178">- - Sample Categories</option>
                                                    <option value="177">- - - - Men Women Clothing</option>
                                                    <option value="179">- - - - Kids</option>
                                                    <option value="180">- - - - - - Clothings</option>
                                                    <option value="181">- - - - - - Strollers</option>
                                                    <option value="182">- - - - - - Toys</option>
                                                    <option value="183">- - - - - - Newborns</option>
                                                    <option value="184">- - - - - - Baby Food</option>
                                                    <option value="185">- - - - - - Stuffed Animals</option>
                                                    <option value="186">- - - - - - Teethers</option>
                                                    <option value="187">- - - - - - Gyms & Playmats</option>
                                                    <option value="188">- - - - - - Interactive Toys</option>
                                                    <option value="189">- - - - - - Push Toys</option>
                                                    <option value="191">- - - - Food & Organic</option>
                                                    <option value="206">- - - - Auto</option>
                                                    <option value="207">- - - - - - Tires & Wheels</option>
                                                    <option value="208">- - - - - - Components</option>
                                                    <option value="209">- - - - - - Steering Wheel</option>
                                                    <option value="210">- - - - - - Sport Brake</option>
                                                    <option value="211">- - - - - - Smart Pump</option>
                                                    <option value="212">- - - - - - Lights & Lighting</option>
                                                    <option value="213">- - - - - - Oils & Fluids</option>
                                                    <option value="214">- - - - - - Baby Car Seats</option>
                                                    <option value="215">- - - - - - Sport Car seat</option>
                                                    <option value="216">- - - - - - Automotive Parts</option>
                                                    <option value="217">- - - - - - Smart Devices</option>
                                                    <option value="218">- - - - - - Audio Equipments</option>
                                                    <option value="239">- - - - - - Replacement Parts</option>
                                                    <option value="250">- - - - Power Tools</option>
                                                    <option value="259">- - - - - - Polisher</option>
                                                    <option value="260">- - - - - - Power Drills</option>
                                                    <option value="261">- - - - - - Nail Gun</option>
                                                    <option value="262">- - - - - - Grinder</option>
                                                    <option value="251">- - - - Lawn & Garden</option>
                                                    <option value="255">- - - - - - Wrenches</option>
                                                    <option value="256">- - - - - - Tool Sets</option>
                                                    <option value="257">- - - - - - Screwdivers</option>
                                                    <option value="258">- - - - - - Clamps & Vises</option>
                                                    <option value="252">- - - - Hand Tools</option>
                                                    <option value="263">- - - - - - Brush</option>
                                                    <option value="264">- - - - - - Caulking Gun</option>
                                                    <option value="265">- - - - - - Clamps</option>
                                                    <option value="266">- - - - - - Electric Planer</option>
                                                    <option value="253">- - - - Tools Storage</option>
                                                    <option value="267">- - - - - - Tool Cabinet</option>
                                                    <option value="268">- - - - - - Tool Case</option>
                                                    <option value="269">- - - - - - Tool Bag</option>
                                                    <option value="270">- - - - - - Tool Box</option>
                                                    <option value="254">- - - - Clean Tools</option>
                                                    <option value="271">- - - - - - Mops</option>
                                                    <option value="272">- - - - - - Brushes</option>
                                                    <option value="273">- - - - - - Skin Scrubber</option>
                                                    <option value="274">- - - - - - Accessories</option>
                                                    <option value="275">- - - - Industrial Valves</option>
                                                    <option value="276">- - - - - - Valve</option>
                                                    <option value="277">- - - - - - Ball Valve</option>
                                                    <option value="278">- - - - - - Gate Valve</option>
                                                    <option value="279">- - - - - - Solenoid Valve</option>
                                                    <option value="280">- - - - Organics</option>
                                                    <option value="281">- - - - - - Chocolate</option>
                                                    <option value="282">- - - - - - Fresh Fruit</option>
                                                    <option value="283">- - - - - - Meat & Protein</option>
                                                    <option value="284">- - - - - - Milk & Drink</option>
                                                    <option value="285">- - - - - - Fast Food</option>
                                                </select> <input id="searchbox" type="text" name="q"
                                                    placeholder="Enter keywords to search..."
                                                    className="input-text input-searchbox" maxLength="128"
                                                    role="combobox" aria-haspopup="false" aria-expanded="true"
                                                    aria-autocomplete="both" autoComplete="off" />
                                                <div id="searchbox_autocomplete" className="search-autocomplete"></div>
                                                <div className="nested"><a className="action advanced"
                                                        href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/catalogsearch/advanced/"
                                                        data-action="advanced-search">Advanced Search</a></div>
                                            </div>
                                        </div>
                                        <div className="actions"><button type="submit" title="Search"
                                                className="action search"><span>Search</span></button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}

export default Header;