//bring in all dom content
const getRepoInput = document.getElementById("get-repo");
const fetchRepoBtn = document.getElementById("fetch-repo");
const githubform = document.getElementById("github-form");
const listItems = document.querySelector('.repo-lists')


//actions for the menu toggler
const navOpen = document.querySelector('nav');
const openMenu = document.querySelector('.profile-toggler');

openMenu.addEventListener('click', () => {
    if (navOpen.classList.contains('open')) {
        navOpen.classList.remove('open')
    } else {
        navOpen.classList.add('open')
    }
});

//store user input here
const gitusername = []

//disabled button when input field is empty
window.addEventListener('load', () => {
    fetchRepoBtn.style.display = "none"
    getRepoInput.onchange = () => {
        fetchRepoBtn.style.display = "block"
    }
})


// listen for submissions on github input field
fetchRepoBtn.addEventListener('click', (e) => {
    e.preventDefault();

    //push in the github input username value
    gitusername.push(getRepoInput.value.split(" ").join(""))
    
    //run github API function, passing in the gihub username
    // requestUserRepos(gitusername);
    console.log(gitusername);

    //save name to localstorage then retrieve in another page
    localStorage.setItem("githubUsername", `${gitusername}`)
    
    //OPEN THE PROFILE PAGE FUNCTION
    pageOpens(20)

    //clear the input field
    getRepoInput.value = ""
})

const spinner = document.querySelector(".processing");
const showSpinner = document.querySelector(".user-data");

//run timeout that opens the profile pages
let openPage;
const pageOpens = (time) => {
    openPage = setInterval(timer, 1000)
    function timer() {
        time--
        console.log(time);
        if (time < 17) {
            showSpinner.style.display = "block";
            spinner.innerText = `Checking ${gitusername}, on Github server..`
        }
        if (time < 13) {
            spinner.innerText = `thank you ${gitusername} found your name on Github server, proccessing FETCH REQUEST...`
        }
        if (time < 9) {
            spinner.innerText = ` FETCH REQUEST passed access granted by Github server. proccessing your data...`
        }
        if (time < 5) {
            spinner.innerText = `Data proccessed thank you ${gitusername}.`
        }
        if (time < 1) {
            window.location.href = './profile.html';
        }
        if (time < 1) {
            clearInterval(openPage)
        }
    }
}