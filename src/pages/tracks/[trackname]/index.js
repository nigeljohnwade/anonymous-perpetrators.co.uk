import React from 'react';

import TrackCard from 'components/organisms/TrackCard/TrackCard';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import { glob } from 'glob';
import matter from 'gray-matter';

const TracksPage = ({
    frontmatter,
    markdownBody,
}) => {
    const backgroundColor = frontmatter.trackPageColour !== '' ? frontmatter.trackPageColour : undefined;
    const backgroundImage = frontmatter.image !== '' ? `url(${frontmatter.image})` : undefined;

    return (<Page
        backgroundColor={backgroundColor}
        backgroundImage={backgroundImage}
        backgroundSize={'100vh'}
    >
        <Header pageTitle={frontmatter.title} />
        <div
            style={{
                flexBasis: '50%',
            }}
        >
            <TrackCard
                key={frontmatter.slug}
                trackItemData={{
                    frontmatter: frontmatter,
                    markdownBody: markdownBody,
                }}
            />
        </div>
    </Page>);
};

export default TracksPage;

export async function getStaticPaths() {
    // getting all .md files from the posts directory
    const blogs = await glob.sync(`markdown/tracks/*.md`);

    // converting the file names to their slugs
    // this is janky as fuck, need to look at this again
    const tracknames = blogs.map((file) => {
            if (file.indexOf('/') > -1) {
                return file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim();
            } else if (file.indexOf('\\') > -1) {
                return file.split('\\')[2].replace(/ /g, ' - ').slice(0, -3).trim();
            }
        }
    );

    // creating a path for each of the `slug` parameter
    const paths = tracknames.map((track) => {
        return {params: {trackname: track}};
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    // extracting the slug from the context
    const slug = context.params.trackname;

    // retrieving the Markdown file associated to the slug
    // and reading its data
    const content = await import(`../../../../markdown/tracks/${slug}.md`)
        .then((data) => {
            return matter(data.default);
        });

    console.log(content);
    return {
        props: {
            frontmatter: content.data,
            markdownBody: content.content,
        },
    };
}
