import React from 'react';
import { array } from 'prop-types';
import { Link } from 'gatsby';

export default function LatestPosts({ posts, title }) {
    return (
        <div>
            <h2 className="latest-posts__headline">
                {title || 'Najnowsze wpisy na blogu'}
            </h2>
            <div className="latest-posts__list">
                {posts.map(({ node: post }) => (
                    <div className="latest-posts__item" key={post.id}>
                        <h4 className="latest-posts__date">
                            {post.frontmatter.date}
                        </h4>
                        <h3 className="latest-posts__title">
                            <Link
                                to={post.fields.slug}
                                title={post.frontmatter.title}
                            >
                                {post.frontmatter.title}
                            </Link>
                        </h3>
                        {post.excerpt && (
                            <p className="latest-posts__text">{post.excerpt}</p>
                        )}
                        <Link
                            className="latest-posts__more"
                            to={post.fields.slug}
                            title={post.frontmatter.title}
                        >
                            Czytaj całość
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

LatestPosts.propTypes = {
    posts: array,
};
