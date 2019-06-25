import React from 'react';

// Bootstrap
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

// Styled-Components
import { Navbar, NavItem } from './navbar.style';
import thumbnail from '../../assets/images/profesional_thumb.jpeg';

class navbar extends React.Component {
    state = {
        // selected: 'about',
        selected: '',
    };

    select = e => {
        // const selected = e.target.text.toLowerCase();
        // this.setState({
        //     selected: selected,
        // });
    };

    render() {
        const selected = this.state.selected;

        return (
            <Navbar>
                <Image src={thumbnail} roundedCircle />

                <NavItem
                    href="#about"
                    active={selected === 'about' ? true : false}
                    onClick={this.select}
                >
                    About
                </NavItem>
                <NavItem
                    href="#skills"
                    active={selected === 'skills' ? true : false}
                    onClick={this.select}
                >
                    Skills
                </NavItem>
                <NavItem
                    href="#portfolio"
                    active={selected === 'portfolio' ? true : false}
                    onClick={this.select}
                >
                    Portfolio
                </NavItem>

                <div className="social-icons">
                    <a
                        href="https://www.linkedin.com/in/tommy-huynh-ops/"
                        target="_blank"
                    >
                        <i className="fab fa-linkedin-in" />
                    </a>
                    <a href="https://github.com/tommaay" target="_blank">
                        <i className="fab fa-github" />
                    </a>
                </div>
            </Navbar>
        );
    }
}

export default navbar;
