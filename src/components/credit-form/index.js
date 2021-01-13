import React from 'react';
import { Formik } from 'formik';
import Select from 'react-select';
import { Form } from './components/form';
import { Sidebar } from './components/sidebar';
import {
  SidebarTitle,
  SidebarDesc,
  MainDesc,
  MainTitle,
  Status,
} from './components/typography';
import { Checkbox } from '../checkbox';
import { Main } from './components/main';
import { DatePicker } from './components/date-picker';
import { FieldGroup } from './components/field-group';
import { Input } from './components/input';
import { selectStyles } from './components/select';
import { Submit } from './components/submit';
import { Centered } from './components/centered';
import { AddressLine } from './components/address-line';
import { months, years } from './utils';

export const CreditForm = () => {
  return (
    <Formik
      onSubmit={(values) => console.log('submit', values)}
      initialValues={{
        dob: null,
        currentAddress: {
          no: '',
          postCode: '',
          years: null,
          months: null,
        },
        previousAddress: {
          no: '',
          postCode: '',
          years: null,
          months: null,
        },
        checkbox1: true,
        checkbox2: true,
        checkbox3: true,
      }}
    >
      {({ values, handleSubmit, setFieldValue, handleChange, handleBlur }) => (
        <Form onSubmit={handleSubmit}>
          <Sidebar>
            <SidebarTitle>
              Get a 100% guaranteed accurate financial report.
            </SidebarTitle>
            <SidebarDesc>
              Let us do your credit check to ensure you receive the most
              accurate financial advice from our team of money advide experts
            </SidebarDesc>
            <Checkbox
              bg={'#ffffff'}
              fontColor={'#ffffff'}
              color={'#F16144'}
              checked={values.checkbox1}
              onChange={(e) =>
                setFieldValue('checkbox1', e.currentTarget.checked)
              }
            >
              The most accurate financial break down
            </Checkbox>
            <Checkbox
              bg={'#ffffff'}
              fontColor={'#ffffff'}
              color={'#F16144'}
              checked={values.checkbox2}
              onChange={(e) =>
                setFieldValue('checkbox2', e.currentTarget.checked)
              }
            >
              It won't affect your credit history
            </Checkbox>
            <Checkbox
              bg={'#ffffff'}
              fontColor={'#ffffff'}
              color={'#F16144'}
              checked={values.checkbox3}
              onChange={(e) =>
                setFieldValue('checkbox3', e.currentTarget.checked)
              }
            >
              100% safe and secured data management
            </Checkbox>
          </Sidebar>
          <Main>
            <MainTitle>Can we make a soft Credit check</MainTitle>
            <MainDesc>
              This will be a soft credit check and it won't affect your credit
              score in any way
            </MainDesc>
            <Status>Your D.O.B</Status>
            <DatePicker onChange={(d) => setFieldValue('dob', d)} />
            <AddressForm
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
              setFieldValue={setFieldValue}
              type={'current'}
            />
            {values.currentAddress.years &&
              values.currentAddress.years.value < 6 && (
                <>
                  <Status>
                    <b>** Please provide a previous address **</b>
                  </Status>
                  <Status>
                    We require 6 years previous address history to perform a
                    credit check
                  </Status>
                  <AddressForm
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    values={values}
                    setFieldValue={setFieldValue}
                    type={'previous'}
                  />
                </>
              )}
            <Centered>
              <Submit type={'submit'}>Submit</Submit>
            </Centered>
          </Main>
        </Form>
      )}
    </Formik>
  );
};

const AddressForm = ({
  handleBlur,
  handleChange,
  values,
  setFieldValue,
  type,
}) => {
  const name = type + 'Address';

  return (
    <>
      <Status>Provide your {type} address below:</Status>
      <FieldGroup columns={2}>
        <Input
          name={`${name}.no`}
          placeholder={'No.'}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values[name].no}
        />
        <Input
          name={`${name}.postCode`}
          placeholder={'Type your postcode'}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values[name].postCode}
        />
      </FieldGroup>
      {values[name].postCode && values[name].no && (
        <>
          <AddressLine>2 Drive Lane</AddressLine>
          <AddressLine>MANCHESTER</AddressLine>
          <AddressLine>Greater Manchester</AddressLine>
        </>
      )}
      <Status>How long have you lived at this address?</Status>
      <FieldGroup columns={2}>
        <Select
          styles={selectStyles}
          placeholder={'Years'}
          options={years}
          value={values[name].years}
          onChange={(v) => setFieldValue(`${name}.years`, v)}
        />
        <Select
          styles={selectStyles}
          placeholder={'Months'}
          options={months}
          value={values[name].months}
          onChange={(v) => setFieldValue(`${name}.months`, v)}
        />
      </FieldGroup>
    </>
  );
};
