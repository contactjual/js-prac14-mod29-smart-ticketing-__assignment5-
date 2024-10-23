// scrolling
document.getElementById('scroll-event').addEventListener('click', function () {
    document.getElementById('scroll-1').scrollIntoView({ behavior: 'smooth' })
})


// seatBooking functions
const maxSelect = 3;
let setLeft = 40;
let selectedSeat = 0;
const perSeatPrice = 550;
let sum = 0;

// create seat details
// const addSeatHere = document.getElementById('add-seat-here');
// const span1 = document.createElement('span');
// const span2 = document.createElement('span');
// const span3 = document.createElement('span');

const seats = document.querySelectorAll('.butt');

for (var seat of seats) {
    seat.addEventListener('click', function () {
        selectSeat(seat);
        console.log(seat)
    })
};

function selectSeat(seat) {

    if (seat.classList.contains('selected')) {
        seat.classList.remove('selected');
        setLeft++;
        // console.log(setLeft)
        selectedSeat--;
        // console.log(selectedSeat)
        sum = sum - perSeatPrice;

        addSeatHere.remove(span1)
        addSeatHere.remove(span2)
        addSeatHere.remove(span3)

        seat.style.backgroundColor = 'rgba(128, 128, 128, 0.103)'
    }
    else {
        if (maxSelect > selectedSeat) {
            seat.classList.add('selected')
            setLeft--;
            selectedSeat++;
            sum = perSeatPrice + sum;

            addSeatHere.append(span1)
            addSeatHere.append(span2)
            addSeatHere.append(span3)

            seat.style.backgroundColor = 'rgb(5, 219, 5)';
        }
        else {
            alert('maximum 3 seats for everyone');
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

    span1.innerText = seat.innerText;
    span2.innerText = 'Economoy';
    span3.innerText = '550'
}