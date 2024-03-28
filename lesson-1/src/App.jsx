import Header from "@cm/header";
import Footer from "@cm/footer";
import image1 from "@img/images.png"
import Button from "@ui/button";

function App() {
    return (
        <>
            <Header />
            <main>
                <section id="main">
                    <div className="container">
                        <h1 className="bg-red-500 p-5">Home page</h1>
                        <img src={image1} alt="smth" />
                         <Button/>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default App;
