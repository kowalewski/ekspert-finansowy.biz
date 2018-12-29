import React from 'react';
import { array } from 'prop-types';
import { Link } from 'gatsby';

export default function LatestPosts({ posts }) {
    return (
        <div>
            <h1 className="post__promo-headline">Najnowsze wpisy na blogu</h1>
            <div className="post__promo-list">
                {posts.map(({ node: post }) => (
                    <div className="post__promo-item" key={post.id}>
                        <h4 className="post__promo-data">
                            {post.frontmatter.date}
                        </h4>
                        <h3 className="post__promo-title">
                            <Link
                                to={post.fields.slug}
                                title={post.frontmatter.title}
                            >
                                {post.frontmatter.title}
                            </Link>
                        </h3>
                        <p className="post__promo-text">{post.excerpt}</p>
                        <Link
                            className="post__promo-more"
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
