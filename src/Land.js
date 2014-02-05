function Land() {
  this.area = 1
  this.amountOfGrass = 0
}

Land.prototype.growGrass = function() {
  this.amountOfGrass = this.amountOfGrass + this.area * 1
}

Land.prototype.beEaten = function() {
  this.amountOfGrass =- 1
}

// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };

// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };

// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }

//   this.isPlaying = true;
// };

// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };