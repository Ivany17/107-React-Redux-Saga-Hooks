console.log(4);
/* Генератор - это функцимя, которая умеет приостанавливать свою работу и возвращать промежуточный результат */

const iterator = generate();

function * generate(){
    console.log('1 = ', 1);
    yield 1;
    console.log('2 = ', 2);
}

const res1 = iterator.next();
const res2 = iterator.next();
console.log('res1 = ', res1);
console.log('pause');
console.log('res2 = ', res2);


/* Делаем генератор, у которого вызов метода next выводит инкремент числа */
function * generateIncrementNumber(max) {
    try {
        let num = 0;
        while(num<max){
            yield num++;
        }
    } catch (error) {
        console.log('ERROR!!!', error)
    }
}

const iter = generateIncrementNumber(20)

for (const n of iter) {
    console.log(n)
    if(n===5) {``
        iter.return('n=5')
    }
}