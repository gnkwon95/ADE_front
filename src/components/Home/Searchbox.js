import React, { useState } from 'react'
import { Affix, Typography, Input } from 'antd';
import { BorderOutlined } from '@ant-design/icons';
const { Link } = Typography;

const { Search } = Input;

function Searchbox(loc) { //왜 loc에 모든게 저장돼있는걸까....
    const [value, setValue] = useState("")

    const onSubmit = (e) => {
        console.log(e);
        console.log(loc);
        //console.log(job);
        //console.log(major);
    }

    return (
        <Affix offsetTop={64}>
            <div className='searchbox'>
                <div className='searchbox-header'>
                    <strong>검색을 통해 나만의 컨택 리스트를 만들어보세요</strong> &nbsp; &nbsp;
                    <Link style={{ fontSize:"12px" }}>컨텍 리스트가 무엇인가요?</Link>
                </div>
                <div className="searchbox-container">
                    <input
                        className="searchbox-container-input" 
                        type="text"
                        placeholder="원하시는 회사 또는 직무로 검색해보세요"
                    />
                    <button onClick = {onSubmit} className="searchbox-container-button" type="submit">검색</button>
                </div>
            </div>
        </Affix>
    )
}

export default Searchbox
