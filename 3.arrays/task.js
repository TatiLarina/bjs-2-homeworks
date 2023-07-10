function compareArrays(arr1, arr2) {

    return (arr1.length != arr2.length) ? false : arr1.every(index => arr1[index] === arr2[index]);

}

function getUsersNamesInAgeRange(users, gender) {

	return users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, age, index, arr) => {
		acc += age;
		if (index === arr.length - 1) {
			return acc / arr.length;
		}
		return acc;
    }, 0);

}