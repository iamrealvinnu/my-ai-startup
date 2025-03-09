import React from 'react';
import '../styles/pages.css';

function Services() {
  const services = [
    {
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI solutions in your business',
      features: ['Strategy Development', 'Technical Assessment', 'Implementation Planning']
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI applications designed for your specific needs',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision']
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems',
      features: ['API Development', 'System Integration', 'Performance Optimization']
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p className="services-intro">
          Cutting-edge AI solutions to transform your business
        </p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul className="features-list">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss how our AI solutions can help your business grow.</p>
        <button className="cta-button">Contact Us</button>
      </section>
    </div>
  );
}

export default Services;
