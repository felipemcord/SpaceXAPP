import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PastLaunches } from './components/PastLaunches';
import { UpcomingLaunches } from './components/UpcomingLaunches';
import { NextAndLastLaunches } from './components/NextAndLast';
import { NavMenu } from './components/NavMenu'
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <NavMenu></NavMenu>
        <Routes>
          <Route path='/' element={<UpcomingLaunches />} />
          <Route path='/past' element={<PastLaunches />} />
          <Route path='/close' element={<NextAndLastLaunches />} />

        </Routes>

      </Container>
    </div>
  );
}

export default App;
