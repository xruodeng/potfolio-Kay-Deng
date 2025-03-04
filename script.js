document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            id: "slider-1",
            images: [
                "images/photo-1.jpg",
                "images/photo-2.JPG",
                "images/photo-3.JPG",
                "images/photo-4.jpg",
                "images/photo-5.jpg"
            ]
        },
        {
            id: "slider-2",
            images: [
                "images/pack-A1.jpg",
                "images/pack-A2.jpg",
                "images/pack-A3.jpg",
                "images/pack-A4.jpg",
                "images/pack-A5.jpg",
                "images/pack-A6.jpg"
            ]
        },
        {
            id: "slider-3",
            images: [
                "images/pack-B1.jpg",
                "images/pack-B2.jpg",
                "images/pack-B3.jpg",
                "images/pack-B4.jpg",
                "images/pack-B5.jpg",
                "images/pack-B6.jpg"
            ]
        },
        {
            id: "slider-4",
            images: [
                "images/web-A1.jpg",
                "images/web-A2.jpg",
                "images/web-A3.jpg"
            ]
        },
        {
            id: "slider-5",
            images: [
                "images/web-B1.jpg",
                "images/web-B2.jpg",
                "images/web-B3.jpg",
                "images/web-B4.jpg"
            ]
        },
        {
            id: "slider-6",
            images: [
                "images/pos-1.png",
                "images/pos-2.png",
                "images/pos-3.png",
                "images/pos-4.png",
                "images/pos-5.png"
            ]
        },
        {
            id: "slider-7",
            images: [
                "images/illu-1.JPG",
                "images/illu-2.jpg",
                "images/illu-3.PNG",
                "images/illu-4.PNG",
                "images/illu-5.JPG"
            ]
        }
    ];

    function createSliders() {
        projects.forEach(project => {
            const container = document.getElementById(project.id);
            if (container) {
                project.images.forEach((imageSrc, index) => {
                    const img = document.createElement("img");
                    img.src = imageSrc;
                    img.alt = `Project Image ${index + 1}`;
                    img.classList.add("slider-image");
                    if (index === 0) img.classList.add("active"); // First image is active
                    img.addEventListener("click", () => centerImage(container, img)); // Click event
                    container.appendChild(img);
                });
            }
        });
    }

    function centerImage(container, selectedImg) {
        const images = container.querySelectorAll("img");

        images.forEach(img => {
            img.classList.remove("active");
            img.style.transform = "scale(0.8)";
            img.style.opacity = "0.5";
        });

        selectedImg.classList.add("active");
        selectedImg.style.transform = "scale(1.05)";
        selectedImg.style.opacity = "1";

        // Scroll the clicked image into view
        const sliderContainer = container.closest(".slider-container");
        if (sliderContainer) {
            const sliderWidth = sliderContainer.offsetWidth;
            const imgCenter = selectedImg.offsetLeft + (selectedImg.offsetWidth / 2);
            sliderContainer.scrollTo({
                left: imgCenter - sliderWidth / 2,
                behavior: "smooth"
            });
        }
    }

    createSliders();
});



function nextImage(sliderId) {
    const images = document.getElementById(sliderId).querySelectorAll("img");
    let index = [...images].findIndex(img => img.classList.contains("active"));
    images[index].classList.remove("active");

    index = (index + 1) % images.length;
    images[index].classList.add("active");
}

function prevImage(sliderId) {
    const images = document.getElementById(sliderId).querySelectorAll("img");
    let index = [...images].findIndex(img => img.classList.contains("active"));
    images[index].classList.remove("active");

    index = (index - 1 + images.length) % images.length;
    images[index].classList.add("active");
}
