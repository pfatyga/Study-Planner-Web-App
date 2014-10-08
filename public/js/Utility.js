function powerset(ary) {
    var ps = [[]];
    for (var i=0; i < ary.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(ary[i]));
        }
    }
    return ps;
}


function contains(array, obj) {
    for (var i = 0; i < array.length; ++i) {
        if (array[i] === obj) {
            return true;
        }
    }

    return false;
}
