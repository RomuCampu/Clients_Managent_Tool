import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { HomePage } from './pages/HomePage';
import { Dashboard } from './pages/Dashboard';
import { CustomerPage } from './pages/CustomerPage';
import { NotFound } from './pages/NotFound';
import { Header } from './components/Header';
import { FormPage } from './pages/FormPage';
import { EditCustomerPage } from './pages/EditCustomerPage';



function App() {
  return (
    <Router>
      <main className="">
        <Header />
        <Container>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/client/:id' component={CustomerPage} />
            <Route path='/form' component={FormPage} />
            <Route path='/edit-form/:id' component={EditCustomerPage} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Container>
      </main>
    </Router>
  );
}

export default App;
