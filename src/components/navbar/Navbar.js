import React from 'react';

// Bootstrap
import Image from 'react-bootstrap/Image';

// Styled-Components
import { NavContainer, NavItem } from './Navbar.style';

// Image
import thumbnail from '../../assets/images/profesional_thumb.jpeg';

class Navbar extends React.Component {
    state = {
        selected: 'about',
    };

    select = e => {
        const selected = e.target.text.toLowerCase();

        this.setState({
            selected: selected,
        });
    };

    render() {
        const selected = this.state.selected;

        return (
            <NavContainer>
                <Image src={thumbnail} roundedCircle />

                <NavItem
                    href="#about"
                    active={selected == 'about' ? true : false}
                    onClick={this.select}
                >
                    About
                </NavItem>
                <NavItem
                    href="#skills"
                    active={selected == 'skills' ? true : false}
                    onClick={this.select}
                >
                    Skills
                </NavItem>
                <NavItem
                    href="#education"
                    active={selected == 'education' ? true : false}
                    onClick={this.select}
                >
                    Education
                </NavItem>
                <NavItem
                    href="#experience"
                    active={selected == 'experience' ? true : false}
                    onClick={this.select}
                >
                    Experience
                </NavItem>
                <NavItem
                    href="#portfolio"
                    active={selected == 'portfolio' ? true : false}
                    onClick={this.select}
                >
                    Portfolio
                </NavItem>
            </NavContainer>
        );
    }
}

export default Navbar;
