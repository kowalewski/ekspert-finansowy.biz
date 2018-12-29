function createScript({ url, tagId }) {
    const script = document.createElement('script');
    script.setAttribute('id', tagId);
    script.src = url;
    document.getElementsByTagName('body')[0].appendChild(script);
    return script;
}

export default function loadScript({ url, tagId }) {
    const scriptTag = createScript({ url, tagId });

    return new Promise((resolve, reject) => {
        scriptTag.onload = () => {
            resolve();
        };
        scriptTag.onerror = () => {
            reject(`Could not load script: ${url}`);
        };
    });
}
