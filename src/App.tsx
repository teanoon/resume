import './App.scss'

import { Col, Row, Space, Tag, Typography } from 'antd'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

import Introduction from './components/Introduction/Introduction'
import PersonalInformation from './components/PersonalInformation/PersonalInformation'
import Statistics from './components/Statistics/Statistics'
import Works from './components/Works/Works'

const { Link, Paragraph } = Typography

const App: FC = () => {
  const { t, i18n } = useTranslation()
  return (
    <>
      <Space direction='vertical' size='large' style={{ padding: 16 }}>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} xxl={{ span: 12, offset: 6 }} style={{ textAlign: 'right' }}>
            <Tag.CheckableTag checked={i18n.language === 'zh-CN'} onClick={() => i18n.changeLanguage('zh-CN')}>{t('CN')}</Tag.CheckableTag>
            <Tag.CheckableTag checked={i18n.language === 'en-US'} onClick={() => i18n.changeLanguage('en-US')}>{t('EN')}</Tag.CheckableTag>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} xxl={{ span: 12, offset: 6 }}>
            <PersonalInformation />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} xxl={{ span: 12, offset: 6 }}>
            <Introduction />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} xxl={{ span: 12, offset: 6 }}>
            <Statistics />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} xxl={{ span: 12, offset: 6 }}>
            <Works />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} xxl={{ span: 12, offset: 6 }}>
            <Paragraph style={{ textAlign: 'center' }}>
              live @ <Link href='https://teanoon.github.io/resume' target='_blank'>https://teanoon.github.io/resume</Link>
            </Paragraph>
          </Col>
        </Row>
      </Space>
    </>
  )
}

export default App
