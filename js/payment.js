const pay = document.querySelector('.btn-form-pay');
const popUp = document.querySelectorAll('.contain');
const popUp2 = document.getElementById('popUp2');
const batal = document.querySelectorAll('.option-btn a:nth-child(2)');
const input = document.querySelectorAll('#main-input');
const selectElement = document.querySelectorAll("#mySelect");
let isFilled = false;
pay.addEventListener('click', function () {
    const radio = document.getElementsByName('payment');
    let jumlahBarang = document.getElementById('jumlahBarang');
    let selectedOption = [];
    let selectedValue = [];
    let isSelected;
    let selectedRadio;
    console.log(selectElement);
    selectedOption.push(selectElement[0].options[selectElement[0].selectedIndex]);
    selectedOption.push(selectElement[1].options[selectElement[1].selectedIndex]);
    console.log(selectedOption);

    selectedValue.push(selectedOption[0].value);
    selectedValue.push(selectedOption[1].value);
    console.log(selectedValue[0], selectedValue[1]);

    const bank = ["bni", "bca", "bri", "mandiri", "bsi"];
    const wallet = ["paypal", "alfamaret", "indomaret", "gopay", "dana"];

    function inArray(value, array) {
        return array.indexOf(value) > -1;
    }

    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            selectedRadio = i;
            isSelected = true;
            break;
        }
        else {
            isSelected = false;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (input[i].value === "" || isNaN(input[1].value) || selectedValue[i] === "header" || isSelected === false || jumlahBarang.value === "0" || jumlahBarang.value.includes("-") || jumlahBarang.value === "") {
            console.log(0, selectedValue);
            alert("Pastikan Mengisi Semua Data Yang Diperlukan Sebelum Membayar");
            isFilled = false;
            break;
        }
        else {
            if (i < 2) {
                isFilled = true;
                console.log(1, selectedValue);
            }
            else if (i === 2 && isFilled === true) {
                if (inArray(radio[selectedRadio].id, bank)) {
                    popUp[0].style.display = "flex";
                }
                else {
                    popUp2.style.display = "flex";
                }
                console.log(popUp.length);
                console.log(2);
                break;
            }
        }
    }
});
for (let i = 0; i < batal.length; i++) {
    batal[i].addEventListener('click', () => {
        popUp[0].style.display = "none";
        popUp2.style.display = "none";
    });
}

const radioConfirm = document.getElementsByName('rekeningtujuan');
const checkAgree = document.getElementById('agree');
const confirmBtn = document.getElementById('confirmBtn');
const alphabet = /[a-zA-Z]/;

confirmBtn.addEventListener('click', function (e) {
    let isSelected2 = false;
    const confirmInput = document.querySelectorAll('.input-confirm');
    console.log(radioConfirm);
    for (let i = 0; i < radioConfirm.length; i++) {
        if (radioConfirm[i].checked) {
            isSelected2 = true;
            break;
        }
        else {
            console.log("belum di check");
            isSelected2 = false;
        }
    }

    for (let i = 0; i < 2; i++) {
        if (confirmInput[i].value.length === 0 || alphabet.test(confirmInput[i].value) || !checkAgree.checked || isSelected2 === false) {
            e.preventDefault();
            console.log(`kondisi ${i} tidak terpenuhi`)
            alert("Masukkan Data Konfirmasi baik Rekening dan Nomor Telepon Dengan Benar");
            break;
        }
        // for nya diselesaikan terlebih dahulu ternyata:v
    }
})
const fileInput = document.getElementById('file');
const displayNameFile = document.getElementById('fileNameDisplay');
const preview = document.getElementById('preview');

function fileNameDisplay() {
    let fileName = fileInput.files[0].name;
    displayNameFile.innerHTML = fileName;

    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            preview.src = event.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}