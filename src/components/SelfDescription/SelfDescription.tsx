import { Typography } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const SelfDescription: FC = () => {
  const { t } = useTranslation()
  return (
    <>
      <Title level={4}>{t('self-description')}</Title>
      <Paragraph>{t('enthusiasm, empathy')}</Paragraph>
      <Paragraph>{t('management')}</Paragraph>
      <Paragraph>{t('love-coding')}</Paragraph>
      <Paragraph>{t('methodology')}</Paragraph>
      <Paragraph>{t('gaming')}</Paragraph>
    </>
  )
}

export default SelfDescription
