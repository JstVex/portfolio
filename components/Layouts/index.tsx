import Footer from "../Footer";

interface MainProps {
    children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
    return (
        <>
            <main className="flex justify-center px-4 pb-24 pt-8 sm:px-6 sm:pb-28 sm:pt-28">
                <div className="w-full max-w-main grow">
                    {children}
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default Main;