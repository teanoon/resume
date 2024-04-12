import { Card, Col, Progress, Row, Statistic, Typography } from 'antd'
import { formatDuration, getYear } from 'date-fns'
import { enUS, zhCN } from 'date-fns/locale'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

const Statistics: FC = () => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language === 'zh-CN' ? zhCN : enUS
  const devYears = getYear(new Date()) - 2015
  return (
    <>
    <Card>
      <Row gutter={[16, 16]}>
        <Col sm={24} md={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Statistic title={t('developer-years')} value={formatDuration({ years: devYears }, { locale })} />
            </Col>
            <Col span={12}>
              <Statistic title={t('commits-per-year')} value={'1.4k commits'} />
            </Col>
            <Col span={12}>
              <Statistic title={t('pm-years')} value={formatDuration({ years: 4 }, { locale })} />
            </Col>
            <Col span={12}>
              <Statistic title={t('manager-years')} value={formatDuration({ years: devYears }, { locale })} />
            </Col>
            <Col span={12}>
              <Statistic title={t('team-size')} value={`6 ${t('people')}`} />
            </Col>
          </Row>
        </Col>
        <Col sm={22} md={10}>
          <Text>Java/MicroService/ElasticSearch</Text>
          <Progress percent={99} format={() => t('expert')} />
          <Text>Spring Boot/Framework/Data/Cloud/Security</Text>
          <Progress percent={99} format={() => t('expert')} />
          <Text>Kubernetes/Docker/OPS/APM</Text>
          <Progress percent={85} format={() => t('expert')} />
          <Text>Clickhouse/MySQL/Redis/Mongo/SQS/DynamoDB</Text>
          <Progress percent={75} format={() => t('procifient')} />
          <Text>Go/Ruby On Rails/Flask/React</Text>
          <Progress percent={75} format={() => t('procifient')} />
          <Text>Tensorflow + SageMaker</Text>
          <Progress percent={50} format={() => t('competent')} />
        </Col>
      </Row>
    </Card>
    </>
  )
}

export default Statistics
