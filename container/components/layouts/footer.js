import { Image } from 'react-bootstrap';
import React from 'react';

const Footer = () => {
    return (
        <footer class="page-footer">
        <div class="footer-style-17">
            <div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true">
                <div class="footer-top pt-desktop-75 pb-desktop-55 pt-mobile-40 pb-mobile-10">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="store-footer">
                                    <Image src="/img/logo-8.png" alt="Store Image" width="168" height="42" />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna
                                        aliqua ut enim ad minim veniam.</p>
                                </div>

                                <div class="footer-phone">
                                    <a href="#">+7 (098) 508-88-66</a>
                                </div>

                                <ul class="footer-contact">
                                    <li>561 Wellington Road, Street 32, San Francisco</li>
                                    <li>Magentech@gmail.com</li>
                                    <li>Monday - Saturday: 8:00 - 21:00 Sunday: CLOSED</li>
                                </ul>
                            </div>

                            <div class="col-lg-4">
                                <div class="footer-block">
                                    <div class="footer-block-title">SIGN UP FOR NEWSLETTER</div>

                                    <div class="footer-block-content">
                                        <div class="block-subscribe-footer">
                                            <form class="form subscribe" novalidate
                                                action="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/newsletter/subscriber/new/"
                                                method="post"
                                                id="newsletter-footer-validate-detail">
                                                <div class="newsletter-content">
                                                    <div class="input-box"><input name="email" type="email"
                                                            id="newsletter-footer"
                                                            onfocus="if(this.value=='Your email address') this.value='';"
                                                            onblur="if(this.value=='') this.value='Your email address';"
                                                            value="Your email address"
                                                            data-validate="{required:true, 'validate-email':true}" />
                                                    </div>
                                                    <div class="action-button"><button
                                                            class="action subscribe primary" title="Subscribe"
                                                            type="submit"><span>Subscribe</span></button></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div class="footer-block social-footer">
                                    <div class="footer-block-title">FOLLOW US</div>

                                    <div class="footer-block-content">
                                        <div data-content-type="html" data-appearance="default" data-element="main"
                                            data-decoded="true">
                                            <div class="social-block-list">
                                                <ul>
                                                    <li class="fb"><a href="#"> <span class="icon-facebook1"><span
                                                                    class="hidden">Facebook</span></span> </a></li>
                                                    <li class="tw"><a href="#"> <span class="icon-twitter1"><span
                                                                    class="hidden">Twitter</span></span> </a></li>
                                                    <li class="pi"><a href="#"> <span class="icon-pinterest"><span
                                                                    class="hidden">Pinterest</span></span> </a></li>
                                                    <li class="vi"><a href="#"> <span class="icon-vimeo"><span
                                                                    class="hidden">Vimeo</span></span> </a></li>
                                                    <li class="yo"><a href="#"> <span class="icon-youtube"><span
                                                                    class="hidden">Youtube</span></span> </a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="footer-block">
                                    <div class="footer-block-title">PAYMENT METHODS</div>

                                    <div class="footer-block-content">
                                        <Image src="/img/payment-4.png" alt="Payment Image" width="371" height="51" />
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="footer-block block-map">
                                    <div class="footer-block-title">FIND US WITH GOOGLE MAP</div>

                                    <div class="footer-block-content">
                                        <div class="map">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8352535722393!2d144.95373531573256!3d-37.8173276797518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1svi!2s!4v1558405327045!5m2!1svi!2s"
                                                width="600" height="450" frameborder="0" style={{ border: '0' }}
                                                allowfullscreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="ft-bottom-content">
                        <div class="footer-links-bottom">
                            <div data-content-type="html" data-appearance="default" data-element="main"
                                data-decoded="true">
                                <ul>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Customer Services</a></li>
                                    <li><a href="#">FAQs</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Information</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-copyright">
                            <address>Market © 2021 copyright. Designed by
                                <a title="MagenTech.Com" target="_blank"
                                    href="http://www.MagenTech.Com">MagenTech.Com</a>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer