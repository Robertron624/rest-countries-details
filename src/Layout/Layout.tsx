import Header from "./Header";

const Layout = ({ children }: { children: JSX.Element[] | JSX.Element}) => {
    return (
        // Layout is a wrapper component that will be used to wrap all the pages and add the header to all of them.
        <>
            <Header />
            <main className="mx-auto">{children}</main>
        </>
    );
};

export default Layout;
