$(document).ready(function () {
    $("#bookingForm").submit(function (event) {
        event.preventDefault();

        // Get form values
        const roomRate = ($("#roomType").val() === "Delux") ? 2500 : 4000;
        const amenities = $("#amenities").val() || [];
        const totalDays = parseInt($("#totalDays").val());
        const totalPersons = parseInt($("#totalPersons").val());
        const advanceAmount = parseInt($("#advanceAmount").val()) || 0;

        // Calculate costs
        const totalRoomCost = roomRate * totalDays;
        const totalAmenitiesCost = amenities.length * totalDays * 1300; // (AC + Locker)
        const extraPersonCost = (totalPersons > 2) ? (totalPersons - 2) * 1000 : 0;
        const balanceAmount = totalRoomCost + totalAmenitiesCost + extraPersonCost - advanceAmount;

        // Update UI
        $("#totalRoomCost").text(totalRoomCost);
        $("#totalAmenitiesCost").text(totalAmenitiesCost);
        $("#totalCost").text(totalRoomCost + totalAmenitiesCost + extraPersonCost);

        if (balanceAmount > 0) {
            alert(`Please pay the balance amount of ${balanceAmount} before checking in.`);
        } else {
            alert("Booking successful! Enjoy your stay!");
        }
    });
});
