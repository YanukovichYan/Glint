window.onload = function () {

    let acc = document.getElementById('accordion');
    if (acc) {
        $(function () {
            $("#accordion").accordion({
                heightStyle: "content"
            });
        });
    }

    let notLink = $('.not-link'),
        notLinlkA = $('.not-link-a');

    if ($(window).width() < 653) {
        notLinlkA.attr("href", "#!");
    }

    let aboutListBurger = $('.about-list-burger'),
        language = $('.language'),
        languageList = $('.language-list'),
        aboutArrow = $('.about-arrow');

    notLink.on("click", function () {
        aboutListBurger.toggle();
        aboutArrow.toggleClass('about-arrow-burger');
    });

    language.on("click", function () {
        languageList.toggle();
    });

// Закрытие выпадающих списков, попап и т.п.
//     if (languageList.css('display', 'block')) {
    $(document).mouseup(function (e) {
        var container = languageList;
        if (container.has(e.target).length === 0) {
            container.hide();
        }
    })
    // }

    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 1500,
    });

    $('.slider-recall').slick({
        dots: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });

    let recordButton = document.getElementsByClassName('record-button')[0],
        recordWindow = document.getElementsByClassName('record')[0],
        closeRecord = document.getElementsByClassName('record-close')[0];

    recordButton.onclick = function () {
        recordWindow.style.display = 'block';
    }

    closeRecord.onclick = function () {
        recordWindow.style.display = 'none';
    }

    let tableButton = document.getElementsByClassName('table-actions'),
        windowServices = document.getElementsByClassName('window-record-services')[0],
        closeServices = document.getElementsByClassName('record-close-services')[0];

    for (let i = 0; i < tableButton.length; i++) {
        if (tableButton) {
            tableButton[i].onclick = function () {
                windowServices.style.display = 'flex';
            }
        }

        if (closeServices) {
            closeServices.onclick = function () {
                windowServices.style.display = 'none';
            }
        }
    }

    let discountButton = document.getElementsByClassName('discount-button');

    for (let i = 0; i < discountButton.length; i++) {
        if (discountButton) {
            discountButton[i].onclick = function () {
                windowServices.style.display = 'flex';
            }
        }
    }
    let stockButton = document.getElementsByClassName('stock-button'),
        windowStock = document.getElementsByClassName('window-stock')[0],
        stockClose = document.getElementsByClassName('stock-close')[0];

    for (let i = 0; i < stockButton.length; i++) {
        stockButton[i].onclick = function () {
            windowStock.style.display = 'flex';
        }
    }
    if (stockClose) {
        stockClose.onclick = function () {
            windowStock.style.display = 'none';
        }
    }

    let burgerMenu = document.getElementsByClassName('burger-menu')[0],
        newMenu = document.getElementsByClassName('new-menu')[0],
        closeBurger = document.getElementsByClassName('close-burger')[0];

    burgerMenu.onclick = function () {
        let body = $('body');

        body.css('overflow', 'hidden');
        newMenu.style.display = 'block';
        burgerMenu.style.display = 'none';
        closeBurger.style.display = 'block';

    }

    closeBurger.onclick = function () {
        let body = $('body');
        body.css('overflow', 'visible');
        newMenu.style.display = 'none';
        closeBurger.style.display = 'none';
        burgerMenu.style.display = 'block';
    }


    let vacanciesButton = document.getElementsByClassName('vacancies-button'),
        vacancyWindow = document.getElementsByClassName('vacancy-window')[0],
        vacancyClose = document.getElementsByClassName('vacancy-close')[0];

