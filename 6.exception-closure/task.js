function parseCount(number) {
	if (Number.isNaN(Number.parseFloat(number))) {
		throw new Error("Невалидное значение");
	}
	return Number.parseFloat(number);
}

function validateCount(number) {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (((a + b) < c) || ((c + b) < a) || ((a + c) < b)) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		let p = 1 / 2 * (this.a + this.b + this.c);
		let s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return Number(s.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}
