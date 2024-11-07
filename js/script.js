$(document).ready(function() {
    let currentIndex = 0;
    const totalCards = $('.card').length;

    function updateCards() {
        $('.card').removeClass('active left right');
        
        if (currentIndex > 0) {
            $('.card').eq(currentIndex - 1).addClass('left');
        }
        
        $('.card').eq(currentIndex).addClass('active');
        
        if (currentIndex < totalCards - 1) {
            $('.card').eq(currentIndex + 1).addClass('right');
        }

        // Плавное изменение градиента под карточками
        const gradientColors = ['#f06', '#f90', '#0c6', '#06f'];
        $('.carousel-container').css('background', `linear-gradient(${gradientColors[currentIndex]}, #000)`);
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