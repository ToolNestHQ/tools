/* ==========================================================================
   محرك الحركة والتفاعل لـ ToolNestHQ
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. نظام التحريك السينمائي عند تحميل الصفحة (Intro Animation)
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".main-glass-container", {
        opacity: 0,
        duration: 1.5
    })
    .from(".brand-title", {
        y: 20,
        opacity: 0,
        duration: 1,
    }, "-=1")
    .from(".welcome-text", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        skewY: 2,
    }, "-=0.8");

    // 2. نظام التفاعل مع حركة الماوس (Mouse Parallax Effect)
    // يجعل التموجات الخلفية تنجذب برقة نحو حركة الماوس لتعطي عمقاً 3D
    const backgroundWaves = document.querySelector(".fluid-background");

    document.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const xPercent = (clientX / window.innerWidth - 0.5) * 20;
        const yPercent = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(backgroundWaves, {
            x: -xPercent,
            y: -yPercent,
            duration: 2,
            ease: "power2.out"
        });
    });

    // 3. نظام "توليد الحياة" (إضافة تفاعلية)
    // عند الضغط في أي مكان، تظهر نبضة ضوئية في مكان الضغط
    document.addEventListener("click", (e) => {
        const ripple = document.createElement("div");
        ripple.className = "click-ripple";
        ripple.style.left = `${e.clientX}px`;
        ripple.style.top = `${e.clientY}px`;
        document.body.appendChild(ripple);

        gsap.to(ripple, {
            scale: 4,
            opacity: 0,
            duration: 1.5,
            onComplete: () => ripple.remove()
        });
    });
});
