import React, { useState } from 'react';
import { Alert, Form, Input, InputNumber, Button, DatePicker, Divider } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};


const validateMessages = {
  // eslint-disable-next-line
  required: '${label} is required!',
  types: {
    // eslint-disable-next-line
    email: '${label} is not a valid email!',
    // eslint-disable-next-line
    number: '${label} is not a valid number!',
  },
  number: {
    // eslint-disable-next-line
    range: '${label} must be between ${min} and ${max}',
  },
};

const AddForm = () => {

  const [feedback, setFeedback] = useState(false);


  const onSubmit = (values) => {
    setFeedback(true)
  };

  const onClose = () => {
    setFeedback(false)
  }

  return (
    <div className="form__container">

      {feedback ? <Alert
        className="form__alert"
        message="The form has not been activated yet"
        type="info"
        showIcon
        closable
        onClose={onClose}
      /> : null}

      <Form {...layout} name="nest-messages" onFinish={onSubmit} validateMessages={validateMessages}>

        <Form.Item
          name="title"
          label="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              type: 'date',
              required: true,
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Divider orientation="right" plain className="form__divider">
          Non-compulsory
        </Divider>

        <Form.Item
          name="guests"
          label="Guests"
          rules={[
            {
              type: 'number',
              min: 0,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name="link" label="Website">
          <Input />
        </Form.Item>

        <Form.Item name="desc" label="Description">
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>

      </Form>

    </div>
  );
}

export default AddForm;