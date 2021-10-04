import { useEffect } from 'react';

export default function useKeyPress(targetKey, cb) {
    function downHandler({ key }) {
        if (key === targetKey) {
            cb(true);
        }
    }
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, []);
}
