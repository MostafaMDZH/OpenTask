import { TaskList } from 'components/task-list/task-list'
import { MainWrapper } from './board.style'
import { useState } from 'react'
import { DoneList } from 'components/done-list/done-list'
import { defaultTasks } from 'data/mock'
import { Task } from 'types'

export const Board = () => {

    //state:
    const [ tasks, setTasks ] = useState(defaultTasks)

    //update:
    const update = (tasks: Task[], route: number[], updatedTask: Task): Task[] => {
        if(route.length === 0){
            return[...tasks, updatedTask]
        }else if(route.length === 1){
            tasks[route[0]] = {...updatedTask}
        }else if(route.length > 1){
            const tsk = tasks[route[0]]
            const newRout = [...route]
            newRout.shift()
            const updatedSubTasks = update([...tsk.subTasks], newRout, updatedTask)
            tasks[route[0]].subTasks = updatedSubTasks
        }
        return tasks
    }

    //removeTask:
    const removeTask = (tasks: Task[], task: Task): Task[] => {
        let found = false
        let updatedTasks = tasks.filter(tsk => {
            if(tsk.id === task.id){
                found = true
                return false
            }else{
                return true
            }
        })
        if(!found){
            updatedTasks = tasks.map(tsk => {
                const updatedSubTasks = removeTask([...tsk.subTasks], task)
                return { ...tsk, subTasks: updatedSubTasks }
            })
        }
        return updatedTasks
    }
    
    //render:
    return (
        <MainWrapper>

            {/* tasks list */}
            <TaskList
                route={[]}
                parentTask={null}
                tasks={tasks}
                onRemove={task => setTasks([...removeTask(tasks, task)])}
                onUpdate={(route, updatedTask) => setTasks([...update(tasks, route, updatedTask)])}
            />

            {/* done list */}
            <DoneList
                route={[]}
                parentTask={null}
                tasks={tasks}
                onRemove={task => setTasks([...removeTask(tasks, task)])}
                onUpdate={(route, updatedTask) => setTasks([...update(tasks, route, updatedTask)])}
            />
            
        </MainWrapper>
    )

}