function applyJob(jobTitle) {
    alert(`Anda telah melamar pekerjaan sebagai ${jobTitle}!`);
}

// Menampilkan daftar pekerjaan yang tersedia
const jobList = [
    { title: 'Desainer Grafis', description: 'Mengembangkan desain grafis' },
    { title: 'Manajer Proyek', description: 'Mengelola proyek' },
];

const jobListElement = document.getElementById('job-list');

jobList.forEach((job) => {
    const jobListItem = document.createElement('li');
    jobListItem.textContent = `${job.title} - ${job.description}`;
    jobListElement.appendChild(jobListItem);
});