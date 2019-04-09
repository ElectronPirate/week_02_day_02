class Paint {
  constructor(paintAmount) {
    this.paintAmount = paintAmount;
  }
  checkPaintEmpty(){
    return this.paintAmount;
}
    emptyPaint(){
      return this.paintAmount = 0;

  }

}

module.exports = Paint;
