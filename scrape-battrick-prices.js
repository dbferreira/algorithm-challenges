var chai = require('chai');
var expect = chai.expect;

function scrape(form) {
    var currentBid = 0;
    var cBidID = form.indexOf("Current Bid:");

    if (cBidID !== -1) {
        var bidStr = form.slice(cBidID + 20);
        currentBid = +bidStr.slice(0, bidStr.indexOf("by")).trim().replace(",", "");
        var buyerStr = bidStr.slice(bidStr.indexOf(">") + 1);
        var buyerName = buyerStr.slice(0, buyerStr.indexOf("<"));
    }

    console.log(currentBid);

    return true;
}

useForm = `
	<br>
	Deadline:<br>
	12/12/2016&nbsp;08:27<br><br>
	Asking Price: £1,000<br><br>

	
		Current Bid:<br>
		£10,000 by
		<a href="office.asp?teamID=23429">Play Ball Juniors</a><br><br>
	
		Wages for this player during his minimum 6 week contract will be <font color="red"><strong>at least £5,730</strong></font> in total.<br><br>
	
		Make a bid for this player:<br><br>
		
		£<input type="text" id="bidvalue" name="bidValue" value="11000">
		<p id="previewbidvalue">£11,000</p>
		<input type="submit" id="submitbid" value="Bid!">`;


expect(scrape(useForm)).to.equal(true);