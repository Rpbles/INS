import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "smogbusters_tasks";

const defaultTasks = [
  { name: "Recycle", completed: false, time: null },
  { name: "Pickup Trash", completed: false, time: null },
  { name: "Use Public Transportation", completed: false, time: null },
  { name: "Save Water", completed: false, time: null },
  { name: "Save Energy", completed: false, time: null }
];

export default function Tasks() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(defaultTasks);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const completeTask = (index) => {
    if (tasks[index].completed) return;

    const updated = [...tasks];
    updated[index] = {
      ...updated[index],
      completed: true,
      time: new Date().toLocaleString()
    };
    setTasks(updated);
  };

  const undoTask = (index) => {
    const updated = [...tasks];
    updated[index] = {
      ...updated[index],
      completed: false,
      time: null
    };
    setTasks(updated);
  };

  return (
    <div className="tasks-page">
      <div className="tasks-overlay">

        <button
  	className="back-home-btn"
 	 onClick={() => navigate("/")}
	>
  	⬅ Back to Home
	</button>

        <h2 className="tasks-title">Daily Eco Tasks</h2>
        <p className="tasks-subtitle">
          Small actions make a big difference 🌱
        </p>

        <div className="tasks-list">
          {tasks.map((task, index) => (
            <div
              key={index}
              className={`task-bubble ${task.completed ? "done" : ""}`}
            >
              <div className="task-info">
                <h3>{task.name}</h3>
                {task.time && (
                  <span className="task-time">
                    Completed at: {task.time}
                  </span>
                )}
              </div>

              {!task.completed ? (
                <button
                  className="task-btn"
                  onClick={() => completeTask(index)}
                >
                  ✔ Done
                </button>
              ) : (
                <button
                  className="task-btn undo"
                  onClick={() => undoTask(index)}
                >
                  ↩ Undo
                </button>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}