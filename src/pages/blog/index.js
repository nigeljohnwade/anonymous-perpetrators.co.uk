import React from 'react';
import matter from 'gray-matter';

import styles from './Blog.module.css';

import Page from 'components/layout/Page/Page';
import Typography from 'components/atoms/Typography/Typography';
import Header from 'components/organisms/Header/Header';
import PageBody from 'components/atoms/PageBody/PageBody';

const BlogList = ({allBlogs}) => {

    return (
        <Page>
            <Header pageTitle="blog" />
            <PageBody>
                <ol className={styles['blog__list']}>
                    {
                        allBlogs && allBlogs.map(blog => {
                            return (
                                <li key={blog.slug}>
                                    <Typography
                                        modifier="blog-title-link"
                                        element="a"
                                        href={`/blog/${blog.slug}`}
                                        suppressHydrationWarning
                                    >
                                        <b>{blog.frontmatter.title}</b> by {blog.frontmatter.author} on {new Date(blog.frontmatter.date).toLocaleDateString()}
                                    </Typography>
                                </li>
                            );
                        })
                    }
                </ol>
            </PageBody>
        </Page>
    );
};

export default BlogList;

export async function getStaticProps() {
    //https://webpack.js.org/guides/dependency-management/#requirecontext
    const webpackContext = require.context('../../../markdown/apblog', true, /\.md$/);
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
            allBlogs: posts,
        },
    };
}