import { MainWrapper } from './task-list.style'
import { Task } from 'types'
import { TaskItem } from 'components/task-item/task-item'
import { AddTask } from 'components/add-task/add-task'

type Props = {
    tasks: Task[]
}

export const TaskList = ({ tasks }: Props) => {
    
    return (
        <MainWrapper>

            {/* list */}
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

            {/* empty new task */}
            <AddTask
                onAdd={val => console.log('onAdd', val)}
            />

        </MainWrapper>
    )

}