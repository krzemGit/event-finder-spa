import React from 'react';
import { Row, Col, Typography } from 'antd';
import Form from '../components/Form';
import PageError from '../UI/PageError';
import { useAuth } from '../contexts/AuthProvider';

const { Title, Text } = Typography;

const EventForm = () => {
  const { user, handleLogin } = useAuth();

  return (
    <section className="section section__event-form">
      <Row style={{ height: '100%' }} className="event-form">
        <Col
          xs={24}
          lg={8}
          className="event-form__col event-form__col--text"
        >
          <Title>Event Form</Title>
          <Text className="text">This form allows you to add new events of your choice. The events can be big or small, the size does not matter, as long as it is important for you and your guests. The only requirement is that you log in before adding an event.</Text>
          <Text className="text">At the form you will find several fields, of which first three are mandatory, the rest is optional. The gray line divides those compulsory, form those that are not. Good luck with the registration and have fun at your event.</Text>
        </Col>
        <Col
          xs={24}
          lg={16}
          className="event-form__col event-form__col--form"
        >
          {user ? <Form /> : <PageError
            message="You must log in before adding an event"
            btnText="Log in"
            onClick={handleLogin}
          />
          }
        </Col>
      </Row>
    </section>
  );
}

export default EventForm;