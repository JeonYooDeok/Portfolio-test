import React from 'react'

export default function Main() {
  const title = {
    fontSize: '120px',
    fontWeight: '900',
    lineHeight: '100%',
  }

  const titleIndent = {
    ...title,
    textIndent: '32px',
    marginBottom: '40px'
  }

  const description = {
    fontSize: '24px',
    lineHeight: '140%',
    marginBottom: '80px'
  }

  const horizontal = {
    display: 'flex',
    gap: '120px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '240px'
  }

  const profile = {
    width: '480px',
    height: '720px',
    backgroundImage: 'url("../../../public/profile.png")',
    backgroundSize: 'cover'
  }

  return (
    <>
      <div style={horizontal}>
        <div>
          <p style={title}>FRONTEND</p>
          <p style={titleIndent}>DEVELOPER</p>
          <p style={description}>사용자 친화적인 웹프로덕트를 위해 늘 고민하는 프론트엔드 개발자 전유덕입니다.</p>
        </div>
        <div style={profile}></div>
      </div>
    </>
  )
}
