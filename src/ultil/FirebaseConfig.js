
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Thêm các SDK cho các sản phẩm Firebase mà bạn muốn sử dụng
// https://firebase.google.com/docs/web/setup#available-libraries

// Cấu hình Firebase của bạn
export const firebaseConfig = {
  apiKey: "AIzaSyDvL8TUUFF54s1UGaAJr-iwUAhXyOaeE-Q",
  authDomain: "test-3136e.firebaseapp.com",
  projectId: "test-3136e",
  storageBucket: "test-3136e.appspot.com",
  messagingSenderId: "941382577144",
  appId: "1:941382577144:web:8d65e8d1fe8340c6d8c40d"
};

// Kiểm tra nếu chưa có ứng dụng Firebase được khởi tạo
if (!firebase.apps.length) {
    // Khởi tạo ứng dụng Firebase với cấu hình đã được xác định
    firebase.initializeApp(firebaseConfig);
}

// Xuất đối tượng auth để sử dụng cho xác thực Firebase
export const auth = firebase.auth();
