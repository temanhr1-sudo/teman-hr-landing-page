// File: data-artikel.js

const articles = [
    {
        id: "kpi-fair", // ID unik untuk link
        category: "STRATEGI",
        date: "5 Feb 2026",
        title: "Panduan Menyusun KPI yang Fair dan Terukur",
        author: "Ari Ramadhan",
        image: "gambar/kpi-meeting.png", // Pastikan gambar ada
        summary: "KPI seringkali menjadi momok. Padahal jika disusun benar, justru membantu karyawan memahami target perusahaan.",
        content: `
            <p>KPI (Key Performance Indicator) seringkali menjadi momok bagi karyawan karena dianggap tidak adil...</p>
            <h3>1. Jangan Terlalu Banyak</h3>
            <p>Kesalahan terbesar HRD saat menyusun KPI adalah terlalu banyak indikator...</p>
            <h3>2. Gunakan SMART</h3>
            <p>Pastikan target Specific, Measurable, Achievable...</p>
        `
    },
    {
        id: "hitung-absensi",
        category: "TUTORIAL",
        date: "6 Feb 2026",
        title: "Cara Menghitung Tingkat Absensi yang Benar",
        author: "Ari Ramadhan",
        image: "gambar/absensi.jpg", // Ganti dengan gambar yg ada
        summary: "Rumus dasar menghitung persentase kehadiran adalah jumlah kehadiran aktual dibagi hari kerja efektif.",
        content: `
            <p>Rumus tingkat kehadiran sangat penting untuk evaluasi produktivitas...</p>
            <p>Rumusnya adalah: (Jml Hadir / Jml Hari Kerja) x 100%.</p>
        `
    }
    // --> CUKUP TAMBAH DATA DI SINI UNTUK ARTIKEL BARU
];