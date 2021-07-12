const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const player = document.getElementById("player");
const list = document.getElementById("playlist");
const playlistSong = list.querySelectorAll("li");
const audio = document.getElementById("song");

// Songs
const songs = [
    'Crusade',
    'Down to the Ground',
    'The Third',
    'BFG Devision',
    'Hell on Earth',
    'Meathook',
    'The Super Gore Nest',
    'TOTTFIY',
    'Conflagration',
    'Dune',
    'Xenomorph',
    'Bring It!',
    'Hell March 3',
    'Rock And Awe',
    'Aftershock',
    'Boomslang',
    'Prevail',
    'Quarantine',
    'Time'
];

let songIndex = 0; // The First song

loadSong(songs[songIndex]);

function loadSong(song) {
    audio.src=`./soundtracks/${song}.mp3`;
}

function playSong(){
    player.classList.add("play");
    playlistSong[songIndex].classList.add("playing-now");
    playBtn.querySelector("i.fa").classList.remove("fa-play");
    playBtn.querySelector("i.fa").classList.add("fa-pause");
    audio.play();
}

function pauseSong(){
    player.classList.remove("play");
    playlistSong[songIndex].classList.remove("playing-now");
    playBtn.querySelector("i.fa").classList.remove("fa-pause");
    playBtn.querySelector("i.fa").classList.add("fa-play");
    audio.pause();
}

function prevSong(){
    playlistSong[songIndex].classList.remove("playing-now");
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong(){
    playlistSong[songIndex].classList.remove("playing-now");
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//Event Play/Pause song
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains("play");

    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }

});

//Change Songs
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

//Ended song start new
audio.addEventListener("ended",nextSong);