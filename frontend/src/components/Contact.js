import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="Contactdiv">
      <h2>Contact us</h2>
      <div className="details">
        <h3>
          Contact <i class="bi bi-telephone-fill"></i> : 95467584543
        </h3>
        <h3>
          Email <i class="bi bi-envelope-fill"></i> : blogwebpage@yahoo.com
        </h3>
        <h3>
          Address <i class="bi bi-building"></i> : F-30, Tariq Road, Karachi
        </h3>
      </div>
    </div>
  );
};

export default Contact;
