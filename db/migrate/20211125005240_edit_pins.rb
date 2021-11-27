class EditPins < ActiveRecord::Migration[5.2]
  def change
    change_column :pins, :media, :string
  end
end
