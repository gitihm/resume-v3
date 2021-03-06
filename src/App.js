import React, { useState } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Row, Col, Button, Divider } from "antd";
import Bio from "./components/Bio";
import Skill from "./components/Skill";
import Participated from "./components/Participated";
import ProfileImg from "./components/ProfileImg";
import Contributions from "./components/Contributions";
import Internship from "./components/Internship";
import Workshop from "./components/Workshop";
import {
  BioContainer,
  DividerHeader,
  BioText,
  DividerInSideHeader
} from "./components/styles";
const App = () => {
  return (
    <>
      <div className="shift-side-space">
        <div className="app ">
          <div className="container ">
            <div className="top-image"></div>
            <div>
              <ProfileImg />
              <Row>
                <Col md={12}>
                  <Bio />

                  <Participated />
                </Col>
                <Col md={12}>
                  <Row>
                    <Col md={24}>
                      <Internship />
                      <Skill />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={24}></Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Contributions />
                <Workshop />
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
