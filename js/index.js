const randomFolks = document.querySelector(".random-peeps");
const getData = async function() {
    const userResquest = await fetch(
        URL = "https://randomuser.me/api?results=5"
    );
    const data = await userResquest.json();
    //Once you have found the property name for the array of objects, 
    //create a new variable and map it to that property
    const usersResults = data["results"];
    displayUsers(usersResults);
}

getData();

const displayUsers = async function(usersResults) {
    randomFolks.innerHTML = "";
    
    for (let user = 0; user < usersResults.length; user++) {
        const userIndex = usersResults[user];
        const country = userIndex["location"]["country"];
        const name = userIndex["name"]["first"];
        const imageUrl = userIndex["picture"]["medium"];

        const userDiv = document.createElement("DIV");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar"/>
        `;
        randomFolks.append(userDiv);
    }

    
    
}