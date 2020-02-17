class Game < ApplicationRecord
  has_many :tiles
  has_many :mines, -> {where(contents: Tile::MINE)}, class_name: 'Tile'

  def generate_board
    until mines.length >= mine_count do
      new_mine = generate_mine
      mines << new_mine unless mines.include? new_mine
    end
    mines.each {|m| m.save}
    height.times do |hint|
      hi = hint + 1
      width.times do |wint|
        wi = wint + 1
        tiles.find_or_create_by(x_axis: wi, y_axis: hi)
      end
    end
    self.tiles
  end

  def generate_mine
    mines.new(x_axis: rand(1..width), y_axis: rand(1..height))
  end
end
