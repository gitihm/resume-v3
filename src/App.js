import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import { Row, Col, Button } from "antd";
import Bio from "./components/Bio";
import Skill from "./components/Skill"
import Participated from './components/Participated'
import ProfileImg from './components/ProfileImg'
import Quote from './components/Quote'
import Internship from './components/Internship'
const App = () => {
  return (
    <>
    <div className="shift-side-space">
      <div className="app ">
        <div className="container ">
        <div className="top-image">
        </div>
          <div>
            <ProfileImg/>
            <Row>
              <Col md={12}>
                <Bio />
                <Internship/>
                <Participated />
              </Col>
              <Col md={12}>
                <Row>
                  <Col md={24}><Skill/></Col>
                </Row>
                <Row>
                  <Col md={24}></Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default App;
