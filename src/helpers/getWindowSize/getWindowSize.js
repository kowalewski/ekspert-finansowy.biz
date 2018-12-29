export default function getWindowSize() {
    const isBrowser = typeof window !== 'undefined';
    return {
        width: isBrowser ? window.innerWidth : 0,
        height: isBrowser ? window.innerHeight : 0,
    };
}
