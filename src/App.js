import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Switch as ThemeSwitch, Col, Row } from 'antd';
import Sidebar from './layout/Sidebar';
import EventForm from './pages/EventForm';
import Events from './pages/Events';
import About from './pages/About';
import Home from './pages/Home';
import Display from './UI/Display'
import { useTheme } from './contexts/ThemeContext';
import AuthProvider from './contexts/AuthProvider';

const App = () => {
  const { theme, changeTheme } = useTheme();

  return (

    <div className="App">

      <Row>

        <AuthProvider>

          <Sidebar />
          <ThemeSwitch
            className="theme-switch"
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />

          <Col flex="auto" className="display-column">
            <Switch>
              <Route path="/about">
                <Display>
                  <About />
                </Display>
              </Route>
              <Route path="/events">
                <Display>
                  <Events />
                </Display>
              </Route>
              <Route path="/form">
                <Display>
                  <EventForm />
                </Display>
              </Route>
              <Route path="/">
                <Display>
                  <Home />
                </Display>
              </Route>
            </Switch>
          </Col>

        </AuthProvider>

      </Row>

    </div>
  );
}

export default App;
