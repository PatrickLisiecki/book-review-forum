import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/App.css";

function App() {
    return (
        <main className="w-full min-h-screen font-noto grid bg-gray-900">
            <Navbar />
            <section className="pt-20">
                <BookList />
            </section>
            <Footer />
        </main>
    );
}

export default App;
