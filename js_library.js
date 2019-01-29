//Custom Underscore Library

var _ = {
    map: function(arr, callback) {
        var changed = [];
        for (var i = 0; i < arr.length; i++) {
            changed.push(callback(arr[i]));
        }
        return changed;
    },
    reduce: function(arr, callback, start) { 
        for (var j = 0; j < arr.length; j++) {
            start = callback(start, arr[j]);
        }
        return start;
    },
    find: function(arr, callback) {   
        for (var k = 0; k < arr.length; k++) {
            if (callback(arr[k])) {
                return arr[k];
            }
        }
        return false;
    },
    filter: function(arr, callback) { 
        var filtered = [];
        for (var l = 0; l < arr.length; l++) {
            if (callback(arr[l])) {
                filtered.push(arr[l]);
            }
        }
        return filtered;
    },
    reject: function(arr, callback) { 
        var rejected = [];
        for (var m = 0; m < arr.length; m++) {
            if (!callback(arr[m])) {
                rejected.push(arr[m]);
            }
        }
        return rejected;
    }
}

var triple = _.map([1, 2, 3], function(num){ return num * 3; });
console.log(triple); //[3, 6, 9]

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(sum); //6

var sum2 = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 5);
console.log(sum2); //11

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even); //2

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); //[2, 4, 6]

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds); //[1, 3, 5]

var data = {
    supplies: [
        {item: 'Ugly Stick Pole', price: 49},
        {item: 'Fishing License', price: 35},
        {item: 'Gas for boat', price: 55},
        {item: 'New Lures', price: 20}
    ]
};

var total = _.reduce(data.supplies,
    function (memoizer, value) {
        return memoizer + value.price;
    }, 0);

console.log(total); //159