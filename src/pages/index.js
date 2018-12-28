import React, { Component } from 'react';
import { shape, array } from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import LatestPosts from '../components/LatestPosts/LatestPosts';
import Intro from '../components/Intro/Intro';
import HeaderButtons from '../components/HeaderButtons/HeaderButtons';
import Footer from '../components/Footer/Footer';

export default class IndexPage extends Component {
    static propTypes = {
        data: shape({
            allMarkdownRemark: shape({
                edges: array,
            }),
        }),
    };

    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <Layout>
                <Intro />
                <HeaderButtons />
                <main className="main-content full-height">
                    <LatestPosts posts={posts} />
                    <Footer />
                </main>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;
