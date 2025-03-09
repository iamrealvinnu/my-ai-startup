import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import ParticleNetwork from './components/ParticleNetwork';
import NeuralSphere from './components/NeuralSphere';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    height: 40px;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(45deg, #00ff87, #60efff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNav = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(26, 26, 26, 0.98);
  padding: 2rem;
  z-index: 999;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavLink = styled(motion.a)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #00ff87, #60efff);
    transition: width 0.3s ease;
  }

  &:hover {
    color: #00ff87;
    &::after {
      width: 100%;
    }
  }
`;

const Container = styled.div`
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  color: white;
  padding-top: 80px; // Add space for fixed nav
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &#solutions {
    background: rgba(0, 255, 135, 0.05);
  }

  &#impact {
    background: rgba(96, 239, 255, 0.05);
  }

  &#testimonials {
    background: rgba(0, 255, 135, 0.05);
  }

  &#contact {
    background: rgba(26, 26, 26, 0.95);
  }
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const LogoContainer = styled(motion.div)`
  margin-bottom: 2rem;
  img {
    max-width: 300px;
    height: auto;
  }
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Tagline = styled(motion.h2)`
  font-size: 2rem;
  color: #60efff;
  margin-bottom: 2rem;
  font-weight: 500;
`;

const Description = styled(motion.p)`
  font-size: 1.5rem;
  color: #a0a0a0;
  margin-bottom: 3rem;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  border-radius: 30px;
  color: #1a1a1a;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 255, 135, 0.1);
  }

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #a0a0a0;
    line-height: 1.6;
  }
`;

const StatsGrid = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const StatCard = styled(Card)`
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    color: #60efff;
    margin-bottom: 0.5rem;
  }
