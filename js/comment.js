const preview = document.getElementById('preview');
const file = document.getElementById('file');
const newReview = document.getElementById('newComment');
let username = newReview.querySelector('.text h3')
let comment = newReview.querySelector('p')
let profilePic = document.getElementById('profilePic');
let newImgUrl;
const likeComment = document.querySelectorAll('#likeComment')
const starComment = document.querySelectorAll('#starComment');
const starUser = document.querySelectorAll('#starUser');
const starParent = document.getElementById('parent');
let starRev = document.querySelectorAll('#starRev');
let jumlahBintang = 0;
let isClicked = false;
const warning = document.getElementById('warning');
const heartIcon = document.querySelectorAll('#likeComment');

for(let i = 0; i < heartIcon.length; i++){
    heartIcon[i].style.alignSelf = "flex-end";
}

for (let i = 0; i < likeComment.length; i++) {
    likeComment[i].style.cursor = "pointer";
    likeComment[i].addEventListener('click', function () {
        likeComment[i].src = "img/love5.png";
    });
    starComment[i].style.cursor = "pointer";
    starComment[i].addEventListener('click', function () {
        starComment[i].src = "img/star-black2.png";
    })
}

for (let i = 0; i < starUser.length; i++) {
    starUser[i].addEventListener('click', function () {
        if (!starUser[i].classList.contains('active')) {
            for (let j = 0; j <= i; j++) {
                starUser[j].src = "img/star-user2.png";
                jumlahBintang = i + 1;
                starUser[j].classList.add('active');
            }
        }
        else if (starUser[i].classList.contains('active')) {
            for (let j = starUser.length - 1; j > i; j--) {
                starUser[j].src = "img/star-user.png";
                jumlahBintang = i + 1;
                starUser[j].classList.remove('active');
            }
        }
        switch(jumlahBintang){
            case 1:
                warning.innerHTML = "Sangat Tidak Suka";
                break;
            case 2:
                warning.innerHTML = "Tidak Suka";
                break;
            case 3:
                warning.innerHTML = "Cukup Baik";
                break;
            case 4:
                warning.innerHTML = "Suka";
                break;
            case 5:
                warning.innerHTML = "Sangat Suka";
                break;
        }
        console.log(jumlahBintang);
    });
}

function fileNameDisplay() {
    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            preview.src = event.target.result;
            newImgUrl = event.target.result;
        };

        reader.readAsDataURL(file.files[0]);
    }
}

function newComments() {
    let usernameInput = document.getElementById('username').value;
    let commentText = document.getElementById('komentar').value;

    if (usernameInput.length === 0 || commentText.length === 0) {
        alert('Isi Nama dan Komentar Terlebih dahulu');
        return 0;
    }

    username.innerHTML = usernameInput;
    comment.innerHTML = commentText;
    profilePic.src = newImgUrl || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    for (let i = 0; i < jumlahBintang; i++) {
        starRev[i].src = "img/star-user2.png";
    }

    newReview.style.display = "flex";
    alert('Komentar telah terkirim!');
}