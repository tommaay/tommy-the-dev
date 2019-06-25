import React from 'react';

// Styled-Components
import { ModalScreen } from './project_modal.style';

// Images
import flower from '../../assets/images/flower_co.png';
import cliquebook from '../../assets/images/cliquebook.png';
import giphy from '../../assets/images/gif-finder.png';
import compound from '../../assets/images/compound.png';

const projectModal = props => {
    return (
        <ModalScreen onClick={props.closeModal}>
            {props.modal === 'flower' ? (
                <div className="project-modal">
                    <a href="https://flower-co.netlify.com/" target="_blank">
                        <img src={flower} alt="e-commerce app" />
                    </a>

                    <a
                        href="https://github.com/tommaay/frontend-cannabis-e-commerce-app"
                        target="_blank"
                    >
                        <i className="fab fa-github git-card-icon" />
                    </a>
                </div>
            ) : props.modal === 'cliquebook' ? (
                <div className="project-modal">
                    <a href="https://clubhandbook.netlify.com/" target="_blank">
                        <img src={cliquebook} alt="e-commerce app" />
                    </a>

                    <a
                        href="https://github.com/Lambda-School-Labs/labs10-club-handbook"
                        target="_blank"
                    >
                        <i className="fab fa-github git-card-icon" />
                    </a>
                </div>
            ) : props.modal === 'giphy' ? (
                <div className="project-modal">
                    <a
                        href="https://eaze-take-home-tommy-huynh.netlify.com/"
                        target="_blank"
                    >
                        <img src={giphy} alt="GIF finder" />
                    </a>

                    <a
                        href="https://github.com/tommaay/eaze-frontend-tommy-huynh"
                        target="_blank"
                    >
                        <i className="fab fa-github git-card-icon" />
                    </a>
                </div>
            ) : props.modal === 'compound' ? (
                <div className="project-modal">
                    <a href="https://www.compound.careers" target="_blank">
                        <img src={compound} alt="compound.careers webpage" />
                    </a>

                    <a
                        href="https://github.com/LambdaWinter19Hackathon-Calculator/Hackathon_Income_Calculator"
                        target="_blank"
                    >
                        <i className="fab fa-github git-card-icon" />
                    </a>
                </div>
            ) : (
                <h1>No data</h1>
            )}
        </ModalScreen>
    );
};

export default projectModal;
