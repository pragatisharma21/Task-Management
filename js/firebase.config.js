
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"; 
import { getDatabase, ref, set, update, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCy1Oo1McvZjV1Fuec7isjLuSSEi_Yigvo",
  authDomain: "task-management-8d648.firebaseapp.com",
  databaseURL: "https://task-management-8d648-default-rtdb.firebaseio.com",
  projectId: "task-management-8d648",
  storageBucket: "task-management-8d648.firebasestorage.app",
  messagingSenderId: "923546811182",
  appId: "1:923546811182:web:54de8b2e85f3efdfdfd8bf",
  measurementId: "G-JDHWQ2HTFW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

const auth = getAuth(app);
export { database, auth };

