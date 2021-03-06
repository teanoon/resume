import { Col, Progress, Row, Statistic, Typography } from 'antd'
import { formatDuration } from 'date-fns'
import { enUS, zhCN } from 'date-fns/locale'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

const Statistics: FC = () => {
  const { t } = useTranslation()
  const YearProgress: FC<{ year: number }> = ({ year }) => {
    const { i18n } = useTranslation()
    const maxYear = 0.07
    const locale: Locale = i18n.language === 'zh-CN' ? zhCN : enUS
    const format = (percent?: number) => formatDuration({ years: (percent || 0) * maxYear }, { locale })
    return <Progress percent={year / maxYear} format={format} />
  }
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Statistic title={t('example')} value={1234} />
            </Col>
            <Col span={12}>
              <Statistic title={t('example')} value={1234} />
            </Col>
            <Col span={12}>
              <Statistic title={t('example')} value={1234} />
            </Col>
            <Col span={12}>
              <Statistic title={t('example')} value={1234} />
            </Col>
          </Row>
        </Col>
        <Col xs={24} lg={12}>
          <Text>Java/Spring/ElasticSearch</Text>
          <YearProgress year={6} />
          <Text>Manage/Lead</Text>
          <YearProgress year={6} />
          <Text>Docker/OPS</Text>
          <YearProgress year={4} />
          <Text>Typescript/Angular/React</Text>
          <YearProgress year={2} />
          <Text>Ruby On Rails/Python</Text>
          <YearProgress year={2} />
          <Text>Tensorflow + SageMaker</Text>
          <YearProgress year={0.5} />
        </Col>
      </Row>
    </>
  )
}

export default Statistics
