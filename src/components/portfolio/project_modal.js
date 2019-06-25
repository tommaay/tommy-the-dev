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
        <ModalScreen>
            <div className="gray-screen" onClick={e => props.closeModal(e)} />

            {props.modal === 'flower' ? (
                <div className="project-modal">
                    <h1>Flower Co</h1>

                    <img src={flower} alt="e-commerce app" />

                    <p>
                        Flower Co is a e-commerce application where users are
                        able to browse the products, sort by category, add /
                        remove items from the shopping cart, checkout with
                        Stripe and see their purchase history. Admins can add
                        more products and categories and also update the
                        products.
                    </p>

                    <div className="project-links">
                        <a
                            href="https://flower-co.netlify.com/"
                            target="_blank"
                            className="link-btn"
                        >
                            Visit Site
                        </a>

                        <a
                            href="https://github.com/tommaay/frontend-cannabis-e-commerce-app"
                            target="_blank"
                        >
                            <i className="fab fa-github git-card-icon" />
                        </a>
                    </div>
                </div>
            ) : props.modal === 'cliquebook' ? (
                <div className="project-modal">
                    <h1>CliqueBook</h1>

                    <img src={cliquebook} alt="e-commerce app" />

                    <p>
                        CliqueBook is an easy to use document creator and club
                        manager. Admins can create and edit their handbook and
                        send it to their club members to read. Members are then
                        able to sign and acknowledge that they've read the
                        handbook and will adhere to the handbook guidelines.
                    </p>

                    <div className="project-links">
                        <a
                            href="https://clubhandbook.netlify.com/"
                            target="_blank"
                            className="link-btn"
                        >
                            Visit Site
                        </a>

                        <a
                            href="https://github.com/Lambda-School-Labs/labs10-club-handbook"
                            target="_blank"
                        >
                            <i className="fab fa-github git-card-icon" />
                        </a>
                    </div>
                </div>
            ) : props.modal === 'giphy' ? (
                <div className="project-modal">
                    <h1>GIPHY App</h1>

                    <img src={giphy} alt="GIF finder" />

                    <p>
                        GIPHY is an app which uses the GIPHY api and lets users
                        search for their favorite gifs. The home page displays
                        the top trending gifs and the user can search and add
                        gifs to their favorites list.
                    </p>

                    <div className="project-links">
                        <a
                            href="https://eaze-take-home-tommy-huynh.netlify.com/"
                            target="_blank"
                            className="link-btn"
                        >
                            Visit Site
                        </a>

                        <a
                            href="https://github.com/tommaay/eaze-frontend-tommy-huynh"
                            target="_blank"
                        >
                            <i className="fab fa-github git-card-icon" />
                        </a>
                    </div>
                </div>
            ) : props.modal === 'compound' ? (
                <div className="project-modal">
                    <h1>Lambda Compound</h1>

                    <img src={compound} alt="compound.careers webpage" />

                    <p>
                        Compound.Careers is an income calculator for Lambda
                        School students that calculates their life time earnings
                        using their salary before starting Lambda School, and an
                        estimation of what their salary will be after graduating
                        and getting a job. Students can see how much more they
                        are poised to earn over their lifetime and also how long
                        it will take them to pay back their ISA - Income Share
                        Agreement with Lambda School.
                    </p>

                    <div className="project-links">
                        <a
                            href="https://www.compound.careers"
                            target="_blank"
                            className="link-btn"
                        >
                            Visit Site
                        </a>

                        <a
                            href="https://github.com/LambdaWinter19Hackathon-Calculator/Hackathon_Income_Calculator"
                            target="_blank"
                        >
                            <i className="fab fa-github git-card-icon" />
                        </a>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </ModalScreen>
    );
};

export default projectModal;
