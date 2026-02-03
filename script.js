// Data UMKM Desa Langkapura (Diperbarui)
const umkmData = [
    {
        id: 1,
        name: "Tahu Sumedang Langkapura",
        category: "Makanan Olahan",
        description: "Tahu Sumedang khas dengan tekstur lembut di dalam dan renyah di luar, dibuat dengan resep tradisional tanpa pengawet. Produk ini telah menjadi ikon kuliner Desa Langkapura dengan cita rasa yang khas dan proses pembuatan yang higienis.",
        image: "image/tahu-sumedang.png",
        owner: "Sunarya",
        established: "2008",
        products: "Tahu Sumedang original, jajanan pasar, kerupuk kulit",
        contact: "088299517795",
        address: "Jl. Imam Bonjol",
        priceRange: "Mulai dari Rp 15.000 per bungkus"
    },
    {
        id: 2,
        name: "Keripik Pisang TM",
        category: "Makanan Ringan",
        description: "Keripik pisang dan keripik nangka dengan varian rasa manis, gurih, dan pedas. Diproduksi dengan bahan baku pilihan dari kebun pisang lokal. Proses penggorengan menggunakan minyak kelapa berkualitas untuk menghasilkan keripik yang renyah dan sehat.",
        image: "image/keripik-pisang-tm.png",
        owner: "Tupan",
        established: "2018",
        products: "Keripik pisang original, keripik nangka, keripik pisang pedas, keripik pisang balado",
        contact: "081271576880",
        address: "JL. Imam Bonjol GG. Kelana NO. 108",
        priceRange: "Rp 15.000 per kemasan"
    },
    {
        id: 3,
        name: "Keripik Pisang ASYAFAR",
        category: "Makanan Ringan",
        description: "Keripik pisang dengan resep rahasia keluarga, menghasilkan keripik yang renyah dan tahan lama tanpa bahan pengawet. Menggunakan pisang kepok pilihan yang dipanen pada tingkat kematangan optimal untuk mendapatkan rasa manis alami.",
        image: "image/keripik-pisang-asyafar.png",
        owner: "Siswanto",
        established: "2013",
        products: "Keripik pisang original, keripik pisang balado, keripik pisang keju, keripik pisang coklat",
        contact: "085865186701",
        address: "JL. Imam Bonjol GG. Kelana NO. 109",
        priceRange: "Rp 15.000 per kemasan"
    },
    {
        id: 4,
        name: "Kerupuk Kulit Sapi",
        category: "Makanan Ringan",
        description: "Kerupuk kulit sapi renyah dengan bumbu khas Lampung. Cocok untuk camilan dan lauk pendamping. Diproses dengan teknik tradisional yang menjaga cita rasa asli dengan sentuhan modern untuk menjaga kebersihan dan kualitas.",
        image: "image/kerupuk-kulit-sapi.png",
        owner: "imam komaini",
        established: "2015",
        products: "Keripik kulit sapi original, keripik kulit sapi pedas, keripik kulit sapi bawang, keripik kulit sapi barbeque",
        contact: "-",
        address: "Jl. kulit, Gg. Balau I",
        priceRange: "-"
    },
    {
        id: 5,
        name: "Warung Klontong Bu Siti",
        category: "Toko Kelontong",
        description: "Warung kelontong lengkap dengan berbagai kebutuhan sehari-hari, sembako, dan lain-lain. Berdiri lebih dari 10 tahun dan telah menjadi tempat belanja andalan warga Desa Langkapura dengan pelayanan yang ramah dan harga yang terjangkau.",
        image: "image/warung-bu-siti.png",
        owner: "Siti",
        established: "2014",
        products: "Sembako, makanan ringan, minuman, peralatan rumah tangga, produk UMKM lokal, sayuran segar",
        contact: "082178114648",
        address: "Jl. Imam Bonjol",
        priceRange: "Beragam (mulai dari Rp 500)"
    },
    {
        id: 6,
        name: "Warung Klontong Bu Tri",
        category: "Toko Kelontong",
        description: "Warung kelontong yang menyediakan kebutuhan pokok dengan harga terjangkau dan lokasi strategis di pusat desa.",
        image: "image/warung-bu-tri.png",
        owner: "Tri Daryani",
        established: "2021",
        products: "Sembako, snack, minuman, bumbu dapur, perlengkapan mandi, kebutuhan sekolah",
        contact: "-",
        address: "Jl. Imam Bonjol",
        priceRange: "Beragam (mulai dari Rp 500)"
    }
];

