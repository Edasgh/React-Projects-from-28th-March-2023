import { useState } from 'react';

const ProductDetails = ({ productId }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    try {
      // Use Appwrite functions to send a message to the seller
      await client.functions.createExecution('YOUR_SEND_MESSAGE_FUNCTION_ID', {
        productId,
        message,
      });

      setMessage('');
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Failed to send message', error);
      alert('Failed to send message');
    }
  };

  return (
    <div>
      {/* Display product details */}
      <h3>Product Details</h3>
      {/* Add message input */}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      {/* Send message button */}
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
};

export default ProductDetails;
