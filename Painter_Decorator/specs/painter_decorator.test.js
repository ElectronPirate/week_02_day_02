const Room = require('../room');
const Paint = require('../paint');
const Decorator = require('../decorator');

describe('Room', () => {
  let room;
  let bluePaint, redPaint, greenPaint;
  let decorator;

  beforeEach(() => {

    room = new Room (20, false)
    bluePaint = new Paint (7);
    redPaint = new Paint (7);
    greenPaint = new Paint (7);
    decorator = new Decorator ([]);

  });


  test('room should start not painted', () => {
    expect(room.painted).toBe(false);
  })



  test('is paint empty', () => {
    bluePaint.checkPaintEmpty();
    expect(bluePaint.paintAmount + redPaint.paintAmount + greenPaint.paintAmount).toBe(21);
  })

  test('remove paint', () => {
    bluePaint.emptyPaint();
    expect(bluePaint.paintAmount).toBe(0);
  })

  test('decorator can add can of paint', () => {
    decorator.addCanOfpaint(bluePaint);
    expect(decorator.paintStock.length).toEqual(1);
  })

  test('get total litres of paint', () => {
    decorator.addCanOfpaint(bluePaint);
    decorator.addCanOfpaint(redPaint);
    decorator.addCanOfpaint(greenPaint);
    expect(decorator.totalLitresOfPaint()).toBe(21);
  })

  test('is there enough paint', () => {
    decorator.addCanOfpaint(bluePaint);
    decorator.addCanOfpaint(redPaint);
    decorator.addCanOfpaint(greenPaint);

    expect(decorator.hasEnoughPaint(room)).toBe(true);
  })

  xtest('room can be paited', () => {
    decorator.hasEnoughPaint(room)
    decorator.paintRoom(room);
    expect(room.painted).toBe(true);
  })


});
