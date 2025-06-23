var RegistryVerification = (function () {
    "use strict";
    //#region Page Selector
    //#endregion

    var init = function () {

        //#region Common Setups
        //#endregion

        //#region Registry Section
        //if (RegistryVerification.data == null || (RegistryVerification.data.FinalPersonShares.length == 0 && RegistryVerification.data.FinalKashtkaarShares.length == 0 && RegistryVerification.data.KhewatKhatunis.length == 0)) {
        //    $('.notdata-msg').show();
        //    $('.tabContentStyling').hide();
        //}
        //else {
        //    $('.notdata-msg').hide();
        //}
        if (RegistryVerification.data != null && RegistryVerification.data.RegistryHeaderDetails != null && RegistryVerification.data.RegistryHeaderDetails.length > 0) {
            Object.entries(RegistryVerification.data.RegistryHeaderDetails[0]).map(item => {
                if (item[1]) $('#' + item[0]).text(item[1])
            })
            if ($('#registration_date').text() && $('#registration_date').text() != '-') $('#registration_date').text(moment($('#registration_date').text()).format("DD/MM/YYYY"))
            if ($('#approvalDate').text() && $('#approvalDate').text() != '-') $('#approvalDate').text(moment($('#approvalDate').text()).format("DD/MM/YYYY"))
            if ($('#totalAreaTransfered').text() == 0) $('#totalAreaTransfered').text('')
            if (RegistryVerification.data.RegistryHeaderDetails[0].land_price > 0) $('#land_price').text(RegistryVerification.data.RegistryHeaderDetails[0].land_price.toLocaleString("en-US"));
            if (RegistryVerification.data.RegistryHeaderDetails[0].totalPrice > 0) $('#totalPrice').text(RegistryVerification.data.RegistryHeaderDetails[0].totalPrice.toLocaleString("en-US"));
            if (RegistryVerification.data.RegistryHeaderDetails[0].valuationPrice > 0) $('#valuationPrice').text(RegistryVerification.data.RegistryHeaderDetails[0].valuationPrice.toLocaleString("en-US"));
            if (RegistryVerification.data.RegistryHeaderDetails[0].superStructurePrice > 0) $('#superStructurePrice').text(RegistryVerification.data.RegistryHeaderDetails[0].superStructurePrice.toLocaleString("en-US"));
            switch (RegistryVerification.data.RegistryHeaderDetails[0].status) {
                case 1:
                    $('#registry_status').text(RegistryVerification.messages.Approved)
                    break;
                case 2:
                    $('#registry_status').text(RegistryVerification.messages.Unapproved)
                    break;
                case 3:
                    $('#registry_status').text(RegistryVerification.messages.Canceled)
                    break;
                case 4:
                    $('#registry_status').text(RegistryVerification.messages.ImpoundEndrosement)
                    break;
                case 5:
                    $('#registry_status').text(RegistryVerification.messages.ImpoundEndorsementByRegistrar)
                    break;
                case 6:
                    $('#registry_status').text(RegistryVerification.messages.LocalCommissionForPartiesVerification)
                    break;
                case 7:
                    $('#registry_status').text(RegistryVerification.messages.RegistryRegistrarReview)
                    break;
                default:
                    $('#registry_status').text(RegistryVerification.messages.UnderDecision)
            }
        }

        //#endregion
    }

    return {
        init: init,
    }
})();