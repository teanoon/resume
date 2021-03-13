import { Card, Col, Row, Space, Timeline, Typography } from 'antd'
import React, { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const Works: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col sm={{ span: 24, order: 2 }} md={{ span: 12, order: 1 }}>
          <Card>
            <Title level={4}>{t('experience')}</Title>
            <Timeline mode='left'>
              <Timeline.Item label={<Space direction='vertical'>
                2015-03 ~
                {t('sinbot')}
              </Space>}>
                <Space direction='vertical'>
                  <Title level={5}>{t('sinobot-role')}</Title>
                  <Trans t={t} i18nKey='sinobot-develop'>
                    <Paragraph strong>develop</Paragraph>
                    <Paragraph>architecture</Paragraph>
                    <Paragraph>portal</Paragraph>
                    <Paragraph>image service</Paragraph>
                    <Paragraph>elasticsearch</Paragraph>
                    <Paragraph>seo</Paragraph>
                    <Paragraph>catalog</Paragraph>
                  </Trans>
                  <Trans t={t} i18nKey='sinobot-manage'>
                    <Paragraph strong>manage</Paragraph>
                    <Paragraph>interview</Paragraph>
                    <Paragraph>training</Paragraph>
                    <Paragraph>review</Paragraph>
                    <Paragraph>tech-share</Paragraph>
                    <Paragraph>team-build</Paragraph>
                  </Trans>
                </Space>
              </Timeline.Item>
              <Timeline.Item label={<Space direction='vertical'>
                2012-11 ~ 2014-06
                {t('guanjie')}
              </Space>}>
                <Space direction='vertical'>
                  <Title level={5}>{t('guanjie-role')}</Title>
                  <Trans t={t} i18nKey='guanjie-product'>
                    <Paragraph>design credit system</Paragraph>
                    <Paragraph>design ux</Paragraph>
                    <Paragraph>operation</Paragraph>
                  </Trans>
                </Space>
              </Timeline.Item>
              <Timeline.Item label={<Space direction='vertical'>
                2011-03 ~ 2012-11
                {t('qqw')}
              </Space>}>
                <Space direction='vertical'>
                  <Title level={5}>{t('qqw-role')}</Title>
                  <Trans t={t} i18nKey='qqw-product'>
                    <Paragraph>design ux</Paragraph>
                    <Paragraph>operation</Paragraph>
                  </Trans>
                </Space>
              </Timeline.Item>
              <Timeline.Item label={<Space direction='vertical'>
                2009-11 ~ 2011-03
                {t('sales')}
              </Space>}>
                <Space direction='vertical'>
                  <Title level={5}>{t('sales-role')}</Title>
                  <Trans t={t} i18nKey='sales-sale'>
                    <Paragraph strong>sale plan</Paragraph>
                    <Paragraph>visit potential customers</Paragraph>
                    <Paragraph>seo-sem</Paragraph>
                  </Trans>
                  <Trans t={t} i18nKey='sales-manage'>
                    <Paragraph strong>manage</Paragraph>
                    <Paragraph>make sale plan</Paragraph>
                    <Paragraph>morning meeting</Paragraph>
                  </Trans>
                </Space>
              </Timeline.Item>
              <Timeline.Item label={<Space direction='vertical'>
                2005-09 ~ 2009-05
                {t('Zhejiang University of Technology')}
              </Space>}>
                <Space direction='vertical'>
                  <Paragraph>{t('applied physics')}</Paragraph>
                </Space>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
        <Col sm={{ span: 24, order: 1 }} md={{ span: 12, order: 2 }}>
          <Card>
            <Space direction='vertical'>
              <Title level={4}>{t('projects')}</Title>
              <Card title={t('project-elasticsearch-title')} bordered={false}>
                <Paragraph>{t('project-elasticsearch-improve-efficiency')}</Paragraph>
                <Paragraph>{t('project-elasticsearch-multilingual-support')}</Paragraph>
                <Paragraph>{t('project-elasticsearch-plugin-development')}</Paragraph>
                <Paragraph>{t('project-elasticsearch-filter')}</Paragraph>
              </Card>
              <Card title={t('project-portal-title')} bordered={false}>
                <Paragraph>{t('project-portal-requirement-analyze')}</Paragraph>
                <Paragraph>{t('project-portal-global-support')}</Paragraph>
                <Paragraph>{t('project-portal-coop')}</Paragraph>
              </Card>
              <Card title={t('project-microservice-title')} bordered={false}>
                <Paragraph>{t('project-microservice-intialization')}</Paragraph>
                <Paragraph>{t('project-microservice-architecture')}</Paragraph>
                <Paragraph>{t('project-microservice-sdk')}</Paragraph>
              </Card>
              <Card title={t('project-ml-title')} bordered={false}>
                <Paragraph>{t('project-ml-model')}</Paragraph>
                <Paragraph>{t('project-ml-training')}</Paragraph>
                <Paragraph>{t('project-ml-efficiency')}</Paragraph>
              </Card>
              <Card title={t('project-gradle-title')} bordered={false}>
                <Paragraph>{t('project-gradle-improve-efficiency')}</Paragraph>
                <Paragraph>{t('project-gradle-querydsl')}</Paragraph>
              </Card>
              <Card title={t('project-image-title')} bordered={false}>
                <Paragraph>{t('project-image-improve-efficiency')}</Paragraph>
                <Paragraph>{t('project-image-multiple-format-support')}</Paragraph>
              </Card>
              <Card title={t('project-seo-title')} bordered={false}>
                <Paragraph>{t('project-seo-description')}</Paragraph>
              </Card>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Works
