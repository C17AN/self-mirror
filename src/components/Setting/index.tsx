import styled from "@emotion/styled";
import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import Modal from "../common/Modal";
import Switch from "../common/Switch";

type SettingProps = {
  handleClose: () => void;
};

const Setting = ({ handleClose }: SettingProps) => {
  const settingForm = useFormik({
    initialValues: {
      isVideoReversed: false,
    },
    onSubmit: (values) => {},
  });
  return (
    <Modal handleClose={handleClose}>
      <Container>
        <Title>설정</Title>
        <Formik onSubmit={() => {}} initialValues={[]}>
          <Form>
            <Label>
              <LabelName>좌우 반전</LabelName>
              <Field component={() => <Switch />} />
            </Label>
            <Label>
              <LabelName>흑백 모드</LabelName>
              <Field component={() => <Switch />} />
            </Label>
          </Form>
        </Formik>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  background-color: white;
  width: 20rem;
  padding: 2rem 1.5rem;
`;

const Title = styled.h2`
  font-weight: 600;
  color: rgb(51, 61, 75);
  font-size: 1.625rem;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const LabelName = styled.span`
  font-weight: 500;
`;

export default Setting;
