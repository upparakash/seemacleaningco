import React from "react";
import "./BookNow.css";

const BookNow = () => {
  return (
    <section id="book" className="book-section">
      {/* Title */}
      <h2 className="book-title">Book Now / احجز الآن</h2>
      <p className="book-subtitle">
        Reach out for service booking or inquiries. We are here to help!  
        / تواصل معنا لحجز الخدمة أو للاستفسارات. نحن هنا لمساعدتك!
      </p>

      <div className="book-container">
        {/* Left: Map */}
        <div className="map-box">
          <iframe
            title="google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628389.4158979045!2d45.07916217382764!3d23.99594150494089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155e8e1bc96f8df5%3A0x9d84e622bd7e55c9!2sSaudi%20Arabia!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Right: Single Form */}
        <form className="form-box">
          <div className="form-row">
            <div className="form-group">
              <label>Name / الاسم</label>
              <input type="text" placeholder="Enter your name / اكتب اسمك" />
            </div>
            <div className="form-group">
              <label>Email / البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="Enter your email / اكتب بريدك الإلكتروني"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Number / رقم</label>
              <input type="text" placeholder="Enter your number / اكتب رقمك" />
            </div>
            <div className="form-group">
              <label>Service / خدمة</label>
              <input
                type="text"
                placeholder="Service you need / الخدمة المطلوبة"
              />
            </div>
          </div>

          <div className="form-group full">
            <label>Your Message / رسالتك</label>
            <textarea
              rows="4"
              placeholder="Write your message / اكتب رسالتك هنا"
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message / إرسال الرسالة
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookNow;
