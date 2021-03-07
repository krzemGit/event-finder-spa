import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Typography } from 'antd';
import {
  CalendarOutlined,
} from '@ant-design/icons';
import pic1 from '../assets/img/event4.jpg'

const { Title, Text } = Typography;

const About = () => {

  return (

    <section className="section section__about">

      <Row style={{ height: '100%' }} className="about">

        <Col
          span={12}
          className="about__col about__col--text"
          style={{ display: 'flex', flexDirection: 'column', paddingLeft: 20 }}
        >

          <Title>About</Title>

          <Text className="text">This website has been designed to help with organizing and promoting your events accros your family, friends and all other that you wish to invite. Wether you are organizing a small meeting with a group of firends, organize a family trip or throw an enourmous party for people from all around the world, this is a place for you</Text>

          <Text>In the following sections you will find (1) a list of parties already organized by other people and (2) a form for organizing your own party. If you want to make an event ouf your own, you would have to log in first. You can find the login button at the bottom of the site's navbar.</Text>

        </Col>

        <img src={pic1} alt="" className="about__img" />

      </Row>

      <Link to="/events" className="about__btn">
        <Button type="primary" ghost>
          Browse events <CalendarOutlined />
        </Button>
      </Link>

    </section>
  );
}

export default About;