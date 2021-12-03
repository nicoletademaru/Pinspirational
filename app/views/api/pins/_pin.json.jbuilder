json.extract! pin, :id, :title, :description, :author_id, :pinboard_id

if pin.photo.attached?
  json.photoUrl url_for(pin.photo)
else
  json.photoUrl ""
end