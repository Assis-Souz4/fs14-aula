const compara2Num = (n1, n2) => {
    if(n1 < n2){
        console.log(`o numero ${n1} é menor ${n2}`);
    } else if(n1 === n2){
        console.log(`o numero ${n1} é igual ${n2}`);
}else{
    console.log(`o numero ${n1} é maior ${n2}`);
}
}
compara2Num(20, 40)
compara2Num(40, 40)
compara2Num(60, 40)