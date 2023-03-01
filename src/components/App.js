import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading from './Heading';
import InputQuery from './InputQuery';
import subHeading from './subHeading';
import SubmitButton from './SubmitButton';

const App = () => {
  return (
    <div id="main">
      <Heading />
      <subHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  )
}


