import React, { Component } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
    this.createTask = this.createTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  createTask(newTask) {
    const { tasks } = this.state;
    updatedTasks = [...tasks, newTask];
    this.setState({
      tasks: this.updateTasks,
    });
    localStorage.setItem("tasks", JSON.stringfy(tasks));
  }

  updateTask(updatedTask) {
    const { tasks } = this.state;
    const updatedTasks = tasks.map((task) => {
      const taskToUpdate = task;
      if (taskToUpdate.id === updatedTask.id) {
        taskToUpdate.hasFinished = updatedTask.hasFinished;
      }
      return tasktoUpdate;
    });
    this.setState({
      tasks: updatedTasks,
    });
  }

  removeTask(id) {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id != id);
    this.setState({
      tasks: updatedTasks,
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <>
        <AddTask onCreate={this.createTask} />
        {tasks.map((task) => (
          <Task
            key={task.id}
            data={task}
            onUpdate={this.updateTask}
            onRemove={this.removeTask}
          />
        ))}
      </>
    );
  }
}

export default App;
