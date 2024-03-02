import React, { Component } from "react";
import '../../css/main.css';
import ProjectList from "./ProjectList";
import Project from "../Models/Project";
import Task from "../Models/Task";

class AppInitializers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      projectList: [],
    };
  }

  componentDidMount() {
    const newProjectList = [
      new Project({title: "Super mega shark's"}),
      new Project({title: "Project 2"}),
      new Project({title: "Project 3"}),
      new Project({title: "Project 4"}),
      new Project({title: "Project 5"}),
    ];
    newProjectList[0].taskList = [
      new Task({
        title: "Create team",
      }),
      new Task({
        title: "Delete team",
      }),
    ];
    this.setState({project: newProjectList[0]});
    this.setState({projectList: newProjectList});
  }

  render() {
    const { project, projectList } = this.state;
    const title = project ? project.title : null;
    return (
      <>
        <div className={"container-fluid"}>
          <div
            className={"d-flex flex-column flex-shrink-0 p3 bg-body-tertiary"}
            style={{width: "280px"}}
          >
            <header>{title}</header>
          </div>
          <ProjectList projectList={projectList}/>
        </div>
      </>
    )
  };
}

export default AppInitializers;
