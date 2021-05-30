//retrieve username from localstorage
const username = localStorage.getItem("githubUsername")
console.log(username);
window.addEventListener("load", () => {
     //fetch github acount using  api url passing in the username as hook
    fetch(`https://api.github.com/users/${username}`)
        .then(result => result.json())
        .then(data => {
            displayInfo(data)
        })
    
})

//bring in dom content from profile page
const imgSmall = document.querySelector(".profile-img-small");
const imgBig = document.querySelector(".profile-img");
const profileBoi = document.querySelector(".profile-desc-p");
const follower = document.querySelector(".profile-followers");
const following = document.querySelector(".profile-following");
const stars = document.querySelector(".total-star");
const profileName = document.querySelector(".profile-name");

//function that display user details as needed
const displayInfo = (info) => {
    imgSmall.src = info.avatar_url;
    imgBig.src = info.avatar_url;
    profileName.innerText = info.name
    profileBoi.innerHTML = info.bio
    follower.innerHTML = `🤼 ${info.followers_url.length} Followers`;
    following.innerHTML = `🚶‍♂️🚶‍♀️ ${info.following_url.length} Following`;
    stars.innerHTML = `⭐ ${info.starred_url.length} Star`;
    console.log(info);
}


//funtions for repository
window.addEventListener('load', () => {
    //fetch user repos using github api
    fetch(`https://api.github.com/users/${username}/repos`).then(result => result.json()).then(repos => {
        displayRepos(repos)
    }).catch(err => {
        console.log(err);
    })
})

//bring in dom element
const repolength = document.querySelector('.repos');
//functions for passing user repos to html
const displayRepos = (repo) => {
    const specificNo = repo.splice(0, 20)
    repolength.innerText = specificNo.length;
    console.log(specificNo);

    //map through user repo array
    const name = document.querySelector('.profile-repo-name');
    specificNo.map(item => {
        console.log(item);
            //create individual div for the repos
    const profileRight = document.querySelector('.profile-right')

    const profileRightitems = document.createElement('div');
    profileRightitems.classList.add('profile-right-items');

    const profileRepo = document.createElement('div');
     profileRepo.classList.add('profile-repo');

    const profileRepoName = document.createElement('div');
    profileRepoName.classList.add('profile-repo-name');

    const profileRepopDesc = document.createElement('div');
    profileRepopDesc.classList.add('profile-repo-p-desc');

    const profileRepoP = document.createElement('div');
    profileRepoP.classList.add('profile-repo-p');

    const profileRepoActivity = document.createElement('div');
    profileRepoActivity.classList.add('profile-repo-activity');

    const profileRepoLanguage = document.createElement('div');
    profileRepoLanguage.classList.add('profile-repo-language');

    const profileRepoStar = document.createElement('div');
    profileRepoStar.classList.add('profile-repo-star');

    const profileRepoFolk = document.createElement('div');
    profileRepoFolk.classList.add('profile-repo-folk');
    
        const fork = document.createElement('strong');
        profileRepoFolk.appendChild(fork)
        

    const profileRepoUpdate = document.createElement('div');
        profileRepoUpdate.classList.add('profile-repo-update');
        
        const profileStar = document.createElement('div');
        profileStar.classList.add("profile-star");

        const profileStarBtn = document.createElement('a');
        profileStarBtn.classList.add('profile-star-btn');

    // //append individuals div to each other
    profileRight.appendChild(profileRightitems);

    profileRightitems.appendChild(profileRepo);
        
    profileRightitems.appendChild(profileStar);

    profileRepo.appendChild(profileRepoName);

    profileRepo.appendChild(profileRepopDesc)

    profileRepo.appendChild(profileRepoP)

    profileRepoActivity.appendChild(profileRepoFolk);

    profileRepoActivity.appendChild(profileRepoLanguage);
    
    profileRepoActivity.appendChild(profileRepoStar);

    profileRepoActivity.appendChild(profileRepoUpdate);
    
    profileRepo.appendChild(profileRepoActivity);
        
    profileStar.appendChild(profileStarBtn);
        
        //add all new created elements into the dom
        profileRepoName.innerHTML = item.name;
        profileRepoLanguage.innerHTML = `💡 ${item.language}`;
        fork.innerHTML = `<img src="./fork.png" class="fork"/> ${item.forks_url.length}`;
        profileRepoStar.innerHTML = `🌟 ${item.stargazers_url.length}`
        profileRepoUpdate.innerHTML = `👩‍🏭 ${item.updated_at}`
        profileStarBtn.innerHTML = `✨Star`

    })
}
