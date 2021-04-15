class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :title, null: false
      t.string :route_coords, null: false
      t.string :difficulty, null: false
      t.float :length, null: false
      t.string :location, null: false
      t.text :description, null: false
      t.float :estimated_time, null: false
      t.string :elevation_gain, null: false
      t.string :route_type, null: false

      t.timestamps
    end
    add_index :trails, :title
    add_index :trails, :location
  end
end
