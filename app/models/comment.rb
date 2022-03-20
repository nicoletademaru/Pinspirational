class Comment < ApplicationRecord
  belongs_to :pin
    foreign_key: :pin_id,
    class_name: :Pin
end
