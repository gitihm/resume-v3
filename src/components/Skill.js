import React from "react";

import {
  BioContainer,
  DividerHeader,
  BioText,
  DividerInSideHeader
} from "./styles";
import { Divider, Row } from "antd";
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
        <Divider orientation="left">
          <DividerHeader>Skill</DividerHeader>
        </Divider>
        <Divider orientation="left">
          <DividerInSideHeader>Expert</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <i class="fab fa-3x fa-js-square" />
        </Row>
        <Divider orientation="left">
          <DividerInSideHeader>Intermediate</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <i class="fab fa-3x fa-react" />
          <i class="fab fa-3x fa-html5" />
          <i class="fab fa-3x fa-node-js" />
          <img src={nestjs} height="60px" style={{ filter: "grayscale(1)" }} />
        </Row>
        <Row type="flex" justify="space-around" style={{ marginTop: ".7rem" }}>
          <i class="fab fa-3x fa-git" />
          <i class="fab fa-3x fa-docker" />
          <img src={mysql} height="60px" style={{ filter: "grayscale(1)" }} />
        </Row>
        <Divider orientation="left">
          <DividerInSideHeader>Basic</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
          <img src={mongodb} height="60px" style={{ filter: "grayscale(1)" }} />
          <i class="fab fa-3x fa-vuejs" />
          
        </Row>
        <Row type="flex" justify="space-around" style={{ marginTop: ".7rem" }}>
        <img src={flutter} height="60px" style={{ filter: "grayscale(1)" }} />
          <i class="fab fa-3x fa-css3-alt" />
          <img src={opencv} height="60px" style={{ filter: "grayscale(1)" }} />
        </Row>
        <Divider orientation="left">
          <DividerInSideHeader>Interesting</DividerInSideHeader>
        </Divider>
        <Row type="flex" justify="space-around">
        <img src={tensorflow} height="60px" style={{ filter: "grayscale(1)" }} />
        </Row>
        <Divider>
        </Divider>
      </BioContainer>
    </>
  );
};

export default Skill;
