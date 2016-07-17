function lookandsay(string) {
    return string.replace(/(.)\1*/g, function(match, p1){return match.length.toString() + p1})
}
