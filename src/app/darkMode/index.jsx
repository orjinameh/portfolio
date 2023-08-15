import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { createPortal } from "react-dom";
import "./index.css"
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer";
import Intro from "../../components/intro";
import Content from "../../components/contents";
import Modal from "../../components/modal";
// import CopyToClipboardField from "../../components/copy-to-clipboard";
import { ContactUs } from "../../components/contact-us";
import About from "../../components/about";
function App() {
  const placeHolder = "web designs";
  const [modalContent, setModalContent] = useState("");
  const [isModal, setIsModal] = useState(false);
  const ref = useRef();
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
        {/* <h4>Account number: <CopyToClipboardField textToBeCopied={opayAcc} /> </h4> */}
        <h4>Account Name: stephen peter e.</h4>
        <h2>Guaranteed trust bank: </h2>
        {/* <h4>Account number:  <CopyToClipboardField textToBeCopied={gtAcc} /> </h4> */}
        <h4>Account Name: stephen peter e.</h4>
      </div>
    );
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d6ho5fl', 'template_fk4sbos', form.current, 'fP_wcR28LvZT36dGE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
    useEffect(()=>{
      const observerY = new IntersectionObserver((enteries)=>{
        enteries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show-y')
          }
        })
      })
      const observerX = new IntersectionObserver((enteries)=>{
        enteries.forEach((entry)=>{
          if(entry.isIntersecting){
            entry.target.classList.add('show-x')
          }
        })
      })
      const hiddenElementsY = window.document.querySelectorAll('.hidden')
      const hiddenElementsX = ref.current.querySelectorAll('.hidden-x')
      hiddenElementsY.forEach((el)=>observerY.observe(el))
      hiddenElementsX.forEach((el)=>observerX.observe(el))
    })
  return (
    <div className="app-div" ref={ref}>
      <Navbar />
      <Intro />
      <About />
      <h2 className="mp hidden">Projects</h2>
      <Content />
      {isModal ? createPortal(<Modal content={modalContent} handleClick={changeModalState} />, document.body) : ""}
      <h1 className="bold hidden"><span className="span">Contact us!</span>&#x1f44d;&#x1f3fd;</h1>
      <p className="thick">I appreciate your visit! presently, I'm actively
        seeking to join a fresh group of innovative developers. If you believe
        our compatibility is promising, please feel free to reach out to me via
        phone <span>call</span> or <span onClick={changeModalStateContactMe}>email</span>.
      </p>
      <form className='form-d' ref={form} onSubmit={sendEmail}>
        <input placeholder='Your name' required type="text" name="user_name" />
        <input placeholder='Your email' required  type="email" name="user_email" />
        <textarea placeholder='Enter message' required name="message" />
        <button type="submit" className='submit-button-d'>Get in Touch</button>
      </form>
      <Footer />
    </div>
  );
}

export default App;
