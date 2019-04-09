class Decorator {
  constructor(paintStock) {
    this.paintStock = [];

  }
  addCanOfpaint(paint){
    this.paintStock.push(paint)
  }

  totalLitresOfPaint(){
    let totalPaint = 0;
   for (var i = 0; i < this.paintStock.length; i++) {

     totalPaint += this.paintStock[i].paintAmount;
    }
    return totalPaint;
  }

  hasEnoughPaint(room){
    if(this.totalLitresOfPaint() >= room.area){
      return true;
    }
    return false;
  }

  paintRoom(){
    if(this.hasEnoughPaint() == true){
      return true;
    }
    return false;
  }
}

module.exports = Decorator;
