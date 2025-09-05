import React from 'react';

import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import TrackLinkCard from 'components/organisms/TrackLinkCard/TrackLinkCard';
import CardDeck from 'components/molecules/CardDeck/CardDeck';
import matter from 'gray-matter';

const TracksPage = ({allTracks}) => {

    return (
        <Page>
            <Header pageTitle="Tracks" />
            <CardDeck>
                {
                    allTracks && allTracks.map(track => {
                        return (
                            <TrackLinkCard
                                key={track.slug}
                                track={track}
                            />
                        );
                    })
                }
            </CardDeck>
        </Page>
    );
};

export default TracksPage;

export async function getStaticProps() {
    //https://webpack.js.org/guides/dependency-management/#requirecontext
    const webpackContext = require.context('../../../markdown/tracks', true, /\.md$/);
    // the list of file names contained
    // inside the "posts" directory
    const keys = webpackContext.keys();
    const values = keys.map(webpackContext);

    // getting the post data from the files contained
    // in the "posts" folder
    const posts = keys.map((key, index) => {
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
            allTracks: posts,
        },
    };
}