// Добавление title в popup вакансии
    let accordionTitles = document.getElementsByClassName('accordion-button');
    let vacancyNameText = document.getElementsByClassName('vacancy-name-text')[0];
    let header = document.getElementsByClassName('header')[0];
    let arrTitles = [];

    for (let i = 0; i < accordionTitles.length; i++) {
        arrTitles.push(accordionTitles[i].innerText);
    }

    for (let i = 0; i < vacanciesButton.length; i++) {
        vacanciesButton[i].onclick = function () {
            vacancyWindow.style.display = 'flex';
            header.style.display = 'none';
            vacancyNameText.innerText = arrTitles[i];
        }
    }

    if (vacancyClose) {
        vacancyClose.onclick = function () {
            vacancyWindow.style.display = 'none';
            header.style.display = 'block';
        }
    }

    let reviewsButton = document.getElementsByClassName('reviews-button')[0],
        reviewsWindow = document.getElementsByClassName('reviews-window')[0],
        reviewsClose = document.getElementsByClassName('reviews-close')[0];

    if (reviewsButton) {
        reviewsButton.onclick = function () {
            reviewsWindow.style.display = 'flex';
            header.style.display = 'none';
        }
    }
    if (reviewsClose) {
        reviewsClose.onclick = function () {
            reviewsWindow.style.display = 'none';
            header.style.display = 'block';
        }
    }


    let specialistButton = document.getElementsByClassName('specialist-button');
    if (specialistButton) {
        for (let i = 0; i < specialistButton.length; i++) {
            specialistButton[i].onclick = function () {
                windowServices.style.display = 'flex';
            }
        }
    }
    if (closeServices) {
        closeServices.onclick = function () {
            windowServices.style.display = 'none';
        }
    }

    // Переключение услуг
    let servicesMenu = document.querySelectorAll('.services-menu ul li a'),
        servicesItem = document.getElementsByClassName('services-item'),
        tableMenu = document.querySelectorAll('.table-title a'),
        tableInfo = document.getElementsByClassName('table-info');

    for (let i = 0; i < servicesMenu.length; i++) {
        servicesMenu[i].onclick = function () {
            tableInfo[0].classList.add('table-info-active');
            tableInfo[4].classList.add('table-info-active');
            tableInfo[8].classList.add('table-info-active');
            tableInfo[12].classList.add('table-info-active');
            tableInfo[16].classList.add('table-info-active');
            tableMenu[0].classList.add('table-active');
            tableMenu[4].classList.add('table-active');
            tableMenu[8].classList.add('table-active');
            tableMenu[12].classList.add('table-active');
            tableMenu[16].classList.add('table-active');
            for (let i = 0; i < servicesMenu.length; i++) {
                servicesItem[i].classList.remove('services-item-active');
                servicesMenu[i].classList.remove('services-active');
                servicesItem[i].classList.remove('animate__fadeIn');
            }
            servicesItem[i].classList.add('services-item-active');
            servicesMenu[i].classList.add('services-active');
            servicesItem[i].classList.add('animate__fadeIn');
        }
    }

    for (let i = 0; i < tableMenu.length; i++) {
        tableMenu[i].onclick = function () {
            for (let i = 0; i < tableMenu.length; i++) {
                tableInfo[i].classList.remove('table-info-active');
                tableMenu[i].classList.remove('table-active');
                tableInfo[i].classList.remove('animate__fadeIn');
            }
            tableInfo[i].classList.add('table-info-active');
            tableMenu[i].classList.add('table-active');
            tableInfo[i].classList.add('animate__fadeIn');
        }
    }


    // Переключение специалистов
    let specialistsMenu = document.querySelectorAll('.specialists-menu ul li a'),
        specialistsInfo = document.getElementsByClassName('specialists-info'),
        specialistItem = document.getElementsByClassName('specialist-item'),
        sNameProf = document.getElementsByClassName('s-name-prof'),
        specialistImage = document.getElementsByClassName('specialist-image'),
        specialistDescription = document.getElementsByClassName('specialist-description');

    for (let i = 0; i < specialistsMenu.length; i++) {
        specialistsMenu[i].onclick = function () {
            specialistDescription[0].classList.add('specialist-description-active');
            specialistDescription[4].classList.add('specialist-description-active');
            specialistDescription[8].classList.add('specialist-description-active');
            specialistDescription[12].classList.add('specialist-description-active');
            specialistDescription[16].classList.add('specialist-description-active');
            specialistImage[0].classList.add('spec-im-active');
            specialistImage[4].classList.add('spec-im-active');
            specialistImage[8].classList.add('spec-im-active');
            specialistImage[12].classList.add('spec-im-active');
            specialistImage[16].classList.add('spec-im-active');
            sNameProf[0].classList.add('spec-active');
            sNameProf[4].classList.add('spec-active');
            sNameProf[8].classList.add('spec-active');
            sNameProf[12].classList.add('spec-active');
            sNameProf[16].classList.add('spec-active');

            for (let i = 0; i < specialistsMenu.length; i++) {
                specialistsInfo[i].classList.remove('specialists-info-active');
                specialistsMenu[i].classList.remove('specialists-active');
                specialistsInfo[i].classList.remove('animate__fadeIn');
            }
            specialistsInfo[i].classList.add('specialists-info-active');
            specialistsMenu[i].classList.add('specialists-active');
            specialistsInfo[i].classList.add('animate__fadeIn');
        }
    }

    for (let i = 0; i < specialistItem.length; i++) {
        specialistItem[i].onclick = function () {
            for (let i = 0; i < specialistItem.length; i++) {
                sNameProf[i].classList.remove('spec-active');
                specialistImage[i].classList.remove('spec-im-active');
                specialistDescription[i].classList.remove('specialist-description-active');
                specialistDescription[i].classList.remove('animate__fadeIn');
            }
            sNameProf[i].classList.add('spec-active');
            specialistImage[i].classList.add('spec-im-active');
            specialistDescription[i].classList.add('specialist-description-active');
            specialistDescription[i].classList.add('animate__fadeIn');
        }
    }

    // Наши работы меню
    let ourWorkMenu = document.querySelectorAll('.our-work-menu ul li a'),
        ourWorkItems = document.getElementsByClassName('our-work-items');

    for (let i = 0; i < ourWorkMenu.length; i++) {
        ourWorkMenu[i].onclick = function () {
            for (let i = 0; i < ourWorkMenu.length; i++) {
                ourWorkItems[i].classList.remove('our-work-items-active');
                ourWorkMenu[i].classList.remove('owt-active');
            }
            ourWorkItems[i].classList.add('our-work-items-active');
            ourWorkMenu[i].classList.add('owt-active');
        }
    }
