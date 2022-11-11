import React from 'react';

import styles from './SoundCloudEmbed.module.css';

const SoundCloudEmbed = ({
    artistName= null,
    artistLink = null,
    theme = 'dark',
    trackId,
    trackLink,
    trackName,
}) => {
    return (
        <div className={styles['sound-cloud-embed']}>
            <iframe
                width="100%"
                height="20"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%2328728f&inverse=${Boolean(theme === 'dark')}&auto_play=false&show_user=true`}
            />
            <div className={styles['sound-cloud-embed-wrapper']}
            >
                <a
                    className={styles['sound-cloud-embed-link']}
                    href={artistLink}
                    title={artistName}
                    target="_blank"
                    rel="noreferrer"
                >
                    {artistName && artistName}
                </a> ·
                <a
                    href={trackLink}
                    title={trackName}
                    target="_blank"
                    rel="noreferrer"
                >
                    {trackName && trackName}
                </a>
            </div>
        </div>
    );
};

export default SoundCloudEmbed;
