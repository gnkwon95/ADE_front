import React, { useContext } from 'react'
import { Tag, Typography, Button, Space, Avatar } from 'antd'
import { AuthUserContext } from "../../session";
import {withRouter} from "react-router-dom";
import faker from "faker";
import ChooseDateModal from './ChooseDateModal';


const DummyData = {
    logo: faker.image.avatar(),
    user_id: faker.name.findName(),
    current_company: faker.company.companyName(1),
    current_job: faker.name.jobTitle(),
    work_period_from: faker.random.number(15),
    prepared_companies: Array(faker.random.number(5))
      .fill()
      .map(() => faker.random.word()),
  };

 
function BusinessCard(props) {
 
  console.log(props.info)
  const linkTo =()=>{
    if(props.info!==null){props.history.push(`/mentor-edit`)}
  
  }
  return (
    <div className="mentor-businesscard">

        <div style={{ textAlign:"center" }}>
          <Avatar shape="square" size={100} src={DummyData.logo} style={{ margin:"10px" }} />
          <h1 style={{ margin:"5px" }}>{DummyData.user_id}</h1>
          <h3>{DummyData.current_company}</h3>
          <Tag color="#373642">{DummyData.work_period_from}연차</Tag>
        </div>
        <br />
        
        <h3>현재 포지션</h3>
        <div>{DummyData.current_job}</div>
        <br />
        <h3>함께 합격한 회사</h3>
        <div>
          {DummyData.prepared_companies.map((data, index) => (
            <Tag>{data}</Tag>
          ))}
        </div>
        <br />
        <br />
    {props.info===null?  
   
   <Button
   type="primary"
   shape="round" 
   size="large"
   
   onClick={linkTo}
   block
   style={{ color:"black", lineHeight:"25px", fontSize:"20px" }}
 >
  정보 수정
</Button> 
:
  <ChooseDateModal info={props.info} />
 
}
       
    </div>
  )
}

export default withRouter(BusinessCard)