// Смена картинок через время
    let one = document.getElementById('one');
    let two = document.getElementById('two');
    let three = document.getElementById('three');

    let images = ['../images/leader1.png', '../images/leader2.png', '../images/leader3.png'];
    let a = 0;

    function SetImage() {
        if (a === 0) {
            // one.setAttribute('src', '../images/leader3.png');
            // two.setAttribute('src', '../images/leader1.png');
            // three.setAttribute('src', '../images/leader2.png');
            one.setAttribute('src', images[2]);
            two.setAttribute('src', images[0]);
            three.setAttribute('src', images[1]);
            a = 1;
        } else if (a === 1) {
            // one.setAttribute('src', '../images/leader2.png');
            // two.setAttribute('src', '../images/leader3.png');
            // three.setAttribute('src', '../images/leader1.png');
            one.setAttribute('src', images[1]);
            two.setAttribute('src', images[2]);
            three.setAttribute('src', images[0]);
            a = 2;
        } else if (a === 2) {
            // one.setAttribute('src', '../images/leader1.png');
            // two.setAttribute('src', '../images/leader2.png');
            // three.setAttribute('src', '../images/leader3.png');
            one.setAttribute('src', images[0]);
            two.setAttribute('src', images[1]);
            three.setAttribute('src', images[2]);
            a = 0;
        }
    }

    if (one) {
        setInterval(SetImage, 4000);
    }

    let vacancyPopupButton = document.getElementsByClassName('vacancy-popup-button')[0],
        vacancyName = document.getElementById('vacancy-name'),
        vacancyPhone = document.getElementById('vacancy-phone'),
        vacancyTextarea = document.getElementsByClassName('vacancy-textarea')[0];

    if (vacancyPopupButton) {
        vacancyPopupButton.onclick = function () {

            vacancyName.style.borderColor = '#C2C2C2';
            vacancyPhone.style.borderColor = '#C2C2C2';
            vacancyTextarea.style.borderColor = '#C2C2C2';

            if (!vacancyName.value) {
                vacancyName.style.borderColor = '#C3718F';
                return;
            }
            if (!vacancyPhone.value) {
                vacancyPhone.style.borderColor = '#C3718F';
                return;
            }
            if (!vacancyTextarea.value) {
                vacancyTextarea.style.borderColor = '#C3718F';
                return;
            }
            location.reload();
            alert('Заявка успешно отправлена!');
        }
    }

    let reviewsPopupButton = document.getElementsByClassName('reviews-popup-button')[0],
        reviewsInputName = document.getElementsByClassName('reviews-input-name')[0],
        reviewsInputSurname = document.getElementsByClassName('reviews-input-surname')[0],
        reviewsTextarea = document.getElementsByClassName('reviews-textarea')[0];

    if (reviewsPopupButton) {
        reviewsPopupButton.onclick = function () {

            reviewsInputName.style.borderColor = '#C2C2C2';
            reviewsInputSurname.style.borderColor = '#C2C2C2';
            reviewsTextarea.style.borderColor = '#C2C2C2';

            if (!reviewsTextarea.value) {
                reviewsTextarea.style.borderColor = '#C3718F';
                return;
            }
            if (!reviewsInputName.value) {
                reviewsInputName.style.borderColor = '#C3718F';
                return;
            }
            if (!reviewsInputSurname.value) {
                reviewsInputSurname.style.borderColor = '#C3718F';
                return;
            }
            reviewsPopupButton.style.backgroundColor = '#6A8771';
            alert('Спасибо! Ваш отзыв отправлен!');
            location.reload();
        }
    }

    // Плавный скролл вверх
    let buttonScrollTop = $('.button-scroll-top');

    buttonScrollTop.on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({scrollTop: 0}, 600);
        buttonScrollTop.hide();

    });

    window.addEventListener('scroll', changeMenu);

    function changeMenu() {

        let windowScroll = document.documentElement.scrollTop;

        if (windowScroll <= 500) {
            buttonScrollTop.hide();
        }
        if (windowScroll >= 500) {
            buttonScrollTop.show();
        }
    }
}