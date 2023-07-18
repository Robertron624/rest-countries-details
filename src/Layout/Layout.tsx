import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element }) => {
    return (
        // Layout is a wrapper component that will be used to wrap all the pages and add the header to all of them.
        <div className="layout">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default Layout;
