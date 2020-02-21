import React from "react";

import {
  BioContainer,
  DividerHeader,
  BioText,
  DividerInSideHeader
} from "./styles";
import { Divider, Row, Tooltip } from "antd";
import nestjs from "../assets/nestjs.png";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.png";
import flutter from "../assets/flutter.png";
import opencv from "../assets/opencv.svg";
import tensorflow from "../assets/tensorflow.png";
const Skill = () => {
  return (
    <>
      <BioContainer>
        {/* <Divider orientation="left">
          <DividerHeader>Skill</DividerHeader>
        </Divider> */}
        <Divider orientation="left">
          <DividerInSideHeader>Expert</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <Tooltip title="JavaScript">
            <i className="fab fa-3x fa-js-square"></i>
          </Tooltip>
        </Row>
        <Divider orientation="left">
          <DividerInSideHeader>Intermediate</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <Tooltip title="React" >
            <d className="fab fa-3x fa-react" />
          </Tooltip>
          <Tooltip title="HTML5">
            <i className="fab fa-3x fa-html5" />
          </Tooltip>
          <Tooltip title="Node.js">
            <i className="fab fa-3x fa-node-js" />
          </Tooltip>

          <Tooltip title="Nest.js">
            <img
              src={nestjs}
              height="60px"
              style={{ filter: "grayscale(1)" }}
            />
          </Tooltip>
        </Row>
        <Row type="flex" justify="space-around" style={{ marginTop: ".7rem" }}>
          <Tooltip title="git">
            <i className="fab fa-3x fa-git" />
          </Tooltip>
          <Tooltip title="Docker">
            <i className="fab fa-3x fa-docker" />
          </Tooltip>
          <Tooltip title="My SQL">
            <img src={mysql} height="60px" style={{ filter: "grayscale(1)" }} />
          </Tooltip>
        </Row>
        <Divider orientation="left">
          <DividerInSideHeader>Basic</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <Tooltip title="MongoDB">
            <img
              src={mongodb}
              height="60px"
              style={{ filter: "grayscale(1)" }}
            />
          </Tooltip>
          <Tooltip title="Vue.js">
            <i className="fab fa-3x fa-vuejs" />
          </Tooltip>
        </Row>
        <Row type="flex" justify="space-around" style={{ marginTop: ".7rem" }}>
          <Tooltip title="Flutter">
            <img
              src={flutter}
              height="60px"
              style={{ filter: "grayscale(1)" }}
            />
          </Tooltip>
          <Tooltip title="CSS3">
            <i className="fab fa-3x fa-css3-alt" />
          </Tooltip>
          <Tooltip title="Open CV">
            <img
              src={opencv}
              height="60px"
              style={{ filter: "grayscale(1)" }}
            />
          </Tooltip>
        </Row>
        <Divider orientation="left">
          <DividerInSideHeader>Interesting</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <Tooltip title="Tensorflow">
            <img
              src={tensorflow}
              height="60px"
              style={{ filter: "grayscale(1)" }}
            />
          </Tooltip>
        </Row>
        <Divider></Divider>
      </BioContainer>
    </>
  );
};

export default Skill;
