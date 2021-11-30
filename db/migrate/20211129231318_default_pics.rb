class DefaultPics < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :profile_pic, "https://res.cloudinary.com/dzixdb9eu/image/upload/v1638215966/mr-anonymous_230x230_gspkcd.png"
  end
end
