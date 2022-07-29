async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    // console.log(user);
    displayUser(user);
};




function displayUser(user){
    const name = document.getElementById('name');
    const Lname = document.getElementById('Lname');
    const email = document.getElementById('email');
    const phone = document.getElementById('call');
    const location = document.getElementById('location');
    const img = document.getElementById('image');


    name.innerText = `${user.name.first}`;
    Lname.innerText = `${user.name.last}`;
    email.innerText = `${user.email}`;
    phone.innerText = `${user.phone}`;
    location.innerText = `${user.location.country}`;
    img.setAttribute('src', `${user.picture.large}`);
};



getRandomUser()

