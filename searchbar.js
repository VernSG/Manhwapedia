// Memilih elemen-elemen
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const clearIcon = document.querySelector(".clear");

// Event listener ketika DOM sudah sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Memilih input pencarian dengan kelas 'nosubmit'
  const searchInput = document.querySelector(".nosubmit");

  if (searchInput) {
    // Menambahkan event listener untuk perubahan input
    searchInput.addEventListener("input", function () {
      // Merekam nilai input pencarian ke dalam konsol
      console.log("Nilai pencarian:", searchInput.value);

      // Memanggil fungsi render_results
      render_results();
    });
  } else {
    console.error("Elemen dengan kelas 'nosubmit' tidak ditemukan.");
  }
});

// Memilih kotak pencarian dengan ID 'mysearch'
const search_box = document.querySelector("#mysearch");

// Menambahkan event listener untuk perubahan input pada kotak pencarian
search_box.addEventListener("input", render_results);

// Fungsi untuk merender hasil pencarian
function render_results() {
  console.log('Merender hasil...');

  // Mengatur ulang HTML dan menyembunyikan kontainer hasil pencarian
  search_suggestion_html = "";
  search_result_div.innerHTML = search_suggestion_html;
  search_result_div.style.display = "none";

  // Menggulirkan ke posisi tertentu (1383.33)
  window.scrollTo(0, 1383.33);

  // Mendapatkan nilai filter (dalam huruf besar) dari kotak pencarian
  const filter = search_box.value.toUpperCase();

  // Memilih kontainer dan kartu-kartu
  let container = document.getElementById("cont");
  let cont = container.getElementsByClassName("card");

  // Melooping melalui kartu-kartu untuk menyaring dan menampilkan hasil
  for (let i = 0; i < cont.length; i++) {
    const h = cont[i].getElementsByTagName("h2")[0];
    const textValue = h.textContent.toUpperCase();

    // Memeriksa apakah panjang filter lebih besar atau sama dengan 1 dan apakah teks mengandung filter
    if (filter.length >= 1 && textValue.includes(filter)) {
      console.log('Pencocokan ditemukan:', textValue);
      // Membuat HTML hasil pencarian
      search_suggestion_html += '<div class="search-result" onclick="updatesearchbar(this)"><p>' + textValue + '</p></div>';
    }

    // Menampilkan atau menyembunyikan kartu-kartu berdasarkan apakah mereka cocok dengan filter
    if (textValue.includes(filter)) {
      cont[i].style.display = "block";
    } else {
      cont[i].style.display = "none";
    }
  }

  // Merender saran pencarian hanya jika ada hasil pencarian
  if (search_suggestion_html !== "") {
    search_result_div.innerHTML = search_suggestion_html;
    search_result_div.style.display = "flex";
  }
}

// Fungsi untuk menangani pembaruan kotak pencarian
function updatesearchbar(element) {
  // Mendapatkan nama pencarian dari elemen yang diklik
  const searchName = element.querySelector("p").innerText;
  // Mengatur nilai kotak pencarian dengan nama yang dipilih
  search_box.value = searchName;
  // Memanggil render_results untuk memperbarui tampilan
  render_results();
  // Mengosongkan HTML saran pencarian dan menyembunyikan hasil pencarian
  search_suggestion_html = "";
  search_result_div.innerHTML = search_suggestion_html;
  search_result_div.style.display = "none";
}
