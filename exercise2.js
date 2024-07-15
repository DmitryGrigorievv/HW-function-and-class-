// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы,
// но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером,
// где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва
// менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
      product: "Apple iPhone 13",
      reviews: [
        {
          id: "1",
          text: "Отличный телефон! Батарея держится долго.",
        },
        {
          id: "2",
          text: "Камера супер, фото выглядят просто потрясающе.",
        },
      ],
    },
    {
      product: "Samsung Galaxy Z Fold 3",
      reviews: [
        {
          id: "3",
          text: "Интересный дизайн, но дорогой.",
        },
      ],
    },
    {
      product: "Sony PlayStation 5",
      reviews: [
        {
          id: "4",
          text: "Люблю играть на PS5, графика на высоте.",
        },
      ],
    },
  ];
  
  // Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.
  document.addEventListener("DOMContentLoaded", () => {
    // Создание контейнера для отзывов
    const reviewsContainer = document.createElement("div");
    reviewsContainer.id = "reviewsContainer";
    
    // Создание текстового поля для ввода отзыва
    const reviewText = document.createElement("textarea");
    reviewText.id = "reviewText";
    
    //  Создание кнопки для отправки отзыва
    const submitReview = document.createElement("button");
    submitReview.id = "submitReview";
    submitReview.textContent = "Добавьте Ваш отзыв";
    
    // Создание элемента для сообщения об ошибке
    const errorMessage = document.createElement("div");
    errorMessage.id = "errorMessage";
    errorMessage.style.display = "none";
    
    // Добавление созданных элементов в тело документа
    document.body.appendChild(reviewsContainer);
    document.body.appendChild(reviewText);
    document.body.appendChild(submitReview);
    document.body.appendChild(errorMessage);
    
    // Добавление обработчика событий для кнопки
    submitReview.addEventListener("click", () => {
      // Ваш код для обработки отправки отзыва
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const reviewsContainer = document.getElementById("reviewsContainer");
    const submitReviewButton = document.getElementById("submitReview");
    const reviewText = document.getElementById("reviewText");
    const errorMessage = document.getElementById("errorMessage");
  
    function loadInitialReviews() {
      initialData.forEach((product) => {
        product.reviews.forEach((review) => {
          addReviewToContainer(review.text, reviewsContainer);
        });
      });
    }
  
    function addReviewToContainer(reviewText, container) {
      const reviewElement = document.createElement("div");
      reviewElement.className = "review";
      reviewElement.textContent = reviewText;
      container.appendChild(reviewElement);
    }
  
    function validateReview(text) {
      if (text.length < 50 || text.length > 500) {
        throw new Error("Длина отзыва должна быть от 50 до 500 символов.");
      }
    }
  
    submitReviewButton.addEventListener("click", () => {
      try {
        const text = reviewText.value.trim();
        validateReview(text);
        addReviewToContainer(text, reviewsContainer);
        reviewText.value = ""; // Очистить поле ввода после добавления отзыва
        errorMessage.style.display = "none";
      } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
      }
    });
  
    loadInitialReviews();
  });