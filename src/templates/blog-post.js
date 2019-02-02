import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import shuffle from '../helpers/shuffle/shuffle';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton/BackButton';
import Footer from '../components/Footer/Footer';
import Section from '../components/Section/Section';
import LatestPosts from '../components/LatestPosts/LatestPosts';
import Content, { HTMLContent } from '../components/PostContent/PostContent';

export const BlogPostTemplate = ({
    content,
    contentComponent,
    description,
    date,
    title,
    helmet,
}) => {
    const PostContent = contentComponent || Content;

    return (
        <main className="main-content">
            {helmet || ''}
            <article className="post">
                <h1 className="post__title">
                    <BackButton />
                    {title}
                </h1>
                <div className="post__intro">
                    <div className="post__meta">
                        {date}, <br />
                        <strong>Paweł Kowalewski</strong>, Ekspert Finansowy
                        Open Finance <br />
                        tel: 785 808 378 <br />
                        <a
                            href="https://www.facebook.com/finansekredytyubezpieczenia"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            /finansekredytyubezpieczenia
                        </a>
                    </div>
                    <p className="post__ingress">{description}</p>
                </div>
                <PostContent content={content} className="post__content" />
            </article>
        </main>
    );
};

BlogPostTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    description: PropTypes.string,
    title: PropTypes.string,
    helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
    const { post, latest } = data;
    const { edges: posts } = latest;
    const shuffledPosts = shuffle(posts);

    return (
        <Layout>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                helmet={
                    <Helmet titleTemplate="%s | Paweł Kowalewski - ekspert-finansowy.biz">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                date={post.frontmatter.date}
                title={post.frontmatter.title}
            />
            <div className="latest-posts">
                <Section modificator="regular-padding">
                    <LatestPosts
                        posts={shuffledPosts.slice(0, 2)}
                        title="MOŻE ZAINTERESUJE CIĘ RÓWNIEŻ"
                    />
                </Section>
            </div>
            <Footer />
        </Layout>
    );
};

BlogPost.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.object,
    }),
};

export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        post: markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "DD.MM.YYYY")
                title
                description
            }
        }
        latest: allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 200)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "DD.MM.YYYY")
                    }
                }
            }
        }
    }
`;
