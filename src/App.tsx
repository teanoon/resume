import './App.css'

import { Card, Col, Row, Space } from 'antd'
import React, { FC, Suspense } from 'react'

import PersonalInformation from './components/PersonalInformation/PersonalInformation'
import SelfDescription from './components/SelfDescription/SelfDescription'
import Statistics from './components/Statistics/Statistics'
import Works from './components/Works/Works'

const App: FC = () => {
  return (
    <Suspense fallback='loading...'>
      <Space direction='vertical' size='large' style={{ padding: 16 }}>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={{ span: 12, offset: 6 }}>
            <PersonalInformation />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={{ span: 12, offset: 6 }}>
            <Card>
              <SelfDescription />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={{ span: 12, offset: 6 }}>
            <Card>
              <Statistics />
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={{ span: 12, offset: 6 }}>
            <Works />
          </Col>
        </Row>
      </Space>
    </Suspense>
  )
}

export default App
