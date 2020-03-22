import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../styles/index.scss';

const TemplateWrapper = ({ children }) => (
    <StaticQuery
        query={graphql`
            query HeadingQuery {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `}
        render={data => (
            <div>
                <Helmet>
                    <html lang="pl" />
                    <title>{data.site.siteMetadata.title}</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta
                        name="description"
                        content={data.site.siteMetadata.description}
                    />
                    <meta name="theme-color" content="#fff" />
                    <meta
                        name="image"
                        content="http://ekspert-finansowy.biz/images/bg-large.jpg"
                    />
                    <meta
                        itemprop="name"
                        content="Kredyty i ubezpieczenia - Paweł Kowalewski"
                    />
                    <meta
                        itemprop="description"
                        content="Jako ekspert finansowy oferuję Państwu profesjonalną pomoc w zakresie finansów i ubezpieczeń. Swoją działalność opieram na pośredniczeniu w udzielaniu wszelkiego rodzaju kredytów, a także leasingów. Kompletuję od Państwa niezbędną dokumentację do procesowania wniosku kredytowego i przeprowadzam Państwa przez cały etap okołokredytowy. Dysponuję ofertą ponad 16 renomowanych banków, co pozwala na dobranie jak najkorzystniejszej oferty do Państwa potrzeb."
                    />
                    <meta
                        itemprop="image"
                        content="http://ekspert-finansowy.biz/images/bg-large.jpg"
                    />
                    <meta property="og:type" content="business.business" />
                    <meta
                        property="og:title"
                        content={data.site.siteMetadata.title}
                    />
                    <meta property="og:url" content="/" />
                    <meta
                        name="og:image"
                        content="http://ekspert-finansowy.biz/images/bg-large.jpg"
                    />
                    <meta
                        name="google-site-verification"
                        content="ERwpfXLy-xQOdU_FgEYLn6N_muXaFvBvfvWSDmi6zyA"
                    />
                    <meta
                        name="google-site-verification"
                        content="D0hIkG2O1oS7weZKM2MjTtwYp_0u-52Ux_lZQ118OT0"
                    />
                    <meta name="og:locale" content="pl_PL" />
                </Helmet>
                <div>{children}</div>
            </div>
        )}
    />
);

export default TemplateWrapper;
