import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert({
        type: "service_account",
        project_id: "sh2re-14728",
        private_key_id: "cd870ffb945d6170a8dea1ea61bfd68bfac98582",
        private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDWPYvP5VCizTMU\nJUWE4UdGg/qjSg/SmSt8EthHkCFr0VCDhkDlr2oq84kV2TpDUfD3ygXK1l/kbQCV\nDnyvtlFcEYJqo4ROj+xQ/uctaHGROpEsps95xoOn50AVHJ+CO7CgXguz73WnMfk2\nc8J16Ez3Lhg78itj4wtB4yC6RSjBW/V8FG+iuR0N1RKoi1eONndHSY73oZKXsr2V\nhXUktat+hTrID78iPl2zYEevXIIAz18amGRqTjiWV8H4CCcWW4Terbgp3pcYbAkN\nG2DmdQ2vdCqSSh8EXRX+vuUOlHu/fesdYAhiPh5Bn55Yfc8hZmMT+NaqiP021g/N\n2AdniC8/AgMBAAECggEAAVJfOB4jEY4QivGb7IZInp/BKRwTiD9tAZagLPjaVpme\nVIwR1G5GSmjhkffwIGreALlcsHQCzXGlYkYKRjnqu0BZvKIGS/HJXx/jeefouMuo\nCk171DWBqcSHJFoz2xAr4SFovb3Jd7RFjwIcfgZmiykxTxVfEn5bxcFKpLuOf9A4\nNIRjq9MwjNt5itOtSY59Mf8eaOTg2GfYWqQ4nxPMd9Z12ImS5FMvTbBbW5yKVdNB\n2/S6vz+YTZtKzCWdFjvZdMO04ag4wJMRp9ZC6Jc80ptRB5JyF4JzJfDmfMpmsoY/\nuzasSb/4jwBjV9paZtqHLAkMUyuOpGA2DhLrllFCwQKBgQDv3wkbCo18tLDEaZdb\n7ikXqHI8QtRauoA3QFI99i/7M10zw3Jpe51Q75WjUBD18lw0Fw/RW+0NdDcJnDQy\nhgVsGVtZEaRKLP7+nPwKNaAZ6Vr0M5Wz5oqkFcGD4ECrGVHGFI+HO7vrSn8I6GrX\nPljwd+qDiAiMrp5e+oVzKYX6nwKBgQDkpVIffGZ7Yp+D3zXB3I2i2Rotw9CMhnEl\nk4RNXRvR3oMwYnnRY3e1eKmwbAW5aT89PWjk9NZfWGl8kMBkF95rHM2i0k5NQn2R\nW0gFUfqtzge299XD/uCXOqJbrajE4KqcZ72dX7/XLWZu3+kFDU5vFlLl4qEPSCb0\n0CwsC6onYQKBgQCnLK9g7ELdleTYjqrRhDOZbGlpPD5ZmT+AwlBPJMQd85dSWzXi\n9CcY4FFOx596edXu69+3TrTwun0dMoNibutagnWapuP0WlXBR9GUn/kb9fnQ1h7Q\nia04XH1JFsKbPIM0ZOH/Iw9+FaZho/HKX4aG2VxVHTqwKYbwtPLK5zacCwKBgQCg\nEBfgkN7Ra6ZN1Bm3ACZrJV7NQPKjHY7iBlYtLoxGLGZcneO3sNFhyfnI1qZfOQ2b\nWn0vIzNbhfI60L7Ok2MSSxSt8ln8fhqXgnZ1uwEpYT1HWlJcpfYmCFcWpQir4ret\nTHaSUDBle5Pk9H0VG06YN+GKq0+i+hjDc2Qo5XWVoQKBgDo9358KSfKVfGhMP2sO\n/1wIRXD5naeQKGn5dwu3w+1LA1wLLhUfxUQ5XeWOa8LcIfi0G7QLMSunj0dWHg6j\nseUsbhU4iYsHP/f3wepPObKvm0cQkHj8YHUJzlx5ehJ3PA7jxOU7Cd6OwOGVezni\n1Jle4UTARtReLmr7KNg+bYOO\n-----END PRIVATE KEY-----\n",
        client_email: "firebase-adminsdk-17n5p@sh2re-14728.iam.gserviceaccount.com",
        client_id: "115173248373419262529",
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-17n5p%40sh2re-14728.iam.gserviceaccount.com",
        universe_domain: "googleapis.com"
})
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}