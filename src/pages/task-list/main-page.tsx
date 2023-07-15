import { TaskList } from 'components/task-list/task-list'
import { MainWrapper } from './main-page.style'
import { useState } from 'react'
import { DoneList } from 'components/done-list/done-list'
import { defaultTasks } from 'data/mock'
import { Task } from 'types'

export const MainPage = () => {

    //state:
    const [ tasks, setTasks ] = useState(defaultTasks)

    //handleAdd:
    const handleAdd = (parentTask: Task | null, value: string) => {

        //new task:
        const date = new Date()
        const newTask: Task = {
            id: date.getTime(),
            value: value,
            isDone: false, //todo, also: focus and expand
            subTasks: []
        }

        if(parentTask === null){ //add to root
            setTasks([ ...tasks, newTask ])
        }else{
            const updatedTasks = addTask(tasks, parentTask, newTask)
            setTasks([...updatedTasks])
        }
    }

    //addTask:
    const addTask = (tasks: Task[], parentTask: Task, newTask: Task): Task[] => {
        const updatedTasks = tasks.map(tsk => {
            if(tsk.id === parentTask.id){
                return { ...tsk, subTasks: [...tsk.subTasks, newTask] }
            }else{
                const updatedSubTasks = addTask([...tsk.subTasks], {...parentTask}, newTask)
                return { ...tsk, subTasks: updatedSubTasks }
            }
        })
        return updatedTasks
    }

    //handleCheck:
    const handleCheck = (tasks: Task[], task: Task, isDone: boolean) => {
        const updatedTasks = updateDone(tasks, task, isDone)
        setTasks([...updatedTasks])
    }

    //updateDone:
    const updateDone = (tasks: Task[], task: Task | null, isDone: boolean): Task[] => {
        const updatedTasks = tasks.map(tsk => {
            if(task !== null){
                if(tsk.id === task.id){
                    // also update all the sub tasks:
                    const updatedSubTasks = updateDone([...tsk.subTasks], null, isDone)
                    return { ...tsk, isDone: isDone, subTasks: updatedSubTasks }
                }else{
                    const updatedSubTasks = updateDone([...tsk.subTasks], {...task}, isDone)
                    return { ...tsk, subTasks: updatedSubTasks }
                }
            }else{ //apply to all:
                const updatedSubTasks = updateDone([...tsk.subTasks], null, isDone)
                return { ...tsk, isDone: isDone, subTasks: updatedSubTasks }
            }
        })
        return updatedTasks
    }

    //handleRemove:
    const handleRemove = (task: Task) => {
        console.log('task', task)
        const updatedTasks = removeTask(tasks, task)
        setTasks([...updatedTasks])
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
                parentTask={null}
                tasks={tasks.filter(task => !task.isDone)}
                onAdd={handleAdd}
                onCheck={(task, isDone) => handleCheck(tasks, task, isDone)}
                onRemove={handleRemove}
            />

            {/* done list */}
            <DoneList
                parentTask={null}
                tasks={tasks.filter(task => task.isDone)}
                onCheck={(task, isDone) => handleCheck(tasks, task, isDone)}
                onAdd={handleAdd}
                onRemove={handleRemove}
            />
            
        </MainWrapper>
    )

}