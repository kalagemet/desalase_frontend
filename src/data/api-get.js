let base_api = 'https://api.desalase.id';
// let base_api = 'http://localhost:8000';
let apiData = {
    'bannerImage' : base_api+'/getbanner',
    'logo' : base_api+'/getlogo',
    'footer': base_api+'/getfooterdata',

    'favorite': base_api+'/getproduk',
    'new': base_api+'/getprodukbaru',
    'makanan': base_api+'/getprodukbykategori?kategori=makanan',
    'minuman': base_api+'/getprodukbykategori?kategori=minuman',
    'lain': base_api+'/getprodukbykategori?kategori=lain',
    'buah': base_api+'/getprodukbykategori?kategori=buah',
    'tanaman': base_api+'/getprodukbykategori?kategori=tanaman',
    'hewani': base_api+'/getprodukbykategori?kategori=hewani',
    'jasa': base_api+'/getprodukbykategori?kategori=jasa',
    'konveksi': base_api+'/getprodukbykategori?kategori=konveksi',
    'detail' :base_api+'/getdetail?id=',
    'tag' :base_api+'/caritag?tag=',
    'cari' :base_api+'/cariproduk?key=',

    'tentang' :base_api+'/gettentang' 
}

export default apiData;