import { Avatar, Card, Descriptions, Divider, Space, Typography } from 'antd'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { UserOutlined } from '@ant-design/icons'

const { Title } = Typography

const PersonalInformation: FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <Divider>
        <Space direction='vertical'>
          <Avatar
            size={100}
            icon={<UserOutlined />}
            />
          <Title level={3}>{t('username')}</Title>
        </Space>
      </Divider>
      <Card>
        <Descriptions layout='vertical'>
          <Descriptions.Item label={t('title')}>{t('user.name')}</Descriptions.Item>
          <Descriptions.Item label={t('role')}>{t('user.role')}</Descriptions.Item>
          <Descriptions.Item label={t('live')}>{t('user.live')}</Descriptions.Item>
          <Descriptions.Item label={t('birth')}>{t('user.birth')}</Descriptions.Item>
          <Descriptions.Item label={t('email')}>{t('user.email')}</Descriptions.Item>
          <Descriptions.Item label={t('telephone')}>{t('user.telephone')}</Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  )
}

export default PersonalInformation
