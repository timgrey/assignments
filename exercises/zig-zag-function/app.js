const zigZag = arr => {
 	if (arr.length === 1) {
      	return 1;
    } else if (arr.length === 2) {
        if (arr[0] === arr[1]) {
          	return 1;
        } else {
          	return 2;
        }
    } 
    var allTheSame = true;
    var test = arr.reduce( (a,b) => a+b )/arr.length
	for (var i=0; i<arr.length; i++) {
    	if (test !== arr[i]) {
        	allTheSame = false
        }
    }
    if (allTheSame === true) {
      	return 1;
    }
    var current = 0;
    var longest = 1;
    for (var i=1; i<arr.length-1; i++) {
        if ( (arr[i] < arr[i-1] && arr[i] < arr[i+1]) || (arr[i] > arr[i-1] && arr[i] > arr[i+1]) ) {
            if (current > 0) {
                current += 1;
            }
            if (current === 0) {
                current += 3;
            }
        }
        if ( (arr[i] > arr[i-1] && arr[i] < arr[i+1]) || (arr[i] < arr[i-1] && arr[i] > arr[i+1]) ) {
            if (current > 0) {
                if (current > longest) {
                    longest = current;
                }
                current = 0;
            } else {
                current += 2;
            }
        }
        if ( arr[i] === arr[i-1] && arr[i] !== arr[i+1] ) {
            current = 2;
        }
        if ( arr[i] !== arr[i-1] && arr[i] === arr[i+1] ) {
          	if (i === 1) {
              current += 2;
            }
            if (current > longest) {
                longest = current;
            }
            current = 0;
        }
      	if ( arr[i] === arr[i-1] && arr[i] === arr[i+1] ) {
          	current = 0;
        }
      	if ( arr[i] === arr[arr.length-2] ) {
          	if (current > longest) {
              longest = current;
            }
        }
	}
	return longest;
}
console.log("THE LONGESTS ZIG ZAG IS " + zigZag([1,1,1,4,3,4,3,4,3,1,1,1]));