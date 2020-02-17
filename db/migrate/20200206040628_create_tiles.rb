class CreateTiles < ActiveRecord::Migration[6.0]
  def change
    create_table :tiles do |t|
      t.integer :x_axis
      t.integer :y_axis
      t.string :contents
      t.string :status, default: 'hidden'
      t.references :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
