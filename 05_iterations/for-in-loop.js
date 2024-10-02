console.log(`--------------------------------------------------`);

const gameArr = {
    game1: 'NFS',
    game2: 'GTA',
    game3: 'Cyberpunk',
    game4: 'BGMI',
    game5: 'FAU-G'
}

for (const key in gameArr) {
    console.log(`${key} is for ${gameArr[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    console.log(`${programming[key]}`);
}



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('BHU', "Bhuttan")

for(const mapList in map){
    console.log(mapList);
    
}