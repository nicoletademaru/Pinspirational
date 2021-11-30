class DeleteCategory < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :category
  end
end
