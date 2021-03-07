import { Avatar, Card, Descriptions, Divider, Space, Typography } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import portrait from './portrait.jpg'

const { Title } = Typography

const PersonalInformation: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Divider>
        <Space direction='vertical'>
          <Avatar
            size={100}
            icon={<img src={portrait} alt='portrait' />}
            />
          <Title level={3}>{t('user-name')}</Title>
        </Space>
      </Divider>
      <Card>
        <Descriptions>
          <Descriptions.Item label={t('title')}>{t('user-title')}</Descriptions.Item>
          <Descriptions.Item label={t('role')}>{t('user-role')}</Descriptions.Item>
          <Descriptions.Item label={t('live')}>{t('user-live')}</Descriptions.Item>
          <Descriptions.Item label={t('birth')}>{t('user-birth')}</Descriptions.Item>
          <Descriptions.Item label={t('email')}>{t('user-email')}</Descriptions.Item>
          <Descriptions.Item label={t('telephone')}>{t('user-telephone')}</Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  )
}

export default PersonalInformation
