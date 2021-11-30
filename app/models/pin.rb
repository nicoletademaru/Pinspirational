class Pin < ApplicationRecord
  validates :media, :author_id, :pinboard_id, presence: true
  
  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

end
