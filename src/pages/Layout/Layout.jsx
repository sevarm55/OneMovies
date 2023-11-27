import { Outlet } from "react-router";
import Header from "../../components/HeaderGlob/Header/Header";
import Footer from "../../components/FooterGlob/Footer/Footer";
import { useEffect, useState } from "react";

import s from "./Layout.module.css";

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return (
            <div className={s.isLoading}>
                <h1>
                    One<span>Movies</span>
                </h1>
                <div className={s.ldsEllipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
