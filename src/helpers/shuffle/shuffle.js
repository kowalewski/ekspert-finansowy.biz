export default function shuffle(array) {
    console.log(array);
    return array
        .map(item => ({ sort: Math.random(), value: item }))
        .sort((a, b) => a.sort - b.sort)
        .map(item => item.value);
}
