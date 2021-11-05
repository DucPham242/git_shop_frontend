import React, { Component } from 'react';
import Layout from '../../container/components/layouts/Layout';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <Layout>
                <main id="maincontent" className="page-main">
                {/* <a id="contentarea" tabindex="-1"></a> */}
                <div className="page messages">
                    <div data-placeholder="messages"></div>
                    <div data-bind="scope: 'messages'">
                        <div aria-atomic="true" role="alert" data-bind="foreach: { data: cookieMessages, as: 'message' }" className="messages">
                            <div data-bind="attr: { className: 'message-' + message.type + ' ' + message.type + ' message', 'data-ui-id': 'message-' + message.type }">
                            <div data-bind="html: $parent.prepareMessageForHtml(message.text)"></div>
                            </div>
                        </div>
                        <div aria-atomic="true" role="alert" className="messages" data-bind="foreach: { data: messages().messages, as: 'message' }">
                            <div data-bind="attr: { className: 'message-' + message.type + ' ' + message.type + ' message', 'data-ui-id': 'message-' + message.type }">
                            <div data-bind="html: $parent.prepareMessageForHtml(message.text)"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column main">
                        <div className="page-title-wrapper">
                            <h1 className="page-title"><span className="base" data-ui-id="page-title-wrapper">Customer Login</span></h1>
                        </div>
                        <input name="form_key" type="hidden" value="J8NPvQr9dkDovhsT" /> 
                        <div id="authenticationPopup" data-bind="scope:'authenticationPopup', style: {display: 'none'}">
                        </div>
                        <div className="login-container">
                            <div className="block block-customer-login">
                            <div className="block-title"><strong id="block-customer-login-heading" role="heading" aria-level="2">Registered Customers</strong></div>
                            <div className="block-content" aria-labelledby="block-customer-login-heading">
                                <form className="form form-login" action="" method="post" id="login-form"><input name="form_key" type="hidden" value="J8NPvQr9dkDovhsT" /> 
                                    <fieldset className="fieldset login" data-hasrequired="* Required Fields">
                                        <div className="field note">If you have an account, sign in with your email address.</div>
                                        <div className="field email required">
                                            <label className="label" for="email"><span>Email</span></label> 
                                            <div className="control"><input name="login[username]" value autocomplete="off" id="email" type="email" className="input-text" title="Email" data-validate="{required:true, 'validate-email':true}" /></div>
                                        </div>
                                        <div className="field password required">
                                            <label for="pass" className="label"><span>Password</span></label> 
                                            <div className="control"><input name="login[password]" type="password" autocomplete="off" className="input-text" id="pass" title="Password" data-validate="{required:true}" /></div>
                                        </div>
                                        <div className="field choice" data-bind="scope: 'showPassword'">
                                        </div>
                                        <div className="actions-toolbar">
                                            <div className="primary"><button type="submit" className="action login primary" name="send" id="send2"><span>Login</span></button></div>
                                            <div className="secondary"><a className="action remind" href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/customer/account/forgotpassword/"><span>Forgot Your Password?</span></a></div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            </div>
                            <div className="block block-new-customer">
                            <div className="block-title"><strong id="block-new-customer-heading" role="heading" aria-level="2">New Customers</strong></div>
                            <div className="block-content" aria-labelledby="block-new-customer-heading">
                                <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p>
                                <div className="actions-toolbar">
                                    <div className="primary"><a href="http://magento2.magentech.com/themes/sm_marketnew/pub/spain/customer/account/create/" className="action create primary"><span>Register</span></a></div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
            </Layout>
        );
    }
}

export default Login;
