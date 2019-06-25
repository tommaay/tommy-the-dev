import React from 'react';

// Styled-Components
import { Container } from './portfolio.style';

// Images
import flower from '../../assets/images/flower_co.png';
import cliquebook from '../../assets/images/cliquebook.png';
import giphy from '../../assets/images/gif-finder.png';
import compound from '../../assets/images/compound.png';

class Portfolio extends React.Component {
    state = {
        index: 0,
        direction: null,
    };

    handleSelect = (e, selectedIndex) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    };

    render() {
        return (
            <Container>
                <h1 className="heading-main mb-60 mt-60">
                    <span className="impact">Portfolio</span>
                </h1>

                <div className="projects">
                    <div className="project-card">
                        <div className="img-header">
                            <a
                                href="https://flower-co.netlify.com/"
                                target="_blank"
                            >
                                <img src={flower} alt="e-commerce app" />
                            </a>
                        </div>

                        <h2 className="card-label">E-Commerce App</h2>
                        <a
                            href="https://github.com/tommaay/frontend-cannabis-e-commerce-app"
                            target="_blank"
                        >
                            <i class="fab fa-github git-card-icon" />
                        </a>
                    </div>

                    <div className="project-card">
                        <div className="img-header">
                            <a
                                href="https://clubhandbook.netlify.com/"
                                target="_blank"
                            >
                                <img src={cliquebook} alt="e-commerce app" />
                            </a>
                        </div>

                        <h2 className="card-label">CliqueBook</h2>
                        <a
                            href="https://github.com/Lambda-School-Labs/labs10-club-handbook"
                            target="_blank"
                        >
                            <i class="fab fa-github git-card-icon" />
                        </a>
                    </div>

                    <div className="project-card">
                        <div className="img-header">
                            <a
                                href="https://eaze-take-home-tommy-huynh.netlify.com/"
                                target="_blank"
                            >
                                <img src={giphy} alt="GIF finder" />
                            </a>
                        </div>

                        <h2 className="card-label">GIPHY App</h2>
                        <a
                            href="https://github.com/tommaay/eaze-frontend-tommy-huynh"
                            target="_blank"
                        >
                            <i class="fab fa-github git-card-icon" />
                        </a>
                    </div>

                    <div className="project-card">
                        <div className="img-header">
                            <a
                                href="https://www.compound.careers"
                                target="_blank"
                            >
                                <img
                                    src={compound}
                                    alt="compound.careers webpage"
                                />
                            </a>
                        </div>

                        <h2 className="card-label">Compound Careers</h2>
                        <a
                            href="https://github.com/LambdaWinter19Hackathon-Calculator/Hackathon_Income_Calculator"
                            target="_blank"
                        >
                            <i class="fab fa-github git-card-icon" />
                        </a>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Portfolio;
