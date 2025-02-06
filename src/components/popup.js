import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './popup.css'; // Import the CSS file

const Popup = ({ isOpen, closePopup }) => {
  if (!isOpen) return null;

  // Cryptocurrency addresses
  const addresses = {
    BTC: 'bc1qatl7z86yvxnya0yre2hhh5thm9qs6hlgslltgv',  // BTC Address
    ETH: '0x6d59fD29c048e22022bbAB5df74b655bb7e69dD5', // ETH Address
    BNB: '0xd232c41b4df8ee31551ad493eebfebdeeaa867a5', // BNB Address
  };

  const [selectedCrypto, setSelectedCrypto] = useState('BTC');
  const [copiedAddress, setCopiedAddress] = useState('');
  const [copyButtonText, setCopyButtonText] = useState('Copy');

  const handleCopy = (address) => {
    navigator.clipboard.writeText(address).then(() => {
      setCopiedAddress(address);
      setCopyButtonText('Copied!');
      setTimeout(() => {
        setCopiedAddress('');
        setCopyButtonText('Copy');
      }, 2000);
    });
  };

  // Supported cryptocurrencies logos and names
  const cryptoLogos = [
    { logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png', name: 'BTC' },
    { logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png', name: 'ETH' },
    { logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png', name: 'BNB' },
  ];

  const handleSelectCrypto = (crypto) => {
    setSelectedCrypto(crypto);
  };

  return (
    <div className="popup-overlay" onClick={closePopup}>
      <div
        className="popup-content"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
      >
        {/* Close button (Icon) in the top-right corner */}
        <button className="close-button" onClick={closePopup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-close"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h3>Donate Now</h3>
        <p>Scan the QR code or copy the address to donate using your preferred crypto:</p>

        {/* Custom Dropdown to choose cryptocurrency */}
        <div className="crypto-selector">
          <label htmlFor="crypto">Select Cryptocurrency: </label>
          <div className="dropdown">
            <button className="dropdown-btn">
              <img
                src={cryptoLogos.find((crypto) => crypto.name === selectedCrypto)?.logo}
                alt={selectedCrypto}
                className="coin-icon"
              />
              {selectedCrypto}
            </button>
            <div className="dropdown-content">
              {cryptoLogos.map((crypto) => (
                <div
                  key={crypto.name}
                  className="dropdown-item"
                  onClick={() => handleSelectCrypto(crypto.name)}
                >
                  <img src={crypto.logo} alt={crypto.name} className="coin-icon" />
                  {crypto.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="qr-box">
          <div className="coin-box">
            {/* QR Code for selected cryptocurrency */}
            <QRCodeCanvas value={addresses[selectedCrypto]} size={150} />
            <p>{addresses[selectedCrypto]}</p>
            <button className="copy-btn" onClick={() => handleCopy(addresses[selectedCrypto])}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-xs"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z"
                  fill="currentColor"
                ></path>
              </svg>
              {copyButtonText}
            </button>
          </div>
        </div>

        <div className="crypto-logos">
          <h6>Supported Cryptocurrencies</h6>
          <div className="logos-row">
            {cryptoLogos.map((logo, index) => (
              <div key={index} className="crypto-logo">
                <img src={logo.logo} alt="crypto-logo" className="crypto-logo-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
