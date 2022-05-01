'use strict';
function Tile(title) {
  this.gameFieldImageNumber = title;
  this.gameFieldFBI = false;
}
Tile.prototype.flip = function() {
  this.gameFieldFBI = !this.gameFieldFBI;
}
function Game(tileNames) {
  var tileDeck = makeDeck(tileNames);
  var countFTI = 0;
  this.grid = makeGrid(tileDeck);
  this.message = Game.MESSAGE_CLICK;
  this.unmatchedPairs = tileNames.length;
  this.flipTile = function(tile) {
    if (tile.gameFieldFBI) {
      return;
    }
    tile.flip();
    if (!this.firstPick || this.secondPick) {
      if (this.secondPick) {
        this.firstPick.flip();
        this.secondPick.flip();
        this.firstPick = this.secondPick = undefined;
      }
      this.firstPick = tile;
      this.message = Game.MESSAGE_ONE_MORE;
    } else {
      if (this.firstPick.gameFieldImageNumber === tile.gameFieldImageNumber) {
        this.rightPic = rightChoice(this.firstPick.gameFieldImageNumber)
        countFTI++;
        this.unmatchedPairs--;
        this.message = (this.unmatchedPairs > 0) ? Game.MESSAGE_MATCH : Game.MESSAGE_WON;
        this.firstPick = this.secondPick = undefined;
      } else {
        this.secondPick = tile;
        this.message = Game.MESSAGE_MISS;
      }
    }
  }
}
Game.MESSAGE_CLICK = 'Click on a tile.';
Game.MESSAGE_ONE_MORE = 'Pick one more card.'
Game.MESSAGE_MISS = 'Try again.';
Game.MESSAGE_MATCH = 'Good job! Keep going.';
Game.MESSAGE_WON = 'You Won!';
function makeDeck(tileNames) {
  var tileDeck = [];
  tileNames.forEach(function(name) {
    tileDeck.push(new Tile(name));
    tileDeck.push(new Tile(name));
  });

  return tileDeck;
}
function makeGrid(tileDeck) {

  var gridDimension = Math.sqrt(tileDeck.length),
      grid = [];

  for (var row = 0; row < gridDimension; row++) {
    grid[row] = [];
    for (var col = 0; col < gridDimension; col++) {
        grid[row][col] = removeRandomTile(tileDeck);
    }
  }
  return grid;
}
function removeRandomTile(tileDeck) {
  var i = Math.floor(Math.random()*tileDeck.length);
  return tileDeck.splice(i, 1)[0];
}
function rightChoice(parkingPositionUrl){
  console.log(parkingPositionUrl)
  if(parkingPositionUrl == 'image1')
  {
   $('#one').hide();
   $('#oneone').show();
  }
  if(parkingPositionUrl == 'image2')
  {
    $('#two').hide();
    $('#twotwo').show();
  }
  if(parkingPositionUrl == 'image3')
  {
    $('#three').hide();
    $('#threethree').show();
  }
  if(parkingPositionUrl == 'image4')
  {
    $('#four').hide();
   $('#fourfour').show();
  }
  if(parkingPositionUrl == 'image5')
  {
    $('#five').hide();
   $('#fivefive').show();
  }
  if(parkingPositionUrl == 'image6')
  {
    $('#six').hide();
   $('#sixsix').show();
  }
  if(parkingPositionUrl == 'image7')
  {
    $('#seven').hide();
   $('#sevenseven').show();
  }
  if(parkingPositionUrl == 'image8')
  {
    $('#eight').hide();
   $('#eighteight').show();
  }
}
