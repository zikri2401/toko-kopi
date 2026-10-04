import { View, Text, TextInput, Button, Pressable, Alert } from "react-native";
import { styles } from "../styles";

// 1. TYPE / INTERFACE: bentuk data satu menu
interface Menu {
  id: string;
  name: string;
  price: number;
  category?: "kopi" | "non-kopi" | "snack"; // "?" artinya boleh tidak diisi
}

// 2. ARRAY OF OBJECTS: daftar menu
const daftarMenu: Menu[] = [
  { id: "1", name: "Espresso", price: 15000, category: "kopi" },
  { id: "2", name: "Cafe Latte", price: 22000, category: "kopi" },
  { id: "3", name: "Americano", price: 18000, category: "kopi" },
  { id: "4", name: "Matcha Latte", price: 24000, category: "non-kopi" },
  { id: "5", name: "Roti Bakar", price: 12000, category: "snack" },
];

export default function Index() {
  // 3. LOOP (for): menghitung total harga semua menu
  let total = 0;
  for (let i = 0; i < daftarMenu.length; i++) {
    total = total + daftarMenu[i].price;
  }

  // 4. CUSTOM FUNCTION: dipanggil saat kartu ditekan
  const tampilkanDetail = (menu: Menu) => {
    Alert.alert(menu.name, "Harga: Rp " + menu.price);
  };

  // 5. CUSTOM FUNCTION: membuat satu kartu dari satu menu
  const buatKartu = (menu: Menu) => (
    <Pressable
      key={menu.id}
      style={styles.card}
      onPress={() => tampilkanDetail(menu)}
    >
      <Text style={styles.cardName}>{menu.name}</Text>

      {/* 6. INLINE STYLE: warna harga berubah sesuai harganya */}
      <Text
        style={[
          styles.cardPrice,
          { color: menu.price >= 20000 ? "red" : "green" },
        ]}
      >
        Rp {menu.price}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toko Kopi</Text>

      <TextInput placeholder="Cari menu..." style={styles.input} />

      {/* 7. LOOP (map): ubah setiap menu menjadi kartu */}
      {daftarMenu.map((menu) => buatKartu(menu))}

      <Text style={styles.total}>Total semua menu: Rp {total}</Text>

      <Button
        title="Pesan Sekarang"
        onPress={() => Alert.alert("Info", "Pesanan diterima!")}
      />
    </View>
  );
}