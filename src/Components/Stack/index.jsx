import React from 'react'

export default function Stack() {
  const title = {
    fontSize: '120px',
    fontWeight: '900',
    lineHeight: '100%',
    marginBottom: '120px'
  }

  const subTitle = {
    fontSize: '40px',
    fontWeight: '900',
    lineHeight: '100%',
  }

  const imgJs = {
    width: '64px',
    height: '64px',
    backgroundImage: 'url("../../../src/assets//js.png")',
    backgroundSize: 'cover'
  }

  const imgTs = {
    width: '64px',
    height: '64px',
    backgroundImage: 'url("../../../src/assets//ts.png")',
    backgroundSize: 'cover'
  }

  const imgReact = {
    width: '64px',
    height: '64px',
    backgroundImage: 'url("../../../src/assets//react.png")',
    backgroundSize: 'cover'
  }

  const horizontal={
    display: 'flex',
    gap: '80px',
    marginBottom: '280px'
  }

  const horizontalBox = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',
    marginBottom:'32px'
  }

  const sameWidth = {
    flex: '1'
  }

  const description = {
    fontSize: '20px',
    lineHeight: '140%',
  }
  return (
    <>
      <div style={title}>STACK</div>
      <div style={horizontal}>
        <div style={sameWidth}>
          <div style={horizontalBox}>
            <div style={imgJs}></div>
            <p style={subTitle}>Javascript</p>
          </div>
          <p style={description}>웹사이트에 생명력을 더해 대화형으로 만듭니다. 마치 주방의 요리사가 요소를 어떻게 움직이고, 반응하고, 사용자와 소통하는지 조율하는 것과 같습니다.</p>
        </div>
        <div style={sameWidth}>
          <div  style={horizontalBox}>
          <div style={imgTs}></div>
            <p style={subTitle}>Typescript</p>
          </div>
          <p style={description}p>자바스크립트보다 조금 더 엄격한 규칙을 추가하여 오류가 발생할 가능성을 줄입니다. 이는 코드에 대한 맞춤법 검사기를 사용하여 모든 것이 완벽하게 맞는지 확인하는 것과 같습니다.</p>
        </div>
        <div style={sameWidth}>
          <div  style={horizontalBox}>
          <div style={imgReact}></div>
            <p style={subTitle}>React</p>
          </div>
          <p style={description}>React는 사용자 인터페이스의 설계자입니다. 웹페이지를 구성요소라고 하는 재사용 가능한 빌딩 블록으로 나눕니다. 마치 LEGO 조각을 모아 웹 사이트를 구축하고 역동적으로 만드는 것과 같습니다.</p>
        </div>
      </div>
    </>
  )
}
