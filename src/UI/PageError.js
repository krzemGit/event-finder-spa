import React from 'react';
import { Button, Typography } from 'antd';

const { Title } = Typography;

const PageError = ({ message, btnText, onClick }) => {
  return (
    <div className="page-error__container">

      <Title className="page-error__text">{message}</Title>

      <Button
        ghost
        type="primary"
        className="page-error__btn"
        onClick={onClick}
      >{btnText}</Button>

    </div>
  );
}

export default PageError;