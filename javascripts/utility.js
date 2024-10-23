function selectSeatClassName(seatClassName) {
    // const getSeatElement = document.getElementById(seatClassName);
    const getSeatElement = document.getElementsByClassName(seatClassName);
    for (const doc of getSeatElement) {
        console.log(getSeatElement[i])
        doc.style.backgroundColor = 'green';
    }
}