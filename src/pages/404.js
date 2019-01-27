import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => (
    <Layout>
        <div className="not-found__wrapper">
            <h1>Podana strona nie istnieje</h1>
            <p>
                <a href="https://ekspert-finansowy.biz">wróć do ekspert-finansowy.biz</a>
            </p>
        </div>
    </Layout>
);

export default NotFoundPage;
