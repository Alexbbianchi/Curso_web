import React, { useState } from 'react'
import EditInPlace from '../EditInPlace/EditInPlace';
import { Select, Input, Label, Margin, Button, Grid, Card, Divider } from 'react-uikit';

const Component = () => {
  const [name, setName] = useState('Name');
  return (
    <>
      <Grid xs="expand">
        <Grid.Item>
          <Card body>
            <EditInPlace value={name} onChangeValue={setName} />
            <Divider />
            <Select>
              <Select.Option>Selecione uma opção</Select.Option>
              <Select.Option value={1}>Opção 1</Select.Option>
              <Select.Option value={1}>Opção 2</Select.Option>
              <Select.Option value={2}>Opção 3</Select.Option>
            </Select>

            <Label>Default</Label>
            <Label variant="success">Success</Label>
            <Label variant="warning">Warning</Label>
            <Label variant="danger">Danger</Label>

            <Margin>
              <Input placeholder="Input" />
            </Margin>

            <Margin >
              <Input.Textarea />
            </Margin>

            <Margin>
              <Input.Label>
                <Input.Checkbox /> Checkbox A
              </Input.Label>
              <Input.Label>
                <Input.Checkbox /> Checkbox B
              </Input.Label>
            </Margin>

            <Input.Label>
              <Input.Radio name="radio1" defaultChecked /> Radio A
            </Input.Label>
            <Input.Label>
              <Input.Radio name="radio1" /> Radio B
            </Input.Label >

            <Divider icon />

            <Button variant="secondary">Secondary</Button>
          </Card>
        </Grid.Item>
      </Grid>

    </>


  )
}

export default Component

