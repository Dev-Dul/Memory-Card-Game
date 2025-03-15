function getIds(){
    const ids = [
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()},
        {id: crypto.randomUUID()}
    ];


    return ids;
}

function randomize(arr){
    const nums = [];
    for(let i = 0; i < 4; i++){
        let num = Math.floor(Math.random() * 12);
        while(arr.includes(num) || nums.includes(num)){
            num = Math.floor(Math.random() * 12);
        }
        nums.push(num);
    }

    return nums;
}

export { getIds, randomize };