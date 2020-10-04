import React from 'react';

const PostsSection = ({ children }) => {
    return (
        <div className="postsSection">
            <div className="postsSection__introduction">
                <h2 className="postsSection__title">Check out my posts: </h2>
                <p className="postsSection__quote">Style is a way to say who you are without having to speak. — Rachel Zoe</p>
            </div>
            {children}
        </div>
    );
};
export default PostsSection