import { Card, Col, Row, Typography } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const { Paragraph } = Typography

const Projects: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={12}>
          <Card title={t('project title')}>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
          </Card>
        </Col>
        <Col sm={24} md={12}>
          <Card title={t('project title')}>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
          </Card>
        </Col>
        <Col sm={24} md={12}>
          <Card title={t('project title')}>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
          </Card>
        </Col>
        <Col sm={24} md={12}>
          <Card title={t('project title')}>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
          </Card>
        </Col>
        <Col sm={24} md={12}>
          <Card title={t('project title')}>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
          </Card>
        </Col>
        <Col sm={24} md={12}>
          <Card title={t('project title')}>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
          </Card>
        </Col>
        <Col sm={24} md={12}>
          <Card title={t('project title')}>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
            <Paragraph>{t('project description')}</Paragraph>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default Projects
