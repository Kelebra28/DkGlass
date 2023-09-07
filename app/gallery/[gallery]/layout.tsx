import RandomImages from "../../components/RandomBack";
import Footer from "../../components/Footer";

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>        
        <div className="max-h-fit">
            <RandomImages />
            {children}
            <Footer />
        </div>
        </>
    )
}
