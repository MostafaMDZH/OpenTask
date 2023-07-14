import { Button, Checkbox, Input, theme } from 'antd'
import { ButtonsContainer, MainWrapper, TaskWrapper } from './task-item.style'
import { PlusOutlined, DownOutlined, UpOutlined, CloseOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
import { Task } from 'types'
import { TaskList } from 'components/task-list/task-list'

type Props = {
    task: Task
    onValueUpdate: (newValue: string) => void
    onCheck: () => void
    onAddSubtask: () => void
    onRemove: () => void
}

export const TaskItem = ({ task, onValueUpdate, onCheck, onAddSubtask, onRemove }: Props) => {

    //theme:
    const { token: { fontSizeSM, colorText, colorTextDescription } } = theme.useToken()

    //state:
    const [ inputRows, setInputRows ] = useState(1)
    const [ isFocused, setIsFocused ] = useState(false)
    const [ isHovered, setIsHovered ] = useState(false)
    const [ isButtonsVisible, setIsButtonsVisible ] = useState(false)
    const [ isExpanded, setIsExpanded ] = useState(task.subTasks.length > 0)

    //handleKeyDown:
    const handleKeyDown = (e: any) => {
        if(e.key === 'Enter'){
            onAddSubtask()
        }else if(e.key === 'Backspace' && e.target.value === ''){
            onRemove()
        }
    }

    //handleBlur:
    const handleBlur = (e: any) => {
        setIsFocused(false)
        onValueUpdate(e.target.value)
    }

    //effect:
    useEffect(() => {
        if(isFocused){
            setIsButtonsVisible(true)
        }else if(isHovered){
            setIsButtonsVisible(true)
        }else{
            setIsButtonsVisible(false)
        }
    }, [ isFocused, isHovered ])
    
    return (
        <MainWrapper>

            <TaskWrapper
                onMouseOver={e => {e.stopPropagation(); setIsHovered(true)}}
                onMouseOut={() => setIsHovered(false)}
            >

                {/* checkbox */}
                <Checkbox onChange={onCheck}/>

                {/* input */}
                <Input
                    defaultValue={task.value}
                    bordered={false}
                    placeholder='Add task'
                    style={{
                        flex: 1,
                        color: task.isChecked ? colorTextDescription : colorText,
                        textDecoration: task.isChecked ? 'line-through' : 'none'
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={e => handleBlur(e)}
                    onKeyDown={e => handleKeyDown(e)}
                />

                <ButtonsContainer style={{ opacity: isButtonsVisible ? 1 : 0 }}>
                    
                    {task.subTasks.length === 0 ?

                        //add button:
                        <Button
                            type='text'
                            shape='circle'
                            title='Add subtasks'
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onClick={onAddSubtask}
                            icon={<PlusOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/>}
                        /> :
                        
                        // expand button:
                        <Button
                            type='text'
                            shape='circle'
                            title='Expand'
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onClick={() => setIsExpanded(!isExpanded)}
                            icon={
                                isExpanded ? <UpOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/> :
                                <DownOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/>
                            }
                        />
                    }

                    {/* close button */}
                    <Button
                        type='text'
                        shape='circle'
                        title='Remove'
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onClick={onRemove}
                        icon={<CloseOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/>}
                    />

                </ButtonsContainer>

            </TaskWrapper>

            {/* sub tasks */}
            {isExpanded && <TaskList tasks={task.subTasks}/>}

        </MainWrapper>
    )

}