import React from 'react';

const TaskList = ({ tasks, startTask, completeTask }) => {
 return (
    <div>
      {tasks.map((task, index) => (
        <div key={index} className={`task-item ${task.status.toLowerCase().replace(' ', '-')}`}>
          <span>{task.title}</span>
          {task.status !== 'Completed' && (
            <>
              <button onClick={() => startTask(task.id)}>Start</button>
              <button onClick={() => completeTask(task.id)}>Complete</button>
            </>
          )}
        </div>
      ))}
    </div>
 );
};

export default TaskList;
