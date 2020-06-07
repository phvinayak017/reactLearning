/*function myFunction(x) {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(x*2), 2000
        })
    })
}


function addPromise(){
    return new Promise(resolve => {
        myFunction(10).then((a)=>{
            myFunction(10).then((b) =>{
                myFunction(10).then((c) =>{
                    resolve(a+b+c)
                })
            })
        })

    })
}

addPromise().then((d)=> console.log(d))

 */

/*
function doubleNumber(x){
    return new  Promise(resolve => {
        setTimeout(()=>{
            resolve(x*2), 2000
        })
    })
}

async function  addAsync() {
    const a = await doubleNumber(10)
    const b = await doubleNumber(10)
    const c = await doubleNumber(10)
    return a+b+c
}

addAsync().then(sum =>{
    console.log(sum)
})
 */