import React from "react";
import { useCart } from "./CartContext";
import { Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Shop() {
  const { t } = useTranslation();
  const { cart, addToCart, removeFromCart } = useCart();
  const [modalOpen, setModalOpen] = React.useState(false);

  const totalSum = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const BOT_TOKEN = "8389898735:AAH1MsADfS6yjL3EXLbwMmlgtJ6lgPr1j3A";
  const CHAT_ID = "8155528404";

  const sendToTelegram = async () => {
    if (!cart.length) return;

    let message = `${t("Shop.newOrder")}\n\n`;

    cart.forEach((item, i) => {
      message +=
        `🔹 <b>${i + 1}. ${item.title}</b>\n` +
        `📦 ${t("Shop.qty")}: ${item.qty}\n` +
        `💰 ${t("Shop.price")}: ${(item.price * item.qty).toLocaleString()} so‘m\n` +
        `📝 ${t("Shop.desc")}: ${item.desc}\n` +
        `🖼 Rasm: ${item.img}\n\n`;
    });

    message += `🧾 <b>${t("Shop.total")}:</b> ${totalSum.toLocaleString()} so‘m`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      });

      setModalOpen(true);
      setTimeout(() => setModalOpen(false), 2500);
    } catch (err) {
      console.log(err);
    }
  };

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center justify-center mt-32">
        <h2 className="text-2xl font-semibold">{t("Shop.emptyCart")}</h2>
        <h2 className="text-[18px] mt-2">{t("Shop.emptyDesc")}</h2>
        <br />
        <Link to="/zapchas">
          <button className="text-[18px] text-white cursor-pointer rounded-xl w-[200px] h-[40px] bg-blue-900">
            {t("Shop.goParts")}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 mt-10">
      <h2 className="text-3xl font-bold mb-6">🛍 {t("Shop.cart")}</h2>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="space-y-6 max-h-[520px] overflow-y-auto pr-2">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 border rounded-2xl p-4 bg-white"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-contain rounded-xl bg-gray-50"
                />

                <div className="flex-1">
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => addToCart(item, -1)}
                      className="w-8 h-8 flex justify-center items-center border rounded-full"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-bold">{item.qty}</span>

                    <button
                      onClick={() => addToCart(item, 1)}
                      className="w-8 h-8 flex justify-center items-center border rounded-full"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <p className="font-bold">
                    {(item.price * item.qty).toLocaleString()} so‘m
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm flex gap-1"
                  >
                    <Trash2 size={16} /> {t("Shop.remove")}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#172843] text-white rounded-2xl p-6 h-fit">
          <h3 className="text-xl font-bold mb-4">{t("Shop.order")}</h3>

          <div className="flex justify-between mb-3">
            <span>{t("Shop.products")}</span>
            <span>{cart.length} {t("Shop.items")}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>{t("Shop.total")}</span>
            <span className="font-bold">
              {totalSum.toLocaleString()} so‘m
            </span>
          </div>

          <button
            onClick={sendToTelegram}
            className="w-full bg-[#4da3ff] text-[#172843] py-3 rounded-full font-bold"
          >
            {t("Shop.orderButton")}
          </button>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[320px] text-center animate-scale">
            <h3 className="text-xl font-bold mb-2 text-green-600">
              {t("Shop.success")}
            </h3>
            <p className="text-gray-600 text-sm">
              {t("Shop.successDesc")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
