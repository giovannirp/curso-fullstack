const ano = 1992;
// const ano = 2000;
// const ano = 2022;
// const ano = 1992;

if ((ano % 4 === 0) && (ano % 100 !== 0) || (ano % 400 === 0)) {
    console.log(`${ano} é bissexto`);
} else {
    console.log(`${ano} não é bissexto`);
}
