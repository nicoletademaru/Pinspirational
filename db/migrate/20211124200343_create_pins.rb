class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string "title", null: false
      t.binary "media", null: false
      t.string "category", null: false
      t.string "description"
      t.integer "author_id", null: false
      t.integer "pinboard_id", null: false
      t.timestamps
    end

    add_index :pins, :category, unique: true
  end
end
