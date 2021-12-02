class CreatePinboards < ActiveRecord::Migration[5.2]
  def change
    create_table :pinboards do |t|
      t.string "title", null: false
      t.integer "user_id", null: false
      t.timestamps
    end

    create_table :pinnings do |t|
      t.integer "pin_id", null: false
      t.integer "pinboard_id", null: false
      t.timestamps
    end
  end
end
