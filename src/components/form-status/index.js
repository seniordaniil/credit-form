import React from 'react';
import ReactSpeedometer from 'react-d3-speedometer';
import { Top, TopSegment, TopWrapper } from './components/top';
import { Title, Mark, Text } from './components/typography';
import { Button } from './components/button';
import { Layout } from './components/layout';
import { Cell } from './components/cell';
import { Checkbox } from '../checkbox';

export const FormStatus = () => {
  return (
    <Layout>
      <Top>
        <TopSegment>
          <TopWrapper>
            <Title>
              <Mark>Sam</Mark> your debt report and credit score is ready!
            </Title>
          </TopWrapper>
        </TopSegment>
        <TopSegment>
          <Text>
            Our expert team will call you from <Mark>*111111</Mark>
          </Text>
          <Button>Request a Call Back</Button>
        </TopSegment>
      </Top>
      <Cell>
        <div>
          <Title>
            Your Debt Level: <Mark>$666.666.00</Mark>
          </Title>
        </div>
      </Cell>
      <Cell alignItems={'start'}>
        <ReactSpeedometer
          minValue={360}
          maxValue={850}
          value={420}
          width={240}
          height={240}
          labelFontSize={'11px'}
          valueTextFontSize={'24px'}
          segmentColors={[
            '#00ff00',
            '#bf616a',
            '#d08770',
            '#ebcb8b',
            '#a3be8c',
          ]}
          needleColor={'green'}
          customSegmentLabels={[
            {
              text: 'VERY POOR',
              position: 'OUTSIDE',
            },
            {
              text: 'POOR',
              position: 'OUTSIDE',
            },
            {
              text: 'FAIR',
              position: 'OUTSIDE',
            },
            {
              text: 'GOOD',
              position: 'OUTSIDE',
            },
            {
              text: 'EXCELLENT',
              position: 'OUTSIDE',
            },
          ]}
        />
      </Cell>
      <Cell>
        <div>
          <Text>
            Your recommended debt solution based on the answers you gave:
          </Text>
          <Title>
            <Mark>IVA</Mark>
          </Title>
          <Checkbox
            color={'#ffffff'}
            checked
            fontColor={'#000000'}
            bg={'green'}
          >
            We help you reduce your payments by 73% on average
          </Checkbox>
          <Checkbox
            color={'#ffffff'}
            checked
            fontColor={'#000000'}
            bg={'green'}
          >
            Reduce debt by 73%
          </Checkbox>
          <Checkbox
            color={'#ffffff'}
            checked
            fontColor={'#000000'}
            bg={'green'}
          >
            Typically debt free by 5 years
          </Checkbox>
          <Checkbox color={'#ffffff'} fontColor={'#000000'} bg={'red'}>
            Your credit score will be affected
          </Checkbox>
          <Checkbox color={'#ffffff'} fontColor={'#000000'} bg={'red'}>
            If IVA fails there is a risk of bankruptcy
          </Checkbox>
        </div>
      </Cell>
    </Layout>
  );
};
