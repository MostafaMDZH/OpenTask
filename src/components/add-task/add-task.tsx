import { Input, theme } from 'antd'
import { IconContainer, MainWrapper } from './add-task.style'
import { PlusOutlined } from '@ant-design/icons'

type Props = {
    onAdd: (value: string) => void
}

export const AddTask = ({ onAdd }: Props) => {

    //theme:
    const { token: { fontSizeSM, colorTextDescription } } = theme.useToken()
    
    return (
        <MainWrapper>

            {/* add icon */}
            <IconContainer>
                <PlusOutlined
                    style={{
                        fontSize: fontSizeSM,
                        color: colorTextDescription
                    }}
                />
            </IconContainer>

            {/* input */}
            <Input
                bordered={false}
                placeholder='Add task'
                style={{ flex: 1 }}
                onChange={e => onAdd(e.target.value)}
            />

        </MainWrapper>
    )

}