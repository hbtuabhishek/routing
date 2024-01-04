import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
    <>
    <Link to="/">Home/</Link>
    <Link to="about">About</Link>
    <Link to="contact">Contact</Link>
    <Outlet/>
    </>
    )

}
export default Layout;