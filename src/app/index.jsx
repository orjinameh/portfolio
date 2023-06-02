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
import con1 from "../images/web/Capture.PNG"
import con2 from "../images/web/Capture2.PNG"
import con3 from "../images/web/Capture3.PNG"
import con4 from "../images/web/Capture4.PNG"
import con5 from "../images/web/Capture5.PNG"
import con6 from "../images/web/Capture6.jpg"
import con7 from "../images/web/Capture7.PNG"
import Modal from "../components/modal";
import CopyToClipboardField from "../components/copy-to-clipboard";
import { ContactUs } from "../components/contact-us";
import About from "../components/about";
function App() {
  // const graphics = [
  //   {
  //     image: image1,
  //     id: 1
  //   },
  //   {
  //     image: image2,
  //     id: 2
  //   },
  //   {
  //     image: image3,
  //     id: 3
  //   },
  //   {
  //     image: image4,
  //     id: 4
  //   },
  //   {
  //     image: image5,
  //     id: 5
  //   },
  //   {
  //     image: image6,
  //     id: 6
  //   },
  //   {
  //     image: image7,
  //     id: 7
  //   }
  // ];
  const web = [{
    image: con1,
    id: 1
  }, {
    image: con2,
    id: 2
  }, {
    image: con3,
    id: 3
  }, {
    image: con4,
    id: 4
  }, {
    image: con5,
    id: 5
  }, {
    image: con6,
    id: 6
  }, {
    image: con7,
    id: 7
  }]
  // const [isDisplay, setIsDisplay] = useState(true);
  const placeHolder= "web designs";
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
      <Navbar selectBar={selectBar} numberOfPortfolio={web.length} />
      <Intro handleClickContactMe={changeModalStateContactMe} handleClickDonation={changeModalStateDonation} />
      <About />
      <div className="text-center"><h3>My projects:</h3></div>
      {isModal ? createPortal(<Modal content={modalContent} handleClick={changeModalState} />, document.body) : ""}
      <Content carouselArray={web} />
      <Footer />
    </>
  );
}

export default App;
