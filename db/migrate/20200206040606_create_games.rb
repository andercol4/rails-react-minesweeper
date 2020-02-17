class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.integer :height
      t.integer :width
      t.integer :mine_count

      t.timestamps
    end
  end
end
