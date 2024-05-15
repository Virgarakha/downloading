document.getElementById('downloadBtn').addEventListener('click', function() {
    const fileUrl = '../asset/img/image/Screenshot (2).png'; // Path ke file yang benar
    const fileName = 'Ssan.png';  // Nama file yang diinginkan untuk didownload

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('downloadBtn2').addEventListener('click', function() {
    const fileUrl2 = '../asset/img/icon/Audryan virga rakha Kumara.zip'; // Path ke file yang benar
    const fileName2 = 'tugase.zip';  // Nama file yang diinginkan untuk didownload

    const link = document.createElement('a');
    link.href = fileUrl2;
    link.download = fileName2;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
document.getElementById('downloadBtn3').addEventListener('click', function() {
    const fileUrl3 = '../asset/js/File/anjay.html'; // Path ke file yang benar
    const fileName3 = 'ini.html';  // Nama file yang diinginkan untuk didownload

    const link = document.createElement('a');
    link.href = fileUrl3;
    link.download = fileName3;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
