import React from 'react';

const SoundCloudEmbed = () => {
    return (
        <>
            <iframe
                width="100%"
                height="20"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/924599011&color=%23000000&inverse=false&auto_play=false&show_user=true"
            />
            <div
                style={{
                    fontSize: '10px',
                    color: '#cccccc',
                    lineBreak: 'anywhere',
                    wordBreak: 'normal',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                    fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                    fontWeight: '100'
                }}
            >
                <a
                    href="https://soundcloud.com/anonymousperpetrators"
                    title="anonymousperpetrators"
                    target="_blank"
                    style={{color: '#cccccc', textDecoration: 'none'}}
                >
                    anonymousperpetrators
                </a> ·
                <a
                    href="https://soundcloud.com/anonymousperpetrators/turbulent-berry"
                    title="Turbulent Berry (WIP)"
                    target="_blank"
                    style={{color: '#cccccc', textDecoration: 'none'}}
                >
                    Turbulent Berry (WIP)
                </a>
            </div>
        </>
    );
};

export default SoundCloudEmbed;