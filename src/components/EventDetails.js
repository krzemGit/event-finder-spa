import React from 'react';
import { PageHeader, Typography, Space } from 'antd';
import {
  CalendarOutlined,
} from '@ant-design/icons';
import pic1 from '../assets/img/event1.jpg'

const { Text } = Typography;

const EventDetails = ({ event, setEvent }) => {

  const onBack = () => {
    setEvent(0)
  }

  return (
    <div className="details__container" style={{ backgroundImage: `url(${pic1})` }}>

      <div className={`details__list`}>

        <PageHeader
          className="site-page-header"
          onBack={onBack}
          title={event?.title || 'Title'}
          subTitle=""
        />

        <Space direction="vertical">
          <Text className="header">Date:</Text>
          <Text type="secondary">{event?.dates || 'not given'}</Text>
          <Text className="header">Address:</Text>
          <Text type="secondary">{event?.desc || 'not given'}</Text>
          <Text className="header">Guests:</Text>
          <Text type="secondary">{event?.desc || 'not given'}</Text>
          <Text className="header">Description:</Text>
          <Text type="secondary">{event?.desc || 'not given'}</Text>
          <Text className="header">Link:</Text>
          <Text type="secondary">{event?.link || 'not given'}</Text>
        </Space>

        <div className="details__icon-wrapper">
          <CalendarOutlined className="details__icon" />
        </div>

      </div>

    </div>
  );
}

export default EventDetails;