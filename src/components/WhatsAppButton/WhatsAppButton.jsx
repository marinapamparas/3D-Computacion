import "./WhatsAppButton.css"
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/2216422375', '_blank');
    };
  
    return (
      <div className="whatsapp-button">
        <button onClick={handleWhatsAppClick}> <BsWhatsapp className="logowp"/> </button>
      </div>
    );
  };
  
export default WhatsAppButton;