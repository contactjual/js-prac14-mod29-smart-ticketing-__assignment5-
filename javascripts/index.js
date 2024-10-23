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

        seat.style.backgroundColor = 'rgba(128, 128, 128, 0.103)'
    }
    else {
        if (maxSelect > selectedSeat) {
            seat.classList.add('selected')

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
            // -------------------------------------------------------------------

            const span1 = document.createElement('span');
            span1.innerText = seat.innerText;
            div.appendChild(span1);

            const span2 = document.createElement('span');
            span2.innerText = 'Economoy'
            div.appendChild(span2);

            const span3 = document.createElement('span');
            span3.innerText = '550'
            div.appendChild(span3);

            addSeatHere.appendChild(div)
            console.log(addSeatHere)
            // ---------------------------------------------

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

}