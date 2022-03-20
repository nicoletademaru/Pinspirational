class Pin < ApplicationRecord
  # validates :author_id, :pinboard_id, presence: true
  
  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

  has_many :pinnings 

  has_many :comments

  has_many :pinboards, through: :pinnings, source: :pinboard

  has_one_attached :photo
end
