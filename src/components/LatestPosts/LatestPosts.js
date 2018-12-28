import React from 'react';
import { array } from 'prop-types';
import { Link } from 'gatsby';

export default function LatestPosts({ posts }) {
    return (
        <div className="content">
            <h1 className="has-text-weight-bold is-size-2">
                Najnowsze wpisy na blogu
            </h1>
            {posts.map(({ node: post }) => (
                <div className="content" key={post.id}>
                    <p>
                        <Link
                            className="has-text-primary"
                            to={post.fields.slug}
                        >
                            {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <small>{post.frontmatter.date}</small>
                    </p>
                    <p>
                        {post.excerpt}
                        <Link className="button is-small" to={post.fields.slug}>
                            Keep Reading →
                        </Link>
                    </p>
                </div>
            ))}
        </div>
    );
}

LatestPosts.propTypes = {
    posts: array,
};
