import Navbar from "./component/Navbar";
import Introduction from "./component/Introduction";
import Carousel from "./component/Carousel";
import Skills from "./component/Skills";
import MoreInfo from "./component/MoreInfo";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Introduction />
        <Carousel />
        <Skills />
        <MoreInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
