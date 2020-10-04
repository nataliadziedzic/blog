import React from 'react';

const PostWrapper = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
export default PostWrapper