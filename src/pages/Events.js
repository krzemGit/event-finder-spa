import React, { useState } from 'react';
import { Button, Typography } from 'antd';
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
} from '@ant-design/icons';
import EventList from '../components/EventList';
import EventDetails from '../components/EventDetails';

const { Title, Text } = Typography;

const Events = () => {

  const [event, setEvent] = useState(0);

  const handleSelectEvent = () => {
    setEvent(1)
  }

  return (
    <section className="section section__events events">

      <div className="events__container">

        {event ? <EventDetails event={event} setEvent={setEvent} /> : null}

        <div className="events__col events__col--text">

          <div className="events__texts">

            <Title>Events</Title>
            <Text className="text">Here you can browse events added by all users. If you want to add an event, you should move to the add form section. You should also remember to log in before adding an event of your own.</Text>

          </div>

          <div className="events__btns">

            <Button type="primary" ghost className="btn prev-btn">
              <DoubleLeftOutlined />Previous Event
            </Button>

            <Button type="primary" ghost className="btn next-btn">
              Next Event <DoubleRightOutlined />
            </Button>

          </div>

        </div>
        <div className="events__col events__col--list">

          <EventList handleClick={handleSelectEvent} />

          <div className="events__shape"></div>

        </div>

      </div>

    </section>
  );
}

export default Events;