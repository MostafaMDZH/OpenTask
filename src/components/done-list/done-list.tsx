import { HeaderContainer, ListContainer, MainWrapper } from './done-list.style'
import { Task } from 'types'
import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Typography, theme } from 'antd'
import { useState } from 'react'
import { TaskItem } from 'components/task-item/task-item'
import { AddTask } from 'components/add-task/add-task'
import { getNewTask } from 'utils'
const { Text } = Typography

type Props = {
    route: number[]
    parentTask: Task | null
    tasks: Task[]
    onUpdate: (route: number[], updatedTask: Task) => void
    onRemove: (task: Task) => void
}

export const DoneList = ({ route, parentTask, tasks, onRemove, onUpdate }: Props) => {

    //theme:
    const { token: { fontSizeSM, colorTextDescription } } = theme.useToken()

    //state:
    const [ isExpanded, setIsExpanded ] = useState(true)

    //getTasksList:
    const getTasksList = (tasks: Task[], route: number[]) => {
        let count = 0
        const doneList = tasks.map((task, i) => {
            const newRoute = [...route]
            newRoute.push(i)
            if(newRoute.length === 1 && task.isDone){
                count++
                return (
                    <TaskItem
                        key={task.id}
                        route={newRoute}
                        parentTask={parentTask}
                        task={task}
                        onRemove={onRemove}
                        onUpdate={onUpdate}
                    />
                )
            }else{
                return null
            }
        })
        return { doneList , count }
    }

    //list and count:
    const { doneList, count } = getTasksList(tasks, route)
    
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

                {/* count */}
                <Text style={{ color: colorTextDescription }}>
                    {count > 0 ? `${count} Done` : 'Nothing done'}
                </Text>

            </HeaderContainer>

            {/* list */}
            {isExpanded &&
            <ListContainer>
                
                {/* list */}
                {doneList}

                {/* empty new task */}
                <AddTask onAdd={val => {
                    const newTask = getNewTask(val, true, true)
                    if(parentTask !== null){
                        onUpdate(route, {...parentTask, subTasks: [...parentTask.subTasks, newTask]})
                    }else{
                        onUpdate(route, newTask)
                    }
                }}/>

            </ListContainer>}

        </MainWrapper>
    )

}