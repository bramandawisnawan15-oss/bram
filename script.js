// Menangani fitur penggantian foto profil
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        // Menggunakan FileReader untuk membaca file gambar yang diupload
        const reader = new FileReader();
        reader.onload = function(e) {
            // Mengganti src dari elemen gambar dengan gambar yang baru diupload
            document.getElementById('profileImage').src = e.target.result;
        }
        // Membaca file sebagai Data URL
        reader.readAsDataURL(file);
    }
});
