const Card = (makale) => {
  const card = document.createElement("div");
  card.className = "card";

  const headline = document.createElement("div");
  headline.className = "headline";
  headline.textContent = makale.anabaslik;
  card.append(headline);

  const author = document.createElement("div");
  author.className = "author";
  card.append(author);

  const yazarImgContainer = document.createElement("div");
  yazarImgContainer.className = "img-container";
  author.append(yazarImgContainer);

  const yazarImg = document.createElement("img");
  yazarImg.src = makale.yazarFoto;
  yazarImgContainer.append(yazarImg);

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = `${makale.yazarAdi} tarafından`;
  author.append(yazarAdi);

  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  return card;
};

const cardEkleyici = (secici) => {
  axios.get("http://localhost:5001/api/makaleler").then((res) => {
    const data = res.data.makaleler;
    for (let konu in data) {
      // console.log(konu);
      for (let makaleler of data[konu]) {
        // console.log(makaleler);
        document.querySelector(secici).append(Card(makaleler));
      }
    }
  });
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
