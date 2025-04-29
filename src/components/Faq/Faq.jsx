import React, { useState } from 'react';
import './Faq.css';
import question_mark from "../../assets/question_mark.svg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      question: "How secure is the payment process on the app?",
      answer: "Cartwey product scanner app takes security seriously. It employs industry-standard encryption protocols to safeguard your payment information during transactions. Additionally, trusted and secure payment gateways are utilized to process payments securely.",
    },
    {
      question: "Why is my camera not scanning the barcode?",
      answer: "Ensure your camera lens is clean and not covered by dirt or fingerprints. Make sure there is enough light in your surroundings.Position the barcode within the scanner frame and hold it steady. If the barcode is too small or blurry, try zooming in or adjusting the angle.",
    },
    {
      question: "What should I do if the barcode is not recognized?",
      answer: "Ensure the product is supported in the store’s system (some items may not be registered). Try scanning from a different angle or adjust the distance. If scanning still fails, use the manual search option to find the product by name.",
    },
    {
      question: "Why is the app taking too long to scan?",
      answer: "Check if your internet connection is stable. A slow connection may delay barcode recognition. Ensure the app has camera permissions enabled (Settings > Apps > Cartwey > Permissions > Camera). Restart the app and try scanning again.",
    }
  ];

  return (
    <section id="faq" className='faq'>
      <div className="faq_title">
        <h1>Frequently Asked Questions</h1>
        <img src={question_mark} alt="" />
      </div>
      <div className="faq_main">
        <p>A good way to know how you feel about us. Here are some tips to get started with.</p>
        <div className="faq_divs">
          {faqs.map((item, index) => (
            <div className="faq_temp" key={index}>
              <div
                className={`faq_temp_title ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <h1>{item.question}</h1>
              </div>
              <p className={`hidden ${activeIndex === index ? 'active' : ''}`}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
