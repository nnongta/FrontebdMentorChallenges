import React from "react";
import qrCodeImage from "./images/image-qr-code.png"; // Rename the import

function Card() {
  return (
    <div className="incard">
      <img src={qrCodeImage} alt="QR Code" /> {/* Use the renamed variable */}
      <div className="textcard">
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default Card;