// Data Artikel untuk meningkatkan jangkauan pembeli
const articlesData = [
    {
        id: 1,
        title: "5 Manfaat Konsumsi Tahu Sumedang untuk Kesehatan",
        category: "Kesehatan",
        excerpt: "Tahu Sumedang tidak hanya enak tetapi juga memiliki banyak manfaat untuk kesehatan. Temukan rahasia nutrisi dalam tahu lokal kami.",
        image: "image/tahu.png",
        date: "15 Oktober 2023",
        readTime: "3 min read",
        fullContent: `
            <h3>Mengenal Tahu Sumedang Khas Langkapura</h3>
            <p>Tahu Sumedang yang diproduksi oleh UMKM Desa Langkapura memiliki keunikan tersendiri. Dibuat dengan kedelai pilihan dan proses pengolahan tradisional, tahu ini memiliki tekstur yang khas: lembut di bagian dalam namun renyah di bagian luar setelah digoreng.</p>
            
            <h3>5 Manfaat Kesehatan Tahu Sumedang</h3>
            <ol>
                <li><strong>Sumber Protein Nabati</strong>: Tahu mengandung protein tinggi yang baik untuk pertumbuhan dan perbaikan sel tubuh. Satu porsi tahu dapat memenuhi 20% kebutuhan protein harian.</li>
                <li><strong>Rendah Kalori</strong>: Cocok untuk program diet, tahu hanya mengandung sekitar 70 kalori per 100 gram, sehingga tidak menyebabkan penambahan berat badan berlebih.</li>
                <li><strong>Kaya Kalsium</strong>: Proses pembuatan tahu menggunakan kalsium sulfat yang meningkatkan kandungan kalsium, baik untuk kesehatan tulang dan gigi.</li>
                <li><strong>Mengandung Isoflavon</strong>: Senyawa ini berperan sebagai antioksidan yang membantu melawan radikal bebas dan mengurangi risiko penyakit jantung.</li>
                <li><strong>Bebas Kolesterol</strong>: Sebagai produk nabati, tahu tidak mengandung kolesterol sehingga aman untuk penderita tekanan darah tinggi dan penyakit jantung.</li>
            </ol>
            
            <h3>Cara Menikmati Tahu Sumedang yang Terbaik</h3>
            <p>Untuk mendapatkan manfaat maksimal, konsumsi tahu dengan cara digoreng secukupnya tanpa minyak berlebih atau diolah menjadi sup tahu. Kombinasikan dengan sayuran untuk mendapatkan nutrisi yang lengkap.</p>
            
            <p>Tahu Sumedang dari UMKM Desa Langkapura diproduksi tanpa bahan pengawet, sehingga lebih sehat dan aman untuk konsumsi sehari-hari keluarga Anda.</p>
        `
    },
    {
        id: 2,
        title: "Resep Kreasi Keripik Pisang untuk Camilan Sehat Keluarga",
        category: "Resep",
        excerpt: "Temukan berbagai cara kreatif menikmati keripik pisang tidak hanya sebagai camilan biasa, tetapi juga sebagai pelengkap makanan lainnya.",
        image: "image/keripik-pisang.png",
        date: "10 Oktober 2023",
        readTime: "4 min read",
        fullContent: `
            <h3>Keripik Pisang: Camilan Sehat Kaya Manfaat</h3>
            <p>Keripik pisang dari UMKM Desa Langkapura dibuat dari pisang pilihan yang kaya akan potasium, vitamin B6, dan serat. Berbeda dengan keripik kemasan pabrik, keripik pisang kami diproses dengan minyak yang sehat dan tanpa MSG berlebih.</p>
            
            <h3>Resep Kreasi dengan Keripik Pisang</h3>
            
            <h4>1. Salad Keripik Pisang</h4>
            <p>Campurkan keripik pisang dengan sayuran segar seperti selada, tomat, dan timun. Tambahkan dressing yoghurt atau saus thousand island untuk mendapatkan camilan sehat yang renyah dan segar.</p>
            
            <h4>2. Topping Mie Instan</h4>
            <p>Taburkan keripik pisang di atas mie instan atau mie rebus untuk menambah tekstur renyah. Kombinasi ini sangat populer di kalangan anak muda.</p>
            
            <h4>3. Pelengkap Soto atau Sop</h4>
            <p>Ganti kerupuk biasa dengan keripik pisang sebagai pelengkap soto atau sop. Rasanya yang gurih dan renyah akan menambah kenikmatan kuah kaldu.</p>
            
            <h4>4. Bahan Isian Roti</h4>
            <p>Hancurkan keripik pisang dan gunakan sebagai isian roti bersama dengan selai cokelat atau keju. Cocok untuk bekal sekolah anak.</p>
            
            <h3>Tips Menyimpan Keripik Pisang</h3>
            <p>Agar keripik pisang tetap renyah, simpan dalam wadah kedap udara setelah dibuka. Hindari menyimpan di tempat lembab atau terkena sinar matahari langsung.</p>
            
            <p>Dengan membeli keripik pisang dari UMKM Desa Langkapura, Anda tidak hanya mendapatkan camilan sehat tetapi juga mendukung perekonomian lokal.</p>
        `
    },
    {
        id: 3,
        title: "Strategi Pemasaran Digital untuk UMKM Desa di Era Modern",
        category: "Bisnis",
        excerpt: "Pelajari cara memanfaatkan media sosial dan platform digital untuk memasarkan produk UMKM Desa Langkapura ke pasar yang lebih luas.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        date: "5 Oktober 2023",
        readTime: "5 min read",
        fullContent: `
            <h3>Mengapa UMKM Perlu Go Digital?</h3>
            <p>Di era digital seperti sekarang, pemasaran tradisional saja tidak cukup. UMKM Desa Langkapura perlu memanfaatkan teknologi untuk menjangkau pasar yang lebih luas, meningkatkan penjualan, dan bertahan di tengah persaingan.</p>
            
            <h3>5 Strategi Pemasaran Digital untuk UMKM Desa</h3>
            
            <h4>1. Optimalkan Media Sosial</h4>
            <p>Gunakan platform seperti Instagram dan Facebook untuk memamerkan produk. Tips efektif:</p>
            <ul>
                <li>Gunakan foto produk yang menarik dengan pencahayaan baik</li>
                <li>Buat konten video proses produksi untuk membangun kepercayaan</li>
                <li>Gunakan hashtag lokal seperti #UMKMLangkapura #ProdukLampung</li>
                <li>Interaksi dengan pelanggan melalui kolom komentar dan DM</li>
            </ul>
            
            <h4>2. Manfaatkan WhatsApp Business</h4>
            <p>WhatsApp Business menyediakan fitur katalog produk yang sangat berguna untuk UMKM. Anda dapat:</p>
            <ul>
                <li>Membuat katalog produk dengan foto dan harga</li>
                <li>Menggunakan fitur broadcast untuk promosi</li>
                <li>Mengatur balasan otomatis untuk pertanyaan umum</li>
            </ul>
            
            <h4>3. Kolaborasi dengan Influencer Lokal</h4>
            <p>Cari influencer atau content creator lokal yang peduli dengan produk daerah. Tawarkan produk secara gratis sebagai sampel untuk direview. Ulasan dari mereka akan meningkatkan kredibilitas produk.</p>
            
            <h4>4. Ikut Serta dalam Pameran Online</h4>
            <p>Banyak platform e-commerce yang mengadakan pameran online khusus UMKM. Manfaatkan kesempatan ini untuk memperkenalkan produk ke audiens baru.</p>
            
            <h4>5. Bangun Website Sederhana</h4>
            <p>Website seperti ini dapat menjadi pusat informasi produk UMKM. Dengan website, pelanggan potensial dari luar daerah dapat mengetahui produk-produk unggulan Desa Langkapura.</p>
            
            <h3>Mulai dari yang Sederhana</h3>
            <p>Tidak perlu langsung menerapkan semua strategi sekaligus. Pilih satu atau dua strategi yang paling sesuai dengan kemampuan dan jenis produk Anda, lalu kembangkan secara bertahap.</p>
        `
    },
    {
        id: 4,
        title: "Keunikan Keripik Kulit Sapi Khas Lampung",
        category: "Kuliner",
        excerpt: "Menjelajahi proses pembuatan dan keunikan rasa keripik kulit sapi produksi UMKM Desa Langkapura yang menjadi oleh-oleh favorit.",
        image: "image/kulit.png",
        date: "1 Oktober 2023",
        readTime: "3 min read",
        fullContent: `
            <h3>Asal Usul Keripik Kulit Sapi di Lampung</h3>
            <p>Keripik kulit sapi telah menjadi camilan khas Lampung sejak puluhan tahun yang lalu. Di Desa Langkapura, keripik kulit sapi diproduksi dengan resep turun-temurun yang membuatnya memiliki cita rasa yang unik dan berbeda dengan produksi daerah lain.</p>
            
            <h3>Proses Pembuatan yang Teliti</h3>
            <p>Keripik kulit sapi UMKM Desa Langkapura dibuat melalui proses yang teliti:</p>
            <ol>
                <li><strong>Pemilihan Bahan</strong>: Hanya menggunakan kulit sapi segar dari supplier terpercaya</li>
                <li><strong>Pembersihan</strong>: Kulit dibersihkan secara manual untuk menghilangkan lemak dan kotoran</li>
                <li><strong>Perendaman Bumbu</strong>: Kulit direndam dalam bumbu khas selama 24 jam untuk meresap sempurna</li>
                <li><strong>Pengeringan</strong>: Dikeringkan dengan sinar matahari alami untuk menjaga cita rasa</li>
                <li><strong>Penggorengan</strong>: Digoreng dengan minyak kelapa pada suhu yang tepat untuk menghasilkan tekstur renyah sempurna</li>
            </ol>
            
            <h3>Varian Rasa yang Tersedia</h3>
            <p>Keripik kulit sapi UMKM Desa Langkapura tersedia dalam beberapa varian:</p>
            <ul>
                <li><strong>Original</strong>: Dengan bumbu dasar garam dan bawang putih</li>
                <li><strong>Pedas</strong>: Dengan campuran cabai khas Lampung yang memiliki tingkat kepedasan sedang</li>
                <li><strong>Bawang</strong>: Dengan tambahan bubuk bawang goreng yang gurih</li>
            </ul>
            
            <h3>Nilai Gizi dan Penyajian</h3>
            <p>Keripik kulit sapi kaya akan kolagen yang baik untuk kesehatan kulit dan sendi. Penyajian terbaik adalah sebagai camilan pendamping teh atau kopi, atau sebagai pelengkap nasi liwet dan soto.</p>
            
            <p>Sebagai produk oleh-oleh, keripik kulit sapi UMKM Desa Langkapura telah dikemas dengan packaging yang menarik dan tahan lama, sehingga cocok dibawa sebagai buah tangan untuk keluarga di luar kota.</p>
        `
    }
];

