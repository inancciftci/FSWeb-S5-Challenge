const Header = (baslik, tarih, yazi) => {
  const divHeader = document.createElement("div");
  divHeader.className = "header";

  const date = document.createElement("span");
  date.className = "date";
  date.textContent = tarih;
  divHeader.append(date);

  const heading = document.createElement("h1");
  heading.textContent = baslik;
  divHeader.append(heading);

  const temp = document.createElement("span");
  temp.className = "temp";
  temp.textContent = yazi;
  divHeader.append(temp);
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  return divHeader;
};

const headerEkleyici = (secici) => {
  document
    .querySelector(secici)
    .append(Header("Teknoloji Zamanı", "11 Kasım 2022", "sağdaki yazı"));
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };
