import React,{useState} from "react";
import {
  BioContainer,
  DividerHeader,
  BioText,
  DividerInSideHeader
} from "./styles";
import { Divider, Timeline, Icon,Modal } from "antd";
import test from '../assets/clouds-daylight-heaven-nature-sky-1499705.jpg'
const Participated = () => {
    const [visible , setVisible] = useState(false)
    const [cert  , setCert] = useState("")
    const [certs , setCerts] = useState([
        "https://gamedata.britishcouncil.org/sites/default/files/attachment/number-1_1.jpg",
        "https://gamedata.britishcouncil.org/sites/default/files/attachment/number-2_1.jpg",
        "https://gamedata.britishcouncil.org/sites/default/files/attachment/number-3_4.jpg",
        "https://gamedata.britishcouncil.org/sites/default/files/attachment/number-4_1.jpg",
        "https://gamedata.britishcouncil.org/sites/default/files/attachment/number-5_2.jpg",
        "https://gamedata.britishcouncil.org/sites/default/files/attachment/number-6_1.jpg"
    ])
    const showModal = (e) => {
        console.log(e.target.id);
        setCert(certs[(+e.target.id)-1])
        setVisible(true)
      };
    
      const  handleOk = e => {
        setVisible(false)
      };
    
      const  handleCancel = e => {
        setVisible(false)
      };
    
    
  return (
    <>
        <Modal
          title="Reference"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          cancelButtonProps={{ disabled: true }}
          width="100%"
          okText="Close"
        >
          <img src={cert} width="100%" height="100%"/>
        </Modal>
      <BioContainer>
        <Divider orientation="left">
          <DividerHeader>Participated</DividerHeader>
        </Divider>
        <Timeline mode="alternate">
          <Timeline.Item>
            <div>2016 : NSC</div>
            <div>
              Participated in The Eighteenth National Software Contest : NSC2016 , Has
              done a project about intelligent notification system in school.
              <div onClick={(e)=>{showModal(e)}} ><a href="#" id="1"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>ACM ICPC : 2018</div>
            <div>
              Participated in 2018 ICPC Asia Nakhon Pathom Regional Contest No.34/69.
              <div onClick={(e)=>{showModal(e)}} ><a href="#" id="2"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>2019 : Cloud Essential</div>
            <div>
            Participated in Cloud Essential and Comp TIA Cloud Essentials Exam
            <div onClick={(e)=>{showModal(e)}} ><a href="#" id="3"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>ACM ICPC : 2019</div>
            <div>
            Participated in The 2019 ICPC Asia Bangkok Programming Contest.
            <div onClick={(e)=>{showModal(e)}} ><a href="#" id="4"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>2020 : TESA TOP GUN RALLY </div>
            <div>
            Participated in The TESA TOP GUN RALLY 2020.
            <div onClick={(e)=>{showModal(e)}} ><a href="#" id="5"> Reference</a></div>
            </div>
          </Timeline.Item>
          <Timeline.Item>
            <div>NSC : 2020</div>
            <div>
            Participated in The Eighteenth National Software Contest : NSC2020 , Has
              done a project about e-health.
              <div onClick={(e)=>{showModal(e)}} ><a href="#" id="6"> Reference</a></div>
            </div>  
          </Timeline.Item>
          
        </Timeline>
      </BioContainer>
    </>
  );
};

export default Participated;