// DOM Elements
const umkmGrid = document.getElementById('umkmGrid');
const articlesGrid = document.getElementById('articlesGrid');

// Helper functions
function getUMKMById(id) {
    return umkmData.find(umkm => umkm.id === id);
}

function getArticleById(id) {
    return articlesData.find(article => article.id === id);
}

// Generate UMKM Cards on Homepage
function renderUMKMCards() {
    if (!umkmGrid) return;
    
    umkmGrid.innerHTML = '';
    
    umkmData.forEach(umkm => {
        const card = document.createElement('div');
        card.className = 'umkm-card';
        card.innerHTML = `
            <img src="${umkm.image}" alt="${umkm.name}" class="umkm-img">
            <div class="umkm-info">
                <span class="umkm-category">${umkm.category}</span>
                <h3 class="umkm-name">${umkm.name}</h3>
                <p class="umkm-description">${umkm.description}</p>
                <a href="umkm-detail.html?id=${umkm.id}" class="btn">Lihat Detail</a>
                <a href="https://wa.me/${umkm.contact.replace(/\D/g, '')}?text=Halo%20${encodeURIComponent(umkm.owner)}%2C%20saya%20tertarik%20dengan%20produk%20${encodeURIComponent(umkm.name)}%20di%20UMKM%20Langkapura" 
                   target="_blank" 
                   class="btn btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> WhatsApp
                </a>
            </div>
        `;
        
        umkmGrid.appendChild(card);
    });
}

// Generate Article Cards on Homepage
function renderArticleCards() {
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = '';
    
    articlesData.forEach(article => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-img">
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${article.category}</span>
                    <span>${article.date}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="article-detail.html?id=${article.id}" class="read-more">
                    Baca Selengkapnya <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        articlesGrid.appendChild(card);
    });
}

// Navigation functionality
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (!mobileMenuBtn || !mainNav) return;
    
    // Mobile Menu Toggle
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
        // Change icon
        const icon = this.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function() {
            mainNav.classList.remove('active');
            if (mobileMenuBtn.querySelector('i')) {
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            }
        });
    });

    // Smooth scrolling for anchor links on homepage
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}