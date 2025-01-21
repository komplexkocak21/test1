let audioFiles = [];

document.addEventListener('DOMContentLoaded', () => {
    renderAudioList();
});

function renderAudioList() {
    const container = document.getElementById('daftar-audio');
    container.innerHTML = '';
    audioFiles.forEach((file, index) => {
        const card = document.createElement('div');
        card.className = 'audio-card';
        card.innerHTML = `
            <audio controls>
                <source src="${file.src}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <span class="title">${file.title}</span>
            <button class="delete-btn" onclick="hapusAudio(${index})">Hapus</button>
        `;
        container.appendChild(card);
    });
}

function tambahAudio() {
    const title = document.getElementById('audio-title').value;
    const fileInput = document.getElementById('audio-file');
    const file = fileInput.files[0];
    if (title && file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            audioFiles.push({ src: e.target.result, title });
            renderAudioList();
            document.getElementById('audio-title').value = '';
            fileInput.value = '';
        };
        reader.readAsDataURL(file);
    } else {
        alert('Judul dan file audio harus diisi!');
    }
}

function hapusAudio(index) {
    audioFiles.splice(index, 1);
    renderAudioList();
}