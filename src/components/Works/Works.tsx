import { Card, Col, Row, Timeline, Typography } from 'antd'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'
import Education from '../Education/Education'

const { Title, Paragraph } = Typography

const Works: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Card>
            <Title level={4}>{t('experience')}</Title>
            <Timeline mode='left'>
              <Timeline.Item label='2015-03'>
                <Title level={5}>{t('sinbot')}</Title>
                <ol>
                  <li><Paragraph>{t('develop')}</Paragraph></li>
                  <li><Paragraph>{t('manage')}</Paragraph></li>
                </ol>
              </Timeline.Item>
              <Timeline.Item label='2012-11 ~ 2014-06'>
                <Title level={5}>{t('guanjie')}</Title>
                <ol>
                  <li><Paragraph>{t('develop')}</Paragraph></li>
                  <li><Paragraph>{t('manage')}</Paragraph></li>
                </ol>
              </Timeline.Item>
              <Timeline.Item label='2010-03 ~ 2012-11'>
                <Title level={5}>{t('qqw')}</Title>
                <ol>
                  <li><Paragraph>{t('develop')}</Paragraph></li>
                  <li><Paragraph>{t('manage')}</Paragraph></li>
                </ol>
              </Timeline.Item>
              <Timeline.Item label='2009-05 ~ 2010-03'>
                <Title level={5}>{t('sales')}</Title>
                <ol>
                  <li><Paragraph>{t('develop')}</Paragraph></li>
                  <li><Paragraph>{t('manage')}</Paragraph></li>
                </ol>
              </Timeline.Item>
            </Timeline>
          </Card>
          <Card>
            <Education />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Card title={t('project title')}>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={t('project title')}>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={t('project title')}>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={t('project title')}>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={t('project title')}>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={t('project title')}>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
              </Card>
            </Col>
            <Col span={12}>
              <Card title={t('project title')}>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
                <Paragraph>{t('project description')}</Paragraph>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Works
