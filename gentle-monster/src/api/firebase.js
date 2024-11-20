import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

//Header component에서 login함수를 만들고 firebase를 import해도 되긴하지만 그렇게 되면 component가 지나치게 firebase에 의존하게 된다. logic화된 기능들은 component 안에서가 아니라 따로 파일을 빼서 만들어야 좋음.

//로그인
export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

//로그아웃
export function logout() {
  signOut(auth).catch(console.error);
}

//로그인 상태
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : user;
    callback(updatedUser);
  });
}

//자네 adminUser인가?
async function adminUser(user) {
  return await get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

//새로운 제품 등록하기
export async function addNewProduct(product, image) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(","),
  });
}

//제품 정보 가져오기
export async function getProducts() {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

//사용자의 쇼핑카트 정보 가져오기
export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}

// 카트에 제품을 추가 or 업데이트
export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}

export async function addToHeart(userId, product) {
  return set(ref(database, `hearts/${userId}/${product.id}`), product);
}

export async function removeFromHeart(userId, product) {
  return remove(ref(database, `hearts/${userId}/${product.id}`));
}
