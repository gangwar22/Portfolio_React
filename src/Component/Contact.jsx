import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact" id='contact'>
      <div className="content">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptate, alias illo et laborum assumenda quaerat accusantium ducimus, voluptas maiores quidem esse nobis, est nam repellat? Perferendis magni incidunt quibusdam?</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon">
            <i className="fa-solid fa-address-card"></i>
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>4671 Sugar Camp Road, <br /> Owatonna , Minnesota,<br />55060</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <i className="fa-solid fa-phone"></i>
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91 7055648508</p> 
            </div>
          </div>
          <div className="box">
            <div className="icon">
            <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>rahulgangwar22@navgurukul.org</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <h2>Send Message</h2>
          <div className="inputBox">
            <input type="text" name='' required="required"/>
            <span>Full Name</span>
          </div>
          <div className="inputBox">
            <input type="text" name='' required="required"/>
            <span>Email</span>
          </div>
          <div className="inputBox">
            <textarea name="" id="" required="required"></textarea>
            <span>Type your Message.......</span>
          </div>
          <div className='inputBox'>
            <input type="submit" name='' value="send"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
