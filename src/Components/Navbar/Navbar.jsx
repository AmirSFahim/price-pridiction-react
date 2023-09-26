import Link from "../Link/Link";

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '/*' }, // Catch-all route for 404 or unknown paths
      ];

    return (
        <nav>

            <ul className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>
                    
                    )
            }
            </ul>

        </nav>
    );
};

export default Navbar;