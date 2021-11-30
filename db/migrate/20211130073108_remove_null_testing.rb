class RemoveNullTesting < ActiveRecord::Migration[5.2]
  def change
    change_column_null :pins, :media, true
    change_column_null :pins, :category, true
    change_column_null :pins, :pinboard_id, true
    change_column_null :pins, :author_id, true
  end
end
