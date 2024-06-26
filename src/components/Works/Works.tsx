import { Card, Col, Row, Space, Timeline, Typography, TimelineItemProps } from 'antd'
import React, { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const Works: FC = () => {
  const { t } = useTranslation()
  const items: TimelineItemProps[] = [
    {
      label: (
        <Space direction='vertical'>
          2015-03 ~
          {t('sinbot')}
        </Space>
      ),
      children: (
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
      )
    },
    {
      label: (
        <Space direction='vertical'>
          2012-11 ~ 2014-06
          {t('guanjie')}
        </Space>
      ),
      children: (
        <Space direction='vertical'>
          <Title level={5}>{t('guanjie-role')}</Title>
          <Trans t={t} i18nKey='guanjie-product'>
            <Paragraph>design credit system</Paragraph>
            <Paragraph>design ux</Paragraph>
            <Paragraph>operation</Paragraph>
          </Trans>
        </Space>
      )
    },
    {
      label: (
        <Space direction='vertical'>
          2011-03 ~ 2012-11
          {t('qqw')}
        </Space>
      ),
      children: (
        <Space direction='vertical'>
          <Title level={5}>{t('qqw-role')}</Title>
          <Trans t={t} i18nKey='qqw-product'>
            <Paragraph>design ux</Paragraph>
            <Paragraph>operation</Paragraph>
          </Trans>
        </Space>
      )
    },
    {
      label: (
        <Space direction='vertical'>
          2005-09 ~ 2009-05
          {t('Zhejiang University of Technology')}
        </Space>
      ),
      children: (
        <Space direction='vertical'>
          <Paragraph>{t('applied physics')}</Paragraph>
        </Space>
      )
    }
  ]

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col md={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
          <Card>
            <Title level={4}>{t('experience')}</Title>
            <Timeline mode='left' items={items} />
          </Card>
        </Col>
        <Col md={{ span: 24, order: 1 }} lg={{ span: 12, order: 2 }}>
          <Card>
            <Space direction='vertical'>
              <Title level={4}>{t('projects')}</Title>
              <Row gutter={[16, 16]}>
                <Col>
                  <Card title={t('project-elasticsearch-title')} bordered={false}>
                    <Paragraph strong>{t('project-elasticsearch-improve-efficiency')}</Paragraph>
                    <Paragraph>{t('project-elasticsearch-multilingual-support')}</Paragraph>
                    <Paragraph>{t('project-elasticsearch-plugin-development')}</Paragraph>
                    <Paragraph>{t('project-elasticsearch-filter')}</Paragraph>
                  </Card>
                  <Card title={t('project-portal-title')} bordered={false}>
                    <Paragraph>{t('project-portal-requirement-analyze')}</Paragraph>
                    <Paragraph>{t('project-portal-global-support')}</Paragraph>
                    <Paragraph>{t('project-portal-coop')}</Paragraph>
                    <Paragraph>{t('project-portal-migration')}</Paragraph>
                  </Card>
                  <Card title={t('project-microservice-title')} bordered={false}>
                    <Paragraph>{t('project-microservice-intialization')}</Paragraph>
                    <Paragraph>{t('project-microservice-architecture')}</Paragraph>
                    <Paragraph>{t('project-microservice-sdk')}</Paragraph>
                  </Card>
                </Col>
                <Col>
                  <Card title={t('project-gradle-title')} bordered={false}>
                    <Paragraph>{t('project-gradle-improve-efficiency')}</Paragraph>
                    <Paragraph>{t('project-gradle-querydsl')}</Paragraph>
                  </Card>
                  <Card title={t('project-image-title')} bordered={false}>
                    <Paragraph strong>{t('project-image-improve-efficiency')}</Paragraph>
                    <Paragraph>{t('project-image-multiple-format-support')}</Paragraph>
                  </Card>
                  <Card title={t('project-seo-title')} bordered={false}>
                    <Paragraph>{t('project-seo-description')}</Paragraph>
                    <Paragraph>{t('project-seo-dedup')}</Paragraph>
                  </Card>
                  <Card title={t('project-ml-title')} bordered={false}>
                    <Paragraph>{t('project-ml-model')}</Paragraph>
                    <Paragraph>{t('project-ml-training')}</Paragraph>
                    <Paragraph>{t('project-ml-efficiency')}</Paragraph>
                  </Card>
                </Col>
              </Row>
            </Space>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Works
