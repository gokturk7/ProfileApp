220404905 ömer göktürk

# 🧑‍💻 Lab 6: Profil Kartı Uygulaması Geliştirme (React Native)
---

## 🚀 Projeye Genel Bakış

Bu proje, React Native ve Expo Go kullanılarak geliştirilmiş bir "Profil Kartı" uygulamasıdır. Lab 6'nın amacı; yeniden kullanılabilir bileşenler (`ProfileCard`), StyleSheet ile stil verme, platforma özgü stil (gölge) ve temel etkileşim (`TouchableOpacity`, `Alert`) kavramlarını uygulamaktır.

Uygulama, kaydırılabilir bir listede (ScrollView) birden fazla stilize edilmiş profil kartını görüntüler.

---

## 🛠️ Kurulum Talimatları

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları sırasıyla izleyin.

### Ön Koşullar

1.  **Node.js ve npm ** yüklü olmalıdır.
2.  **Expo Go** uygulaması fiziksel mobil cihazınıza (Android/iOS) yüklenmiş olmalıdır.

### Projeyi Çalıştırma Adımları

1.  **Depoyu Klonlayın:**
    ```bash
    git clone [GitHub Depo Adresiniz]
    cd ProfileApp
    ```

2.  **Bağımlılıkları Yükleyin:**
    Gerekli React Native ve Expo paketlerini yükleyin.
    ```bash
    npm install
    ```
    *Not: Özellikle 'react-native-safe-area-context' paketinin yüklendiğinden emin olun.*

3.  **Uygulamayı Başlatın:**
    Geliştirme sunucusunu başlatın.
    ```bash
    npx expo start
    ```

4.  **Test Etme:**
    Terminalde bir QR kod görünecektir.
    * **Fiziksel Cihazda:** Mobil cihazınızdaki **Expo Go** uygulamasını açın ve QR kodu tarayın.
    * exp://192.168.1.130:8081

  

---
