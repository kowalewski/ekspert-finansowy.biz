import React from 'react';
import PropTypes from 'prop-types';

export const PostContent = ({ content, className }) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

PostContent.propTypes = {
    content: PropTypes.node,
    className: PropTypes.string,
};

export default PostContent;
