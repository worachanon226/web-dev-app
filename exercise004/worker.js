function counting() {
    date = new Date()
    postMessage(date)
    setTimeout("counting()", 1000)
}

counting();