// firebase-messaging-sw.js
// IMPORTANTE: este arquivo precisa ficar na RAIZ do seu site (mesma pasta do index.html),
// exatamente com esse nome, para que as notificações push funcionem quando o app
// estiver fechado ou em segundo plano.

importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Cole aqui exatamente a mesma configuração usada no app.html (firebaseConfig)
firebase.initializeApp({
    apiKey: "AIzaSyDNw3NFYFKSeYgGlB9eP_x8YVxfyu17Evs",
    authDomain: "appguia-7a3a7.firebaseapp.com",
    projectId: "appguia-7a3a7",
    storageBucket: "appguia-7a3a7.firebasestorage.app",
    messagingSenderId: "945249750199",
    appId: "1:945249750199:web:a2efaa2f3db1a06ba39132"
});

const messaging = firebase.messaging();

// Exibe a notificação quando ela chega com o app em segundo plano ou fechado
messaging.onBackgroundMessage((payload) => {
    const titulo = payload.notification?.title || "Guia Turístico Aparecida";
    const opcoes = {
        body: payload.notification?.body || "",
        icon: "https://i.imgur.com/CQRDCe6.png"
    };
    self.registration.showNotification(titulo, opcoes);
});