`;

const TestimonialCard = styled(Card)`
  text-align: left;
  
  .quote {
    font-size: 1.1rem;
    font-style: italic;
    margin-bottom: 1rem;
  }

  .author {
    color: #00ff87;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 3rem auto;
  display: grid;
  gap: 1rem;

  input, textarea {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    color: white;
    font-size: 1rem;

    &:focus {
      outline: none;
      border-color: #00ff87;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const Footer = styled.footer`
  background: rgba(26, 26, 26, 0.95);
  padding: 4rem 2rem;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
  }

  p {
    color: #a0a0a0;
    line-height: 1.6;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #a0a0a0;
    text-decoration: none;
    &:hover {
      color: #00ff87;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #a0a0a0;
    font-size: 1.5rem;
    &:hover {
      color: #00ff87;
    }
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 50%;
  text-align: left;
  padding-left: 5rem;
`;

const GradientText = styled.span`
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(0, 255, 135, 0.2);
  color: #00ff87;
  font-size: 0.9rem;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #00ff87, transparent);
    animation: scan 2s linear infinite;
  }

  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #60efff;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.8rem 0;
    font-family: 'Courier New', monospace;
    
    &::before {
      content: '>';
      color: #60efff;
      margin-right: 0.5rem;
    }
  }

  @keyframes scan {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const AIStatusCard = styled(FloatingCard)`
  top: 20%;
  right: 10%;
  min-width: 300px;
  transform-origin: right;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #00ff87, transparent);
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
`;

const MetricsCard = styled(FloatingCard)`
  bottom: 20%;
  left: 10%;
  min-width: 300px;
  transform-origin: left;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #00ff87, #60efff);
    animation: glow 2s ease-in-out infinite;
  }

  @keyframes glow {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

const SphereContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  opacity: 0.8;
  pointer-events: none;

  > div {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    opacity: 0.3;
  }
`;

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [metrics, setMetrics] = useState({
    cpuLoad: 42,
    memoryUsage: 68,
    networkSpeed: 850,
    requests: 0
  });

  // Simulate real-time updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpuLoad: Math.floor(35 + Math.random() * 15),
        memoryUsage: Math.floor(60 + Math.random() * 15),
        networkSpeed: Math.floor(800 + Math.random() * 200),
        requests: prev.requests + Math.floor(Math.random() * 5)
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <Container>
      <ParticleNetwork />
      <Nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NavLogo onClick={() => scrollTo('home')}>
          <img src="/NeuraX AI Logo.png" alt="NeuraX AI" />
          <span>NeuraX AI</span>
        </NavLogo>
        <NavLinks>
          <NavLink 
            onClick={() => scrollTo('home')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ color: activeSection === 'home' ? '#00ff87' : 'white' }}
          >
            Home
          </NavLink>
          <NavLink 
            onClick={() => scrollTo('solutions')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ color: activeSection === 'solutions' ? '#00ff87' : 'white' }}
          >
            Solutions
          </NavLink>
          <NavLink 
            onClick={() => scrollTo('impact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ color: activeSection === 'impact' ? '#00ff87' : 'white' }}
          >
            Impact
          </NavLink>
          <NavLink 
            onClick={() => scrollTo('testimonials')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ color: activeSection === 'testimonials' ? '#00ff87' : 'white' }}
          >
            Testimonials
          </NavLink>
          <NavLink 
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ color: activeSection === 'contact' ? '#00ff87' : 'white' }}
          >
            Contact
          </NavLink>
        </NavLinks>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
      </Nav>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileNav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
          >
            <NavLink onClick={() => scrollTo('home')}>Home</NavLink>
            <NavLink onClick={() => scrollTo('solutions')}>Solutions</NavLink>
            <NavLink onClick={() => scrollTo('impact')}>Impact</NavLink>
            <NavLink onClick={() => scrollTo('testimonials')}>Testimonials</NavLink>
            <NavLink onClick={() => scrollTo('contact')}>Contact</NavLink>
          </MobileNav>
        )}
      </AnimatePresence>

      {/* Home Section */}
      <Section id="home">
        <SphereContainer>
          <NeuralSphere />
        </SphereContainer>
        <AIStatusCard
          initial={{ opacity: 0, x: 50, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100
          }}
        >
          <h4>System Status</h4>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
          >
            CPU Load: <span style={{ color: metrics.cpuLoad > 75 ? '#ff4444' : '#60efff' }}>{metrics.cpuLoad}%</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
          >
            Memory Usage: <span style={{ color: metrics.memoryUsage > 80 ? '#ff4444' : '#60efff' }}>{metrics.memoryUsage}%</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4 }}
          >
            System Status: <span style={{ color: '#00ff87' }}>Operational</span>
          </motion.p>
        </AIStatusCard>
        <MetricsCard
          initial={{ opacity: 0, x: -50, rotateY: 30 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100
          }}
        >
          <h4>Network Metrics</h4>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6 }}
          >
            Network Speed: <span style={{ color: '#60efff' }}>{metrics.networkSpeed} Mb/s</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8 }}
          >
            Active Connections: <span style={{ color: '#60efff' }}>{Math.floor(metrics.networkSpeed/10)}</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.0 }}
          >
            Requests Processed: <span style={{ color: '#60efff' }}>{metrics.requests}</span>
          </motion.p>
        </MetricsCard>
      </Section>

      {/* Solutions Section */}
      <Section id="solutions">
        <Content>
          <Title>Our Solutions</Title>
          <Description>Cutting-edge AI technologies for modern businesses</Description>
          <Grid>
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </Grid>
        </Content>
      </Section>

      {/* Impact Section */}
      <Section id="impact">
        <Content>
          <Title>Our Impact</Title>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard
                key={stat.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.title}</p>
              </StatCard>
            ))}
          </StatsGrid>
        </Content>
      </Section>

      {/* Testimonials Section */}
      <Section id="testimonials">
        <Content>
          <Title>What Our Clients Say</Title>
          <Grid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="quote">{testimonial.quote}</p>
                <p className="author">{testimonial.author}</p>
                <p>{testimonial.position}</p>
              </TestimonialCard>
            ))}
          </Grid>
        </Content>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <Content>
          <Title>Get In Touch</Title>
          <Description>Let's discuss how we can help transform your business</Description>
          <ContactForm>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" />
            <Button type="submit">Send Message</Button>
          </ContactForm>
        </Content>
      </Section>

      <Footer>
        <FooterContent>
          <FooterSection>
            <h3>About NeuraX AI</h3>
            <p>
              Leading the future of artificial intelligence with innovative
              solutions that transform businesses and empower growth.
            </p>
            <SocialLinks>
              <a href="http://github.com/iamrealvinnu" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/guptavinayc/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Quick Links</h3>
            <ul>
              <li><a onClick={() => scrollTo('home')}>Home</a></li>
              <li><a onClick={() => scrollTo('solutions')}>Solutions</a></li>
              <li><a onClick={() => scrollTo('impact')}>Impact</a></li>
              <li><a onClick={() => scrollTo('testimonials')}>Testimonials</a></li>
              <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Contact Info</h3>
            <p>123 AI Street</p>
            <p>Tech City, TC 12345</p>
            <p>Email: gupta.vinayC@gmail.com</p>
            <p>Phone: (+91) 7738927663</p>
          </FooterSection>
        </FooterContent>
      </Footer>
    </Container>
  );
}

const features = [
  {
    title: "Quantum Neural Processing",
    description: "Harnessing quantum computing principles for unprecedented AI capabilities and problem-solving potential."
  },
  {
    title: "Adaptive Neural Architecture",
    description: "Self-evolving neural networks that dynamically optimize and expand based on learning patterns."
  },
  {
    title: "Cognitive Synthesis Engine",
    description: "Advanced AI system that combines multiple neural networks for complex decision-making and analysis."
  },
  {
    title: "Biomimetic Learning",
    description: "Neural systems inspired by human brain architecture for more intuitive and efficient processing."
  }
];

const stats = [
  {
    value: "500+",
    title: "Clients Served"
  },
  {
    value: "95%",
    title: "Success Rate"
  },
  {
    value: "24/7",
    title: "Support"
  },
  {
    value: "50+",
    title: "AI Models"
  }
];

const testimonials = [
  {
    quote: "NeuraX AI transformed our business operations with their innovative solutions.",
    author: "John Smith",
    position: "CEO, Tech Innovations"
  },
  {
    quote: "The team's expertise in AI implementation is unmatched in the industry.",
    author: "Sarah Johnson",
    position: "CTO, Future Systems"
  },
  {
    quote: "Their AI solutions helped us achieve a 300% increase in efficiency.",
    author: "Michael Chen",
    position: "Director, Global Solutions"
  }
];

export default App;
