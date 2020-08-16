import React from 'react'
import { Affix, Typography, Input } from 'antd';
const { Link } = Typography;

const { Search } = Input;

function Searchbox() {
    return (
        <Affix offsetTop={64}>
            <div className='searchbox' >
                <div className='searchbox-content' style={{maxWidth: "1024px", margin: "16px auto"}}>
                <span className='searchbox-header'><strong>검색을 통해 나만의 컨택 리스트를 만들어보세요</strong></span>
                <Link className='searchbox-link'>컨텍 리스트가 무엇인가요?</Link>
                <br />
                <Search
                    className="searchbox-input"
                    placeholder="원하시는 회사 또는 직무로 검색해보세요"
                    onSearch={value => console.log(value)}
                    enterButton
                    style={{ width: "70%" }}
                />
                </div>
            </div>
        </Affix>
    )
}

export default Searchbox
