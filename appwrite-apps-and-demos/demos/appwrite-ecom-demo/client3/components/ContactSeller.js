import React from 'react';

function ContactSeller({ seller }) {
  const handleContact = () => {
    // Logic for contacting the seller
    alert(`Contacting ${seller}`);
  };

  return (
    <div>
      <h2>Contact Seller</h2>
      <button onClick={handleContact}>Contact</button>
    </div>
  );
}

export default ContactSeller;
