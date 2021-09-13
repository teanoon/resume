import { Card, Col, Progress, Row, Statistic, Typography } from 'antd'
import { formatDuration } from 'date-fns'
import { enUS, zhCN } from 'date-fns/locale'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

const Statistics: FC = () => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language === 'zh-CN' ? zhCN : enUS
  return (
    <>
    <Card>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Statistic title={t('developer-years')} value={formatDuration({ years: 6 }, { locale })} />
            </Col>
            <Col span={12}>
              <Statistic title={t('commits-per-year')} value={'1.4k'} />
            </Col>
            <Col span={12}>
              <Statistic title={t('pm-years')} value={formatDuration({ years: 4 }, { locale })} />
            </Col>
            <Col span={12}>
              <Statistic title={t('manager-years')} value={formatDuration({ years: 6 }, { locale })} />
            </Col>
            <Col span={12}>
              <Statistic title={t('team-size')} value={`6 ${t('people')}`} />
            </Col>
          </Row>
        </Col>
        <Col sm={22} md={10}>
          <Text>Java/MicroService/ElasticSearch</Text>
          <Progress percent={80} format={() => t('expert')} />
          <Text>Spring Boot/Framework/Data/Cloud/Security</Text>
          <Progress percent={75} format={() => t('expert')} />
          <Text>MySQL/Redis/Mongo/SQS/DynamoDB</Text>
          <Progress percent={65} format={() => t('procifient')} />
          <Text>Kubernetes/Docker/OPS</Text>
          <Progress percent={60} format={() => t('procifient')} />
          <Text>Ruby On Rails/Flask/React</Text>
          <Progress percent={40} format={() => t('procifient')} />
          <Text>Tensorflow + SageMaker</Text>
          <Progress percent={20} format={() => t('competent')} />
        </Col>
      </Row>
    </Card>
    </>
  )
}

export default Statistics
