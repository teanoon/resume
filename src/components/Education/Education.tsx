import { Typography } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const Education: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Title level={4}>{t('Education')}</Title>
      <Paragraph strong>{t('Zhejiang University of Technology')}</Paragraph>
      <Paragraph disabled>2005 ~ 2009</Paragraph>
      <Paragraph>{t('applied physics')}</Paragraph>
    </>
  )
}

export default Education
