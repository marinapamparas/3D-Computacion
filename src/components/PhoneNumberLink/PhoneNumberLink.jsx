import "./PhoneNumberLink.css"

function PhoneNumberLink() {
    const phoneNumber = '2613 341834'; 
  
    return (
      <a href={`tel:${phoneNumber}`} className="phone">
        {phoneNumber}
      </a>
    );
  }
  
  export default PhoneNumberLink;