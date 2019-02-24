import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const FormLogin = () => (
  <Form>
    <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button type='submit'>Login</Button>
  </Form>
)

export default FormLogin