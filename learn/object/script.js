const restaurant = {
    name: 'Nhà hàng cổ điện',
    location: 'Hà tĩnh',
    categories: ['Thịt nướng', 'Lẩu', 'Hải sản'],
    starterMenu: ['Bánh mỳ', 'Sữa chua', 'Nước uống' ],
    mainMenu: ['Thịt lợn nướng', 'Sườn nướng', 'Cua hoàng đế'],
    openingHours: {
        mon: {
            open: 8,
            close: 22,
        },
        tus: {
            open: 9,
            close: 23,
        },
        thu: {
            open: 7,
            close: 21,
        }
    },
    order: function (starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], [this.mainMenu[mainIndex]]];
    },
    orderDelivery: function({starterIndex, mainIndex, time, address}) {
        console.log(starterIndex);
        console.log(mainIndex);
        console.log(time);
        console.log(address);
    }
}

restaurant.orderDelivery({
    starterIndex: 2,
    mainIndex: 2,
    time: "22:00",
    address: "Ha tinh"
})

console.log('-------');

const {name, mainMenu, openingHours} = restaurant;

//lay du lieu tu ten thuoc tinh cua object
console.log(name , mainMenu, openingHours);
console.log("============");

//do du lieu sang bien moi
const {name: restaurantName, mainMenu: tags, openingHours: hours} = restaurant;
console.log(restaurantName, tags , hours);
console.log("---------");
const {mon} = openingHours;
console.log(mon);
