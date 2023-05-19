import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import MachineContainer from './components/machine/MachineContainer';
import WorkerContainer from './components/worker/WorkerContainer';
import ProjectsContainer from './components/project/ProjectsContainer';
import UnitPriceContainer from './components/unitPrice/UnitPriceContainer';
import RegionsContainer from './components/region/RegionsContainer';
import DiagramContainer from './components/diagram/DiagramContainer';
import MeasurementUnitContainer from './components/unit/MeasurementUnitContainer';
import TaskContainer from './components/task/TaskContainer';
import MainMenuContainer from './components/mainMenu/MainMenuContainer';
import GuideContainer from './components/guide/GuideContainer';
import UnitPriceCalculationContainer from './components/unitPrice/UnitPriceCalculationContainer';
import ProjectContainer from './components/project/ProjectContainer';

class App extends Component {
  render(): React.ReactNode {
    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <TaskContainer />
        <div className='app-wrapper-content'>
          <Switch>
            <Route path='/guide'  render={() => <GuideContainer/>} />
            <Route path='/projects/:id/diagram' render={() => <DiagramContainer/>}  />
            <Route path='/projects/:id' render={() => <ProjectContainer />} />
            <Route path='/machines' render={() => <MachineContainer />} />
            <Route path='/workers' render={() => <WorkerContainer/>} />
            <Route path='/regions' render={() => <RegionsContainer />} />
            <Route path='/projects' exact={true} render={() => <ProjectsContainer />} />
            <Route path='/units' render={() => <MeasurementUnitContainer />} />
            <Route path='/upg' exact={true} render={() => <UnitPriceContainer />} />
            <Route path='/upg/:id' render={() => <UnitPriceCalculationContainer />} />
          </Switch>
        </div>
        
        <MainMenuContainer />
      </div>
    )
  }
}

export default App;
