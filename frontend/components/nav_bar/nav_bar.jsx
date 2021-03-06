import React from 'react';
import { Sticky } from 'react-sticky';
import { Link, Element, Events, animateScroll, scrollSpy } from 'react-scroll';


class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount(){
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop() {
    animateScroll.scrollToTop();
  }

  handleSetActive(to) {
    console.log(to);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <Sticky className='nav-bar'>
        <Link activeClass="nav-active" className="nav-bar-text" to="about" spy={true} smooth={true} offset={-200} duration={500} onSetActive={this.handleSetActive}>
          <h2>About</h2>
        </Link>
        <Link activeClass="nav-active" className="nav-bar-text" to="clients" spy={true} smooth={true} offset={-200} duration={500}>
          <h2>Clients</h2>
        </Link>
        <Link activeClass="nav-active" className="nav-bar-text" to="pubs" spy={true} smooth={true} offset={-200} duration={500}>
          <h2>Publications</h2>
        </Link>
        <Link activeClass="nav-active" className="nav-bar-text" to="people" spy={true} smooth={true} offset={-200} duration={500}>
          <h2>People</h2>
        </Link>
      </Sticky>
    );
  }
};


export default NavBar;
