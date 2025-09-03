import 'css/styles.css';
import 'css/media-queries.css';
import Head from 'next/head';

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta
                    name="theme-color"
                    content="black"
                />
                <meta
                    name="viewport"
                    content="width=device-width, height=device-height, initial-scale=1, minimum-scale=0.1, maximum-scale=10, user-scalable=yes"
                />
                <title>{process.env.NODE_ENV === 'development' ? 'Local - Anonymous Perpetrators' : 'Anonymous Perpetrators'}</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
}