import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Carousel } from 'antd';
import pic1 from '../assets/img/event1.jpg';
import pic2 from '../assets/img/event2.jpg';
import pic3 from '../assets/img/event3.jpg';
import pic4 from '../assets/img/event4.jpg';
import {
  DoubleRightOutlined,
} from '@ant-design/icons';
import { useTheme } from '../contexts/ThemeContext';

const { Title } = Typography;

const Home = () => {
  const pictures = [pic1, pic2, pic3, pic4];

  const { theme } = useTheme();


  return (
    <section className={`section section__home ${theme}`} >

      <div className="title-wrapper">

        <Title
          className={theme}
        >Event Organizer</Title>

        <Title
          level={4}
          className={theme}
        >Here you can check the upcoming events
      <span className="uppercase"> or </span>
      announce your own event, hosted for the family friends or the whole world!
      </Title>

      </div>

      <div className="carousel-wrapper" style={{ flexbasis: '75%' }}>

        <Carousel autoplay>
          {pictures.map(pic => {
            return (
              <div key={pic}>
                <div
                  className="slide"
                  style={{ backgroundImage: `url(${pic})` }}></div>
              </div>
            )
          })}
        </Carousel>

      </div>

      <div
        className="button-wrapper"
      >

        <Link to="/about">
          <Button type="primary" ghost>
            Find out more <DoubleRightOutlined />
          </Button>
        </Link>

      </div>

    </section>
  );
}

export default Home;