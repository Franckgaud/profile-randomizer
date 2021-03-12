
let randomArr = [0,1,2,3,4,5,6,7,8,9]

let isRandomizing = false;
const shuffle = (arr) => {
    arr.sort(() => Math.random() - 0.5)
}


const populateTable = () => {
    shuffle(randomArr)
    for(let i = 0; i < USERS.length; i ++){
        let imgNum = 1;
        const table = document.getElementById("table");
        const row = table.insertRow(1);
        row.id = i;
        let name = row.insertCell(0);
        name.id = "name"+i
        let email = row.insertCell(1);
        email.id = "email"+i
        let phone = row.insertCell(2);
        phone.id = "phone"+i
        let picture = row.insertCell(3);
        
        let balance = row.insertCell(4);
        balance.id = "balance"+i

        let username =  USERS[randomArr[i]].name.first + " " + USERS[i].name.last;
        if(username.length > 21){
            username = username.slice(0,20) + '...'

        }
        name.innerHTML =  username;
        email.innerHTML = USERS[randomArr[i]].email;
        phone.innerHTML = USERS[randomArr[i]].phone;
        let img = document.createElement('img');
        img.id = "img"+i
        img.src = USERS[randomArr[i]].pictureUrl
        picture.appendChild(img);
        balance.innerHTML = USERS[randomArr[i]].accountBalance;

    imgNum++

    }
}

const shuffleTable = () => {
    shuffle(randomArr)
    for(let i = 0; i < USERS.length; i++){
        let currName = document.getElementById("name" + i);
        let username =  USERS[randomArr[i]].name.first + " " + USERS[i].name.last;
        if(username.length > 21){
            username = username.slice(0,20) + '...'

        }
        currName.innerHTML = username
        let currEmail = document.getElementById("email" + i);
        currEmail.innerHTML = USERS[randomArr[i]].email;
        let currPhone = document.getElementById("phone" + i);
        currPhone.innerHTML = USERS[randomArr[i]].phone;
        let currPicture = document.getElementById("img" + i);
        currPicture.src = USERS[randomArr[i]].pictureUrl
        let currBalance = document.getElementById("balance" + i);
        currBalance.innerHTML = USERS[randomArr[i]].accountBalance
        


    }
}

populateTable()
let shuffling;
const startRandom = () => {
    isRandomizing = true
    shuffleTable()
    
    shuffling = setInterval(() => shuffleTable(), 2000);
}
const stopRandom = () => {
    isRandomizing = false
    clearInterval(shuffling)
} 

let orderedArr = []
USERS.sort((a,b) => (a.accountBalance === b.accountBalance)?(b.id < a.id)?a.accountBalance -b.accountBalance: b.accountBalance - a.accountBalance:a.accountBalance - b.accountBalance)
const sortUser = () => {
    if(!isRandomizing){
    for(let i = 0; i < USERS.length; i++){
        let currName = document.getElementById("name" + i);
        let username =  USERS[i].name.first + " " + USERS[i].name.last;
        if(username.length > 21){
            username = username.slice(0,20) + '...'

        }
        currName.innerHTML = username
        let currEmail = document.getElementById("email" + i);
        currEmail.innerHTML = USERS[i].email;
        let currPhone = document.getElementById("phone" + i);
        currPhone.innerHTML = USERS[i].phone;
        let currPicture = document.getElementById("img" + i);
        currPicture.src = USERS[i].pictureUrl
        let currBalance = document.getElementById("balance" + i);
        currBalance.innerHTML = USERS[i].accountBalance
        


    }
}
}


