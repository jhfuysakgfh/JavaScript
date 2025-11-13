 const Mynum = [1,2,3,4,5,6,7,8,9]

// const newnum = Mynum.map((num) => {return num +10})
// console.log(newnum);


const newnum = Mynum
                    .map((num) => num * 10)
                    .map((num) => num + 10)
                    .map((num) => num - 10)
                    .filter((num) => num >= 80)


console.log(newnum);
