const language = ["html","css","js","ruby","python"]

const values = language.forEach((item)=>{
    // console.log(item);
    return item
})
// language.item()
// console.log(values);


const books = [
    {title:'book one', genre:'fiction' ,publish:'1998',edition:'2003'},
    {title:'book two', genre:'non-fiction' ,publish:'1988',edition:'2013'},
    {title:'book three', genre:'fiction' ,publish:'1990',edition:'2002'},
    {title:'book four', genre:'history' ,publish:'1991',edition:'2003'},
    {title:'book five', genre:'non-fiction' ,publish:'1992',edition:'2004'},
    {title:'book six', genre:'fiction' ,publish:'1992',edition:'2003'},
    {title:'book seven', genre:'history' ,publish:'1994',edition:'2023'},
    {title:'book eight', genre:'fiction' ,publish:'1996',edition:'2014'},
    {title:'book nine', genre:'non-fiction' ,publish:'1997',edition:'2007'},
    {title:'book ten', genre:'history' ,publish:'1998',edition:'2008'},
    {title:'book eleven', genre:'fiction' ,publish:'1999',edition:'2009'},
    {title:'book twelve', genre:'non-fiction' ,publish:'2008',edition:'2013'},
    {title:'book thirteen', genre:'fiction' ,publish:'2009',edition:'2020'}
    
]

let userbooks = books.filter((bk)=>bk.genre === 'fiction' && bk.publish >= 2000)

 userbooks = books.filter((bk)=>{return bk.genre === 'fiction' && bk.publish >= 2000})      /////////////////    use return with {}     //////////////

console.log(userbooks);
// books.title array.forEach(element => {
    
// });