for (let i = 24; i <= 50; i++) {
    let now = new Date(`1 Jan ${i}`)
let ObjectToString = now.toString()
    if (ObjectToString.slice(0,0+3) == 'Sun') {
        console.log(`1st January Sunday on 20${i}`);
    }
    
}