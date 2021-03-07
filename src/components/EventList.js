import React from 'react';
import { Card, Pagination } from 'antd';
import sm1 from '../assets/img/sm1.jpg'


const { Meta } = Card;

const EventList = ({ handleClick }) => {

  return (
    <div className="card__display">

      <Card
        hoverable
        id="EuroBeat"
        style={{ width: 240 }}
        cover={<img alt="example" src={sm1} />}
        className="card__body"
        onClick={handleClick}
      >

        <Meta title="Europe Street beat" description="www.instagram.com" />

      </Card>

      <Pagination defaultCurrent={1} total={3} className="card__pagination" />

    </div>
  );
}

export default EventList;