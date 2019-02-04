import React, { Component } from 'react';
import { shape, array } from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import LatestPosts from '../components/LatestPosts/LatestPosts';
import Intro from '../components/Intro/Intro';
import HeaderButtons from '../components/HeaderButtons/HeaderButtons';
import Footer from '../components/Footer/Footer';
import Section from '../components/Section/Section';
import Services from '../components/Services/Services';
import servicesData from '../components/Services/servicesData';
import InView from '../components/InView/InView';
import GoogleMap from '../components/GoogleMap/GoogleMap';
import markers from '../components/GoogleMap/markers';
import Benefits from '../components/Benefits/Benefits';
import benefitsData from '../components/Benefits/benefitsData';

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
                <main className="main-content full-height js-content">
                    <Section
                        title="Chciałbyś wiedzieć w czym mogę Ci pomóc?"
                        intro="Jako ekspert finansowy oferuję Państwu profesjonalną pomoc w zakresie finansów i ubezpieczeń. Swoją działalność opieram na pośredniczeniu w udzielaniu wszelkiego rodzaju kredytów, a także leasingów. Kompletuję od Państwa niezbędną dokumentację do procesowania wniosku kredytowego i przeprowadzam Państwa przez cały etap okołokredytowy. Dysponuję ofertą ponad 16 renomowanych banków, co pozwala na dobranie jak najkorzystniejszej oferty do Państwa potrzeb. Oprócz tego, jako agent ubezpieczeniowy, jestem w stanie pomóc Państwu wybrać odpowiednią ofertę ubezpieczenia na życie spośród cenionych na polskim rynku firm ubezpieczeniowych."
                    >
                        <Services services={servicesData} />
                    </Section>
                    <div className="latest-posts">
                        <Section modificator="regular-padding">
                            <LatestPosts posts={posts} />
                        </Section>
                    </div>
                    <InView>
                        <GoogleMap id="google-maps" markers={markers}>
                            <div className="map__layer">
                                <h4 className="map__title">
                                    Obszar działalności
                                </h4>
                                <p className="map__txt">
                                    Obszar mojej działaności to cztery miasta
                                    powiatowe: Augustów, Olecko, Sejny i
                                    Suwałki. Nie ma jednak problemu, abym mógł
                                    spotkać się z klientem w wyznaczonym przez
                                    niego miejscu.
                                </p>
                            </div>
                        </GoogleMap>
                    </InView>
                    <Section modificator="dark">
                        <blockquote className="section__quote">
                            "Kto mówi językiem niezrozumiałym dla nikogo poza
                            nim, nie mówi w ogóle. Mówić, to mówić do kogoś."
                        </blockquote>
                    </Section>
                    <Section title="Korzyści dla klienta">
                        <Benefits benefits={benefitsData} />
                    </Section>
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
                        date(formatString: "DD.MM.YYYY")
                    }
                }
            }
        }
    }
`;
