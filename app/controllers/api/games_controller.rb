class Api::GamesController < ApplicationController
  def index
    game = Game.last
    tiles = game.tiles.order(:x_axis, :y_axis)
    mines = game.mines
    render json: {game: game, tiles: tiles, mines: mines}
  end
end
