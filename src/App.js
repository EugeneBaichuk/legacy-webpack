import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ROUTES } from './Config/routes';
import { navHome, navLinks } from './Config/nav.constants';

import { Sitebar } from './Components/Sitebar';
import { Cats } from './Components/Cats';
import { Dogs } from './Components/Dogs';
import { Search } from './Components/Search';
import { ToDo } from './Components/ToDo';

const App = () => (
  <Router>
    <Sitebar navHome={navHome} navLinks={navLinks}/>
    <Routes>
      <Route path={ROUTES.home} element={ <div>Home</div> } />
      <Route path={ROUTES.cats} element={ <Cats /> } />
      <Route path={ROUTES.search} element={ <Search /> } />
      <Route path={ROUTES.dogs} element={ <Dogs /> } />
      <Route path={ROUTES.todo} element={ <ToDo /> } />
    </Routes>
  </Router>
)

export default App;