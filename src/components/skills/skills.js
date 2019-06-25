import React from 'react';
import { Page, Skill } from '../../style/utils';

const skills = () => {
    return (
        <Page>
            <div className="content">
                <h1 className="heading-main mb-60">
                    <span className="impact">Skills</span>
                </h1>

                <div className="skills">
                    <Skill>
                        <i className="fab fa-html5" />
                        <p className="heading-second">HTML</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-css3-alt" />
                        <p className="heading-second">CSS</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-react" />
                        <p className="heading-second">React</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-react" />
                        <p className="heading-second">Redux</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-node" />
                        <p className="heading-second">Node.js</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-node" />
                        <p className="heading-second">Express.js</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-node" />
                        <p className="heading-second">Knex.js</p>
                    </Skill>

                    <Skill>
                        <i className="fas fa-database" />
                        <p className="heading-second">RDMS</p>
                    </Skill>

                    <Skill>
                        <i className="fas fa-database" />
                        <p className="heading-second">PostgreSQL</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-python" />
                        <p className="heading-second">Python</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-sass" />
                        <p className="heading-second">SASS</p>
                    </Skill>

                    <Skill>
                        <i className="fab fa-less" />
                        <p className="heading-second">LESS</p>
                    </Skill>
                </div>
            </div>
        </Page>
    );
};

export default skills;
