import { useEffect } from "react";

/**
 * useLockZoom
 * این هوک باعث میشه زوم صفحه روی 100% قفل بشه
 * - موبایل: با متا تگ viewport
 * - دسکتاپ: با body.style.zoom
 */
const useLockZoom = () => {
  useEffect(() => {
    // قفل کردن روی دسکتاپ
    const lockDesktopZoom = () => {
      document.body.style.zoom = "100%"; // همیشه روی 100%
    };

    // قفل کردن روی موبایل (متا تگ viewport)
    const lockMobileZoom = () => {
      let viewport = document.querySelector("meta[name=viewport]");
      if (!viewport) {
        viewport = document.createElement("meta");
        viewport.setAttribute("name", "viewport");
        document.head.appendChild(viewport);
      }
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
      );
    };

    // اعمال اولیه
    lockDesktopZoom();
    lockMobileZoom();

    // لیسنر برای وقتی کاربر تغییر اندازه داد
    window.addEventListener("resize", lockDesktopZoom);

    return () => {
      window.removeEventListener("resize", lockDesktopZoom);
    };
  }, []);
};

export default useLockZoom;
