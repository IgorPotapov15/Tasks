// Task #1
const fib = (n) => {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// Task #2
const matrix = (n) => {
	let innerArr = [];
	for(let i = 0; i < n; i++) {
		innerArr[i] = Array(n)
	}

	let topLine = 0;
	let bottomLine = n - 1;
	let leftLine = 0;
	let rightLine = n - 1;
	let counter = 1;
	let direction = 'RIGHT';
	let x = 0;
	let y = 0;

	while (topLine <= bottomLine && leftLine <= rightLine) {
		if (direction === 'RIGHT' && x <= rightLine) {
				innerArr[y][x++] = counter++;
		} else if (direction === 'RIGHT' && x > rightLine) {
				direction = 'DOWN';
				x = rightLine;
				y = ++ topLine;
		} else if (direction === 'DOWN' && y <= bottomLine) {
				innerArr[y++][x] = counter++;
		} else if (direction === 'DOWN' && y > bottomLine) {
				direction = 'LEFT';
				x = --rightLine;
				y = bottomLine;
		} else if (direction === 'LEFT' && x >= leftLine) {
				innerArr[y][x--] = counter++;
		} else if (direction === 'LEFT' && x < leftLine) {
				direction = 'UP';
				x = leftLine;
				y = --bottomLine;
		} else if (direction === 'UP' && y >= topLine) {
				innerArr[y--][x] = counter++;
		} else if (direction === 'UP' && y < topLine) {
				direction = 'RIGHT';
				x = ++leftLine;
				y = topLine;
		}
	}
	return innerArr;
}

// Task #3
const compareArray = (array) => {
	const booleanArray = [];
	for (let i = 0; i < array.length - 1; i++) {
		booleanArray.push(
				array[i].charAt(0) === array[i + 1].charAt(0)
					&& 
				array[i].charAt(array[i].length - 1) === array[i + 1].charAt(array[i + 1].length - 1)
		);
	}
	return booleanArray;
}

const exampleArray = ["asd", "afffd", "cc", "kk", "ewvfds", "eugvrs", "efdsgn", "efgsdfgn"];