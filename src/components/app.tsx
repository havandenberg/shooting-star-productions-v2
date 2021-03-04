import React from 'react';
import { ThemeProvider } from '@emotion/react';
import styled from '@emotion/styled';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import CTABanner from 'components/cta-banner';
import Footer from 'components/footer';
import Nav from 'components/nav';
import { GlobalContextProvider } from 'context/global';
import Home from 'routes/home';
import Global from 'ui/global';
import l from 'ui/layout';
import th from 'ui/theme';
import AboutUs from 'routes/about-us';
import Services from 'routes/services';
import Portfolio from 'routes/portfolio';
import Contact from 'routes/contact';

const Main = styled(l.Flex)({
  flexDirection: 'column',
  minHeight: '100vh',
  paddingTop: th.heights.nav,
});

const App = () => (
  <Router>
    <GlobalContextProvider>
      <ThemeProvider theme={th}>
        <Main id="top">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/portfolio/:category" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
          <CTABanner />
          <Footer />
        </Main>
        <Global />
      </ThemeProvider>
    </GlobalContextProvider>
  </Router>
);

export default App;
