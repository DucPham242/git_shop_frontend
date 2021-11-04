import Head from 'next/head';

import NavBar from './NavBar';
import { Container } from 'react-bootstrap';
import Footer from './footer';
const Layout = ({ children }) => {
    return (
        // <div>
        //     aaaaaa
        //     <main>{children}</main> 
        // </div>
        <Container>
            <Head>
                <title>Shoping Project</title>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </Container>
    )
}

export default Layout;