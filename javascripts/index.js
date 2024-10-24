// scrolling
document.getElementById('scroll-event').addEventListener('click', function () {
    document.getElementById('scroll-1').scrollIntoView({ behavior: 'smooth' })
})


// seatBooking functions
const maxSelect = 4;
let setLeft = 40;
let selectedSeat = 0;
const perSeatPrice = 550;
let sum = 0;

const addSeatHere = document.getElementById('add-seat-here');

const seats = document.querySelectorAll('.butt');

for (let seat of seats) {
    seat.addEventListener('click', function () {
        selectSeat(seat);
    })
};

function selectSeat(seat) {

    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');

        setLeft++;
        selectedSeat--;
        sum = sum - perSeatPrice;

        // ------------- remove seat details--------------------------------
        let seatDetails = document.getElementsByClassName(seat.innerText);
        for (let seatDet of seatDetails) {
            if (seatDet) {
                seatDet.remove(); // Seat details remove kora holo
            }
        }
        // ----------------------------------------------------------

        // remove discount
        discountRemove();

        seat.style.backgroundColor = 'rgba(128, 128, 128, 0.103)';
    }
    else {
        if (maxSelect > selectedSeat) {
            seat.classList.add('selected');

            setLeft--;
            selectedSeat++;
            sum = perSeatPrice + sum;

            // border-bottom
            const brBotDiv = document.getElementById('bt-bot');
            brBotDiv.style.borderBottom = '1px dashed rgb(202, 202, 202)';
            brBotDiv.style.margin = '10px 0';

            // ------------- show seat details--------------------------------
            const div = document.createElement('div');
            div.classList.add('flex');
            div.classList.add(seat.innerText); // Seat er unique class add kora holo

            const span1 = document.createElement('span');
            span1.innerText = seat.innerText;
            div.appendChild(span1);

            const span2 = document.createElement('span');
            span2.innerText = 'Economoy';
            div.appendChild(span2);

            const span3 = document.createElement('span');
            span3.innerText = '550';
            div.appendChild(span3);

            addSeatHere.appendChild(div);
            // ---------------------------------------------

            seat.style.backgroundColor = 'rgb(5, 219, 5)';
        }
        else {
            alert('maximum 4 seats for everyone');
        }

    }

    addTicketData();
}


function addTicketData() {
    let avilabeSeats = document.getElementById('left-seats');
    avilabeSeats.innerText = setLeft;

    let countSeat = document.getElementById('count-seat');
    countSeat.innerText = selectedSeat;

    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = sum;

    let grandTotalFinal = document.getElementById('grand-total');
    grandTotalFinal.innerText = sum;
}


// active next but------------------------------------------------------------
function activeNextButton() {
    const inputElement = document.getElementById('phone-number');
    const inputValue = inputElement.value;
    const disBut = document.getElementById('dis-but');

    if (selectedSeat > 0 && inputValue !== '') {
        disBut.removeAttribute('disabled');
    }
    else {
        disBut.setAttribute('disabled', 'true');
    }
};

document.addEventListener('keyup', activeNextButton);
document.addEventListener('click', activeNextButton);



// active apply button----------------------------------------------------------------------------
document.addEventListener('click', function () {
    const disBut = document.getElementById('aplly-but');

    if (selectedSeat === maxSelect) {
        disBut.removeAttribute('disabled');
    }
    else {
        disBut.setAttribute('disabled', 'true');
    }
});

// apply button using coupon code
function couponCode() {
    const couponInputElement = document.getElementById('coup-input')
    const couponInputValue = couponInputElement.value;
    const discountElement = document.getElementById('show-discount');

    if (couponInputValue === 'NEW15') {

        // calculation of discounted price and add to grand total
        let grandTotalFinal = document.getElementById('grand-total');

        if (discountElement.innerText === '') {
            grandTotalFinal.innerText = sum * 0.85;
        }

        let priceSum = sum;
        const discount = 0.15;
        discountAdd(priceSum, discount);
    }

    else {

        if (couponInputValue === 'Couple 20') {

            // calculation of discounted price and add to grand total 
            let grandTotalFinal = document.getElementById('grand-total');

            if (discountElement.innerText === '') {
                grandTotalFinal.innerText = sum * 0.80;
            }

            let priceSum = sum;
            const discount = 0.20;
            discountAdd(priceSum, discount);
        }

        else {
            alert('Please input a valid coupon');
        }
    }
}







// append discounted
let div2; // made this global for discountRemove function

function discountAdd(priceSum, discount) {

    const discountElement = document.getElementById('show-discount');
    div2 = document.createElement('div');
    const spaN1 = document.createElement('span');
    const spaN2 = document.createElement('span');
    spaN1.innerText = 'Discounted Price';
    spaN2.innerText = 'BDT ' + priceSum * discount;

    div2.appendChild(spaN1);
    div2.appendChild(spaN2);

    div2.style.display = 'flex';
    div2.style.justifyContent = 'space-between';
    div2.style.alignItems = 'center';
    div2.style.paddingTop = '10px';

    if (discountElement.innerText === '') {
        discountElement.appendChild(div2);
    }

    else {
        alert('Discount for only one time');
    }
}

function discountRemove() {
    if (div2) {
        div2.remove();
    }
}








// pop-up 
function popUpOpen() {
    document.getElementById('pop_up').style.display = 'flex';

    document.getElementById('body').style.overflow = 'hidden';
}

function popUpClose() {
    document.getElementById('pop_up').style.display = 'none';

    document.getElementById('body').style.overflow = 'auto';
}
