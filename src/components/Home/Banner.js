import React from 'react'


function Banner() {
    return (
        <div className="home-banner">

            <div className="home-banner-text">
                <h1><strong>ADE에 오신 것을 환영합니다</strong></h1>
                <p>
                    어디에서도 찾을 수 없는 다양한 배경의 우수한 멘토님들이 기다리고 있습니다.
                    <br />필터와 태그를 사용해 나와 가장 멘토님께 지금 바로 상담을 신청하세요
                </p>
            </div>
            <button className="home-banner-button">자세히 알아보기</button>
        </div>
    )
}

export default Banner
