let audioFiles = [];

// Function to fetch audio files from the music folder
function fetchAudioFiles() {
    // Simulating fetching audio files from the server
    // In a real application, this would involve an API call to get the list of files
    audioFiles = [
        { src: 'music/IRFAN - WTN ~ Beta Pung Bahagia [M V].mp3', title: 'IRFAN - WTN ~ Beta Pung Bahagia [M V]' },
        { src: 'music/Jadi Tamu _Fresly Nikijuluw Caver [M V] @IRFAN-WTN.mp3', title: 'IRFAN-WTN-Jadi Tamu' },
        { src: 'music/Caver Lagu Adelia Ade Lia By @IRFAN-WTN.mp3', title: 'IRFAN - WTN ~ Adelia Ade Lia' }
    ];
}

// Function to render audio files on the main page
function renderAudioList() {
    const container = document.getElementById('daftar-audio');
    container.innerHTML = '';
    audioFiles.forEach(file => {
        const card = document.createElement('div');
        card.className = 'audio-card';
        card.innerHTML = `
            <audio controls>
                <source src="${file.src}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <span class="title">${file.title}</span>
        `;
        container.appendChild(card);
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    fetchAudioFiles();
    renderAudioList();
});