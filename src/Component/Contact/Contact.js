import React from 'react'
import "./Contact.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <>
    <Header/>

    <div className="contact-form">
      <h1>Contact Us</h1>
      <form id="ok">
        <label for="Name"></label>
        <input type="text" placeholder="Name" id="ok_1"/>
      <br/>
      <br/>
        <label for="email"></label>
        <input type="email" placeholder="E-mail" id="ok_2" />
        <br/>
        <br/>
        <label for="Phone"></label>
        <input type="number" placeholder="Phone" id="ok_3" />
        <br/>
        <br/>
            <label for="textarea" id="messages"></label>
            <textarea maxlength="1000"
              placeholder="Messages" id="ok_4"></textarea>
          </form>
          <br/>
          <button type="button" id="btn_1">Send</button>
          </div>
          <Footer/>
        </>
        )
}
      export default Contact