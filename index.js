let n1 = Number(prompt('Digite sua primeira nota: '));
let n2 = Number(prompt('Digite sua segunda nota: '));
let n3 = Number(prompt('Digite sua terceira nota: '));

const p1 = 1;
const p2 = 3;
const p3 = 5;

const media = (n1 * p2 + n2 * p3 + n3 * p1) / (p1 + p2 + p3);

console.log(`A sua média ponderada foi de: ${media.toFixed(1)} !`);
window.alert(`A sua média ponderada foi de: ${media.toFixed(1)} !`);
