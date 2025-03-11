// Create An Element

const onePlusListItem = document.createElement("li");

// adding a content

onePlusListItem.innerText = "One Plus";
console.log(onePlusListItem);

// Adding an element to DOM Tree

const paragraph = document.createElement('p');
paragraph.textContent = 'Hello, World!';

const mobileBrands = document.getElementById("mobileBrands");
const samsungListItem = document.getElementById("samsung");

mobileBrands.insertBefore(onePlusListItem, samsungListItem);

mobileBrands.append(paragraph,onePlusListItem);


const profileContainer = document.getElementById('profileContainer');


const users = [
    {
        id : 1,
        name : "John Doe",
        age : 25,
        occupation : "Software Engineer"
    },
    {
        id : 2,
        name : "Jane Doe",
        age : 30,
        occupation : "Doctor"
    },
    {
        id : 3,
        name : "Bob Smith",
        age : 35,
        occupation : "Teacher"
    },
    {
        id : 4,
        name : "Alice Johnson",
        age : 20,
        occupation : "Student"
    },
    {
        id : 5,
        name : "Mike Brown",
        age : 40,
        occupation : "Lawyer"
    }
]



const userCard = users.map((user)=>{
    return(
        `   
           <div>
             <img src="https://images.pexels.com/photos/21578777/pexels-photo-21578777/free-photo-of-brunette-reading-book-on-bus.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load">
                <h2 class="userName">${user.name}</h2>
                <p class="userOccupation"> ${user.occupation} </p>
           </div>

        `
    )
})

console.log(userCard);

profileContainer.innerHTML = userCard.join("");


const googleListItem = document.getElementById("google");
googleListItem.innerText ="Google Pixel";




mobileBrands.removeChild(onePlusListItem);
samsungListItem.remove();
googleListItem.remove();


const profilePic = document.createElement("img");


// profilePic.src = "https://images.pexels.com/photos/21578777/pexels-photo-21578777/free-photo-of-brunette-reading-book-on-bus.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load";
// profilePic.alt = "Profile Picture";

profilePic.setAttribute("src", "https://images.pexels.com/photos/30710145/pexels-photo-30710145/free-photo-of-close-up-of-two-hands-reaching-out.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load");
profilePic.setAttribute("alt", "profilePicture");

console.log(profilePic);

console.log(profilePic.hasAttribute("class"));

const profile = document.getElementById('profile');
profile.appendChild(profilePic);

profilePic.setAttribute("class", "profilePic");


console.log(mobileBrands.className);

mobileBrands.classList.toggle("brand");
mobileBrands.classList.toggle("brand");