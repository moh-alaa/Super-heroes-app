import classNames from 'classnames';
import React from 'react'
import styles from './Bio.module.scss'

export const Bio = props => {
    const { biography } = props;

    return (
        <div className={classNames('flex', styles.bio)}>
            {biography['full-name'] && (
                <p className="text-color"><strong>Full name: </strong> <span>{biography['full-name']}</span></p>
            )}
            {biography['place-of-birth'] &&  biography['place-of-birth'] !== "-" ? (
                <p className="text-color"><strong>Place of Birth: </strong> <span>{biography['place-of-birth']}</span></p>
            ) : ''}
            {biography['first-appearance'] &&  biography['first-appearance'] !== "-" ? (
                <p className="text-color"><strong>First appearance: </strong> <span>{biography['first-appearance']}</span></p>
            ) : ''}
            {biography.publisher && (
                <p className="text-color"><strong>Publisher: </strong> <span>{biography.publisher}</span></p>
            )}
        </div>
    )
}
