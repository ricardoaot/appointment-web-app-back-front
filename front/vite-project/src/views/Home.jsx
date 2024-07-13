import Navbar from "../components/Navbar"
import ImageSlider from '../components/ImageSlider';
function Home(){
    return (
        <>
            <div className="min-h-screen bg-gray-950 text-white">
                <div className="pt-8">
                    <h1 className="text-4xl font-bold text-center">Welcome to our dance school</h1>
                    <p className="mt-4 text-lg text-center">
                        Explore our classes and book a place right now. ¡Let's dance!
                    </p>
                </div>
                <div className="">
                    <main className="container mx-auto px-4 py-8">
                        <ImageSlider />
                        
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home