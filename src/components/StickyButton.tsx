import { PlusOutlined } from '@ant-design/icons'
import { Affix, Button } from 'antd'

export const StickyButton = () => {
  return (
    <Affix>
      <Button style={{ margin: '10px' }} size="large" type="primary">
        <PlusOutlined /> Add Patient
      </Button>
    </Affix>
  )
}
