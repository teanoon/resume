import { Card, Space, Typography } from 'antd'
import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const Introduction: FC = () => {
  const { t } = useTranslation()
  return (
    <>
    <Card>
      <Space direction='vertical'>
        <Title level={4}>{t('introduction')}</Title>
        <Paragraph>{t('introduction-business')}</Paragraph>
        <Paragraph>{t('introduction-architecture')}</Paragraph>
        <Paragraph>{t('introduction-skill')}</Paragraph>
        <Paragraph>{t('introduction-leadership')}</Paragraph>
      </Space>
    </Card>
    </>
  )
}

export default Introduction
