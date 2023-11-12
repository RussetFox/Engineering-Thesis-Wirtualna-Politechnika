import React from 'react';
import PostLoginLayout from '../Layout/Post-Login-Layout'
import PostViewComponent from '../Components/Post-View-Component';

const AboutUsPage: React.FC = () => {
    return (
        <PostLoginLayout>
            <PostViewComponent/>
        </PostLoginLayout>
    );
};

export default AboutUsPage;
