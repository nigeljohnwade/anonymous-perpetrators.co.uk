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
                <style>
                    
                </style>
            </Head>
            <body>
            <div className="background">
                <div className="sky-gradient">
                    <div className="sun-sphere">
                    </div>
                </div>
                <div className="ground-plane">
                    <div className="vapor-grid-glow">
                    </div>
                    <div className="vapor-grid">
                    </div>
                </div>
            </div>
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
                    </div>
                    :
                    <></>
            }
            </body>
        </Html>
    );
}