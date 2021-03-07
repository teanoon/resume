import { Space, Typography } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const Introduction: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Space direction='vertical'>
        <Title level={4}>{t('introduction')}</Title>
        <Paragraph>{t('passion, curiosity, empathy')}</Paragraph>
        <Paragraph>{t('management')}</Paragraph>
        <Paragraph>{t('love-coding')}</Paragraph>
        <Paragraph>{t('methodology')}</Paragraph>
        <Paragraph>{t('gaming')}</Paragraph>
      </Space>
    </>
  )
}

export default Introduction
