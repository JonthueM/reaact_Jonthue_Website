import {rootPath, resumeHome, resumeAbout, resumeContact, resumeGitHub, resumeApplocker, resumeProjects, serviceHome, serviceAbout, serviceServices, serviceApplocker,
serviceContact, serviceStart, servicePortfolio, resumeResumes} from './routes.js';
import './App.css';
import Layout from './Layouts/main/layoutMain';
import React from 'react';
import resumAbout from './Pages/Resume/rAbout/rAbout';
import rResume from './Pages/Resume/rResume/rResume';
import rProjects from './Pages/Resume/rProjects/rProjects';
import rAppLocker from './Pages/Resume/rAppLocker/rAppLocker';
import rGithub from './Pages/Resume/rGithub/rGithub';
import rContact from './Pages/Resume/rContact/rContact';
import rHome from './Pages/Resume/rHome/rHome';
import sAbout from './Pages/Services/sAbout/About';
import sServices from './Pages/Services/sServices/Services';
import sAppLocker from './Pages/Services/sAppLocker/AppLocker';
import sStart from './Pages/Services/Start/Start';
import sContact from './Pages/Services/sContact/Contact';
import sPortfolio from './Pages/Services/sPortfolio/Portfolio';
import sHome from './Pages/Services/sHome/Home';
import  GlobalFonts from './fonts/font';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import  Home from './Pages/Home';

function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <Layout>
        <GlobalFonts/>
        <Switch>
          <Route exact path={rootPath} component={Home} />   
          <Route path={resumeAbout} component={resumAbout}/>
          <Route path={resumeResumes} component={rResume}/>
          <Route path={resumeProjects} component={rProjects}/>
          <Route path={resumeApplocker} component={rAppLocker}/>
          <Route path={resumeGitHub} component={rGithub}/>
          <Route path={resumeContact} component={rContact}/>
          <Route path={serviceAbout} component={sAbout} />
          <Route path={serviceServices} component={sServices} />
          <Route path={serviceApplocker} component={sAppLocker} />
          <Route path={serviceStart} component={sStart} />
          <Route path={serviceContact} component={sContact} />
          <Route path={servicePortfolio} component={sPortfolio} />
          <Route path={resumeHome} component={rHome}/>
          <Route exact path={serviceHome} component={sHome} />   
        </Switch>
      </Layout>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
