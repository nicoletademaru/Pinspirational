class UpdateUnique < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins, :category
    add_index :pins, :category
  end
end
