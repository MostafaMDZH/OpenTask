import { HeaderContainer, ListContainer, MainWrapper } from './done-list.style'
import { Task } from 'types'
import { TaskItem } from 'components/task-item/task-item'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Typography, theme } from 'antd'
import { useState } from 'react'
const { Text } = Typography

type Props = {
    tasks: Task[]
}

export const DoneList = ({ tasks }: Props) => {

    //theme:
    const { token: { fontSizeSM, colorTextDescription } } = theme.useToken()

    //state:
    const [ isExpanded, setIsExpanded ] = useState(true)
    
    //render:
    return (
        <MainWrapper>

            <HeaderContainer>

                {/* expand button */}
                <Button
                    type='text'
                    shape='circle'
                    title='Expand'
                    onClick={() => setIsExpanded(!isExpanded)}
                    icon={
                        isExpanded ? <UpOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/> :
                        <DownOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/>
                    }
                />

                {/* total */}
                <Text style={{ color: colorTextDescription }}>{`${tasks.length} Done`}</Text>

            </HeaderContainer>

            {/* list */}
            {isExpanded &&
            <ListContainer>

                {tasks.map(task =>
                    <TaskItem
                        key={task.id}
                        task={task}
                        onValueUpdate={newValue => console.log('onValueUpdate', newValue)}
                        onCheck={() => console.log('onCheck')}
                        onAddSubtask={() => console.log('onAddSubtask')}
                        onRemove={() => console.log('onRemove')}
                    />
                )}

            </ListContainer>}

        </MainWrapper>
    )

}