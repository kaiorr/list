import React from 'react';
import If from './If';

const ColunmList = ({ tasks, columnTitle, updateTask, addTask}) => {
    const currentTasks = tasks.filter(task => task.status === columnTitle);
    return (

        <div className="colunm-list">
            <h3>{ columnTitle }</h3>
                <If test ={columnTitle === 'To Do'}>
                    <form onSubmit={e => addTask(e)}>
                    <input type="text" />
                    <button type="submit">Criar Tarefa</button>
                    </form>
                </If>
                <ul>
                    {currentTasks.map(task =>(
                        <li key={task.id}>
                            <input 
                                type="checkbox"
                                onChange={e => updateTask(e.target, task)}
                                checked={columnTitle === 'Done'}

                            />
                            <span>{task.description}</span>
                        </li>
                    ))}
                </ul>
        </div>
    );
};
export default ColunmList;