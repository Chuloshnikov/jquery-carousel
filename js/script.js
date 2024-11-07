$(document).ready(function() {
    let currentIndex = 0;
    const totalCards = $('.card').length;

    function updateCards() {
        $('.card').removeClass('active left right hidden');
        
        // Центральная карточка
        $('.card').eq(currentIndex).addClass('active');

        // Левая карточка
        if (currentIndex > 0) {
            $('.card').eq(currentIndex - 1).addClass('left');
        }

        // Правая карточка
        if (currentIndex < totalCards - 1) {
            $('.card').eq(currentIndex + 1).addClass('right');
        }

        // Скрываем остальные карточки
        $('.card').slice(0, currentIndex - 1).addClass('hidden');
        $('.card').slice(currentIndex + 2).addClass('hidden');
    }

    $('#next').click(function() {
        if (currentIndex < totalCards - 1) {
            currentIndex++;
            updateCards();
        }
    });

    $('#prev').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCards();
        }
    });

    // Начальная инициализация
    updateCards();
});