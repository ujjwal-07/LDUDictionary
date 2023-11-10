function getSumNum(a, b) {
    const customPromise = new Promise((resolve, reject) => {
      const sum = a + b;
  
      if(sum <= 5){
        resolve(sum)
      } else {
        reject(new Error('Oops!.. Number must be less than 5'))
      }
    })
  
    return customPromise
  }

  getSumNum(1, 2).then(data => {
    console.log("initial data",data)
    value = data + 1
    return value
  }).then(newdata =>{
   
    console.log("modified data", newdata)
    return newdata+1
  }).then(newerdata =>{
    if (newerdata > 5){
        console.log("Newever data is greater than 5", newerdata)

    }
    else{
        console.log("Newever data is smaller than 5", newerdata)

    }

  })
  .catch(err => {
    console.log(err)
  })

a = 25;
let promise = new Promise((resolve,reject)=>{
  if(a == 20){
    resolve("A is 20")
  }else{
    reject("A is not 20")
  }


}).then(data=>{
  console.log(data)
})
.catch(err=>{
  console.log(err)
})