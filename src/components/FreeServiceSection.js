import React, { useState } from 'react';

const FreeServicesSection = () => {
  const [selectedHeading, setSelectedHeading] = useState('charity');

  const headings = [
    { 
      id: 'charity', 
      title: 'Charity', 
      image: '/assets/charity-image.svg', 
      content: 'We offer free branding, website design, and marketing services to help charity projects reach their full potential. Whether you\'re supporting a local cause or making a global difference, our goal is to help you connect with more people who can support your mission. With our free services, you can build a strong online presence and engage more donors and volunteers to join your cause.' 
    },
    { 
      id: 'suitability', 
      title: 'Suitability', 
      image: '/assets/suitability-image.svg', 
      content: 'If you\'re working on sustainability initiatives, we provide free website design, development, and branding services to help you get noticed. Whether it\'s promoting eco-friendly products, sustainable living practices, or environmental advocacy, we’re here to help. With our free digital marketing posts, your message can reach the right audience who are passionate about making the world greener and more sustainable.' 
    },
    { 
      id: 'animalRescue', 
      title: 'Animal Rescue', 
      image: '/assets/animal-rescue-image.svg', 
      content: 'Animal rescue projects play a critical role in saving lives and improving the well-being of animals. We want to support your mission by offering free branding, website design, and marketing services. Our goal is to help you raise awareness, find supporters, and connect with potential adopters. Use our free services to create a strong online platform and reach more people who can make a difference in the lives of animals in need.' 
    }
  ];  

  const selectedService = headings.find(item => item.id === selectedHeading);

  return (
    <section className='container'>
    <div className="row free-services">
      <div className="col-lg-6 complimentary align-self-center">
        <h2>Who Can Get Our Complimentary Service:</h2>
        <div className="d-flex heading_border">
          {headings.map((heading) => (
            <div
              key={heading.id}
              className={`btn-link ${selectedHeading === heading.id ? 'active' : ''}`}
              onClick={() => setSelectedHeading(heading.id)}
            >
              {heading.title}
            </div>
          ))}
        </div>
        <p className="mt-4 serivces">{selectedService.content}</p>
      </div>
      <div className="col-lg-6">
        <img
          src={selectedService.image}
          alt={selectedService.title}
          className="img-fluid"
        />
      </div>
    </div>
    </section>
  );
};

export default FreeServicesSection;
