import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import { ButtonPrimary, ButtonTextBack } from '../components/base/forms/Button';
import useKeyPress from './useKeypress';

export const converstionSteps = [
    '',
    'projected',
    'insights',
    'development',
    'savings',
    'react-native',
];


export const useStep = () => {
    const r = useRouter();
    const parts = r.asPath.split('/');
    const lastPart = parts[parts.length - 1];
    let step = converstionSteps.indexOf(lastPart);
    if (step === -1) step = 0;
    const previous = converstionSteps[step - 1];
    const next = converstionSteps[step + 1];
    useKeyPress('ArrowRight', () => {
        if (typeof next === 'string') {
            r.push(`/${r.query.id}/${next}`);
        }
    });
    useKeyPress('ArrowDown', () => {
        if (typeof next === 'string') {
            r.push(`/${r.query.id}/${next}`);
        }
    });
    useKeyPress('ArrowLeft', () => {
        if (typeof previous === 'string') {
            r.push(`/${r.query.id}/${previous}`);
        }
    });
    useKeyPress('ArrowUp', () => {
        if (typeof previous === 'string') {
            r.push(`/${r.query.id}/${previous}`);
        }
    });
    return {
        step,
        nav: (
            <nav className="rncc__bottom-nav flex-md-nowrap justify-content-between pr-4 mb-3">
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
                    <Link href="/contact-form">
                        <ButtonPrimary className="px-3">
                          Get in touch
                        </ButtonPrimary>
                    </Link>
                )}
            </nav>
        ),
    };
};
