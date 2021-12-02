class RemoveMedia < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :media
  end
end
