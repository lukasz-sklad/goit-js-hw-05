'use strict'
// Zadeklarowano funkcję strzałkową getTotalBalanceByGender(users, gender);

const getTotalBalanceByGender = (users, gender) => {
	return users
		.flatMap(user => (user.gender === gender ? [user.balance] : []))
		.reduce((total, balance) => total + balance, 0)
}

const usersList = [ //allUsers
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(usersList, 'male')) // 12053
console.log(getTotalBalanceByGender(usersList, 'female')) // 8863
