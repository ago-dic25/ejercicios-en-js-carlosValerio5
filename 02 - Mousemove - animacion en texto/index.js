const hero = document.querySelector('.hero');
const heading = document.querySelector('h1');

hero.addEventListener('mousemove', (e) => {
	const { width, height, left, top } = hero.getBoundingClientRect();

	const x = e.clientX - left;
	const y = e.clientY - top;

	const widthX = x - (width/2);
	const heightY = y - (height/2);

	heading.style.textShadow = `${-widthX}px ${-heightY}px 10px hsl(30, 20%, 30%)`
});
