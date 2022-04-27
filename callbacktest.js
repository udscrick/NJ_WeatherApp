let add = (num1,num2,callback)=>{
    setTimeout(()=>{
        let val = num1+num2
        callback(val)
    },2000)

}

add(111,222,(sum)=>{
    console.log("SUm is: ",sum)
})