import React, { Component } from 'react';
import './App.css';
import {Layout,Drawer, Header,Navigation,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './Pages/main';



class App extends Component {
  render() {
    return (
      <div>
        <header className="demo-big-content">
        
        <Layout>
        <Header scroll>
       
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/support">Support</Link>
                <Link to="/services">Servs</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/signup">Signup</Link>
                
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/support">Support</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
    
        </Content>
    </Layout>
        </header>
      </div>
    );
  }
}

export default App;
