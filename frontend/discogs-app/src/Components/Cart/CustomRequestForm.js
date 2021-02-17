import React from 'react';
import { TextArea, Form } from 'semantic-ui-react';

export default function CustomRequestForm({ sellerName }) {
  return (
    <Form>
      <TextArea placeholder={`Instructions for ${sellerName} (optional)`} />
    </Form>
  );
}
