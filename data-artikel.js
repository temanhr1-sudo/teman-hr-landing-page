// File: data-artikel.js

const articles = [
    {
        iid: "artikel/artikel-kpi.html", // Tambahkan "artikel/" di depan
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
        id: "artikel/artikel-panduan-lengkap-manajemen-absensi-rumus-regulasi-dan-strategi-menurunkan-tingkat-mangkir.html", // Link lengkap dengan folder
        category: "TUTORIAL",
        date: "7 Feb 2026",
        title: "Panduan Lengkap Manajemen Absensi: Rumus, Regulasi, dan Strategi Menurunkan Tingkat Mangkir",
        author: "Ari Ramadhan",
        image: "gambar/absensi-team.png", // Gambar tetap link normal (root)
        summary: "Absensi bukan sekadar datang dan pulang. Pelajari cara menghitung Bradford Factor, regulasi jam kerja menurut UU Cipta Kerja, dan strategi psikologis mengatasi karyawan yang sering mangkir.",
        isExternal: true
    },
    // --> CUKUP TAMBAH DATA DI SINI UNTUK ARTIKEL BARU
];