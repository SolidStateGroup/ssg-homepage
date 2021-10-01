import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import { ButtonTextBack } from '../components/base/forms/Button';

export const converstionSteps = [
    '',
    'projected-costs',
    'insights',
    'conversion-costs',
    'savings',
];

export const useStep = () => {
    const r = useRouter();
    const parts = r.asPath.split('/');
    const lastPart = parts[parts.length - 1];
    const step = converstionSteps.indexOf(lastPart) || 0;

    const previous = converstionSteps[step - 1];
    const next = converstionSteps[step + 1];
    return {
        step,
        nav: (
            <nav className="rncc__bottom-nav navbar flex-md-nowrap pr-5 pb-4 pl-0">
                {typeof previous === 'string' ? (
                    <Link href={`/${r.query.id}/${previous}`}>
                        <ButtonTextBack className="mr-0 text-primary" />
                    </Link>
                ) : <div/>}

                {typeof next === 'string' ? (
                    <Link href={`/${r.query.id}/${next}`}>
                        <ButtonPrimary className="px-3">
                          Next
                        </ButtonPrimary>
                    </Link>
                ) : (
                    <div />
                )}
            </nav>
        ),
    };
};
