const harcamaInput = document.querySelector('#harcama2');
const fiyatInput = document.querySelector('#fiyat');
const formBtn = document.querySelector('.ekle-btn');
const liste = document.querySelector('.liste');
const toplamBilgi = document.querySelector('#toplam-bilgi');

// izleme işlemleri
formBtn.addEventListener('click', addExpence);
liste.addEventListener('click',handleClick );

// toplam state'i (durum)
let toplam = 0;

function updateToplam(fiyat) {
    toplam += Number(fiyat);
    toplamBilgi.innerHTML = toplam;
  }

// harcama oluşturma
function addExpence(e) {
   e.preventDefault();

   //   doğrulama yapma
   if (!fiyatInput.value || !harcamaInput.value) {
    alert('Formları Doldurunuz');
    // fonksiyonu durduruyoruz
    return;
    }

  // div oluşturma
   const harcamaDiv = document.createElement('div');

  // class ekleme 
   harcamaDiv.classList.add('harcama');

   // içeriğini ayarlama
   harcamaDiv.innerHTML = `
                <h2>${harcamaInput.value}</h2>
                <h2>${fiyatInput.value}</h2>
                <div class="buttons">
                    <img id="payment" src="images/icons8-payment-100.png" alt="">
                    <img id="remove"src="images/icons8-remove-100.png" alt="">
                </div> `;
    // oluşan harcamayı htmle gönderme (listeye ekleme)
    liste.appendChild(harcamaDiv);

   //   toplamı güncelle
   updateToplam(fiyatInput.value);

   //   formu temizleme
   harcamaInput.value = '';
   fiyatInput.value = '';

}

//Öğe temizleme
function handleClick(e){
    const eleman = e.target;
    if (eleman.id === 'remove') {
      alert('silme bşlatıldı');
    }
}
