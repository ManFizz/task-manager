import React, { Component } from "react";
import '../../css/main.css';
import ProjectViewList from "../Views/ProjectViewList";
import Project from "../Models/Project";
import Task from "../Models/Task";
import Sidebar from "./Sidebar";
import TaskViewList from "../Views/TaskViewList";
import { ACTION, NAV, NAV_NAME } from "../Definitions";
import User from "../Models/User";
import { createUser, getUsers, updateUser } from "../DbControllers/UserController";
import UserViewList from "../Views/UserViewList";
import UserEditForm from "../Views/UserEditForm";
import UserCreateForm from "../Views/UserCreateForm";
import { BsPlusLg } from "react-icons/bs";

class AppInitializers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      projectList: [],
      nav: {
        model: NAV.PROJECT,
        action: ACTION.VIEW_LIST,
      },
      users: [],
      currentData: {},
    };

    this.renderCurrentNav = this.renderCurrentNav.bind(this);
    this.tryUpdateUser = this.tryUpdateUser.bind(this);
    this.tryCreateUser = this.tryCreateUser.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.setNav = this.setNav.bind(this);
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
        title: "Task 1",
        dateEnd: new Date("02-11-2025"),
      }),
      new Task({
        title: "Task 2",
        dateEnd: new Date("04-07-2023"),
      }),
    ];
    this.setState({project: newProjectList[0]});
    this.setState({projectList: newProjectList});
    const newUser = new User({
      name: 'John Doe',
      dateBirthday: '1990-01-01',
      dateJoin: '2024-03-01',
      login: 'john_doe',
      mail: 'john@example.com'
    });
    getUsers().then (users => {
      if(users === null)
        return;

      this.setState({users: users})
      const isExists = users.some(u => u.login === newUser.login);
      if(!isExists) {
        createUser(newUser);
      }
    })
  }

  async tryUpdateUser(updatedUser) {
      const result = await updateUser(updatedUser);
      if(!result)
        return false;

      const { users } = this.state;
      const updatedUsers = users.map(user => {
        return user.id === updatedUser.id ? updatedUser : user;
      });
      this.setState({users: updatedUsers});
  }

  async tryCreateUser(newUser) {
    const result = await createUser(newUser);
    if(!result)
      return false;

    const { users } = this.state;
    users.push(newUser);
    this.setState({users: users});
  }

  renderCurrentNav() {
    const { nav, projectList, project, users, currentData } = this.state;
    switch (nav.model) {
      case NAV.PROJECT: {
        switch (nav.action) {
          case ACTION.VIEW_LIST: {
            return (
              <ProjectViewList
                projectList={projectList}
                project={project}
                setProject={(p) => this.setState({project: p})}
                setCurrentData={(data) => this.setState({currentData: data})}
                setNav={(nav) => this.setState({nav: nav})}
              />
            );
          }
          case ACTION.VIEW_SINGLE: {
            return null;
          }
          case ACTION.EDIT: {
            return null;
          }
          case ACTION.CREATE: {
            return null;
          }
        }
        throw new Error();
      }
      case NAV.TASK: {
        switch (nav.action) {
          case ACTION.VIEW_LIST: {
            return (
              <TaskViewList
                taskList={project.taskList}
                setCurrentData={(data) => this.setState({currentData: data})}
                setNav={this.setNav}
              />
            );
          }
          case ACTION.VIEW_SINGLE: {
            return null;
          }
          case ACTION.EDIT: {
            return null;
          }
          case ACTION.CREATE: {
            return null;
          }
        }
        throw new Error();
      }
      case NAV.USER: {
        switch (nav.action) {
          case ACTION.VIEW_LIST: {
            return (
              <UserViewList
                userList={users}
                setCurrentData={(data) => this.setState({currentData: data})}
                setNav={this.setNav}
              />
            );
          }
          case ACTION.VIEW_SINGLE: {
            return null;
          }
          case ACTION.EDIT: {
            return (
              <UserEditForm
                user={currentData.user}
                updateUser={this.tryUpdateUser}
                setNav={this.setNav}
              />
            );
          }
          case ACTION.CREATE: {
            return (
              <UserCreateForm
                createUser={this.tryCreateUser}
                setNav={this.setNav}
              />
            );
          }
        }
        throw new Error();
      }
    }
    throw new Error();
  }

  handleCreate() {
    this.setState({nav: {model: this.state.nav.model, action: ACTION.CREATE}});
  }

  setNav(nav, action = ACTION.VIEW_LIST) {
    this.setState({nav: {model: nav, action: action}});
  }

  render() {
    const { project, nav } = this.state;
    return (
      <>
        <div className="container-fluid">
          <div
            className="row"
            style={{height: "100vh"}}
          >
            <Sidebar
              project={project}
              nav={nav}
              setNav={this.setNav}
            />
            <div className="col-sm-9 p-3">
              <div className="d-flex align-items-center">
                <h4>{NAV_NAME[nav.model][nav.action]}</h4>
                <div className="btn btn-sm btn-primary mx-2" onClick={this.handleCreate}>
                  <BsPlusLg />
                </div>
              </div>
              <hr/>
              {this.renderCurrentNav()}
            </div>
          </div>
        </div>
      </>
    )
  };
}

export default AppInitializers;
