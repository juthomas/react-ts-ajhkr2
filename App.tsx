import { Card, Image } from '@mantine/core';
import * as React from 'react';
import './style.css';
import background from './imgs/card-reward-01.png';

export default function App() {
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p> */}
      <Card shadow="sm" radius="md" p="lg" withBorder>
        <Card.Section>
          <Image src={background} />
        </Card.Section>
      </Card>
    </div>
  );
}
