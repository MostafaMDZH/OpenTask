import { Button, Checkbox, Input, InputRef, Typography, theme } from 'antd'
import { ButtonsContainer, MainWrapper, TaskListContainer, TaskWrapper } from './task-item.style'
import { PlusOutlined, DownOutlined, UpOutlined, CloseOutlined } from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import { Task } from 'types'
import { TaskList } from 'components/task-list/task-list'
import { getNewTask } from 'utils'
const { Text } = Typography

type Props = {
    route: number[]
    parentTask: Task | null
    task: Task
    onUpdate: (route: number[], updatedTask: Task) => void
    onRemove: (task: Task) => void
}

export const TaskItem = ({ route, parentTask, task, onRemove, onUpdate }: Props) => {

    //theme:
    const { token: { fontSizeSM, colorText, colorTextDescription, paddingSM } } = theme.useToken()

    //ref:
    const inputRef = useRef<InputRef>(null)

    //state:
    const [ isHovered, setIsHovered ] = useState(false)
    const [ isButtonsVisible, setIsButtonsVisible ] = useState(false)

    //handleKeyDown:
    const handleKeyDown = (e: any) => {
        if(e.key === 'Enter'){ // add task to parent
            const newRoute = [...route]
            newRoute.pop()
            if(parentTask !== null){
                const newTask = getNewTask('', true, parentTask.isDone)
                onUpdate(newRoute, {...parentTask, subTasks: [...parentTask.subTasks, newTask]})
            }else{
                const newTask = getNewTask('', true, task.isDone)
                onUpdate(newRoute, newTask)
            }
        }else if((e.key === 'Backspace' || e.key === 'Delete') && e.target.value === ''){
            onRemove(task)
        }
    }

    //markAllDone:
    const markAllDone = (tasks: Task[], isDone: boolean): Task[] => {
        const updatedTasks = tasks.map(tsk => {
            const updatedSubTasks = markAllDone([...tsk.subTasks], isDone)
            return { ...tsk, isDone: isDone, subTasks: updatedSubTasks }
        })
        return updatedTasks
    }

    //effect:
    useEffect(() => {
        if(task.isFocused){
            setIsButtonsVisible(true)
            inputRef.current!.focus()
        }else if(isHovered){
            setIsButtonsVisible(true)
        }else{
            setIsButtonsVisible(false)
        }
    }, [ task, isHovered ])
    
    return (
        <MainWrapper>

            <TaskWrapper
                onMouseOver={e => {e.stopPropagation(); setIsHovered(true)}}
                onMouseOut={() => setIsHovered(false)}
            >

                {/* checkbox */}
                <Checkbox checked={task.isDone} onChange={e => {
                    const updatedTask = {
                        ...task,
                        isDone: e.target.checked,
                        subTasks: markAllDone(task.subTasks, e.target.checked)
                    }
                    onUpdate(route, updatedTask)
                }}/>

                {/* [...] */}
                {!task.isExpanded && task.subTasks.length > 0 &&
                <Text type='secondary' style={{ marginLeft: paddingSM, whiteSpace: 'nowrap' }}>{'[...]'}</Text>}

                {/* input */}
                <Input
                    ref={inputRef}
                    defaultValue={task.value}
                    bordered={false}
                    style={{
                        minWidth: 200,
                        color: task.isDone ? colorTextDescription : colorText,
                        textDecoration: task.isDone ? 'line-through' : 'none'
                    }}
                    onFocus={() => onUpdate(route, {...task, isFocused: true})}
                    onBlur={e => onUpdate(route, {...task, value: e.target.value, isFocused: false})}
                    onKeyDown={e => handleKeyDown(e)}
                />

                <ButtonsContainer style={{ opacity: isButtonsVisible ? 1 : 0 }}>
                    
                    {task.subTasks.length === 0 ?

                        //add button:
                        <Button
                            type='text'
                            shape='circle'
                            title='Add subtasks'
                            onFocus={() => setIsButtonsVisible(true)}
                            onBlur={() => setIsButtonsVisible(false)}
                            onClick={() => onUpdate(route, {...task, isExpanded: true, subTasks: [...task.subTasks, getNewTask('', true, task.isDone)]})}
                            icon={<PlusOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/>}
                        />
                        
                        :
                        
                        // expand button:
                        <Button
                            type='text'
                            shape='circle'
                            title='Expand'
                            onFocus={() => setIsButtonsVisible(true)}
                            onBlur={() => setIsButtonsVisible(false)}
                            onClick={() => onUpdate(route, {...task, isExpanded: !task.isExpanded})}
                            icon={
                                task.isExpanded ? <UpOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/> :
                                <DownOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/>
                            }
                        />
                    }

                    {/* close button */}
                    <Button
                        type='text'
                        shape='circle'
                        title='Remove'
                        onFocus={() => setIsButtonsVisible(true)}
                        onBlur={() => setIsButtonsVisible(false)}
                        onClick={() => onRemove(task)}
                        icon={<CloseOutlined style={{ fontSize: fontSizeSM, color: colorTextDescription }}/>}
                    />

                </ButtonsContainer>

            </TaskWrapper>

            {/* sub tasks */}
            {task.isExpanded &&
            <TaskListContainer>
                <TaskList
                    route={route}
                    parentTask={task}
                    tasks={task.subTasks}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />
            </TaskListContainer>}

        </MainWrapper>
    )

}