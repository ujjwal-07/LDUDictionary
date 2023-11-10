
task1()
task2()
task3()
console.log("Everything is finished")
function  task1(){
    setTimeout(()=>{
        console.log("Task 1 done")
    },5000)
}

function task2(){
    setTimeout(()=>{
        console.log("Task 2 done")
    },5023)
}
function task3(){
    setImmediate(()=>{
        console.log("Testing set immediate")
    })
}


