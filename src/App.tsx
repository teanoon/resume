import './App.scss'

import { Col, Row, Space, Tag, Typography } from 'antd'
import { FC, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'

import Introduction from './components/Introduction/Introduction'
import PersonalInformation from './components/PersonalInformation/PersonalInformation'
import Statistics from './components/Statistics/Statistics'
import Works from './components/Works/Works'

const { Link, Paragraph } = Typography

const App: FC = () => {
  const languageKey = 'language'
  const navigate = useNavigate()
  const location = useLocation()
  const { t, i18n } = useTranslation()
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (!params.has(languageKey)) {
      return
    }
    if (params.get(languageKey) === 'en' && i18n.language === 'en-US') {
      return
    }
    if (params.get(languageKey) === 'cn' && i18n.language === 'zh-CN') {
      return
    }
    i18n.changeLanguage(params.get(languageKey) === 'en' ? 'en-US' : 'zh-CN')
  }, [i18n, location])

  const ref = useRef(null)
  const handlePrint = useReactToPrint({
    content: () => ref.current
  })
  return (
    <div ref={ref}>
      <Space direction='vertical' size='large' style={{ padding: 16 }}>
        <Row gutter={[16, 16]}>
          <Col sm={24} md={24} xxl={{ span: 12, offset: 6 }} style={{ textAlign: 'right' }}>
            <Tag.CheckableTag checked={i18n.language === 'zh-CN'} onClick={() => navigate('?language=cn')}>{t('CN')}</Tag.CheckableTag>
            <Tag.CheckableTag checked={i18n.language === 'en-US'} onClick={() => navigate('?language=en')}>{t('EN')}</Tag.CheckableTag>
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
              <Space>
                live @ <Link href='https://teanoon.github.io/resume' target='_blank'>https://teanoon.github.io/resume</Link>
                or
                <Link onClick={handlePrint}>print</Link>
              </Space>
            </Paragraph>
          </Col>
        </Row>
      </Space>
    </div>
  )
}

export default App
