import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import EventList from '../components/EventList';

const Home: React.FC = () => {
  return (
    <main>
      <div className='section d-flex flex-column align-items-center justify-content-center'>
        <div className="container text-center">
          <p className="text-white mx-auto" style={{ maxWidth: '700px' }}>
            Explore a diverse array of events, from wine tastings and craft beer festivals to hands-on cooking classes and gourmet food truck rallies. Whether you're a seasoned foodie or someone eager to enhance your culinary skills, Culinary Connections brings together enthusiasts, experts, and epicureans for unforgettable moments!
          </p>
        </div>
      </div>

      <Row>
        <Col md={4}>
          <div className='section-1 d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: 'gray', color: 'white', minHeight: '100vh' }}>
            <div className="container text-center">
              <h2 className="text">Food Tasting Events</h2>
              <p className="text-p">
                Explore a variety of food tasting events, ranging from exquisite wine tastings to flavorful food festivals. Join us in the celebration of culinary delights!
              </p>
              <Link to="/category/food" className="btn btn-primary">See Events</Link>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className='section-2 d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
            <div className="container text-center">
              <h2 className="text">All Our Drink Events</h2>
              <p className="text-p">
                Indulge in the world of exquisite flavors and expert craftsmanship at our drink events. From the art of cocktail making to sophisticated wine tastings, immerse yourself in a sensory journey. Join us for delightful evenings filled with unique libations, expert insights, and the joy of raising a glass to unforgettable moments.
              </p>
              <Link to="/category/drink" className="btn btn-primary">See Events</Link>
            </div>
          </div>
        </Col>

        <Col md={4}>
          <div className='section-3 d-flex flex-column align-items-center justify-content-center' style={{ backgroundColor: 'blue', color: 'white', minHeight: '100vh' }}>
            <div className="container text-center">
              <h2 className="text">Food Workshops</h2>
              <p className="text-p">
                Unleash your culinary creativity in our hands-on food workshops. From mastering the art of cake making to crafting perfect pasta, our workshops offer a blend of expertise and fun. Join us for interactive sessions led by culinary experts, where you can hone your skills and create delicious masterpieces. Embark on a gastronomic adventure with our diverse food workshops.
              </p>
              <Link to="/category/course" className="btn btn-primary">See Events</Link>
            </div>
          </div>
        </Col>
      </Row>
      <h3>All Events</h3>
      <EventList />
    </main>
  );
};

export default Home;


