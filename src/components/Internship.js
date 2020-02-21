import React from "react";
import { Divider, Timeline } from "antd";
import { BioContainer, DividerHeader, BioText } from "./styles";
const Internship = () => {
  return (
    <>
      <BioContainer>
        <Divider orientation="left">
          <DividerHeader>EDUCATION</DividerHeader>
        </Divider>
        <BioText>
          <Timeline>
            
            <Timeline.Item>
              2016-Present Prince of Songkla University
              <p>
                Kathu Phuket , Thailand Bachelor of Computer Engineering , June
                2020 GPA 2.90/4.0
              </p>
            </Timeline.Item>
            <Timeline.Item>
              2010-2016 Wangkaphor Pittayakom School
              <p>
                Kapho Pattani , Thailand High School Diploma , March 2016 GPA
                3.51/4.0
              </p>
            </Timeline.Item>
          </Timeline>
        </BioText>
        <Divider orientation="left">
          <DividerHeader>Internship</DividerHeader>
        </Divider>
        <BioText>
          <Timeline>
            <Timeline.Item>
              May - July 2019 at WESERVE Delivery Phuket
            </Timeline.Item>
          </Timeline>
        </BioText>
      </BioContainer>
    </>
  );
};
export default Internship;
