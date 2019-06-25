import React from 'react';
import { Page } from '../../style/utils';

const about = () => {
    return (
        <>
            <a name="about" />

            <Page>
                <div className="content">
                    <h1 className="title mb-60">
                        <span className="impact">Tommy</span> Huynh
                    </h1>

                    <p className="mb-30 font-24">
                        I am a fullstack software engineer who is skilled in
                        Javascript, React, Redux, Node.js, Express, Relational
                        Database Management Systems and I am an amazing team
                        player to have around.
                    </p>
                </div>
            </Page>
        </>
    );
};

export default about;
