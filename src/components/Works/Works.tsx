import { Card, Col, Row, Space, Timeline, Typography } from 'antd'
import React, { FC } from 'react'
import { Trans, useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const Works: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card>
            <Title level={4}>{t('experience')}</Title>
            <Card title={<Space direction='horizontal'>2015-03 ~ {t('sinbot')} {t('sinobot-role')}</Space>} bordered={false}>
              <Row gutter={[16, 16]}>
                <Col sm={24} md={12}>
                  <Space direction='vertical'>
                    <Trans t={t} i18nKey='sinobot-develop'>
                      <Paragraph strong>develop</Paragraph>
                      <Paragraph>architecture</Paragraph>
                      <Paragraph>portal</Paragraph>
                      <Paragraph>image service</Paragraph>
                      <Paragraph>elasticsearch</Paragraph>
                      <Paragraph>seo</Paragraph>
                      <Paragraph>catalog</Paragraph>
                    </Trans>
                  </Space>
                </Col>
                <Col sm={24} md={12}>
                  <Space direction='vertical'>
                    <Trans t={t} i18nKey='sinobot-manage'>
                      <Paragraph strong>manage</Paragraph>
                      <Paragraph>interview</Paragraph>
                      <Paragraph>training</Paragraph>
                      <Paragraph>review</Paragraph>
                      <Paragraph>tech-share</Paragraph>
                      <Paragraph>team-build</Paragraph>
                    </Trans>
                  </Space>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
        <Col span={24}>
          <Card>
            <Space direction='vertical'>
              <Title level={4}>{t('projects')}</Title>
              <Row gutter={[16, 16]}>
                <Col sm={24} md={24} xl={12}>
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
                <Col sm={24} md={24} xl={12}>
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
