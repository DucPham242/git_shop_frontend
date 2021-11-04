import { Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link href='/' passHref>
                <Navbar.Brand>My store</Navbar.Brand>
            </Link>
            <Nav>
                <Link href='/products' passHref>
                    <Nav.Link>Sản phẩm</Nav.Link>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default NavBar;