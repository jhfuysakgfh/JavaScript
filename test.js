
    function addlanguage(langName){
        const li = document.createElement('li')
        li.innerHTML =  `${langName}`
        document.querySelector('.language').
        appendChild(li)
        console.log(li);
        
    }
   
    addlanguage("python")
      
    addlanguage("ruby")
     
      
    addlanguage("kuchh bhi")
      
    addlanguage("badhiya")
     
    addlanguage("aur kya")
     
    addlanguage("bas")
    // console.log(li);
    
 

    
    //edit 

    const secondlang = document.querySelector('li:nth-child(7)')
    // console.log(secondlang);
    
    
    // secondlang.innerHTML = "byyyyyy"
    const newli = document.createElement('li')
    newli.textContent = "tripathi"
     secondlang.replaceWith(newli)
    console.log(newli);


    const firstLang = document.querySelector('li:first-child')
    firstLang.outerHTML= "<li>rahul</li>"



    

