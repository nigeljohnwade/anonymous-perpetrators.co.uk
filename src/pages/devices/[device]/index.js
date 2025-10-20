import React from 'react';
import DeviceCard from 'components/organisms/DeviceCard/DeviceCard';
import Page from 'components/layout/Page/Page';
import Header from 'components/organisms/Header/Header';
import { glob } from 'glob';
import matter from 'gray-matter';

const TracksPage = ({
    frontmatter,
    markdownBody,
}) => {
    const backgroundImage = `url(/${frontmatter.deviceMainImage})`;
    const backgroundColor = 'black';

    return (
        <Page
            backgroundColor={backgroundColor}
            backgroundImage={backgroundImage}
            backgroundSize={'100vh'}
        >
            <Header pageTitle={frontmatter.deviceName}/>
            <DeviceCard
                key={frontmatter.slug}
                deviceItemData={{
                    frontmatter: frontmatter,
                    markdownBody: markdownBody,
                }}
            />
        </Page>
    );
};

export default TracksPage;

export async function getStaticPaths() {
    // getting all .md files from the posts directory
    const devices = await glob.sync(`markdown/devices/*.md`);

    // converting the file names to their slugs
    // this is janky as fuck, need to look at this again
    const deviceNames = devices.map((file) => {
            if (file.indexOf('/') > -1) {
                return file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim();
            } else if (file.indexOf('\\') > -1) {
                return file.split('\\')[2].replace(/ /g, ' - ').slice(0, -3).trim();
            }
        }
    );

    // creating a path for each of the `slug` parameter
    const paths = deviceNames.map((device) => {
        return {params: {device: device}};
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    // extracting the slug from the context
    const device = context.params.device;

    // retrieving the Markdown file associated to the slug
    // and reading its data
    const content = await import(`../../../../markdown/devices/${device}.md`)
        .then((data) => {
            return matter(data.default);
        });

    return {
        props: {
            frontmatter: content.data,
            markdownBody: content.content,
        },
    };
}

