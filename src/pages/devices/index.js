import React from 'react';

import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import DeviceLinkCard from 'components/organisms/DeviceLinkCard/DeviceLinkCard';
import CardDeck from 'components/molecules/CardDeck/CardDeck';
import matter from 'gray-matter';

const DevicesPage = ({allDevices}) => {
    console.log(allDevices)
    return (
        <Page>
            <Header pageTitle="Devices"/>
            <CardDeck>
                {
                    allDevices && allDevices.map(device => {
                        return (
                            <DeviceLinkCard
                                key={device.slug}
                                device={device}
                            />
                        );
                    })
                }
            </CardDeck>
        </Page>
    );
};

export default DevicesPage;

export async function getStaticProps() {
    //https://webpack.js.org/guides/dependency-management/#requirecontext
    const webpackContext = require.context('../../../markdown/devices', true, /\.md$/);
    // the list of file names contained
    // inside the "posts" directory
    const keys = webpackContext.keys();
    const values = keys.map(webpackContext);

    // getting the post data from the files contained
    // in the "posts" folder
    const devices = keys.map((key, index) => {
        // dynamically creating the post slug
        // from file name
        const slug = key
            .replace(/^.*[\\\/]/, '')
            .split('.')
            .slice(0, -1)
            .join('.');

        // getting the .md file value associated
        // with the current file name
        const value = values[index];

        // parsing the YAML metadata and markdown body
        // contained in the .md file
        const document = matter(value.default);

        return {
            frontmatter: document.data,
            markdownBody: document.content,
            slug,
        };
    });

    return {
        props: {
            allDevices: devices,
        },
    };
}