const createScript = ({ url, id, attributes }) => {
    const script = document.createElement('script');
    script.setAttribute('id', id);
    script.setAttribute('src', url);

    attributes.forEach((attribute) => {
        script.setAttribute(attribute.name, attribute.value);
    });

    return script;
};

export default function loadScript({ url, id, attributes = [] }) {
    if (document.getElementById(id)) {
        return Promise.resolve();
    }

    const script = createScript({ url, id, attributes });
    document.getElementsByTagName('body')[0].appendChild(script);

    return new Promise((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject();
    });
}