import Image from 'next/image';
import React from 'react';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { glob } from 'glob';

import styles from './Blog.module.css';

import Typography from '../../components/atoms/Typography/Typography';
import Page from '../../components/layout/Page/Page';
import Header from '../../components/organisms/Header/Header';

export default function BlogTemplate({frontmatter, markdownBody}) {

    return (
        <Page>
            <Header pageTitle={frontmatter.title}/>
            <div
                style={{
                    padding: '1rem',
                    backgroundColor: 'hsl(0deg 0% 24% / 78%)',
                    maxWidth: 'var(--longform-text)',
                }}
            >
                <div
                    className={[
                        'tk-itc-avant-garde-gothic-pro',
                        styles['blog__body'],
                    ].join(' ')}
                >
                    <ReactMarkdown>{markdownBody}</ReactMarkdown>
                </div>
                <div className={styles.blog__footer}>
                    <Typography element="p">
                        Author: {frontmatter.author}
                    </Typography>
                    <Typography element="p">
                        On: {new Date(frontmatter.date).toLocaleDateString()}
                    </Typography>
                    <Typography element="p">
                        In: {frontmatter.category}
                    </Typography>
                </div>
            </div>
        </Page>
    );
}

export async function getStaticPaths() {
    // getting all .md files from the posts directory
    const blogs = await glob.sync(`markdown/apblog/*.md`);

    // converting the file names to their slugs
    // this is janky as fuck, need to look at this again
    const blogSlugs = blogs.map((file) => {
            if (file.indexOf('/') > -1) {
                return file.split('/')[2].replace(/ /g, '-').slice(0, -3).trim();
            } else if (file.indexOf('\\') > -1) {
                return file.split('\\')[2].replace(/ /g, ' - ').slice(0, -3).trim();
            }
        }
    );

    // creating a path for each of the `slug` parameter
    const paths = blogSlugs.map((slug) => {
        return {params: {slug: slug}};
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    // extracting the slug from the context
    const {slug} = context.params;

    // retrieving the Markdown file associated to the slug
    // and reading its data
    const content = await import(`../../../markdown/apblog/${slug}.md`)
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
