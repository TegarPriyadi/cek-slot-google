<p>Cek slot google</p>

# search for sites that are indicated to be affected by slots in google search

Install

```javascript
npm i cek-slot-google
```

Examples:

```javascript
const {googleSearch, checkWebsiteForKeywords} = require('cek-slot-google');

const flaggedResults={};
const searchResults = await googleSearch('slot bandung');
    for (const result of searchResults) {
        const checkResult = await checkWebsiteForKeywords(result.link);
        if (checkResult.includes('Keyword')) {
            flaggedResults[result.link] = {
                title: result.title,
                snippet: result.snippet,
                flagged: checkResult
            };
        }
    }
console.log(flaggedResults);
```

Ouput:

```javascript
{
  'https://www.olx.co.id/bandung-kota_g4000018/q-slot': {
    title: 'Slot di Bandung Kota - OLX Murah Dengan Harga Terbaik',
    snippet: 'Temukan Slot di Bandung Kota dapatkan hanya di OLX.co.id. Jutaan iklan Slot terbaru ditayangkan setiap harinya di OLX Murah dengan harga terbaik.',
    flagged: 'Keyword "slot" found in text: "download olx apppromonewslogin/daftarjualsemua kategori{"@context":"https://schema.org","@type":"breadcrumblist","itemlistelement":[{"@type":"listitem","position":1,"item":{"@id":"https://www.olx.co.id","name":"beranda"}}]}beranda/<mark>slot</mark> bandung kota - olx cara tepat jual cepatkategorisemua kategorisemua kategorilokasimenampilkan hasil untuk "<mark>slot</mark>"9 iklansortir menurut : tanggal diterbitkan<img src="https://apollo.olx.co.id:443/v1/files/670e2e6ac23b-id/image;s=272x0" alt="paketan core i5-14400f gen 14 mb msi b760m-p <mark>slot</mark> ram 4 ddr4" sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 20vw, (min-width: 960px) 25vw, (min-width: 540px) 25vw, (min-width: 320px) 30vw, 35vw" srcset="https://apollo.olx.co.id:443/v1/files/670e2e6ac23b-id/image;s=100x200;q=60 100w,\n' +
      '                    https://apollo.olx.co.id:443/v1/files/670e2e6ac23b-id/image;s=200x400;q=60 200w,\n' +
      '                    https://apollo.olx.co.id:443/v1/files/670e2e6ac23b-id/image;s=300x600;q=60 300w,\n' +
      '                    https://apollo.olx.co.id:443/v1/files/670e2e6ac23b-id/image;s=400x800;q=60 400w,\n' +
      '                    https://apollo.olx.co.id:443/v1/files/670e2e6ac23b-id/image;s=600x1200;q=60 600w" class="_3vnjf"/>rp 4.580.000paketan core i5-14400f gen 14 mb msi b760m-p <mark>slot</mark> ram 4 ddr4antapani (cicadas), bandung kota15 nov<img src="https://apollo.olx.co.id:443/v1/files/83lccmie5jyj2-id/image;s=272x0" alt="doublepow charger baterai 4 <mark>slot</mark>s for aa/aaa ni-mh ni-cd - dp-b02 -" sizes="(min-width: 1280px) 15vw, (min-width: 1024px) 20vw, (min-width: 960px) 25vw, (min-width: 540px) 25vw, (min-width: 320px) 30vw, 35vw" srcset="https://apollo.olx.co.id:443/v1/files/83lccmie5jyj2-id/image;s=100x200;q=60 100w,\n' + 
```

