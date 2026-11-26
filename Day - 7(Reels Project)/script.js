const reels = [
    {
        id: 1,
        username: "Alex",
        caption: "Long Drive",
        video: "./assets/reel-1.mp4",
        likes: 0
    },
    {
        id: 2,
        username: "F1Official",
        caption: "Max Verstappens storms off",
        video: "./assets/reel-2.mp4",
        likes: 0
    },
    {
        id: 3,
        username: "Jordan",
        caption: "High Rise View",
        video: "./assets/reel-3.mp4",
        likes: 0
    },
    {
        id: 4,
        username: "Sophia",
        caption: "Night vibes Penthouse, Los Santos",
        video: "./assets/reel-4.mp4",
        likes: 0
    },
    {
        id: 5,
        username: "Liam",
        caption: "Germany in snow",
        video: "./assets/reel-5.mp4",
        likes: 0
    },
    {
        id: 6,
        username: "Chloe",
        caption: "Solemn park views at night",
        video: "./assets/reel-6.mp4",
        likes: 0
    },
    {
        id: 7,
        username: "Ethan",
        caption: "Dark Ambient Solitude",
        video: "./assets/reel-7.mp4",
        likes: 0
    }
];

const reelsContainer = document.getElementById("reelsContainer")

function renderReels() {
    reelsContainer.innerHTML = "";
    reels.forEach((reel) => {
        const reelElement = document.createElement("section");
        reelElement.classList.add("reel");

        reelElement.innerHTML = `
        <video 
            src="${reel.video}" 
            loop
            playsinline
            preload="metadata"
        ></video>

        <button class="mute-btn">🔊</button>

        <div class="play-indicator">▶</div>

        <div class="reel-info">
            <div class="username">@${reel.username}</div>
            <div class="caption">${reel.caption}</div>
        </div>

        <div class="reel-actions">

            <div class="action">
                <button class="like-btn">❤️</button>
                <span class="like-count">
                    ${reel.likes}
                </span>
            </div>

            <div class="action">
                <button class="comment-btn">💬</button>
                <span>Comment</span>
            </div>

            <div class="action">
                <button class="share-btn">➤</button>
                <span>Share</span>
            </div>
        </div>`
        reelsContainer.appendChild(reelElement);
    })
}

function setupLikes() {
    const likeButton = document.querySelectorAll(".like-btn");
    
    likeButton.forEach((button) => {
        button.addEventListener("click", () => {
            const isLiked = button.classList.toggle("liked");
            const countElement = button.parentElement.querySelector(".like-count");
            let count = Number(countElement.textContent);

            count = isLiked ? count + 1 : count - 1;
            countElement.textContent = count;
        })
    })
}


function setupMuteControls() {
    const muteButtons = document.querySelectorAll(".mute-btn");
    muteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const currentReel = button.closest(".reel");
            const video = currentReel.querySelector("video")

            video.muted = !video.muted;
            button.textContent = video.muted ? "🔇" : "🔊";
        })
    })
}

function setupVideoControls() {
    const reelElement = document.querySelectorAll(".reel");

    reelElement.forEach((reel) => {
        const video = reel.querySelector("video");
        const indicator = reel.querySelector(".play-indicator");

        video.addEventListener("click", ()=> {
            if(video.paused) {
                video.play();
                indicator.textContent = "▶";
            } else {
                video.pause();
                indicator.textContent = "||";
            }

            indicator.classList.add("show");

            setTimeout(() => {
                indicator.classList.remove("show");
            }, 500);
        })
    })
}

const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            const video = entry.target.querySelector("video");
            if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
                
                document.querySelectorAll(".reel video").forEach((otherVideo)=>{
                    if(otherVideo!==video){
                        otherVideo.pause();
                    }
                })

                video.play().catch(() => {

                })
            }else{
                video.pause();
            }
        })
    },{
        threshold:[0, 0.7, 1]
    }
)


function initializeReels() {
    renderReels();
    setupLikes();
    setupMuteControls();
    setupVideoControls();

    document.querySelectorAll(".reel").forEach((reel) => {
        observer.observe(reel);
    })
}


initializeReels()   
