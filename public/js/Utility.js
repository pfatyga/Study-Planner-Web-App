// Returns powerset of array
function powerset(array) {
    var ps = [[]];
    for (var i = 0; i < array.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(array[i]));
        }
    }
    return ps;
}

// Returns true if array contains obj, false otherwise
function contains(array, obj) {
    for (var i = 0; i < array.length; ++i) {
        if (array[i] === obj) {
            return true;
        }
    }

    return false;
}
