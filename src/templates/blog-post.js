import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BackButton from '../components/BackButton/BackButton';
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
            <section className="post">
                <h3 className="post__title">
                    <BackButton />
                    {title}
                </h3>
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
            </section>
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
    const { markdownRemark: post } = data;

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
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "DD.mm.YYYY")
                title
                description
            }
        }
    }
`;
