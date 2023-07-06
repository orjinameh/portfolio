import React, { useState } from "react";
import { createPortal } from "react-dom";
import "./index.css"
import Navbar from "../components/navbar/index";
import Footer from "../components/footer";
import Intro from "../components/intro";
import Content from "../components/contents";
// import image1 from "../images/graphics/20220601_105822.jpg"
// import image2 from "../images/graphics/20220601_110410.jpg"
// import image3 from "../images/graphics/20220610_150725.jpg"
// import image4 from "../images/graphics/20220610_151318.jpg"
// import image5 from "../images/graphics/20220610_161450.jpg"
// import image6 from "../images/graphics/20221125_111007.jpg"
// import image7 from "../images/graphics/20221216_124131.jpg"
import Modal from "../components/modal";
import CopyToClipboardField from "../components/copy-to-clipboard";
import { ContactUs } from "../components/contact-us";
import About from "../components/about";
function App() {
  const placeHolder = "web designs";
  const [modalContent, setModalContent] = useState("");
  const [isModal, setIsModal] = useState(false);
  const changeModalState = () => {
    setIsModal(prev => !prev)
  }
  const changeModalStateDonation = () => {
    changeModalState();
    const opayAcc = "9127558997";
    const gtAcc = "0611578821";
    setModalContent(
      <div className="account-details">
        <h2>Opay:</h2>
        <h4>Account number: <CopyToClipboardField textToBeCopied={opayAcc} /> </h4>
        <h4>Account Name: stephen peter e.</h4>
        <h2>Guaranteed trust bank: </h2>
        <h4>Account number:  <CopyToClipboardField textToBeCopied={gtAcc} /> </h4>
        <h4>Account Name: stephen peter e.</h4>
      </div>
    );
  }
  const changeModalStateContactMe = () => {
    changeModalState();
    setModalContent(<ContactUs clear={setIsModal} />);
  }
  const selectBar =
    <>
      <div className="select-bar-container" >
        {placeHolder}
      </div>
    </>
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <h2 className="mp">Projects</h2>
      <Content />
      {isModal ? createPortal(<Modal content={modalContent} handleClick={changeModalState} />, document.body) : ""}
      <h1 className="bold"><span>Contact us!</span>&#x1f44d;&#x1f3fd;</h1>
      <p className="thick">I appreciate your visit! presently, I'm actively
        seeking to join a fresh group of innovative developers. If you believe
        our compatibility is promising, please feel free to reach out to me via
        phone <span>call</span> or <span onClick={changeModalStateContactMe}>email</span>.
      </p>
      <Footer />
    </>
  );
}

export default App;
