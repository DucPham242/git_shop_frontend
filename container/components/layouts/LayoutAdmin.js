import Head from 'next/head';
import Link from 'next/link';
import NavBar from './NavBar';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Footer from './footer';
const Layout = ({ children }) => {
    return (
        // <div>
        //     aaaaaa
        //     <main>{children}</main> 
        // </div>
        <Container>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Shoping</title>
            </Head>
            <Navbar bg="dark" variant="dark">
                <Link href='/admin' passHref>
                    <Navbar.Brand>My store</Navbar.Brand>
                </Link>
                <Nav>
                    <Link href='/admin/products' passHref>
                        <Nav.Link>Sản phẩm</Nav.Link>
                    </Link>
                    <Link href='/about' passHref>
                        <Nav.Link>About</Nav.Link>
                    </Link>
                </Nav>
            </Navbar>
            <main>{children}</main>
            <Footer />
        </Container>
    )
}

export default Layout;