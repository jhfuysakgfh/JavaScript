const language = ["html","css","js","ruby","python"]

language.forEach(function(val){
    // console.log(val);
    

})

language.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
    
})

const coding = [
    {
        first : "JavaScript",
        extension : "js"
    },
    {
        first : "Java",
        extension : "java"
    },
    {
        first : "python",
        extension : "py"
    },
]

coding.forEach((item)=>{
    console.log(item.first,item.extension);
    
})