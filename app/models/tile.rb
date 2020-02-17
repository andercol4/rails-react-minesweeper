class Tile < ApplicationRecord
  MINE = 'X'

  STATUSES = ['hidden', 'flagged', 'revealed']

  belongs_to :game

  before_validation :assign_contents

  def nearby_mines
    Tile.where("(CAST(x_axis AS integer) BETWEEN ? AND ?) AND
      (CAST(y_axis AS integer) BETWEEN ? AND ?) AND
      (contents = ? AND game_id = ?)",
      x_axis - 1, x_axis + 1,
      y_axis - 1, y_axis + 1,
      Tile::MINE, game_id)
  end

  private

  def assign_contents
    unless contents
      self.contents = nearby_mines.count
    end
  end
end
