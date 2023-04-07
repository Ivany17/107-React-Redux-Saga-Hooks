import { deleteTask, updateTask } from 'actions/toDoListCreators';
import React from 'react';
import * as ToDoCreators from '../actions/ToDoCreators';

const ToDoList = (props) => {
    const {tasks, updateTaskAction, deleteTaskAction} = props;
    return (
        <section>
            <h2>To do</h2>
            <ol>
                {
                    tasks.map((task) => {
                        <li key={task.id}>
                            <p>{task.id}:{task.body}
                            <input type='checkbox' checked={task.isDone}
                            onChange={({target:{checked}}) => {updateTaskAction({id:task.id, values:{isDone:checked}})}} />
                            <button onClick={() => {deleteTaskAction(task.id)}}>Delete</button>
                            </p>
                        </li>
                    })
                }
            </ol>
        </section>
    );
}

const mapStateToProps = ({toDoList}) => toDoList;
const mapDispatchToProps = (dispatch) => ({
    updateTaskAction: ({id, values}) => dispatch(ToDoCreators.updateTask({id, values})),
    deleteTaskAction: (id) => dispatch(ToDoCreators.deleteTask(id))
})

export default (mapStateToProps, mapDispatchToProps)(ToDoList);
