import { cn } from "@/lib/utils";
import Footer from "../Footer";

interface MainProps {
    children: React.ReactNode;
    className?: string
}

const Main: React.FC<MainProps> = ({ children, className }) => {
    return (
        <>
            <main className={cn("flex justify-center px-4 pb-24 pt-8 sm:px-6 sm:pb-28 sm:pt-28", className)}>
                <div className="w-full max-w-main grow">
                    {children}
                    <Footer />
                </div>
            </main>
        </>
    );
}

export default Main;