export default function resizeGameFrame() {
	//finding size diff between current window and target 1920 * 1080 window, expressed as a number between 0 and 1.
	const diffX = window.innerWidth / 1920,
		diffY = window.innerHeight / 1080,
		elem = document.getElementById('game-frame');

	//Picking the smallest number (that way everything remains on screen)
	const smallestDiff = Math.min(diffX, diffY);

	const difXc = smallestDiff * 1920,
		  difYc = smallestDiff * 1080;

	//Now we need to see how many pixels will be left on each side of the div after we resize the frame.		
	const remainingX = window.innerWidth - (1920 * smallestDiff),
		  remainingY = window.innerHeight - (1080 * smallestDiff);

	//we cut this diff in half so we know how far we need to transform the the game-frame to center it, and then round for prettiness. 
	//But due to the scale transform, we have to embiggen the numbers so we end up with the proper amount of real-world pixels moved. Hence dividing the remaining by the smallestDiff (which is less than 1, so it makes the number larger)
	const marginX = Math.floor((remainingX / smallestDiff) / 2),
		  marginY = Math.floor((remainingY / smallestDiff) / 2);

	elem.style.transform = 'scale(' + smallestDiff + ',' + smallestDiff + ') translate(' + marginX + 'px,' + marginY + 'px)';	
}