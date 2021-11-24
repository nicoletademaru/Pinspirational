class Pin < ApplicationRecord
  CATEGORIES = [
    'food',
    'mens fashion',
    'womens fashion',
    'pets',
    'art',
    'fitness',
    'beauty',
    'home decor'
  ].sort.freeze

  validates :title, :media, :category, :author_id, :pinboard_id, :presence: true
  validates :category, inclusion: { in: CATEGORIES }
  
  belongs_to :user,
    foreign_key: :author_id,
    class_name: :User

end
