document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Test 1", img: "4.jpg", price: 10000 },
      { id: 2, name: "Test 2", img: "3.jpg", price: 20000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada / cart masih kosong
      if(!cartItem) {
        this.items.push({...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item; 
          } else {
            // jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau diremove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if(cartItem.quantity > 1) {
        // telusuri 1 1
        this.items = this.items.map((item) => {
          // jika bukan barang yang diklik
          if(item.id !== id) {
            return item;
           } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        })
      } else if (cartItem.quantity === 1) {
        // jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// Konversi ke Rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

function flashSale() {
  return {
    hours: '00',
    minutes: '00',
    seconds: '00',
    time: 3600, // 1 jam (detik)

    startTimer() {
      setInterval(() => {
        if (this.time > 0) {
          this.time--;

          let h = Math.floor(this.time / 3600);
          let m = Math.floor((this.time % 3600) / 60);
          let s = this.time % 60;

          this.hours = String(h).padStart(2, '0');
          this.minutes = String(m).padStart(2, '0');
          this.seconds = String(s).padStart(2, '0');
        }
      }, 1000);
    }
  }
}
