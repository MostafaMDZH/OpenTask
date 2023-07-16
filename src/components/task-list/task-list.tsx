import { MainWrapper } from './task-list.style'
import { Task } from 'types'
import { TaskItem } from 'components/task-item/task-item'
import { AddTask } from 'components/add-task/add-task'
import { getNewTask } from 'utils'
import { Typography, theme } from 'antd'
const { Text } = Typography

type Props = {
    route: number[]
    parentTask: Task | null
    tasks: Task[]
    onRemove: (task: Task) => void
    onUpdate: (route: number[], updatedTask: Task) => void
}

export const TaskList = ({ route, parentTask, tasks, onRemove, onUpdate }: Props) => {

    //theme:
    const { token: { colorTextDescription, marginSM } } = theme.useToken()

    //getTasksList:
    const getTasksList = (tasks: Task[], route: number[]) => {
        let count = 0
        const doneList = tasks.map((task, i) => {
            const newRoute = [...route]
            newRoute.push(i)
            if(newRoute.length === 1 && task.isDone){
                return null
            }else{
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
            }
        })
        return { doneList , count }
    }

    //list and count:
    const { doneList, count } = getTasksList(tasks, route)

    //handleAdd:
    const handleAdd = (value: string) => {
        const newTask = getNewTask(value, true)
        if(parentTask !== null){
            onUpdate(route, {...parentTask, subTasks: [...parentTask.subTasks, newTask]})
        }else{
            onUpdate(route, newTask)
        }
    }
    
    return (
        <MainWrapper>

            {/* count */}
            {parentTask === null &&
            <Text style={{ color: colorTextDescription, marginBottom: marginSM }}>
                {count > 0 ? `You have ${count} main tasks todo:` : 'Add some tasks:'}
            </Text>}

            {/* list */}
            {doneList}

            {/* empty new task */}
            <AddTask onAdd={handleAdd}/>

        </MainWrapper>
    )

}