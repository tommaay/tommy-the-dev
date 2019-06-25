import React from 'react';

// Modal
import ProjectModal from './project_modal';

// Styled-Components
import { Container } from './portfolio.style';

// Images
import flower from '../../assets/images/flower_co.png';
import cliquebook from '../../assets/images/cliquebook.png';
import giphy from '../../assets/images/gif-finder.png';
import compound from '../../assets/images/compound.png';

class Portfolio extends React.Component {
    state = {
        displayModal: false,
        modal: '',
    };

    openModal = (e, data) => {
        this.setState({ displayModal: true, modal: data });
    };

    closeModal = e => {
        e.preventDefault();
        this.setState({ displayModal: false, modal: '' });
    };

    render() {
        return (
            <>
                <a name="portfolio" />
                <Container>
                    <h1 className="heading-main mb-60 mt-60">
                        <span className="impact">Portfolio</span>
                    </h1>

                    <div className="projects">
                        <div className="project-card">
                            <div
                                className="img-header"
                                onClick={e => this.openModal(e, 'flower')}
                            >
                                <img src={flower} alt="e-commerce app" />
                            </div>

                            <h2 className="card-label">
                                Flower Co E-Commerce App
                            </h2>
                        </div>

                        <div
                            className="project-card"
                            onClick={e => this.openModal(e, 'cliquebook')}
                        >
                            <div className="img-header">
                                <img src={cliquebook} alt="e-commerce app" />
                            </div>

                            <h2 className="card-label">CliqueBook</h2>
                        </div>

                        <div
                            className="project-card"
                            onClick={e => this.openModal(e, 'giphy')}
                        >
                            <div className="img-header">
                                <img src={giphy} alt="GIF finder" />
                            </div>

                            <h2 className="card-label">GIPHY App</h2>
                        </div>

                        <div
                            className="project-card"
                            onClick={e => this.openModal(e, 'compound')}
                        >
                            <div className="img-header">
                                <img
                                    src={compound}
                                    alt="compound.careers webpage"
                                />
                            </div>

                            <h2 className="card-label">Lambda Compound</h2>
                        </div>
                    </div>
                </Container>

                {this.state.displayModal ? (
                    <ProjectModal
                        closeModal={this.closeModal}
                        modal={this.state.modal}
                    />
                ) : null}
            </>
        );
    }
}

export default Portfolio;
