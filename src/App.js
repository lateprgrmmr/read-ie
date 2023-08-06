// import './imgs/Sabrina-Pasterski.jpg' from './imgs';
import Sabrina_Pasterski from "./imgs/Sabrina_Pasterski.jpg";
import { News } from "./components/newComponent";
import FooterBar from "./components/footer";
import "./News.css";

function Profile() {
  return (
    <div>
      <h1 className="article">Amazing Scientists</h1>
      <img src={Sabrina_Pasterski} alt="Scientist" />
    </div>
  );
}

export default function Gallery() {
  return (
    <div style={{ minHeight: "100vh", margin: "0" }}>
      <News />
      <section className="article">
        <Profile />
      </section>
      <FooterBar />
    </div>
  );
}
