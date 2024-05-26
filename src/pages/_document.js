import {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://use.typekit.net/ufc3flv.css"
                />
            </Head>
            <body>
            <Main/>
            <NextScript/>
            {
                process.env.NODE_ENV === 'production'
                    ?
                    <div
                        className="statcounter"
                        style={{position: 'absolute', bottom: 0}}
                    >
                    <a
                            title="Web Analytics Made Easy - Statcounter"
                            href="https://statcounter.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className="statcounter"
                                src="https://c.statcounter.com/12807722/0/85f40b8a/1/"
                                alt="Web Analytics Made Easy - Statcounter"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </a>
                        <a
                            rel="me"
                            href="https://ravenation.club/@anonymousperpetrators"
                        >Mastodon</a>
                    </div>
                    :
                    <></>
            }
            </body>
        </Html>
    );
}