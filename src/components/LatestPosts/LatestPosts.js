import React from 'react';
import { array } from 'prop-types';
import { Link } from 'gatsby';

export default function LatestPosts({ posts }) {
    return (
        <div>
            <h1 className="latest-posts__headline">Najnowsze wpisy na blogu</h1>
            <div className="latest-posts__list">
                {posts.map(({ node: post }) => (
                    <div className="latest-posts__item" key={post.id}>
                        <h4 className="latest-posts__data">
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
                        <p className="latest-posts__text">{post.excerpt}</p>
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
