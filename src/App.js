import {Layout} from './Layouts/main/layoutMain';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import  GlobalFonts from './fonts/font';
import GlobalStyles from './GlobalStyles';
import React from 'react';
import './App.css';
import {rootPath, resumeHome, resumeAbout, resumeContact, resumeGitHub, resumeApplocker, resumeProjects, serviceHome, serviceAbout, serviceServices, serviceApplocker,
serviceContact, serviceStart, servicePortfolio, resumeResumes} from './routes.js';
import {Home, rHome, rAbout, rProjects, rAppLocker, rGithub, rContact, rResume, sHome, sAbout, sService, sAppLocker, sPortfolio, sContact, sStart} from './directory.js';



function App() {
  return (
  <React.Fragment>
    <BrowserRouter>
      <Layout>
        <GlobalFonts/>
        <GlobalStyles />
        <Switch>
          <Route exact path={rootPath} component={Home} />   
          <Route path={resumeAbout} component={rAbout}/>
          <Route path={resumeResumes} component={rResume}/>
          <Route path={resumeProjects} component={rProjects}/>
          <Route path={resumeApplocker} component={rAppLocker}/>
          <Route path={resumeGitHub} component={rGithub}/>
          <Route path={resumeContact} component={rContact}/>
          <Route path={serviceAbout} component={sAbout} />
          <Route path={serviceServices} component={sService} />
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
