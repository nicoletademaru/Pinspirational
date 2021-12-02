json.extract! pinboard, :id, :title, :user_id
json.array! pinboard.pins do |pin| 
  json.extract! pin, :title, :description, :author_id, :pinboard_id
end