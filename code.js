function func(s, a, b) {
    if (s.match(/^$/)) return -1;

    let i = s.length - 1;
    let aIndex = -1;
    let bIndex = -1;
    
    while ((aIndex == -1) && (bIndex == -1) && (i > 0)){
        if (s.slice(i) == a) aIndex = i;
        if (s.slice(i) == b) bIndex = i;
        i--;
    }

    if (aIndex != -1){
        if (bIndex == -1) return aIndex;
        else return Math.max(aIndex,bIndex);
    }else{
        if (bIndex != -1) return bIndex;
        else return -1;
    }
}
