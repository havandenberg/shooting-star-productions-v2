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
import Footer from 'components/page/footer';
import Nav from 'components/nav';
import { GlobalContextProvider } from 'context/global';
import AboutUs from 'routes/about-us';
import Contact from 'routes/contact';
import Home from 'routes/home';
import Portfolio from 'routes/portfolio';
import Services from 'routes/services';
import Global from 'ui/global';
import l from 'ui/layout';
import th from 'ui/theme';

const Main = styled(l.Flex)({
  flexDirection: 'column',
  minHeight: '100vh',
  width: th.sizes.fill,
});

const App = () => (
  <Router>
    <GlobalContextProvider>
      <ThemeProvider theme={th}>
        <Main id="main">
          <Nav />
          <l.Div id="wrap">
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
          </l.Div>
        </Main>
        <Global />
      </ThemeProvider>
    </GlobalContextProvider>
  </Router>
);

export default App;
