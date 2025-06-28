import Navbar from "./component/Navbar";
import Introduction from "./component/Introduction";
import PortfolioCards from "./component/PortfolioCards";
import Skills from "./component/Skills";
import MoreInfo from "./component/MoreInfo";
import MyJourney from "./component/MyJourney";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Introduction />
        <PortfolioCards />
        <MoreInfo/>
        <Skills />
        <MyJourney/>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
